import { NextApiRequest, NextApiResponse } from 'next';
import { Item } from '../types/item';
import { ResponseData } from '../types/responseData';
import { getItem, updateItemById } from '../helpers/aws';

export default async function crudHandlerWithIdParam<ItemType extends Item>(
  req: NextApiRequest,
  res: NextApiResponse<ItemType | ResponseData>,
  tableName: string
) {
  // if id is in fact an array dont support it for now.
  // just pull the first id from the array.
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  if (!id) {
    return res.status(422).json({
      status: 422,
      message: 'That aint right.',
    });
  }

  switch (req.method) {
    case 'PUT':
      const { updateFields } = req.body;
      await updateItemById(tableName, id, updateFields);
      res.status(204).end();
      break;
    case 'GET':
      const item = await getItem('id', id, tableName);
      if (!item) {
        return res.status(404).json({
          status: 404,
          message: 'Not Found.',
        });
      }
      res.status(200).json(item as ItemType);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end('Method Not Allowed');
      break;
  }
}
