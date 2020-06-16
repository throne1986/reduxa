import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addUser, addNewUser  } from '../redux/acitons/users/Users';

function AddUserForm({ user }) {
    const dispatch = useDispatch();
    const [name, setName ] = useState('');

   const handleSubmit = (e) =>{
    e.preventDefault();
        dispatch(addNewUser( {
            ...user,
             name
        }));
        setName('')
   }

  const handleCancel = () => {
      dispatch(addUser(user.id))
  }
  return (
    <tr>
      <td></td>
      <td>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </td>
      <td>
        <button type="button" className="btn outline" onClick={handleCancel}>
          <i className="material-icons">Cancel</i>
        </button>
        <button
          type="button"
          className="btn btn-success btn-link"
          onClick={handleSubmit}
        >
          <i className="material-icons">save</i>
        </button>
      </td>
    </tr>
  );
}

export default AddUserForm
