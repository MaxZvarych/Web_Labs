import styled from "styled-components";
import background from "../../Icons/home-background1.jpg";
import { Input } from "antd";

export const InputStyled = styled(Input)``;
export const Wrapper = styled.div`
  margin-top: 70px;
  /* background: url(${background}) no-repeat; */
  width: 100vw;
  height: 115vh;
  p {
    font: 12px/22px Arial, Helvetica, sans-serif;
    color: #000000;
    max-width: 40vw;
  }
`;

export const FilterBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10vh;
  background-color: rgba(240, 172, 1, 0.55);
  width: 90vw;
  margin: 0 auto;
  border-radius: 20px;
  ul {
    background: none;
    box-shadow: none;
    border-radius: 20px;
    min-height: 70px;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
`;

export const SearchMenu = styled.div`
  align-self: center;
  .ant-btn-primary {
    color: #fff;
    background: #faad14;
    border-color: #faad14;
  }
`;

export const CardWrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* background-color: rgba(240, 172, 1, 0.5); */
  ul {
    /* background: none; */
    background-color: rgba(240, 172, 1, 0.55);
    box-shadow: 0 0 2px 0 #f0ac01;
    border-radius: 0 0 20px 20px;
    min-height: 70px;
    width: 300px;
    margin-bottom: -23px;
  }
`;
