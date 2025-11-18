import type { IUser } from "./IUser";

export interface IGeneralResponseForUser {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}