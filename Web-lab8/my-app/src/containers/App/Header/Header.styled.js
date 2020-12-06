import Icon from "@ant-design/icons";
import styled from "styled-components";

export const HeaderBackground = styled.div`
  background-color: #000000;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: #000000;
  align-items: center;
  height: 130px;
  margin: 0px 15vw;
`;

export const Slogan = styled.div`
  margin: 10px 0 10px 30px;
  float: left;
  border-left: #2f2b2b 1px solid;
  font: 12px/22px Arial, Helvetica, sans-serif;
  color: #8f8b8c;
  text-align: center;
  height: 35px;
  font-size: 22px;
  /* width: 260px; */
  padding: 1vh 26vw 25px 1vw;
`;

export const SocialNetworksBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
  margin: 10px 0;
`;

export const IconBase = styled(Icon)`
  font-size: 25px;
  color: ${({ color }) => color};
`;

export const HeaderImage = styled.img`
  alt: "Footer_image";
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
