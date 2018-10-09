import {createStore} from 'react'
import reducer from './Reducer'

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 25
}

const store = createStore(reducer, initValues)

export default store