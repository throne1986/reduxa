import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNewUser  } from '../redux/acitons/users/Users';

function AddUserForm({users}) {
    const dispatch = useDispatch();
    const [newUserName, setNewUserName] = useState('');

   const handleSubmit = (e) =>{
    e.preventDefault();

    const usersList = users;
    const newUserId = usersList[usersList.length - 1].id + 1;
    
    console.log("your name", newUserName);
    console.log("your id", newUserId)

    dispatch(addNewUser({
      ...users,
      id: newUserId,
      name: newUserName,
    }));
 
   }

  const handleCancel = () => {};
  return (
    <tr>
      <td>{newUserName.id}</td>
      <td>
        <input
          value={newUserName}
          name="name"
          onChange={e => setNewUserName(e.target.value)}
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
