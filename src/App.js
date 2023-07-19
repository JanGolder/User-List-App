import { useState } from "react";
import MainForm from "./components/MainForm";
import UsersList from "./components/UsersList";
import ValidationInfo from "./components/ValidationInfo";

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

  const closeValidHandler = ()=>{
    setIsValid(true);
  }

console.log(isValid)

  return (
    <>
      <MainForm onUsersDataHandler={usersDataHandler} />
      <UsersList usersData={usersData} />
      {isValid || <ValidationInfo onCloseHandler={closeValidHandler}/>}
    </>
  );
}

export default App;
