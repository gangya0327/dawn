import AppDispatcher from '../AppDispatcher'
import * as ActoinTypes from '../ActionTypes'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'changed'

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
}

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function() {
        return counterValues
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback)
    }
})

CounterStore.dispatcherToken = AppDispatcher.register((action) => {
    if(action.type ===ActoinTypes.INCREMENT) {
        counterValues[action.counterCaption]++
        CounterStore.emitChange()
    }else if(action.type === ActoinTypes.DECREMENT) {
        counterValues[action.counterCaption]--
        CounterStore.emitChange()
    }
})

export default CounterStore