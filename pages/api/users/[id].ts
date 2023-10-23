import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../types/user';
import { ResponseData } from '../../../types/responseData';
import { USERS_TABLE } from '.';
import crudHandlerWithIdParam from '../../../helpers/crudHandlerWithIdParam';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ResponseData>
) {
  return crudHandlerWithIdParam<User>(req, res, USERS_TABLE);
}
