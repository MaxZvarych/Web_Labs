import { Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class CatalogMenu extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <SubMenu key="FilterSubMenu" icon={<SettingOutlined />} title="Filters">
          <Menu.ItemGroup title="Filter By:">
            <Menu.Item key="setting:1">Price</Menu.Item>
            <Menu.Item key="setting:2">Owner</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="SortingSubMenu"
          icon={<SettingOutlined />}
          title="Sortings"
        >
          <Menu.ItemGroup title="Sort By(Ascending order):">
            <Menu.Item key="setting:3">Price</Menu.Item>
            <Menu.Item key="setting:4">Owner</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Sort By(Descending order):">
            <Menu.Item key="setting:5">Price</Menu.Item>
            <Menu.Item key="setting:6">Owner</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}
export default CatalogMenu;
