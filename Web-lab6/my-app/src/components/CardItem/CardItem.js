import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Footer, ItemWrapper } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title = "No title.", text, imageSrc, price }) => (
  <ItemWrapper>
    <Card
      hoverable
      style={{ width: "300px", borderRadius: "20px" }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={title}
        description={text}
        avatar={
          <img
            src={imageSrc}
            style={{ width: "300px", borderRadius: "20px 20px 0 0" }}
          />
        }
      />
      <Footer>
        <p>${price}</p>
      </Footer>
    </Card>
  </ItemWrapper>
);

export default CardItem;
