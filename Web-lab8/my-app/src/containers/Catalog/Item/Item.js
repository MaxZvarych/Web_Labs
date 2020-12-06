import React from "react";
import { data } from "../../Home/Home";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  InfoWrapper,
  ButtonsWrapper,
  ItemImage,
  Description,
  SecurityText,
  SecurityTitlePrice,
  Inputs,
  DescriptionFirst,
  ButtonsPriceWrapper,
  ItemButton,
} from "./Item.styled";
import security from "../../../Icons/background2.jpg";

const Item = () => {
  const parseID = () => {
    let url = window.location.href;
    const splitted = url.split("?id=");
    return splitted[1];
  };

  const findSecurity = (data, idx) => {
    let result;
    data.forEach((element) => {
      if (element.id == idx) {
        result = element;
      }
    });
    return result;
  };

  const id = parseID();
  const foundSecurity = findSecurity(data, id);

  let history = useHistory();

  const handleClick = () => {
    history.push(`/catalog`);
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <ItemImage
          src={security}
          alt="Logo_image"
          width="400px"
          height="400px"
        />
        <Description>
          <DescriptionFirst>
            <SecurityTitlePrice>{foundSecurity.title}</SecurityTitlePrice>
            <SecurityText>{foundSecurity.text}</SecurityText>
          </DescriptionFirst>
          <Inputs>
            <label style={{ color: "black", fontSize: "16px" }}>
              Amount to buy:
              <input
                style={{ color: "black" }}
                type="number"
                min="0"
                max="50"
              />
            </label>
            <label style={{ color: "black", fontSize: "16px" }}>
              Choose year of issue:
              <select name="pets" id="pet-select" style={{ color: "black" }}>
                <option value="">--Please choose an option--</option>
                <option value="2000">2000</option>
                <option value="2005">2005</option>
                <option value="2011">2011</option>
                <option value="2014">2014</option>
                <option value="2018">2018</option>
                <option value="2020">2020</option>
              </select>
            </label>
          </Inputs>
        </Description>
      </InfoWrapper>
      <ButtonsPriceWrapper>
        <SecurityTitlePrice>Price: ${foundSecurity.price}</SecurityTitlePrice>
        <ButtonsWrapper>
          <ItemButton onClick={handleClick}>Go back</ItemButton>
          <ItemButton>Add to cart</ItemButton>
        </ButtonsWrapper>
      </ButtonsPriceWrapper>
    </Wrapper>
  );
};

export default Item;
