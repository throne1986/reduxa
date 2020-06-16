import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import {fetchUsers, deleteUser, editUser,addUser } from "../redux/acitons/users/Users";
import UserForm from "./UserForm";
import AddUserForm from './AddUserForm'

function Users({ userData, fetchUsers, deleteUser, editUser, addNewUser }) {

  const[adding, setAdding] = useState(false);
  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        <table id="users">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.users &&
              userData.users.map(user => (
                <>
                  {user.editing ? (
                    <UserForm user={user} key={user.id} />
                  ) : (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-link"
                          onClick={() => deleteUser(user.id)}
                        >
                          <i className="material-icons">delete</i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-link"
                          onClick={() => editUser(user.id)}
                        >
                          <i className="material-icons">edit</i>
                        </button>
                      </td>
                    </tr>
                  )}
                </>
              ))}
              {adding && <>
                <AddUserForm addNewUser={addNewUser} users={userData.users} />
              </>}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-success btn-link btn-add"
          onClick={() => setAdding(true)}
        >
          <i className="material-icons">Add user</i>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userData: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUser: id => dispatch(deleteUser(id)),
    editUser: id => dispatch(editUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
