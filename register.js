import React, { Component } from "react";
import Swal from "sweetalert2";
import emailIsValid from "./facade";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = () => {
    if (this.state.confirmPassword !== this.state.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwordnya samain dulu boss"
      });
      return;
    } else if (
      this.state.confirmPassword === "" ||
      this.state.password === "" ||
      this.state.email === "" ||
      this.state.username === ""
    ) {
      Swal.fire(
        "Di isi formnya.",
        "Formnya di isi dulu. mau register apa enggak?",
        "question"
      );
      return;
    } else if (!emailIsValid(this.state.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Format emailnya salah boss"
      });
      return;
    }
    if (localStorage.getItem("account")) {
      var account = JSON.parse(localStorage.getItem("account"));
      if (account.findIndex(i => i.username === this.state.username) !== -1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username telah terdaftar"
        });
        return;
      } else if (account.findIndex(i => i.email === this.state.email) !== -1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email telah terdaftar"
        });
        return;
      }
    } else {
      var account = [];
    }
    account.push({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    });
    localStorage.setItem("account", JSON.stringify(account));

    let timerInterval;
    Swal.fire({
      title: "Berhasil!",
      html: "Anda akan kembali ke halaman login. <b></b>",
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector(
            "b"
          ).textContent = Swal.getTimerLeft();
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      }
    }).then(result => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <div className="login">
        <h3>Register</h3>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={this.handleChange}
        />
        <button className="main-button" onClick={this.register}>
          Register
        </button>
      </div>
    );
  }
}
