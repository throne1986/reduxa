import { combineReducers } from 'redux'
import userReducer from '../reducers/userReducer'
import counterReducer from '../reducers/counterReducer'

const rootReducer = combineReducers({
    users:userReducer,
    counter:counterReducer
})

export default rootReducer;