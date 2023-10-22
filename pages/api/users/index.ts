import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData } from '../../../types/responseData';
import { User } from '../../../types/user';
import { createItem, getAllItems } from '../../../helpers/aws';

export const USERS_TABLE = 'Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | User[] | ResponseData>
) {
  switch (req.method) {
    case 'POST':
      // create a new user
      const newPost = req.body;
      await createItem(USERS_TABLE, newPost);
      res.status(200).json(newPost);
      break;
    case 'GET':
      // TODO: get list of users by some criteria, for example a hi scores page.
      const listOfUsers = await getAllItems(USERS_TABLE);
      res.status(200).json(listOfUsers as User[]);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end('Method Not Allowed');
      break;
  }
}
