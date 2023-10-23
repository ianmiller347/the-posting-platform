import { NextApiRequest, NextApiResponse } from 'next';
import { createItem, getAllItems } from '../helpers/aws';
import { Item } from '../types/item';
import { ResponseData } from '../types/responseData';

/**
 * generic handler function to handle crud methods when no ID is passed as input.
 * methods include create and listAllItems
 * @param req
 * @param res
 * @typeParam ItemType - the type passed when the function is called, must extend Item
 */
export default async function crudHandler<ItemType extends Item>(
  req: NextApiRequest,
  res: NextApiResponse<ItemType | ItemType[] | ResponseData>,
  tableName: string
) {
  switch (req.method) {
    case 'POST':
      const newItem = req.body;
      await createItem(tableName, newItem);
      res.status(200).json(newItem);
      break;
    case 'GET':
      const listOfItems = await getAllItems(tableName);
      res.status(200).json(listOfItems as ItemType[]);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end('Method Not Allowed');
      break;
  }
}
