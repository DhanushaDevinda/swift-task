import { FC } from "react";
import { Flex } from "./Flex";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { B } from "./text/B";
import theme from "../theme";
import { Avatar } from "../assets";
import { Col, Row } from "antd";

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
              backgroundColor: snapshot.isDraggingOver
                ? theme.gray200
                : theme.gray200,
              padding: "12px",
              borderRadius: "8px",
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Row gutter={[16, 16]}>
              {tasks.map((task: any, index: number) => (
                <Col span={24}>
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
                        <Flex
                          className="dashboard-tasks"
                          width={"100%"}
                          background={theme.white}
                          border={`1px solid  ${theme.green}`}
                          borderRadius="8px"
                          display=""
                          position="relative"
                        >
                          <Flex p="8px" flexDirection={"column"}>
                            <B
                              type="text-large-semibold"
                              textAlign={"left"}
                              m={0}
                            >
                              {task.content}
                            </B>

                            <span>
                              <Flex alignItems={"center"}>
                                <img src={Avatar} alt="avatar" />
                              </Flex>
                            </span>
                          </Flex>
                        </Flex>
                      </Flex>
                    )}
                  </Draggable>
                </Col>
              ))}
            </Row>
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </>
  );
};

export default Column;
