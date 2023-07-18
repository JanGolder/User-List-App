import { useState } from "react";
import MainForm from "./components/MainForm";
import UsersList from "./components/UsersList";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const usersDataHandler = (userData) => {
    if (userData.username.length < 3 || userData.age < 10) {
      console.log("Username is too short or you are too young to subscribe");
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      setUsersData((prevState) => {
        return [...prevState, userData];
      });
    }
  };

  return (
    <>
      <MainForm onUsersDataHandler={usersDataHandler} />
      <UsersList usersData={usersData} />
      {/* MODAL */}
    </>
  );
}

export default App;
