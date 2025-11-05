import type { Address } from "./IAddress";
import type { Company } from "./ICompany";

export interface IUserJson {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}