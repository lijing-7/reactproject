import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import timg from './timg.jpg';
import {pageRoutes} from '../../routes/index';

const routes = pageRoutes.filter(route=>route.isShow)

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function Frame(props) {
    return (
    <Layout>
        <Header className="header">
            <div className="logo" />
            <div className="logo" >
                <img src={timg} alt="logo" style={{height:50,width:200}}/>
            </div>
        </Header>
        <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {routes.map(route=>{
                        return <Menu.Item key={route.path}>
                               <Icon type={route.Icon}/>
                                    {route.title}
                                </Menu.Item>
                    })}
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    </Layout>


    );
}

export default Frame;