import React, { useState } from 'react';
import { CorrectAnswers } from "./CorrectAnswers";
import { DefaultButton } from "../../components";
import styles from "./Quiz.module.css";

export const Score = ({ totalCorrect, questions, userAnswers, setHideIsi, duration, setFootnoteLinks, userInfo }) => {
    const [checkAnswers, setCheckAnswers] = useState(false);
    const timeStamp = Date.now();

    userInfo.score = totalCorrect;
    userInfo.time = duration;
    userInfo.lastModified = timeStamp;

    
    const secondsPassed = Math.floor(duration / 1000);
    
    const handleYesClick = () => {
        setHideIsi(false);
        setCheckAnswers(true);
        setFootnoteLinks(true);
        
        // TO DO: Post userInfo to Leaderboard
        // console.log(userInfo);
    }
    const handleNoClick = () => {
        setHideIsi(false);
        setCheckAnswers(true);
        setFootnoteLinks(true);
    }

    
    
  return (
    <div className={styles.scoreSection}>
        
        { checkAnswers ? 
            <CorrectAnswers totalCorrect={totalCorrect} questions={questions} userAnswers={userAnswers} />
            : (
                <>
                    <h1 className={styles.headingCongrats}>Congratulations!</h1>
                    <p>You’ve completed the ORGOVYX 97-Second Trivia Challenge. </p>
                    <p><strong className="text-yellow">Check out your score below:</strong></p>

                    <div className={styles.scoreContainer}>
                        <div className={`${styles.yourScore} text-ltblue font-livesource`}><span>Your</span> Score</div>
                        
                        <div className={`${styles.scoreText} text-yellow font-livesource`}>
                            <div style={{left: "0", top: "0"}}>{totalCorrect} <span>CORRECT</span></div>
                            <div style={{right: "-10px", top: "80px"}} className={styles.fractionLine}></div>
                            <div style={{left: "100px", bottom: "0"}}>{questions.length}</div>
                        </div>
                        
                        <div className={`${styles.secondsText} text-ltblue font-livesource`}><strong>IN {secondsPassed}<br />SECONDS!</strong></div>
                    </div>

                    <p style={{fontSize: "23px", margin: "0"}} className="text-white font-medium">Do you want to see how you compare and have<br /> your score be displayed on the leaderboard? </p>
                    <div className={styles.btnContainer}>
                        <DefaultButton btnText="YES!" onClick={handleYesClick} />
                        <DefaultButton btnText="NO" onClick={handleNoClick} />
                    </div>
                </>
            )}
    </div>
  );
};