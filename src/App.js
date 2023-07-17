import { useState } from "react";
import MainForm from "./components/MainForm";
import UsersList from "./components/UsersList";

function App() {
  const [usersData, setUsersData] = useState([]);

  const usersDataHandler = (userData) => {
    setUsersData((prevState)=>{
      return [...prevState, userData]
    })
  };


  return (
    <>
      <MainForm onUsersDataHandler={usersDataHandler} />
      <UsersList usersData={usersData}/>
    </>
  );
}

export default App;
