
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

export const removeUser =(id) =>{
    return {
        type: ActionTypes.DELETE_USER,
        payload:id
    }
}
//ADD FUNCTION TO DELETE USER_REDUCER
export const deleteUser =(id) =>{
    return(dispatch) =>{
        dispatch(fetchUsersRequest)
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response =>{
            const user = response.data;
            console.log(user)
            dispatch(removeUser(user))
        })
        .catch(error =>{
            const errorMsg = error.message;
            console.log(errorMsg)
            dispatch(fetchUsersFailure(errorMsg));
        
        })
    }

}

// create function to fetch users from api
export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
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