import type { Reactions } from "./IReactions";


export interface IPostDummyjson {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}