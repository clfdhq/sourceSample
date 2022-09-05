import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

function LeftMenu(props: { currentPage: string; setLinkActive: Function }) {
  const [current, setCurrent] = useState(props.currentPage);
  const handleClick = (key: string) => {
    props.setLinkActive(key);
  };

  useEffect(() => {
    setCurrent(props.currentPage);
  }, [props]);

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[current]}>
      <Menu.Item key="home" onClick={() => handleClick('demo')} icon={<MailOutlined />}>
        <Link to="demo" className="nav-Link active">
          Demo data list
        </Link>
      </Menu.Item>
      <Menu.Item key="duan" onClick={() => handleClick('duan')} icon={<MailOutlined />}>
        <Link to="duan" className="nav-Link active">
          Dự án
        </Link>
      </Menu.Item>
      <Menu.Item key="pet" onClick={() => handleClick('pet')} icon={<MailOutlined />}>
        <Link to="pet" className="nav-Link active">
          Pet Store
        </Link>
      </Menu.Item>

    </Menu>
  );
}

export default LeftMenu;
