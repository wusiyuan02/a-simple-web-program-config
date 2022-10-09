import React, { useState, useEffect } from "react";
import styles from "./style.module.less";
import MenuItems from "./navItem.js";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import MyBreadcrumb from "./components/Breadcrumb/index.jsx";
const { Header, Content, Sider } = Layout;
import { LogoutOutlined } from "@ant-design/icons";
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumbItems, setBreadcrumbItems] = useState(
    location.hash.split("/").slice(2)
  );
  const history = useNavigate();

  // 路由守卫
  useEffect(() => {
    sessionStorage.getItem("isLogin") || history("/login");
  }, [breadcrumbItems]);

  const changeRouter = (menuItem) => {
    console.log(menuItem);
    history(menuItem.keyPath.reverse().join("/"));
    setBreadcrumbItems(menuItem.keyPath);
  };

  const clickLoginOut = () => {
    sessionStorage.removeItem("isLogin");
    history("/login");
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={styles.logo}>不提</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={breadcrumbItems}
          items={MenuItems}
          onClick={changeRouter}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div className={styles.mainButtonLoginOut} onClick={clickLoginOut}>
            退出登录
            <LogoutOutlined />
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <MyBreadcrumb breadcrumbItems={breadcrumbItems} />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
