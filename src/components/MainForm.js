// import { useState } from "react";
import { useRef } from 'react';
import classes from './MainForm.module.css';

// Add an alternative method to get values from inputs (using refs)

// const initialUserData = {
//   username: "",
//   age: "",
// };

const MainForm = ({ onUsersDataHandler }) => {

  const userNameRef = useRef();
  const ageRef = useRef();
  // const [userData, setUserData] = useState(initialUserData);

  // const handleInputChange = (input, value) => {
  //   setUserData((prevState) => {
  //     return { ...prevState, [input]: value };
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    // onUsersDataHandler(userData);
    // setUserData(initialUserData);
    onUsersDataHandler({username:userNameRef.current.value, age: ageRef.current.value})
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        // value={userData["username"]}
        id="username"
        type="text"
        required
        ref={userNameRef}
        // onChange={(e) => handleInputChange("username", e.target.value)}
      />
      <label htmlFor="username">User Name</label>
      <input
        // value={userData["age"]}
        id="age"
        type="number"
        required
        ref={ageRef}
        // onChange={(e) => {
        //   handleInputChange("age", e.target.value);
        // }}
      />
      <label htmlFor="age">User Age</label>
      <button>Add User</button>
    </form>
  );
};

export default MainForm;
