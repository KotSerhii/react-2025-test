import type { IUser } from "./IUser";


export interface ICommentDummyjson {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUser;
}