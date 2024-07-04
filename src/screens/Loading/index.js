import React from "react";
import { Container, Timer } from "../../components";
import styles from "./Loading.module.css";

function Loading(props) {
    const userInfo  = (props.location && props.location.state) || {};
    
    console.log('loading userInfo: ', userInfo);

    const nextPage = () => {    
        props.history.push({
            pathname: '/isi', 
            state: userInfo
        });    
    }
    
    return (
        <Container hideISI='true'>
            <div className={styles.stopwatch}>
                <div className={styles.hide}><Timer startTime='2' handleEndTimer={nextPage} /> </div>
                <div className={styles.minhandContainer}><span></span></div>
                <div className={styles.hrhandContainer}><span></span></div>
            </div>
            <h1 className={`${styles.heading} text-yellow`}>LOADING ...</h1> 
        </Container>
        
    )
}
 
export { Loading }