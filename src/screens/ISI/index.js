import React from "react";
import { Container, DefaultButton } from "../../components";
import styles from "./Isi.module.css";

function ISI(props) {
    const userInfo  = (props.location && props.location.state) || {};

    const handleBtnClick = () => {
        props.history.push({
            pathname: '/instructions', 
            state: userInfo
        });           
    }

    return (
        <>
            <Container openISI userInfo={userInfo} /> 
            <DefaultButton customClass={styles.continueBtn} onClick={handleBtnClick} btnText="CONTINUE" arrow="true" />
        </>
    )
}

export { ISI }