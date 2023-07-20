import classes from './ValidationInfo.module.css';

const ValidationInfo = ({onCloseHandler})=>{

    return (
        <div onClick={onCloseHandler} className={classes['module-wrap']}>
            <div className={classes.backdrop}></div>
            <div className={classes.module}>
                <p>Username is too short or you are too young to subscribe.</p>
                <button onClick={onCloseHandler}>Close</button>
            </div>
        </div>
    )
}

export default ValidationInfo;
