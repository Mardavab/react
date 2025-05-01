
import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";

export const UsersPage = ({
  users,
  userSelected,
  initialUserForm,
  visibleform,
  handlerOpenForm,
  handlerCloseForm,
  handlerAddUser,
  handlerRemoveUser,
  handlerSelecterUserForm,
}) => {
 
  return (
    <>
      {!visibleform || (
        <UserModalForm
          handlerCloseForm={handlerCloseForm}
          handlerAddUser={handlerAddUser}
          initialUserForm={initialUserForm}
          userSelected={userSelected}
        />
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
              <UserList
                handlerSelecterUserForm={handlerSelecterUserForm}
                handlerRemoveUser={handlerRemoveUser}
                users={users}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
