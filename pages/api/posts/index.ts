import type { NextApiRequest, NextApiResponse } from 'next';
import { PostData } from '../../../types/post';
import { ResponseData } from '../../../types/responseData';
import { createItem, getAllItems } from '../../../helpers/aws';

export const POSTS_TABLE = 'Posts';

// consider using Edge api routes instead. https://nextjs.org/docs/api-routes/edge-api-routes
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData | PostData[] | ResponseData>
) {
  // These are all default cases
  switch (req.method) {
    case 'POST':
      const newPost = req.body;
      await createItem(POSTS_TABLE, newPost);
      res.status(200).json(newPost);
      break;
    case 'GET':
      const listOfPosts = await getAllItems(POSTS_TABLE);
      res.status(200).json(listOfPosts as PostData[]);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end('Method Not Allowed');
      break;
  }
}
