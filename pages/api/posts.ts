import type { NextApiRequest, NextApiResponse } from 'next';

interface PostContent {
  text?: string;
  imageUrl?: string;
  videoUrl?: string;
}
type Data = {
  title: string;
  content: PostContent;
  id: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe' })
  if (req.method === 'POST') {
    // handlePostRequest
  } else {
    res
      .status(200)
      .json({
        title: 'Post',
        content: { text: 'This is a part of a post.' },
        id: '12345',
      });
  }
}
