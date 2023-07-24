import { useState } from "react";
import MainForm from "./components/MainForm";
import UsersList from "./components/UsersList";
import ValidationInfo from "./components/ValidationInfo";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const usersDataHandler = (userData) => {
    
    if (userData.username.length < 3 || userData.age < 10) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      setUsersData((prevState) => {
        return [...prevState, {id: Math.random(), username: userData.username, age: userData.age}];
      });
    }
  };

  const closeValidHandler = ()=>{
    setIsValid(true);
  }

  const removeSingleUser = (userId)=>{
    const newUserList = usersData.filter(user=>user.id !== userId);
    setUsersData(newUserList)

  }

  return (
    <>
      <MainForm onUsersDataHandler={usersDataHandler} />
      <UsersList usersData={usersData} onRemoveUser={removeSingleUser}/>
      {isValid || <ValidationInfo onCloseHandler={closeValidHandler}/>}
    </>
  );
}

export default App;
