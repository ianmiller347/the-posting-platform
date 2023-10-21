import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  GetItemCommandInput,
  UpdateItemCommand,
  UpdateItemCommandInput,
  AttributeValue,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

// AWS setup
// TODO: change region to come from input.
const REGION = 'us-east-1';

let accessKeyId = process.env.AWS_ACCESS_KEY_ID;
let secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
  throw new Error('Missing AWS access key or secret access key.');
}

const client = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

// the Item type will change based on the input!
// a generic Item type will have id, slug, displayName
// specific items will have different fields
// TODO: Change the item typescript type based on the input
interface UnmarshalledItem {
  id: string;
  slug: string;
  displayName: string;
}
type MarshalledItem = Record<string, AttributeValue>;

function convertDynamoDBItemToItem(
  dynamoDBItem: MarshalledItem
): UnmarshalledItem {
  return unmarshall(dynamoDBItem) as UnmarshalledItem;
}

export async function createItem(
  item: UnmarshalledItem,
  tableName: string
): Promise<void> {
  const params = {
    TableName: tableName,
    Item: marshall(item),
  };

  const command = new PutItemCommand(params);

  try {
    await client.send(command);
  } catch (error) {
    throw new Error('Unable to create item in DynamoDB.');
  }
}

async function getItem<Key>(
  key: Key,
  tableName: string
): Promise<UnmarshalledItem | undefined> {
  const params: GetItemCommandInput = {
    TableName: tableName,
    Key: marshall(key),
  };

  try {
    const result = await client.send(new GetItemCommand(params));
    if (result.Item) {
      const unmarshalledItem = convertDynamoDBItemToItem(result.Item);
      return unmarshalledItem;
    }
  } catch (error) {
    throw new Error('Unable to get item from DynamoDB.');
  }
  return undefined;
}

/**
 * Update an item and set its ID
 * @param tableName name of the DDB table to update
 * @param id id key for the item to be updated
 * @param updateFields a subset of the Record that will be updated, excluding the ID field.
 */
async function updateItemById(
  tableName: string,
  id: string,
  updateFields: Record<string, any>
): Promise<void> {
  // Filter out the "id" field
  const updateFieldsWithoutId = { ...updateFields };
  delete updateFieldsWithoutId.id;

  if (Object.keys(updateFieldsWithoutId).length === 0) {
    // If there are no fields to update, return early or throw an error
    return; // Return early or throw an error as needed
  }

  const updateExpression =
    'set ' +
    Object.keys(updateFieldsWithoutId)
      .map((field) => `#${field} = :${field}`)
      .join(', ');
  const expressionAttributeNames = Object.fromEntries(
    Object.keys(updateFieldsWithoutId).map((field) => [`#${field}`, field])
  );
  const expressionAttributeValues = Object.fromEntries(
    Object.keys(updateFieldsWithoutId).map((field) => [
      `:${field}`,
      updateFieldsWithoutId[field],
    ])
  );

  const params: UpdateItemCommandInput = {
    TableName: tableName,
    Key: marshall({ id: id }),
    UpdateExpression: updateExpression,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: marshall(expressionAttributeValues),
  };

  const input = new UpdateItemCommand(params);

  try {
    await client.send(input);
  } catch (error) {
    // Handle errors
  }
}

// TODO: add delete method, it could just call update and set to deleted=1
