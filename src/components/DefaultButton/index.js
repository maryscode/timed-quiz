import { useHistory } from "react-router-dom";
import styles from "./DefaultButton.module.css";

export const DefaultButton = ({btnText, routeTo, onClick, arrow, disabled, bgColor, customClass, btnType, shakeAnimation}) => {
    let history = useHistory();
    const handleButtonClick = () => {
        if (onClick) {
            onClick();
        } 
        if (routeTo) {
            history.push(routeTo)
        }
    }
    
    return (
        <button 
            type={btnType ? btnType : 'button'}
            className={`${customClass} ${styles.btn} ${shakeAnimation ? styles.shake : ''}`}
            
            style={bgColor ? {backgroundColor: bgColor} : {} }
            
            onClick={handleButtonClick} 
            disabled={disabled ? true : false}
        >
            {btnText}{arrow ? ( <span className='arrow'>&gt;</span> ) : ''}
        </button>
    )
}
