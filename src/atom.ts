import { atom } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

export const toDoState = atom<ITodoState>({
  key: "todos",
  default: {
    toDos: ["a", "b"],
    DOING: ["c", "d"],
    DONE: ["e", "f"],
  },
});
