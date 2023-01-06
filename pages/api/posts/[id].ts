import { NextApiRequest, NextApiResponse } from 'next';
import { PostData } from '../../../types/post';
import { ResponseData } from '../../../types/responseData';
import { fakePostsForNow } from '.';

// TODO: change this to use the generic helpers when they exist
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData | ResponseData>
) {
  const {
    query: { id },
  } = req;

  const post = fakePostsForNow.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found.',
    });
  }

  res.json({ ...post });
}
