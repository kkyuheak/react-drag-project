import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<ITodoState>({
  key: "todos",
  default: {
    toDos: [],
    DOING: [],
    DONE: [],
  },
});
