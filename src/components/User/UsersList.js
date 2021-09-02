import React from "react";
import { Card } from "../UI/Card";
import classes from "./UsersList.module.css";

export const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.userName} is {user.userAge} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};
