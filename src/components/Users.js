import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchUsers, deleteUser, editUser} from '../redux/acitons/users/Users'
import UserForm from './UserForm'

function Users ({ userData, fetchUsers, deleteUser, editUser }) {

  useEffect(() => {
    fetchUsers();
  },[fetchUsers])

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
                {userData &&
                    userData.users &&
                    userData.users.map(user => 
                <tbody>
                  {user.editing ? <UserForm post={user} key={user.id} />:
                    <tr key={user.id}>
                      
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                        <button key={user.id} type="button" className="btn btn-danger btn-link" onClick={() => deleteUser(user.id)}>
                            <i className="material-icons">delete</i>
                        </button>
                        <button key={user.id} type="button" className="btn btn-success btn-link" onClick={() =>editUser(user.id)}>
                            <i className="material-icons">edit</i>
                        </button>
                        </td>
                    </tr>
                  }
                </tbody>
                )}

            </table>
        
            <button type="button" className="btn btn-primary btn-link btn-add">
                                      <i className="material-icons">add user</i>
            </button>

      </div>
    </div>
  )
}

const Form =styled.div`
  display:flex;
`

const mapStateToProps = state => {
    console.log(state)
  return {
    userData: state.users
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUser: (id) => dispatch(deleteUser(id)),
    editUser: (id) => dispatch(editUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
