import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Edituser = () => {
  const dispatch = useDispatch();
  const [userparam, setUserParam] = useState({
    username: "",
    password: "",
    newPass: "",
    confirmNewPass: ""
  });

  useEffect(() => {}, []);

  const handleChange = e => {
    setUserParam({
      ...userparam,
      [e.target.name]: e.target.value
    });
  };

  const save = () => {
    if (
      userparam.username === "" ||
      userparam.password === "" ||
      userparam.newPass === "" ||
      userparam.confirmNewPass === ""
    ) {
      Swal.fire("Gagal", "Harus diisi semua!", "error");
      return;
    } //check if the forms are filled
    if (userparam.newPass !== userparam.confirmNewPass) {
      Swal.fire("Gagal", "Password harus sama!", "error");
      return;
    } //check if the password confirmation field is the same as the new password
    Swal.fire("Berhasil!", "Berhasil tersimpan", "success");
  };

  return (
    <div className="edit">
      <h3>Edit User</h3>
      <input
        onChange={handleChange}
        type="text"
        name="username"
        placeholder="Username"
        value={userparam.username}
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="old password"
        value={userparam.password}
      />
      <input
        onChange={handleChange}
        type="password"
        name="newPass"
        placeholder="new password"
      />
      <input
        onChange={handleChange}
        type="password"
        name="confirmNewPass"
        placeholder="confirm password"
      />
      <button className="main-button" onClick={save}>
        Simpan
      </button>
      <button className="secondary-button">Batal</button>
    </div>
  );
};

export default Edituser;
