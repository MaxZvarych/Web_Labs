import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: rgba(227, 119, 0, 0.5);
  p {
    font: Arial, Helvetica, sans-serif;
    color: #000000;
    max-width: 40vw;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 5vh;
  margin-top: 5vh;
`;

export const ButtonsPriceWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-between;
`;

export const ItemImage = styled.img`
  alt: "Item_image";
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 25%;
  margin-left: 10vw;
`;

export const DescriptionFirst = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  margin-top: 3vh;
  justify-content: space-between;
`;

export const SecurityTitlePrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
`;

export const SecurityText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
`;

export const Inputs = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
`;

export const ItemButton = styled.button`
  background-color: #f0ac01;
  box-shadow: 0 3px 2px #201a1a;
  border: 4px rgb(227, 119, 0) double;
  border-radius: 5px;
  width: 20vw;
  align-self: center;
  a {
    color: #000;
    text-decoration: none;
  }
`;
