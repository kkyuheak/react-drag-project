import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import Board from "./Components/Board";

const Wrapper = styled.div`
  max-width: 680px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

const App = () => {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const handleOnDrag = (info: DropResult) => {
    console.log(info);
    const { destination, source, draggableId } = info;
    if (!destination) return;
    if (source.droppableId === destination?.droppableId) {
      setTodos((allBoards) => {
        const copyBoard = [...allBoards[source.droppableId]];
        copyBoard.splice(source.index, 1);
        copyBoard.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: copyBoard,
        };
      });
    }
    if (source.droppableId !== destination?.droppableId) {
      setTodos((cur) => {
        // 현재 위치
        const now = source.droppableId;
        // 변경된 위치
        const final = destination.droppableId;

        const copyNowCur = [...cur[now]];
        copyNowCur.splice(source.index, 1);

        const copyFinalCur = [...cur[final]];
        copyFinalCur.splice(destination.index, 0, draggableId);

        return {
          ...cur,
          [now]: copyNowCur,
          [final]: copyFinalCur,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDrag}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
