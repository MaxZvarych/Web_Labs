import React from "react";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Footer, ItemWrapper, CardStyled } from "./CardItem.styled";

const { Meta } = CardStyled;

const CardItem = ({ title = "No title.", text, imageSrc, price }) => (
  <ItemWrapper>
    <CardStyled
      hoverable
      style={{ width: "300px", borderRadius: "20px" }}
      cover={
        <img
          src={imageSrc}
          style={{
            width: "300px",
            borderRadius: "20px 20px 0 0",
          }}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={title} description={text} />
      <Footer>
        <p>${price}</p>
      </Footer>
    </CardStyled>
  </ItemWrapper>
);

export default CardItem;
