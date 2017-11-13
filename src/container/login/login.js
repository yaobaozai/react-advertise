import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux'
import { login } from '../../redux/user/user.redux'
import { Redirect } from 'react-router-dom'
import zengForm from '../../component/zeng-form/zeng-form'

// @WrapperHello
// class Hello extends React.Component {
//     render() {
//         return <h2>hello immoc i love react&&redux</h2>
//     }
// }
//属性代理
// function WrapperHello(Comp){
//     class WrapComp extends React.Component{
//         render(){
//             return (
//                 <div>
//                     <p>这是HOC</p>
//                     <Comp {...this.props}></Comp>
//                 </div>
//             )
//         }
//     }
//     return WrapComp
// }

//反向继承
// function WrapperHello(Comp) {
//     class WrapComp extends Comp{
//         componentDidMount(){
//             console.log('高阶组件新增的生命周期')
//         }
//         render(){
//             return <Comp /> 
//         }
//     }
// }

// Hello = WrapperHello(Hello)

@connect(
    state => state.user,
    { login }
)
@zengForm
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.register = this.register.bind(this)
    }

    register() {
        console.log(this.props)
        this.props.history.push('/register')
    }

    handleLogin(){
        this.props.login(this.props.state)
    }

    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                        <InputItem onChange={v=>this.props.handleChange('user',v)}>用户</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type="password" onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>

                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login