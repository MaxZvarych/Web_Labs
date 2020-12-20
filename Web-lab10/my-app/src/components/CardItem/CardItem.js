import React from "react";
import { useHistory } from "react-router-dom";
import security from "../../Icons/background2.jpg";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Footer, ItemWrapper, CardStyled } from "./CardItem.styled";

const { Meta } = CardStyled;

const CardItem = ({
  title = "Apple Inc. Security",
  text,
  imageSrc = security,
  price,
  owner = "Vasyan",
  riskLevel = "HIGH",
  biddingTrend = "ASCENDING",
  id,
}) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/item?id=${id}`);
  };

  return (
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
          <SettingOutlined key="setting" onClick={handleClick} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title={title} description={text} />
        <Footer>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>
            Document owner is:{owner} <br /> Security's level of risk:
            {riskLevel} <br /> Security's bidding trend:
            {biddingTrend} <br />
            Security's price: ${price}
          </p>
        </Footer>
      </CardStyled>
    </ItemWrapper>
  );
};

export default CardItem;
