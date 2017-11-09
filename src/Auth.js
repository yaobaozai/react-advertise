import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'

@connect(
    state=>state.auth,
    {login, getUserData}
)
class Auth extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state={
    //         data: {

    //         }
    //     }
    // }

    componentDidMount(){
        this.props.getUserData()
    }
    render() {

        return (
            <div>
                <h2>我的名字叫{this.props.user} 我今年{this.props.age}</h2>
                {this.props.isAuth ? <Redirect to="/dashboard"></Redirect> : null}
                <h2>需要登录</h2>
                <button onClick={this.props.login}>点击登录</button>
            </div>
        )
    }
}

export default Auth