import * as React from "react";
import {
  DashboardMenuItem,
  Menu as MenuList,
  MenuItemLink,
  MenuProps,
} from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import SubMenu from "./SubMenu";

const Menu = (props: JSX.IntrinsicAttributes & MenuProps) => {
  return (
    <MenuList>
      <DashboardMenuItem />
      <MenuItemLink to="/posts" leftIcon={<BookIcon />} primaryText="Posts" />
      <SubMenu primaryText="Users" leftIcon={<UserIcon />}>
        <MenuItemLink to="/users/test" primaryText="posts" />
      </SubMenu>
      <SubMenu primaryText="Test" leftIcon={<UserIcon />}>
        <MenuItemLink to="/users/test" primaryText="test1" />
        <MenuItemLink to="/users/test" primaryText="test2" />
        <MenuItemLink to="/users/test" primaryText="test3" />
      </SubMenu>
    </MenuList>
  );
};

export default Menu;
