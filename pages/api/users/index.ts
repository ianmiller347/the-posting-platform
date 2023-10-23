import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData } from '../../../types/responseData';
import { User } from '../../../types/user';
import crudHandler from '../../../helpers/crudHandler';

export const USERS_TABLE = 'Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | User[] | ResponseData>
) {
  return crudHandler<User>(req, res, USERS_TABLE);
}
