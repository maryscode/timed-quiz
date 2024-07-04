import React from "react";
import { Container, DefaultButton } from "../../components";
import styles from "./Instructions.module.css";



function Instructions(props) {
    const userInfo  = (props.location && props.location.state) || {};

    const handleBtnClick = () => {
        props.history.push({
            pathname: '/countdown', 
            state: userInfo
        });           
    }    
        
    return (
        <Container id={styles.instructions}>
            <div className={styles.content}>
                <h1 className="text-yellow">Welcome</h1>
                <div className={styles.box}>
                    
                    <h2 className="font-bold">Instructions</h2>
                    <ol>
                        <li><div>1.</div> <span>Get ready to answer as many questions as you can in 97 seconds</span></li>
                        <li><div>2.</div> <span>Questions will be presented one at a time—you have one shot <br />to select the right answer</span></li>
                        <li><div>3.</div> <span>Review your score and correct answers</span></li>
                        <li><div>4.</div> <span>Check the leaderboard for the top 10 scores!</span></li>
                    </ol>
                    <DefaultButton btnText="START GAME" onClick={handleBtnClick} bgColor="#ffffff" />
                </div>
            </div>
            
            
        </Container>
    )
}
export { Instructions }
