import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const userList = [
    { id: 1, name: "Shrihari" },
    { id: 2, name: "Akhil" },
  ];

  return (
    <>
      <div>Users List</div>
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
