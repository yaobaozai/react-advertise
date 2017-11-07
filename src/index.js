import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { 
    BrowserRouter, 
    Route, 
    Link,
    Redirect,
    Switch } from 'react-router-dom'
import { counter } from './index.redux'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
 
/* class Test extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <h2>测试组件 {this.props.match.params.location}</h2>
    }
} */
function Erying(){
    return <h2>二赢</h2>
}

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    {/* 只渲染命中的第一个Route */}
                </Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/erying" component={Erying}></Route>
                <Route path="/qibinglian" component={Erying}></Route>
                <Redirect to="/"></Redirect>
            </div>

        </BrowserRouter>
    </Provider>),
    document.getElementById('root'))



