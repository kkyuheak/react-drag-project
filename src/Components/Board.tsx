import { Droppable } from "react-beautiful-dnd";
import DragCard from "./DragCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atom";
import { useSetRecoilState } from "recoil";

const SBoard = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Form = styled.form`
  width: 100%;
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface FormValues {
  task: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const setTodo = useSetRecoilState(toDoState);
  const onValid = ({ task }: FormValues) => {
    console.log(task);
    const newTask = {
      id: Date.now(),
      text: task,
    };
    setTodo((cur) => {
      return {
        ...cur,
        [boardId]: [...cur[boardId], newTask],
      };
    });
    setValue("task", "");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("task", { required: true })}
          type="text"
          placeholder={`Add task ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <SBoard {...provided.droppableProps} ref={provided.innerRef}>
            <p>{boardId}</p>
            {toDos.map((todo, i) => (
              <DragCard
                key={todo.id}
                todoId={todo.id}
                todoText={todo.text}
                i={i}
              />
            ))}
            {provided.placeholder}
          </SBoard>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
