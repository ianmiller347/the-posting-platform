import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../types/user';
import { ResponseData } from '../../../types/responseData';
import { getItem, updateItemById } from '../../../helpers/aws';
import { USERS_TABLE } from '.';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | User[] | ResponseData>
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
      await updateItemById(USERS_TABLE, id, updateFields);
      res.status(204).end();
      break;
    case 'GET':
      const post = await getItem('id', id, USERS_TABLE);
      res.status(200).json(post as User);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end('Method Not Allowed');
      break;
  }

  const post = await getItem('id', id, USERS_TABLE);
  if (!post) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found.',
    });
  }

  res.status(200).json(post as User);
}
