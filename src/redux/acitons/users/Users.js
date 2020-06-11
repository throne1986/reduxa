
import ActionTypes from '../users'
import axios from 'axios'

export const fetchUsersRequest = () =>{
    return{
        type: ActionTypes.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSucess = (users) =>{
    return{
        type:ActionTypes.FETCH_USERS_SUCESS,
        payload:users
    }
}

export const fetchUsersFailure = (errors) =>{
    return{
        type: ActionTypes.FETCH_USERS_FAILURE,
        payload: errors
    }
}

// create function to fetch users from api
export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUsersRequest)
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            console.log(users);
            dispatch(fetchUsersSucess(users));
          })
          .catch(error => {
            const errorMsg =error.message
            dispatch(fetchUsersFailure(errorMsg))
          });
    }
}