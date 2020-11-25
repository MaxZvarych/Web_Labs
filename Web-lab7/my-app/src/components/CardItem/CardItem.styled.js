import styled from "styled-components";
import { Card } from "antd";

export const Footer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

export const CardStyled = styled(Card)`
  background: none;
  padding: 0 0 24px 0;
  .ant-card-body {
    padding: 0 0 24px 0;
  }
  .ant-card-actions {
    li {
      border-right: 0px solid #f0f0f0;
    }
  }
`;

export const ItemWrapper = styled.div`
  background-color: rgba(240, 172, 1, 0.5);
  border-radius: 20px;
`;
