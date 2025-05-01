import { NavLink } from "react-router-dom";

export const NavBar = ({ login, handlerLogout }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center">
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="#">
            Navbar
          </a>

          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">Usuarios</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mx-3 d-flex flex-row">
            <li className="nav-item">
              <NavLink className="nav-link" to="/users/register">Registrar</NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <span className="nav-link text-primary me-3">
            {login.user?.username}
          </span>
          <button onClick={handlerLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
