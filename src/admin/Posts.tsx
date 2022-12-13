import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Create,
  Show,
  useRecordContext,
  ShowButton,
  Button,
} from "react-admin";
import BackButton from "./BackButton";
import WithdrawDialog from "./WithdrawDialog";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <WithdrawDialog />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <BackButton></BackButton>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

export const PostShow = () => (
  <Show emptyWhileLoading>
    <SimpleForm>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </SimpleForm>
  </Show>
);
