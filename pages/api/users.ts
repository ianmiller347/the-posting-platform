import type { NextApiRequest, NextApiResponse } from 'next';

interface UserContent {
  name?: string;
  imageUrl?: string;
  description?: string;
}

type Data = {
  title: string;
  content: UserContent;
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
        title: 'User',
        content: { name: 'Joseph', description: "A real Josh."},
        id: '12345',
      });
  }
}
