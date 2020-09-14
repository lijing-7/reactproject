
import React, {Component} from 'react';
import {Card,Table,Button,Popconfirm} from "antd";
const datasource = [
    {
        key:1 ,
        bookname:'霍乱时期的爱情',
        author:'楚留香'
    },
    {
        key: 2,
        bookname:'朝花夕拾',
        author:'鲁迅'
    },
    {
        key: 3,
        bookname:'围城',
        author:'老舍'
    }
]


function Booklist(props) {
        const columns = [
            {
                title:'编号',
                key:'id',
                width:90,
                align:'center',
                render:(text,recode,index)=> index+1
            },
            {
                title:'名称',
                dataIndex:'bookname',
                key:'bookname',
                align:'center',
            },
            {
                title:'作者',
                dataIndex: 'author',
                key:'author',
                align:'center',
            },
            {
                title: "操作",
                render:(tetx,recoder,index)=>{
                    return(<div>
                        <Button type="primary" size="small">修改</Button>
                        <Popconfirm title="你确认删除吗？" onConfirm={()=>console.log("确定啦")}
                                    onCancel={()=>console.log("取消啦")} okText="确认" cancelText="取消">
                            <Button type="danger" style={{marginLeft:5}} size="small">删除</Button>
                        </Popconfirm>
                    </div>)
                }
            }
        ]

        return (
            <div>
                <Card title="书籍列表"
                      extra={
                          <Button type="primary" size="small" onClick={()=> {return  props.history.push('/bookmanager/edit')}
                          }>新增</Button>}
                      >
                    <Table columns={columns} bordered  dataSource={datasource}></Table>
                </Card>
            </div>
        );

}

export default Booklist;
