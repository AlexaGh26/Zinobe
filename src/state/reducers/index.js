import { combineReducers } from 'redux'
import { CreditReducer } from "./credit.reducer"



export default combineReducers({
    credit: CreditReducer,
})