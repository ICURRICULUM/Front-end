import { Outlet } from "react-router-dom";

import Header from "@layout/header/header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
