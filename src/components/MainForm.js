import { useState } from "react";

const MainForm = ({onUsersDataHandler}) => {
  const [userData, setUserData] = useState({});

  const handleInputChange = (input, value) => {
    setUserData((prevState) => {
      return { ...prevState, [input]: value };
    });
  };

const submitHandler =(e)=>{
    e.preventDefault();
    onUsersDataHandler(userData)
}

  return (
    <form onSubmit={submitHandler}>
      <input
        id="username"
        type="text"
        required
        onChange={(e) => handleInputChange("username", e.target.value)}
      />
      <label htmlFor="username">User Name</label>
      <input
        id="age"
        type="number"
        required
        onChange={(e) => {
          handleInputChange("age", e.target.value);
        }}
      />
      <label htmlFor="age">User Age</label>
      <button>Add User</button>
    </form>
  );
};

export default MainForm;
