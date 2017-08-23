import React from "react";
import Button from "./elements/Button";

const UserCard = ({ user, handlers }) => {
  const { first_name, last_name, avatar } = user;
  return (
    <div className="UserCard card" style={{ maxWidth: `128px` }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
        <Button onClick={handlers.onDelUser} type="button" color="danger">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
