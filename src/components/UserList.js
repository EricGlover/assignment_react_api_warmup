import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isFetching, handlers }) => {
  const userList = users.map(user =>
    <UserCard user={user} key={user.id} handlers={handlers} />
  );

  return (
    <div className="container">
      <h2>User List</h2>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  );
};

export default UserList;
