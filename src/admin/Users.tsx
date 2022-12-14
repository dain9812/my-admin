import { useMediaQuery } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ExportButton,
  Button,
  TopToolbar,
} from "react-admin";
import BackButton from "./BackButton";
import IconEvent from "@mui/icons-material/Event";
import React from "react";

const ListActions = () => (
  <TopToolbar>
    <ExportButton />
    {/* Add your custom actions */}
    <Button
      onClick={() => {
        alert("Your custom action");
      }}
      label="Show calendar"
    >
      <IconEvent />
    </Button>
  </TopToolbar>
);

export const UserList = () => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <List actions={<ListActions />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};

export const UserEdit = () => (
  <Edit>
    <BackButton></BackButton>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);
