import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import Routes from './router/app-router';

render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root')
);
