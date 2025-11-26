import type { IUser } from "./IUser";

export interface IUsersDummyjsonResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}