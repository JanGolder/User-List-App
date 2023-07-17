const SingleUser = ({userData})=>{

    return (
        <li>
            <p>{`${userData.username} (${userData.age} years old)`}</p>
        </li>
    )
}

export default SingleUser;