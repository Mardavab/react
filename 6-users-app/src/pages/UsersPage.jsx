
import { useContext } from "react";
import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";
import { UserContext } from "../context/UserContext";

export const UsersPage = () => {
 const {
  users,
  visibleform,
  handlerOpenForm,
  handlerRemoveUser,
  handlerSelecterUserForm,
} = useContext(UserContext

);
  return (
    <>
      {!visibleform || (
        <UserModalForm/>
      )}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          <div className="col">
            {visibleform || (
              <button
                className="btn-primary btn my-2"
                onClick={handlerOpenForm}
              >
                Nuevo Usuario
              </button>
            )}

            {users.length === 0 ? (
              <div className="alert alert-warning">
                No hay usuarios en el sistema
              </div>
            ) : (
              <UserList/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
