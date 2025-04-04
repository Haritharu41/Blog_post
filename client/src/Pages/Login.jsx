import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axios } from "../utils/axios";
import { AuthContext } from "../Context/authContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(input);
      navigate("/");
      console.log("Login successful");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />

        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>

        {error && <p>{error}</p>}
        <span>
          Don't have an account ?<Link to="/Register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
