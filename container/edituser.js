import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../reducer/actions";
import Swal from "sweetalert2";

const Edituser = ({ history }) => {
  const dispatch = useDispatch();
  const [userparam, setUserParam] = useState({
    username: "",
    password: "",
    newPass: "",
    confirmNewPass: ""
  });
  const currentUser = useSelector(state => state.account);
  const isLoggedIn = useSelector(state => state.logged)

  useEffect(() => {
    if(!isLoggedIn) {
      history.push("/") //redirect to home screen when the user is not logged in
    }

    setUserParam({
      username: currentUser.username
    });
  }, []);

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

    if(userparam.password !== currentUser.password){
      Swal.fire("Gagal", "Password lama anda salah!", "error");
      return;
    } //Check if your old password is valid

    if (userparam.newPass !== userparam.confirmNewPass) {
      Swal.fire("Gagal", "Password baru harus sama!", "error");
      return;
    } //check if the password confirmation field is the same as the new password

    const accountList = JSON.parse(localStorage.getItem("account")); //Get the current registered account
    const filteredAccount = accountList.filter(
      item =>
        item.username === currentUser.username &&
        item.password === currentUser.password
    ); //get the current account from the list.

    const newList = accountList.filter(item => item !== filteredAccount[0]) //Get the list without your old account
    const newAccountData = {
      ...filteredAccount[0],
      username: userparam.username,
      password: userparam.newPass
    } //Create the new edited user account data object.

    newList.push(newAccountData) //Push the new data into the account list array

    dispatch(setUserData(newAccountData)) //Set the new account data to redux store
    localStorage.setItem("account", JSON.stringify(newList)) //Push the changed array into localStorage
    Swal.fire("Berhasil!", "Anda telah mengganti data user anda.", "success")
      .then(() => history.push("/"))
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
