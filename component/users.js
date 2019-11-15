import React, {useState, useEffect} from 'react'

const Users = () => {
  const [userList, setUserList] = useState([])
  useEffect(()=> {
    setUserList(JSON.parse(localStorage.account))
  })

  return (
    <>
    {userList.map((item, key) => {
      <div className="list">
        <h3>{item.username}</h3>
        <small>{item.email}</small>
      </div>
    })}
    </>
  )
}

export default Users;