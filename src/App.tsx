import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Layout, Row, Breadcrumb, Drawer } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './App.css';
import LeftMenu from './layout/LeftMenu';
import { LOGO_URL } from './configs';
import Title from 'antd/lib/typography/Title';

function App() {
  const [currentUser, setCurrentUser] = useState({
    Id: 0,
    Title: '',
    Email: '',
  });
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const breadcrumbNameMap: { [key: string]: string } = {
    '/': 'Home',
    '/book_resource': 'Booking resource',
    '/book_resource/review': 'view booking',
    '/book_resource/detail': 'detail booking',
    '/equipment': 'Equipment',
    '/meetingRoom': 'Meeting room',
    '/car': 'Car',
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  const { Header, Content, Sider } = Layout;
  const [linkMenuActive, setLinkMenuActive] = useState('home');

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser({
      Id: 0,
      Title: '',
      Email: '',
    });
  };

  const setActiveLinkMenu = (currentPage: string) => {
    setLinkMenuActive(currentPage);
    console.log('Change link active', currentPage);
  };

  const getCurrentUser = () => {
    const userInfo = localStorage.getItem('user');
    const userInfoJson = userInfo ? JSON.parse(userInfo) : '';
    console.log('Current user info Json', userInfoJson);

    if (userInfoJson) return userInfoJson;
  };

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="logo"
          style={{
            // background: `url(${LOGO_URL}) no-repeat`,
            color: 'white',
          }}
        >
          <Title level={3} style={{ color: 'white' }}>
            Booking App
          </Title>
        </div>
        <LeftMenu currentPage={linkMenuActive} setLinkActive={setActiveLinkMenu} />
      </Sider>

      <Layout className="site-layout">
        <Row style={{ backgroundColor: 'white' }}>
          <Header className="site-layout-background" style={{ padding: 0, float: 'left' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          {/* <Navigation currentPage={linkMenuActive} setLinkActive={setActiveLinkMenu} /> */}
          <span
            onClick={showDrawer}
            style={{ marginLeft: 'auto', marginRight: '40px', marginTop: '14px' }}
            className="ant-avatar ant-avatar-circle ant-avatar-image"
          >
            <img
              src="https://avatars.githubusercontent.com/u/4776235?s=40&amp;v=4"
              alt={'avatars'}
            />
          </span>
        </Row>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '80vh',
          }}
        >
          <Breadcrumb>{breadcrumbItems}</Breadcrumb>
          <br />
          <Outlet />
        </Content>
      </Layout>

      <Drawer closable={false} placement="right" onClose={onClose} visible={visible}>
        <p>
          {' '}
          <span
            onClick={showDrawer}
            style={{ margin: 7 }}
            className="ant-avatar ant-avatar-circle ant-avatar-image"
          >
            <img
              src="https://avatars.githubusercontent.com/u/4776235?s=40&amp;v=4"
              alt={'avatars'}
            />
          </span>{' '}
          {currentUser?.Title}
          {currentUser?.Email ? ` (${currentUser?.Email})` : ''}
        </p>
        <p>
          {' '}
          <a href="https://outlook.office.com/mail/">
            {' '}
            <img
              style={{ height: 20, width: 20 }}
              src={require('./assets/img/outlook.png')}
              alt={'avatars'}
            />{' '}
            Outlook{' '}
          </a>
        </p>
        <p>
          <a href="." onClick={() => logout()}>
            Sign out
          </a>
        </p>
      </Drawer>
    </Layout>
  );
}

export default App;
