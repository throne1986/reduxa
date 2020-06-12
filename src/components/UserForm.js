import React from "react";
import { useDispatch } from "react-redux";
import { editUser, updateUser } from "../redux/acitons/users/Users";

function UserForm({ user }) {
  const dispatch = useDispatch();

  const [name, setName] = React.useState(user.name);

  const handleSubmit = () => {
    console.log(name);
    dispatch(updateUser({ ...user, name }));
  };

  const handleCancel = () => {
    dispatch(editUser(user.id));
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <input
          defaultValue={user.name}
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

export default UserForm;
