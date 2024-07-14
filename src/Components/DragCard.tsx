import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
`;
interface IDragCard {
  todoText: string;
  todoId: number;
  i: number;
}

const DragCard = ({ todoId, todoText, i }: IDragCard) => {
  console.log("rerender");
  return (
    <Draggable draggableId={todoId + ""} index={i}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
};

export default memo(DragCard);
