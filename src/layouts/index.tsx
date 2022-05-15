import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import SliderNav from './SliderNav';
import HeaderNav from './HeaderNav';
import TaskList from '../pages/taskList';
import TaskView from '../pages/taskView';
import './index.scss';

const { Header, Sider, Content } = Layout;

function Index() {
  return (
    <Layout className="layout">
      <Sider className="slider">
        <SliderNav />
      </Sider>

      <Layout>
        <Header className="header">
          <HeaderNav />
        </Header>

        <Content className="container">
          <Switch>
            <Route path="/list" component={TaskList} />
            <Route path="/view" component={TaskView} />
            <Redirect path="/" to="/list" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Index;
