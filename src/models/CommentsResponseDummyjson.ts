import type {IComment} from './Comments';

export interface ICommentsResponseDummyjson {
  comments: IComment[];
  total: number;
  skip: number;
  limit: number;
}