import SingleUser from "./SingleUser";
import classes from './UserList.module.css';

const UsersList = ({ usersData,onRemoveUser }) => {
  return (
    <ul className={classes.userslist}>
      {usersData.map((userData) => (
        <SingleUser key={Math.random()} userData={userData} removeSingleUser={onRemoveUser}/>
      ))}
    </ul>
  );
};

export default UsersList;
