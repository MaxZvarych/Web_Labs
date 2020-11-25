import React from "react";
import {
  Wrapper,
  CardWrapper,
  FilterBarWrapper,
  SearchMenu,
  InputStyled,
} from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import { data } from "../Home/Home";
import { AudioOutlined } from "@ant-design/icons";
import CatalogMenu from "../../components/Menu/Menu";

const { Search } = InputStyled;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

const Catalog = () => {
  return (
    <Wrapper>
      <FilterBarWrapper>
        <CatalogMenu></CatalogMenu>
        <SearchMenu>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </SearchMenu>
      </FilterBarWrapper>
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Catalog;
