import { Item } from './item';

interface UserContent {
  name?: string;
  imageUrl?: string;
  description?: string;
  profileUrl?: string;
}

export interface User extends Item {
  content: UserContent;
}
