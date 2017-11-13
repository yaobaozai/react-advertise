import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux'
import { register } from '../../redux/user/user.redux'
import { Redirect } from 'react-router-dom'
import '../../index.css'
import zengForm from '../../component/zeng-form/zeng-form'

@connect(
    state=>state.user,
    {register}
)
@zengForm
class Register extends React.Component {

    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentDidMount(){
        this.props.handleChange('type', 'genius')
    }

    handleRegister() {
        this.props.register(this.props.state)
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null         }
                <Logo></Logo>
                <h2>注册页</h2>
                <List>
                    {this.props.msg ? <p className="error-msg">{this.props.msg}</p>: null}
                    <InputItem onChange={v => this.props.handleChange('user', v)}>账户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem type="password" onChange={v => this.props.handleChange('pwd', v)}>密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem type="password" onChange={v => this.props.handleChange('repeatpwd', v)}>确认密码</InputItem>
                    <RadioItem onChange={() => this.props.handleChange('type', 'genius')} checked={this.props.state.type === 'genius'}>牛人</RadioItem>
                    <RadioItem onChange={() => this.props.handleChange('type', 'boss')} checked={this.props.state.type === 'boss'}>BOSS</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                    <WhiteSpace></WhiteSpace>
                </List>
            </div>
        )
    }
}

export default Register