import {createStore} from 'redux'
import {counter} from './reducers'

const store = createStore(counter)
console.log("counter ", counter)
console.log("store ", store)

export default store 