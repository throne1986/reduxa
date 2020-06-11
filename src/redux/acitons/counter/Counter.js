//import ActionTypes from './redux/Actions/counter/counter'
import ActionTypes from '../counter'

export const increaseCount = (number = 1) =>({
    type: ActionTypes.INCREASE_COUNT,
    payload: number
});

export const decreaseCount = () =>({
    type:ActionTypes.DECREASE_COUNT
});

export const resetCount = () =>({
    type: ActionTypes.RESET_COUNT
})