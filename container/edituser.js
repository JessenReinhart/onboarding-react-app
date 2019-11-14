import React from "react";

const Edituser = () => {
  return (
    <div className="edit">
      <h3>Edit User</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="old password" />
      <input type="password" placeholder="new password" />
      <input type="password" placeholder="confirm password" />
      <button className="main-button">Simpan</button>
      <button className="secondary-button">Batal</button>
    </div>
  );
};

export default Edituser;
