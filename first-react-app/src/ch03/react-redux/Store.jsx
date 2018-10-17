import {createStore} from 'redux'
import reducer from './Reducer'

const initValues = {
    'First': 0,
    'Second': 102,
    'Third': 20
}

const store = createStore(reducer, initValues)

export default store