import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux'
import { register } from '../../redux/user/user.redux'
import '../../index.css'

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'user': '',
            'pwd': '',
            'repeatpwd': '',
            'type': 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this);
    }


    handleChange(key, val) {
        this.setState({
            [key]: val
        })
        console.log(this.state)
    }

    handleRegister() {
        this.props.register(this.state)
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <List>
                    {this.props.msg ? <p className="error-msg">{this.props.msg}</p>: null}
                    <InputItem onChange={v => this.handleChange('user', v)}>账户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem type="password" onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
                    <RadioItem onChange={() => this.handleChange('type', 'genius')} checked={this.state.type === 'genius'}>牛人</RadioItem>
                    <RadioItem onChange={() => this.handleChange('type', 'boss')} checked={this.state.type === 'boss'}>BOSS</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                    <WhiteSpace></WhiteSpace>
                </List>
            </div>
        )
    }
}

export default Register