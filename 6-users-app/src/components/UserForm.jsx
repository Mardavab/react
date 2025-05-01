import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ handlerCloseForm, userSelected }) => {
  const { handlerAddUser, initialUserForm } = useContext(UserContext);
  const [userForm, setUserForm] = useState(initialUserForm);
  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
    });
  }, [userSelected]);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      alert("Debe completar los campos");
      return;
    }

    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        required
      />
      {id > 0 || (
        <input
          type="password"
          className="form-control my-3 w-75"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
          minLength="6"
          required
        />
      )}
      <input
        type="email"
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
        required
      />
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Editar" : "Crear"}
      </button>
      {!handlerCloseForm || (
        <button
          onClick={onCloseForm}
          type="button"
          className="btn-primary btn mx-2"
        >
          Cerrar
        </button>
      )}
    </form>
  );
};
