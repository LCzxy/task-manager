import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
import './index.scss';

const SliderNav = () => {
  const history = useHistory();
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    const { pathname } = history.location;
    setSelectedKey(pathname);
  }, [history]);
  const items = [
    { label: '列表', key: '/list' }, // key与路由保持一致
    { label: '看板', key: '/view' },
  ];
  return (
    <>
      <div className="title">
        <img className="logo" src={logo} alt="logo" />
        任务管理
      </div>
      <Menu
        selectedKeys={[selectedKey]}
        onSelect={({ key }) => {
          setSelectedKey(key);
          history.push(key);
        }}
        items={items}
        mode="inline"
      />
    </>
  );
};

export default SliderNav;
