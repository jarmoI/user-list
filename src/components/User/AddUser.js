import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");

  function usernameChangeHandler(event) {
    setUserName(event.target.value);
  }

  function userageChangeHandler(event) {
    setUserAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();
    if (
      enteredUserAge.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      return;
    } else if (+enteredUserAge < 1) {
      return;
    } else {
        console.log(enteredUserAge, enteredUserName)
        setUserAge("");
        setUserName("");
    }
   
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User</label>
        <input
          className="username"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="userage">Age</label>
        <input
          className="userage"
          type="number"
          value={enteredUserAge}
          onChange={userageChangeHandler}
        ></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};
