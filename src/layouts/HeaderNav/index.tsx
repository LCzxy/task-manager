import React from 'react';
import { Dropdown, Space, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.scss';

const HeaderNav = () => {
  const menu = (
    <Menu
      items={[
        {
          label: <a href="/system">系统设置</a>,
          key: '0',
        },
        {
          label: <a href="/system">退出登录</a>,
          key: '1',
        },
      ]}
    />
  );
  return (
    <div className="header-nav">
      <Dropdown overlay={menu} trigger={['click']}>
        <span className="header-fun" onClick={e => e.preventDefault()}>
          <Space>
            刘成
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
    </div>
  );
};

export default HeaderNav;
