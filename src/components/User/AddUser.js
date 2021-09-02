import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");
  const [error, setError] = useState();

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
      setError({
        title: "Invalid input",
        message: "Please provide a valid name and age (non-empty). ",
      });
      return;
    } else if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please provide a right age ( > 0). ",
      });
      return;
    } else {
      props.onAddUser(enteredUserName, enteredUserAge);
      setUserAge("");
      setUserName("");
    }
  }

  const errorHandler = () => {
    setError(null);
  };


  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </div>
  );
};
