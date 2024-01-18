import { useState, lazy, Suspense, useEffect } from "react";
import { Col, Row } from "antd";
import { DragDropContext } from "react-beautiful-dnd";
import { Flex } from "./Flex";
import { initialData } from "../const";

const Column = lazy(() => import("./Column"));

function Board() {
  const [state, setState] = useState<any>(initialData);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const reorderColumnList = (
    sourceCol: any,
    startIndex: number,
    endIndex: number
  ) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
      ...sourceCol,
      taskIds: newTaskIds,
    };

    return newColumn;
  };
  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex flexDirection="column" bg="main-bg" pb="2rem">
          <Flex py="4rem" flexDirection="column">
            <div>React Beautiful Drag and Drop</div>
            <p>react-beautiful-dnd</p>
          </Flex>
          <Row>
            {state.columnOrder.map((columnId: string) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId: number) => state.tasks[taskId]
              );
              return (
                <Col span={8} key={column.id}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Column key={column.id} column={column} tasks={tasks} />
                  </Suspense>
                </Col>
              );
            })}
          </Row>
        </Flex>
      </DragDropContext>
    </div>
  );
}

export default Board;
