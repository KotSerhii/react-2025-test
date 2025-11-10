import type { ICommentDummyjson } from "./ICommentDummyjson";


export interface ICommentResponseDummyjson  {
    comments: ICommentDummyjson[];
    total: number;
    skip: number;
    limit: number;
}