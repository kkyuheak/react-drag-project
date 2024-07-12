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
  todo: string;
  i: number;
}

const DragCard = ({ todo, i }: IDragCard) => {
  console.log("rerender");
  return (
    <Draggable key={todo} draggableId={todo} index={i}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default memo(DragCard);
