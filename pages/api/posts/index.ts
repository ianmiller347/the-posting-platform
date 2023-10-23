import type { NextApiRequest, NextApiResponse } from 'next';
import { PostData } from '../../../types/post';
import { ResponseData } from '../../../types/responseData';
import crudHandler from '../../../helpers/crudHandler';

export const POSTS_TABLE = 'Posts';

// consider using Edge api routes instead. https://nextjs.org/docs/api-routes/edge-api-routes
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData | PostData[] | ResponseData>
) {
  return crudHandler<PostData>(req, res, POSTS_TABLE);
}
