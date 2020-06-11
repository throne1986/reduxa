
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

export const editUser =(id) =>{
    return{
        type:ActionTypes.EDIT_USER,
        payload:id
    }
}
//ADD FUNCTION TO DELETE USER_REDUCER
export const deleteUser = id => {
    return dispatch => {
        dispatch(fetchUsersRequest);
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                dispatch(removeUser(id));
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log(errorMsg);
                dispatch(fetchUsersFailure(errorMsg));
            });
    };
};

//add function to edit the user info

export const updateUser = (id) =>{
    return dispatch =>{
     axios.put(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then(response =>{
         dispatch(editUser(id));
     })
     .catch(error =>{
         const errorMsg = error.message;
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