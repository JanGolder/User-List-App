const SingleUser = ({userData,removeSingleUser})=>{

    const removeHandler=()=>{
        removeSingleUser(userData.id)
    }

    return (
        <li onClick={removeHandler}>
            <p>{`${userData.username} (${userData.age} years old)`}</p>
        </li>
    )
}

export default SingleUser;