import React, { useEffect } from 'react'
import { connect } from 'react-redux'
//import { fetchUsers } from '../redux'
import { fetchUsers } from '../redux/acitons/users/Users'

function Users ({ userData, fetchUsers }) {

  useEffect(() => {
    fetchUsers()
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
            
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>delete</td>
                    </tr>
                </tbody>
                )}

            </table>
  

      </div>
    </div>
  )
}

const mapStateToProps = state => {
    console.log(state)
  return {
    userData: state.users
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)