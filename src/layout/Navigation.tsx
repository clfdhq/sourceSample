import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

function Navigation(props: { currentPage: string; setLinkActive: Function }) {
  const [current, setCurrent] = useState(props.currentPage);
  const handleClick = (key: string) => {
    props.setLinkActive(key);
    setCurrent(props.currentPage);
  };

  useEffect(() => {
    setCurrent(props.currentPage);
    console.log('active effect set link');
  }, [props.currentPage]);

  return (
    <Menu onClick={() => handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" onClick={() => handleClick('demo')} icon={<MailOutlined />}>
        <Link to="" className="nav-Link active">
          {' '}
          Demo{' '}
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;
