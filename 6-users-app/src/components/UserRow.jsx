import { NavLink } from "react-router-dom";

export const UserRow = ({
  handlerSelecterUserForm,
  handlerRemoveUser,
  user,
}) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => handlerSelecterUserForm(user)}
        >
          update
        </button>
      </td>
      <td>
        <NavLink className={'btn btn-secondary btn-sm'} to={'/users/edit/' + user.id}>
        update route
        </NavLink>
      </td>
      <td>
        <button
          onClick={() => handlerRemoveUser(user.id)}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
