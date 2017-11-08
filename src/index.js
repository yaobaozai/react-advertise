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
    Switch
} from 'react-router-dom'
import { counter } from './index.redux'
import Dashboard from './Dashboard'
import Auth  from './Auth'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    {/* 只渲染命中的第一个Route */}
                    <Route path="/login" component={Auth}></Route> 
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Redirect to="/dashboard"></Redirect>
                </Switch>

                <Redirect to="/"></Redirect>
            </div>

        </BrowserRouter>
    </Provider>),
    document.getElementById('root'))



