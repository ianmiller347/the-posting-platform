import type { NextApiRequest, NextApiResponse } from "next";

interface PostContent {
  titleText?: string;
  bodyText?: string;
  imageUrl?: string;
  imageCaption?: string;
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
  if (req.method === "POST") {
    // handlePostRequest
  } else {
    res.status(200).json({
      title: "Post",
      content: { bodyText: "This is a part of a post." },
      id: "12345",
    });
  }
}
