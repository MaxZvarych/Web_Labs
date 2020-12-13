import React, { useContext, useEffect, useState } from "react";
import {
  Wrapper,
  CardWrapper,
  FilterBarWrapper,
  SearchMenu,
  InputStyled,
} from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { SettingOutlined } from "@ant-design/icons";
import { executeFilters } from "./Utils";
import { getAllSecurities } from "../../utils/Api";
import LoadElement from "../../components/loading/LoadElement";

const { Search } = InputStyled;
const { SubMenu } = Menu;

const CatalogState = {
  sortType: "default",
  filterPrice: "default",
  filterRiskLevel: "default",
  filterBiddingTrend: "default",
};

const Catalog = () => {
  let emptyArray = [];
  const [current, setCurrent] = useState("mail");
  const [selectedKeys, setSelectedkeys] = useState(Object.values(CatalogState));
  const [securities, setSecurities] = useState(emptyArray);
  useEffect(() => {
    if (securities.length == 0) {
      getAllSecurities().then((res) => {
        if (res !== undefined) {
          setSecurities(res);
        }
      });
    }
  });

  const [localData, SetData] = useState([]);
  useEffect(() => {
    if (localData.length == 0) {
      getAllSecurities().then((res) => {
        if (res !== undefined) {
          SetData(res);
        }
      });
    }
  });

  const onSearch = (value) => {
    console.log(value);
    let foundList = [];
    securities.forEach((item) => {
      if (
        item.documentOwner.includes(value) ||
        item.levelOfRisk.includes(value) ||
        item.price == value ||
        item.trendOfBidding.includes(value)
      ) {
        foundList.push(item);
      }
    });
    setSecurities(foundList);
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    console.log(e.item.props.subMenuKey);
    switch (e.item.props.subMenuKey) {
      case "SortingSubMenu-menu-":
        CatalogState.sortType = e.key;
        break;
      case "FilterPrice-menu-":
        CatalogState.filterPrice = e.key;
        break;
      case "FilterRiskLevel-menu-":
        CatalogState.filterRiskLevel = e.key;
        break;
      case "FilterBiddingTrend-menu-":
        CatalogState.filterBiddingTrend = e.key;
        break;
    }
    console.log(CatalogState);
    setSelectedkeys(Object.values(CatalogState));

    setSecurities(executeFilters(CatalogState, localData));
  };

  const resetDefault = (e) => {
    let props = {
      key: "default",
      item: { props: { subMenuKey: e.item.props.subMenuKey } },
    };
    handleClick(props);
  };

  return (
    <Wrapper>
      <FilterBarWrapper>
        <Menu
          onSelect={handleClick}
          onDeselect={resetDefault}
          selectedKeys={selectedKeys}
          mode="horizontal"
          multiple
        >
          <SubMenu
            key="FilterSubMenu"
            icon={<SettingOutlined />}
            title="Choose Filter"
          >
            <SubMenu key="FilterPrice" title="Filter By Price">
              <Menu.Item key="priceLess100">Price lower 100$</Menu.Item>
              <Menu.Item key="priceOver100">Price over 100$</Menu.Item>
              <Menu.Item key="priceOver200">Price over 200$</Menu.Item>
              <Menu.Item key="priceOver500">Price over 500$</Menu.Item>
              <Menu.Item key="priceOver1000">Price over 1000$</Menu.Item>
            </SubMenu>
            <SubMenu key="FilterRiskLevel" title="Filter By level of risk">
              <Menu.Item key="riskLow">LOW</Menu.Item>
              <Menu.Item key="riskMedium">MEDIUM</Menu.Item>
              <Menu.Item key="riskHigh">HIGH</Menu.Item>
              <Menu.Item key="riskUltraHigh">ULTRAHIGH</Menu.Item>
            </SubMenu>
            <SubMenu
              key="FilterBiddingTrend"
              title="Filter By trend of bidding"
            >
              <Menu.Item key="trendAscending">ASCENDING</Menu.Item>
              <Menu.Item key="trendDescending">DESCENDING</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="SortingSubMenu"
            icon={<SettingOutlined />}
            title="Sortings"
          >
            <Menu.ItemGroup title="Sort By(Ascending order):">
              <Menu.Item key="sortPriceAsc">Price</Menu.Item>
              <Menu.Item key="sortOwnerAsc">Owner</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        <SearchMenu>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </SearchMenu>
      </FilterBarWrapper>
      {securities.length !== 0 ? (
        <CardWrapper>
          {securities.map(
            ({
              title,
              text,
              image,
              price,
              documentOwner,
              levelOfRisk,
              trendOfBidding,
              id,
            }) => (
              <CardItem
                imageSrc={image}
                title={title}
                text={text}
                price={price}
                id={id}
                owner={documentOwner}
                riskLevel={levelOfRisk}
                biddingTrend={trendOfBidding}
              />
            )
          )}
        </CardWrapper>
      ) : (
        <LoadElement></LoadElement>
      )}
    </Wrapper>
  );
};

export default Catalog;
