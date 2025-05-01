import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ user }) => {
  const { handlerSelecterUserForm, handlerRemoveUser } = useContext(UserContext);
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
        <NavLink
          className={"btn btn-secondary btn-sm"}
          to={"/users/edit/" + user.id}
        >
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
