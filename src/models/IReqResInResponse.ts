import type { ISupport } from "./ISupport";
import type { IUser } from "./IUser";
import type { _meta } from "./meta";

export interface IReqResInResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: ISupport;
  _meta: _meta;
}