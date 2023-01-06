import type { NextApiRequest, NextApiResponse } from 'next';
import { PostData } from '../../../types/post';
import { ResponseData } from '../../../types/responseData';

export const fakePostsForNow = [
  {
    id: '12345',
    uri: 'post-url-12345',
    content: {
      titleText: 'First Post',
      bodyText: 'This is a part of a post. It is the first post!',
    },
  },
  {
    id: '98765',
    uri: 'post-url-98765',
    content: {
      titleText: 'Posty Post',
      bodyText: 'This is a posty of a post.',
    },
  },
];

// consider using Edge api routes instead. https://nextjs.org/docs/api-routes/edge-api-routes
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData | PostData[] | ResponseData>
) {
  // These are all default cases
  switch (req.method) {
    case 'POST':
      // TODO: call handleCreatePost method
      res.status(200).json(fakePostsForNow[1]);
      break;
    case 'PUT':
      // TODO: call handleEditPost method
      res.status(200).json(fakePostsForNow[0]);
      break;
    case 'GET':
      // TODO: call handleListPosts
      res.status(200).json(fakePostsForNow);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end('Method Not Allowed');
      break;
  }
}
