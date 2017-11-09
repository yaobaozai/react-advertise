import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'

function Erying() {
    return <h2>二营</h2>
}

function Qibinglian() {
    return <h2>骑兵连</h2>
}

@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends React.Component {

    render() {
        const match = this.props.match
        console.log(match)
        const RedirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/erying`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/erying`} exact component={Erying}></Route>
                <Route path={`${match.url}/qibinglian`} exact component={Qibinglian}></Route>

            </div>)
        return this.props.isAuth ? app : RedirectToLogin
    }
}

export default Dashboard