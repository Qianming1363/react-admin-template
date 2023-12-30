import { useNavigate, useRoutes } from "react-router-dom"
import router from "../router"
import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { getRouteChildren } from "@/utils/routerUtils";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('数据中心', '/data', <PieChartOutlined />),
  getItem('用户中心', '/user', <DesktopOutlined />),
  getItem('关于我们', '/about', <UserOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


    const outLet = useRoutes(getRouteChildren("home"))
  const navigateTo = useNavigate()

  const menuClick = (e: { key:string}) => {
    navigateTo("/home" + e.key)
    setBreadItems([{title: e.key}])
  }

  const [breadItems, setBreadItems] = useState<{title:string}[]>([])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={breadItems} />
          <div
            style={{
              padding: 24,
              minHeight: '90vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {outLet}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};


export default Home