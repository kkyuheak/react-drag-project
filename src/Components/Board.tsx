import { Droppable } from "react-beautiful-dnd";
import DragCard from "./DragCard";
import styled from "styled-components";

const SBoard = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <SBoard {...provided.droppableProps} ref={provided.innerRef}>
          <p>{boardId}</p>
          {toDos.map((todo, i) => (
            <DragCard key={todo} todo={todo} i={i} />
          ))}
          {provided.placeholder}
        </SBoard>
      )}
    </Droppable>
  );
};

export default Board;
