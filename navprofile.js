import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { doLogout } from "./reducer/actions";
import Swal from "sweetalert2";

const Navprofile = () => {
  const username = useSelector(state => state.account.username);
  const dispatch = useDispatch();

  const logout = () => {
    Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan keluar.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, keluar"
    }).then(result => {
      if (result.value) {
        dispatch(doLogout());
        Swal.fire("Sampai jumpa!", "Anda telah keluar", "success");
      }
    });
  };
  return (
    <div>
      <span className="nav-dropdown">Hello, {username}</span>
      <div className="dropdown-menu">
        <Link to="/edituser">Edit User</Link>
        <span onClick={logout}>Log out</span>
      </div>
    </div>
  );
};

export default Navprofile;
