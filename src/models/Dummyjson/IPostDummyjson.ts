import type { IReactions } from "./IReactions";


export interface IPostDummyjson {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}