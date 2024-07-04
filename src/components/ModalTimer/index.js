import React, { useState } from "react";
import ReactModal from 'react-modal';
import { DefaultButton, Timer } from '..'
import styles from "./ModalTimer.module.css";

const ModalTimer = ({onModalClose, onTimerEnd, milliseconds}) => {
    const [showModal, setShowModal] = useState(false);
    const countdownSeconds = milliseconds/1000;

    const timerEnd = () => {
        setShowModal(true)
        onTimerEnd(milliseconds)
    }
    
    const closeModal = () => {
        setShowModal(false);
        onModalClose();
    }

    ReactModal.setAppElement('#root');
 
    return (
        <>
            <div className={styles.countdown}>
                <Timer startTime={countdownSeconds} handleEndTimer={timerEnd} />
            </div>
            <ReactModal 
                isOpen={showModal}
                parentSelector={() => document.querySelector('#root')}
                overlayClassName={styles.overlay}
                className={styles.content}
            >
                <h1>Time's Up!</h1>
                <p className={styles.text}><strong>{countdownSeconds} seconds is up! That went by fast!<br />Check out your score:</strong></p>
                <DefaultButton onClick={closeModal} btnText="CONTINUE" arrow="true" />
            </ReactModal>
        </>
    )
}
export { ModalTimer }    