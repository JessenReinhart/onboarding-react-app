import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { doLogin, setUserData } from "./reducer/actions";
import "./style.css";

const Login = ({ history }) => {
  const [loginparam, setLoginparam] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();

  const loginAction = () => {
    if (loginparam.username !== "" && loginparam.password !== "") {
      //check if the username and password are filled
      const userData = JSON.parse(localStorage.getItem("account"));

      if (userData) {
        //check if userData exists
        const userDataFilter = userData.filter(
          data =>
            data.username === loginparam.username &&
            data.password === loginparam.password
        ); //Return the user data which contains the same username and password as the login param.
      }

      if (userDataFilter.length) {
        dispatch(doLogin());
        dispatch(setUserData(userDataFilter[0]));
        let timerInterval;
        Swal.fire({
          title: "Berhasil!",
          html: `Selamat datang, ${userDataFilter[0].username}`,
          timer: 2000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
          onClose: () => {
            clearInterval(timerInterval);
          }
        }).then(result => {
          history.push("/");
        });
      } else {
        Swal.fire("Gagal masuk", "User tidak ditemukan!", "error");
      } //check if the inputted user data exists. log in if exist.
    } else {
      Swal.fire("Gagal masuk", "Username dan password harus diisi!", "error");
    }
  };

  const handleChange = e => {
    setLoginparam({
      ...loginparam,
      [e.target.name]: e.target.value
    });
    console.log(loginparam);
  };

  return (
    <div className="login">
      <h3>Login</h3>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button className="main-button" onClick={loginAction}>
        Login
      </button>
      <Link to="/register" className="secondary-button">
        Register
      </Link>
    </div>
  );
};

export default Login;
