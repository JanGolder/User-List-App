import SingleUser from "./SingleUser";

const UsersList = ({ usersData }) => {
  return (
    <ul>
      {usersData.map((userData) => (
        <SingleUser key={Math.random()} userData={userData} />
      ))}
    </ul>
  );
};

export default UsersList;
