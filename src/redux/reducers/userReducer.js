
import ActionTypes from '../acitons/users'

// initialize state
const initialState = {
    loading:false, // for loading spinner
    users:[],
    error:''
}

const reducer =(state =initialState, action) =>{

    switch (action.type) {
        case ActionTypes.FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
            
        case ActionTypes.FETCH_USERS_SUCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case ActionTypes.FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        case ActionTypes.DELETE_USER:
            return{
                ...state,
                users:state.users.filter(user => user.id !==action.payload)
            }

        default: return state
    }
}



export default reducer

