import { NextApiRequest, NextApiResponse } from 'next';
import { PostData } from '../../../types/post';
import { ResponseData } from '../../../types/responseData';
import { POSTS_TABLE } from '.';
import crudHandlerWithIdParam from '../../../helpers/crudHandlerWithIdParam';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData | ResponseData>
) {
  return crudHandlerWithIdParam<PostData>(req, res, POSTS_TABLE);
}
