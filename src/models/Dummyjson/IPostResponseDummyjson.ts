import type { IPostDummyjson } from "./IPostDummyjson";

export interface IPostResponseDummyjson  {
    posts: IPostDummyjson[];
    total: number;
    skip: number;
    limit: number;
}