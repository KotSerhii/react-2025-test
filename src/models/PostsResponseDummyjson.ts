import type {IPosts} from "./Posts";

export interface IPostResponseDummyjson {
  posts: IPosts[];
  total: number;
  skip: number;
  limit: number;
}