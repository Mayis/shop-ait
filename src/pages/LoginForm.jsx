import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/userSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {};
    for (const info of formData.entries()) {
      const [key, value] = info;
      userData[key] = value;
    }
    dispatch(loginUser(userData));
    navigate("/");
  };
  const goRegisterPage = () => {
    navigate("/register");
  };
  return (
    <div>
      <form id="loginForm" onSubmit={loginSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>register</button>
      </form>
      <button onClick={goRegisterPage}>do you want to register?</button>
    </div>
  );
}

export default LoginForm;
