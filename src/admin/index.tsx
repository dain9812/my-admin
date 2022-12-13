import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Users";
import { PostShow, PostCreate, PostEdit, PostList } from "./Posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Dashboard from "./Dashboard";
import { authProvider } from "./authProvider";
import Layout from "./Layout";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const MyAdmin = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      show={PostShow}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);

export default MyAdmin;
