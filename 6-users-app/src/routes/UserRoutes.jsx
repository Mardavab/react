import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { NavBar } from "../components/layout/NavBar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUser } from "../hooks/useUser";

export const UserRoutes = ({ login, handlerLogout }) => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleform,
    handlerOpenForm,
    handlerCloseForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerSelecterUserForm,
  } = useUser();

  return (
    <>
      <NavBar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              userSelected={userSelected}
              initialUserForm={initialUserForm}
              visibleform={visibleform}
              handlerOpenForm={handlerOpenForm}
              handlerCloseForm={handlerCloseForm}
              handlerAddUser={handlerAddUser}
              handlerRemoveUser={handlerRemoveUser}
              handlerSelecterUserForm={handlerSelecterUserForm}
            />
          }
        />
        <Route
          path="users/register"
          element={
            <RegisterPage
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />
        <Route
          path="users/edit/:id"
          element={
            <RegisterPage
              users={users}
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
