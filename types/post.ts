import { Item } from './item';

export interface PostContent {
  titleText?: string;
  bodyText?: string; // this is a simple string of the body
  imageUrl?: string; // this will act as a featured image, primary image
  imageCaption?: string;
  videoUrl?: string; // this will act as a featured video, primary video
  bodyRichContent?: string; // this is a string of HTML markup for the body. it can be used in place of simple text.
}

export interface PostData extends Item {
  content: PostContent;
  id: string;
  displayName?: string;
  uri?: string; // this is optional for a post that is newly created and hasnt autosaved yet
}
