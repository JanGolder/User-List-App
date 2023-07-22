import ReactDOM from 'react-dom';
import classes from './ValidationInfo.module.css';

const ValidationInfo = ({onCloseHandler})=>{


const ValidationModal = ({onClick})=>{
    return (
        <div onClick={onClick} className={classes['module-wrap']}>
        <div className={classes.backdrop}></div>
        <div className={classes.module}>
            <p>Username is too short or you are too young to subscribe.</p>
            <button onClick={onClick}>Close</button>
        </div>
    </div>
    )
}

    return (
        ReactDOM.createPortal(<ValidationModal  onClick={onCloseHandler} />, document.querySelector('#root-overlay'))
    )
}

export default ValidationInfo;
