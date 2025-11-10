import type { IUserDummyjson } from "./IUserDummyjson";

export interface IUserResponseDummyjson  {
  users: IUserDummyjson[];
  total: number;
  skip: number;
  limit: number;
}