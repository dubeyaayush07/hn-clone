import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
} from 'react-router-dom'
import { StoryBrowse } from './components/StoryBrowse';
import { StoryDetail } from './components/StoryDetail';
import './App.css';
import { Layout, Menu } from 'antd';

const { Header, Content} = Layout;

export const App = () => {
    return (
        <Router>
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" style={{ fontSize : '1.2rem'}}><Link to="/">Hacker News</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '3rem 4rem' }}>
                    <Switch>
                        <Route exact path="/">
                            <StoryBrowse />
                        </Route>
                        <Route path="/story/:id" children={<StoryDetail />} />
                    </Switch>
                </Content>
            </Layout>
        </Router>
    )
}