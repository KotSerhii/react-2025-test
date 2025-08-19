import type { ITodo } from "./ITodo";

export interface ITodoResponseDummyjson{
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}