import React, { useContext } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=ci nema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Food</h6>
          </Link>

          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>LogOut</span>
          ) : (
            <Link className="link" to="/login">
              <h6>Login</h6>
            </Link>
          )}

          <span className="write">
            <Link className="link" to="/write">
          <span>Write</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
