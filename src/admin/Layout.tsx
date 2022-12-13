import { Layout as AdminLayout } from "react-admin";
import Menu from "./Menu";

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Layout = (props: any) => <AdminLayout {...props} menu={Menu} />;

export default Layout;
