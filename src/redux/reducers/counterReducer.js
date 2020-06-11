
// import ActionTypes from './redux/actions/counter'
import ActionTypes from '../acitons/counter/index'
const initialState ={
    counter: 0
}

const reducer = (state =initialState, action) =>{

  switch (action.type) {
      case ActionTypes.INCREASE_COUNT:
          return{
              ...state,
              counter: state.counter + action.payload
          };
      case ActionTypes.DECREASE_COUNT:
          return{
              ...state,
              counter: state.counter -1
          }
      case ActionTypes.RESET_COUNT:
          return{
              ...state,
              counter: 0
          }
      default:return{counter:0}
          
  }
}

export default reducer