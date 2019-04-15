import { createStore, combineReducers } from 'redux'

import counter, { incActionCreator, decActionCreator} from './state/counter'
import messages, {sendActionCreator} from './state/messages'

const reducer = combineReducers({
    counter,
    messages
})


export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const message1  = sendActionCreator ('Mateusz', 'Lorem')
const message2 = sendActionCreator('Tadeusz', 'Ipsum')

console.log(message1,message2)

store.dispatch(message1)
store.dispatch(message2)
//window.sendMessage = () => {}