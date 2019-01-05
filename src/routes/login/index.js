import React from 'react';

import { connect } from 'dva';
import loginService from '../../services/loginService'
import styles from './index.css';
import { Form, Icon, Input, Button, Checkbox, Modal, message } from 'antd';
const FormItem = Form.Item;
// @connect(state => ({ ...state.user }))
@Form.create()
export default class Login extends React.Component {
    state={
        msg:null,
        visible:false
    }
    showModal=()=>{
        this.setState({
            visible:true
        })
    }
    handleCancel= (e) => {
        this.setState({
            visible:false
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
               
                console.log(values)
                let params ={}
                params.username=values.username;
                params.password=values.password;
                await loginService.login(params);
                // localStorage.setItem('username',
                //   JSON.stringify({ username: values.username, tp: new Date().valueOf() }));
                // location.href = "/";
                
            }
        });
    }
    render(){
    const { getFieldDecorator } = this.props.form;
    const {msg,visible} =this.state;
    return (
    <div className={styles.loginBody}>
   
    <div className={styles.loginMain}>
        <div className={styles.loginLeft}>
            <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                <div style={{ marginBottom: 50 }}>
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div style={{ color: '#FF6666', marginBottom: 8, height: 22 }}>
                    { msg&&<span><Icon style={{ marginRight: 4 }} type="exclamation-circle" />{msg}</span>}
                </div>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: '请输入账号'
                            },
                            {
                                //pattern:/^\w+$/g,
                                pattern: new RegExp('^\\w+$', 'g'),
                                message: '账号必须字母或数字'
                            }
                        ],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                    )}
                </FormItem>
                
                <FormItem className={styles.loginRemember}>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked'
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className={styles.loginFormForgot} href="javascript:void(0);" onClick={this.showModal} >忘记密码</a>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        { '登录'}
                    </Button>
                </FormItem>
            </Form>
        </div>
       
        <Modal
            title="忘记密码"
            centered
            visible={visible}
            onCancel={this.handleCancel}
            footer={[
                <Button key="back" onClick={this.handleCancel}>确定</Button>
            ]}
        >
            <p>请联系您所在医院的信息科管理员进行密码修改。</p>
        </Modal>
    </div>
</div>
  );
}
};
