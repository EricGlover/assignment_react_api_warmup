import React from "react";
import Button from "./elements/Button";
import UserButtonForm from "./UserButtonForm";

const UserCard = ({ user, handlers }) => {
  const { first_name, last_name, avatar, id } = user;
  return (
    <div className="UserCard card" style={{ maxWidth: `128px` }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
        <UserButtonForm onSubmit={handlers.onDelUser} id={id}>
          <Button type="submit" color="danger">
            Delete
          </Button>
        </UserButtonForm>
        <UserButtonForm onSubmit={handlers.onDisplayEdit} id={id}>
          <Button type="submit" color="warning">
            Edit
          </Button>
        </UserButtonForm>
      </div>
    </div>
  );
};

export default UserCard;
