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

    </Menu>
  );
}

export default LeftMenu;
