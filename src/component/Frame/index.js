import React from 'react';
import {withRouter} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar, message} from 'antd';
import timg from './timg.jpg';
import {pageRoutes} from '../../routes/index';
import '../../css/frame.css';
import {cleartoken} from '../../util/auth';
const { Header, Content, Sider } = Layout;
const routes = pageRoutes.filter(route=>route.isShow)


function Index(props) {
    const menu = (
        <Menu onClick={(e)=>{
            if (e.key=='logout'){
                cleartoken();
                props.history.push('/login');
            }else {
                message.info(e.key)
            }
        }}>
            <Menu.Item key="usercenter">用户中心</Menu.Item>
            <Menu.Item key="personset">个人设置</Menu.Item>
            <Menu.Item key="logout">退出登录</Menu.Item>
        </Menu>
    )

    return (
    <Layout>
        <Header className="header">
            <div className="logo" >
                <img src={timg} alt="logo" style={{height:50,width:200}}/>
            </div>
            <Dropdown overlay={menu}>
                <div>
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:12, }}>U</Avatar>
                    <span>超级管理员</span>
                    <Icon type="down" />
                </div>
            </Dropdown>
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