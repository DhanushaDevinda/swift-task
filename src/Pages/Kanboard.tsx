import React, { useState } from "react";
import { Carousel, Tag } from "antd";
import styled from "@emotion/styled";
import { Divider, List, Typography } from "antd";
import { Flex } from "../components/Flex";
import theme from "../theme";
import { B } from "../components/text/B";
import { Avatar } from "../assets";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const ContentStyle = styled.h3`
  margin: 0;
  height: 89vh;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #f7f8fa;
  overflow-y: scroll;
`;

const Layout = styled(Carousel)`
  display: flex;
  height: 93vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 620px) {
    align-items: normal;
    height: auto;
  }
  .slick-dots li button {
    background: ${(props) => theme.blue} !important;
  }
`;

const BoardTitle = [
  { id: 0, title: "Backlog" },
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Done" },
];

const Kanboard: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onChange = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  return (
    <>
      {BoardTitle.filter((Item, Idx) => Item.id === currentSlide).map(
        (Item, Idx) => (
          <B
            key={Item.id}
            type="text-large-semibold"
            textAlign={"left"}
            m={"8px 24px 18px 24px"}
          >
            {Item.title}
          </B>
        )
      )}

      <Layout afterChange={onChange}>
        <div>
          <ContentStyle>
            <List
              size="large"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Flex
                    className="dashboard-tasks"
                    width={"100%"}
                    background={theme.white}
                    borderRadius="8px"
                    display=""
                    position="relative"
                  >
                    <Flex p="8px" flexDirection={"column"}>
                      <B type="text-small-medium" textAlign={"left"} m={0}>
                        {item}
                      </B>

                      <Flex alignItems={"center"} m={"8px 0px 8px"}>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                      </Flex>

                      <span>
                        <Flex alignItems={"center"}>
                          <img src={Avatar} alt="avatar" />
                        </Flex>
                      </span>
                    </Flex>
                  </Flex>
                </List.Item>
              )}
            />
          </ContentStyle>
        </div>
        <div>
          <ContentStyle>
            <List
              size="large"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Flex
                    className="dashboard-tasks"
                    width={"100%"}
                    background={theme.white}
                    // border={`1px solid  ${theme.green}`}
                    borderRadius="8px"
                    display=""
                    position="relative"
                  >
                    <Flex p="8px" flexDirection={"column"}>
                      <B type="text-small-medium" textAlign={"left"} m={0}>
                        {item}
                      </B>

                      <Flex alignItems={"center"} m={"8px 0px 8px"}>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                      </Flex>

                      <span>
                        <Flex alignItems={"center"}>
                          <img src={Avatar} alt="avatar" />
                        </Flex>
                      </span>
                    </Flex>
                  </Flex>
                </List.Item>
              )}
            />
          </ContentStyle>
        </div>
        <div>
          <ContentStyle>3</ContentStyle>
        </div>
        <div>
          <ContentStyle>4</ContentStyle>
        </div>
      </Layout>
    </>
  );
};

export default Kanboard;
