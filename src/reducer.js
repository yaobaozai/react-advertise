import { counter } from './index.redux';
import { auth } from './Auth.redux';
import { combineReducers } from 'redux'

export default combineReducers({counter,auth})