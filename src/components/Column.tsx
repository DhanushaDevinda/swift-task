import { FC } from "react";
import { Flex } from "./Flex";
import { Draggable, Droppable } from "react-beautiful-dnd";

type ColumnTypes = {
  id: string;
  title: string;
  taskIds: number[];
};

interface Props {
  column: ColumnTypes;
  tasks: number[];
}

const Column: FC<Props> = ({ column, tasks }) => {
  return (
    <>
      <Flex justifyContent="space-between" px="4rem">
        {column.title}
      </Flex>

      <Droppable droppableId={column.id.toString()}>
        {(provided, snapshot) => (
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            px="4rem"
            style={{
              backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task: any, index: number) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(draggableProvided, draggableSnapshot) => (
                  <Flex
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    {task.content}
                  </Flex>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </>
  );
};

export default Column;
