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
  BulkDeleteButton,
  Button,
} from "react-admin";
import BackButton from "./BackButton";
import CustomRowButton from "./CustomRowButton";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const PostBulkActionButtons = () => (
  <>
    <Button label="CUSTOM" onClick={() => alert("click custom button!!!")}>
      <CurrencyExchangeIcon />
    </Button>
    {/* default bulk delete action */}
    <BulkDeleteButton />
  </>
);

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid bulkActionButtons={<PostBulkActionButtons />}>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <CustomRowButton />
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
