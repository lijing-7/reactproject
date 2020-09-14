import React, {Component} from 'react';
import {Form, Card, Input, Button, message, InputNumber} from "antd";


function Bookedit (props){

    const {getFieldDecorator } = props.form;
    const handlesubmit = e=>{
        e.preventDefault()
        props.form.validateFieldsAndScroll((err,value)=>{
            if (!err){
                console.log(value)
                message.success("提交")
            }else{
                message.warn("请输入正确内容！")
            }
        })

    }

    const pricevalidator = (rule,value,callback)=>{
        if (value*1>100){
            callback("价格不能大于100！")
        }else {
            callback("哈哈可以有")
        }

    }
        return (
           <Card title="书籍编辑">
               <Form onSubmit={e=>handlesubmit(e)}>
                   <Form.Item label="名字">
                       {
                           getFieldDecorator('name',{
                               rules:[
                                   {required: true, message: '请输入书籍名称!',}
                               ]
                           })(<Input placeholder="请输入书籍名称"/>)
                       }</Form.Item>
                   <Form.Item label="价格">
                       {
                           getFieldDecorator('price',{
                               rules:[
                                   {
                                      required:true,
                                       message:"请输入价格！"
                                   },
                                   {
                                       validator: pricevalidator
                                   }
                               ]
                           })(<InputNumber placeholder="请输入价格！" style={{width:100}}></InputNumber>)
                       }
                   </Form.Item>
                   <Form.Item>
                       <Button type="primary" htmlType="submit">保存</Button>
                   </Form.Item>
               </Form>
           </Card>
        );
}

export default Form.create({name:'bookeditFrom'})(Bookedit);