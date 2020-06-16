import ActionTypes from ".";
import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: ActionTypes.FETCH_USERS_REQUEST
  };
};

export const fetchUsersSucess = users => {
  return {
    type: ActionTypes.FETCH_USERS_SUCESS,
    payload: users
  };
};

export const fetchUsersFailure = errors => {
  return {
    type: ActionTypes.FETCH_USERS_FAILURE,
    payload: errors
  };
};

export const removeUser = id => {
  return {
    type: ActionTypes.DELETE_USER,
    payload: id
  };
};

export const editUser = id => {
  return {
    type: ActionTypes.EDIT_USER,
    payload: id
  };
};

export const addUser = data =>{
  return{
    type: ActionTypes.ADD_USER,
    payload: data
  }
};

//ADD FUNCTION TO DELETE USER_REDUCER
export const deleteUser = id => {
  return dispatch => {
    dispatch(fetchUsersRequest);
    axios
      .delete(`http://localhost:3000/users/${id}`)
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

export const updateUser = data => {
  return dispatch => {
    axios
      .put(`http://localhost:3000/users/${data.id}`, data)
      .then(response => {
        dispatch(editUser(data.id));
        console.log(data);
        dispatch(fetchUsers());
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

// create function to fetch users from api
export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest);
    axios
      .get("http://localhost:3000/users/")
      .then(response => {
        const users = response.data;
        console.log(users);
        dispatch(fetchUsersSucess(users));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

// create a fucntion to add new user to the api
// i to tutaj wlasnie robie 
export const addNewUser = data => {

  console.log("adding mother a new user", data);

  return dispatch => {
    axios.post("http://localhost:3000/users")
    .then(response =>{
      dispatch(addUser(data));
      dispatch(fetchUsers());
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchUsersFailure(errorMsg));
    })
  }
}

