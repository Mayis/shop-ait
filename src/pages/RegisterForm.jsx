import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/slices/userSlice";
function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {};
    for (const info of formData.entries()) {
      const [key, value] = info;
      userData[key] = value;
    }
    console.log(userData);
    dispatch(registerUser(userData));
    navigate("/");
  };
  return (
    <div>
      <form id="registerForm" onSubmit={registerSubmit}>
        <input type="text" name="fullname" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
