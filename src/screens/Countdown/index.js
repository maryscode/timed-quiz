import { Container, Timer } from "../../components";
import styles from "./Countdown.module.css";


function Countdown(props) {
    const userInfo  = (props.location && props.location.state) || {};
    const startQuiz = () => {
        props.history.push({
            pathname: '/quiz', 
            state: userInfo
        });           
    }

    return (
        <Container>
            <div className={styles.glow}>
                <h1 className={styles.heading}>begin in</h1> 
                <span className={styles.numbers}>
                    <Timer 
                        startTime='3' 
                        handleEndTimer={startQuiz}
                    />
                </span>
            </div>
        </Container>
    )
}
export { Countdown }
