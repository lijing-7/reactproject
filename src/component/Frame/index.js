import React from 'react';
import {withRouter} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import timg from './timg.jpg';
import {pageRoutes} from '../../routes/index';
const { Header, Content, Sider } = Layout;

const routes = pageRoutes.filter(route=>route.isShow)


function Index(props) {
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
                        return <Menu.Item key={route.path} onClick={p=> props.history.push(p.key)}>
                               <Icon type={route.Icon}/>
                                    {route.title}
                                </Menu.Item>
                    })}
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
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

export default withRouter(Index);