const ValidationInfo = ({onCloseHandler})=>{

    return (
        <div>
            <div></div>
            <div>
                <p>Username is too short or you are too young to subscribe.</p>
                <button onClick={onCloseHandler}>Close</button>
            </div>
        </div>
    )
}

export default ValidationInfo;
