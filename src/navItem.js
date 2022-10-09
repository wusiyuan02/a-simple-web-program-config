import React from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";


const menuItems = [{
  key: 'edit',
  icon: <PieChartOutlined />,
  label: '编辑',
}, {
  key: 'lists',
  icon: <UserOutlined />,
  label: '列表',
  children: [{
    key: 'list1',
    icon: <TeamOutlined />,
    label: '列表1',
  }]
}, {
  key: 'means',
  icon: <DesktopOutlined />,
  label: '详情',
}];

export default menuItems;
