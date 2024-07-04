// import React, { useEffect } from 'react';

import { AnswerButton } from '../../components'
import styles from './Answers.module.css';



export const Answers = ( {baseKey, question, answerBtnClick, answerList, disableBtn, setDisableBtn, setEnableNextBtn } ) => { 
    

    // Answer Button click
    const handleClick = (e, isCorrect, selected) => {
        answerBtnClick(isCorrect, selected);
        let thisBtn = e.currentTarget,
            clickedBtns = thisBtn.parentNode.parentNode.querySelectorAll('.clicked').length;

            if (clickedBtns > 0) {
                setEnableNextBtn(true)
            } else {
                setEnableNextBtn(false)
            }
        
    } 
    let questionStyle = question.answerType;
    let answerLayout = question.answerLayout;
    let btnSize = question.buttonSize;
    let btnTextAlign = question.buttonTextAlign;
    let answerBtnStyles = '';

    if (questionStyle === "multiAnswer"){
        answerBtnStyles += ' delayReveal';
    } 


    return (
        
        <div id={styles[questionStyle]} className={`${styles[answerLayout]} ${styles[btnSize]} ${styles[btnTextAlign]} ${answerBtnStyles}`}>
                {answerList.map((answer, index) => (
                    
                    <AnswerButton 
                        question={question} 
                        answer={answer} 
                        onClick={handleClick}
                        key={`q-${baseKey}-${index}`}
                        setDisableBtn={setDisableBtn}
                        disableBtn={disableBtn}
                        index={index}
                    />
                    
                ))}
            
        </div>

    )
}
