import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommand,
  UpdateCommand,
  GetCommand,
} from '@aws-sdk/lib-dynamodb';

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

const ddbDocClient = DynamoDBDocumentClient.from(client);

// the Item type will change based on the input!
// a generic Item type will have id, slug, displayName
// specific items will have different fields
// TODO: Change the item typescript type based on the input
interface Item {
  id: string;
  slug: string;
  displayName: string;
}

/**
 * Create Item helper wrapper
 * @param item item to put into the database
 * @param tableName name of the table to add the item to
 */
export async function createItem(item: Item, tableName: string): Promise<void> {
  const params = {
    TableName: tableName,
    Item: item,
  };

  const command = new PutCommand(params);

  try {
    await ddbDocClient.send(command);
  } catch (error) {
    throw new Error('Unable to create item in DynamoDB.');
  }
}

/**
 *
 * @param keyName name of the key to get object by, usually id or slug
 * @param keyValue value of the key to get object by,
 * @param tableName
 * @returns Item if there was an item found, undefined otherwise.
 */
export async function getItem(
  keyName: string,
  keyValue: string,
  tableName: string
): Promise<Item | undefined> {
  const params = {
    TableName: tableName,
    Key: {
      [keyName]: keyValue,
    },
  };

  try {
    const result = await ddbDocClient.send(new GetCommand(params));
    if (result.Item) {
      return result.Item as Item;
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
export async function updateItemById(
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

  const params = {
    TableName: tableName,
    Key: { id },
    UpdateExpression: updateExpression,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
  };

  const input = new UpdateCommand(params);

  try {
    await ddbDocClient.send(input);
  } catch (error) {
    throw new Error('Unable to update item in DynamoDB.');
  }
}

// TODO: add delete method, it could just call update and set to deleted=1
