import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ISIPopup, ModalPI, ModalHeroStudy } from "../../components";
import styles from "./Home.module.css";
import bg from '../../assets/img/bg-clock.png';
import logo from '../../assets/img/logo-orgovyx.svg';
import stopwatch from '../../assets/img/timer-97-second.svg';
import lightningBolts from '../../assets/img/lightningbolts.svg';

function Home() {
    const [piModal, setPiModal] = useState(false);
    const [heroModal, setHeroModal] = useState(false);
    
    const handlePiClick = () => {
      setPiModal(true);
    }
    const handleHeroClick = () => {
      setHeroModal(true);
    }     
    return (
        <>
            <img src={bg} id={styles['bg']} alt="bg" />
            <div id={styles['homeScreen']} className="screen">
                <h1 className={styles.heading}>TRIVIA <span>CHALLENGE</span></h1>
                <img src={logo} id={styles['logo']} alt="Orgovyx™ (relugolix) 120mg tablets logo" />
                <img src={stopwatch} id={styles['stopwatch']} alt="97 second stopwatch" />
                <img src={lightningBolts} id={styles['lightningBolts']} alt="lightning bolts" />
                <div className={styles.content}>
                    <p className={styles.intro}>Ready to test your knowledge and race against the clock?<br />
                    <strong className="text-yellow">Time to play the ORGOVYX 97-Second Trivia Challenge!</strong></p>
                    <p>In the HERO study, <span className="text-yellow">ORGOVYX achieved sustained testosterone suppression through 48 weeks in 97% of men.</span> For this game, you will answer questions about advanced prostate cancer and ORGOVYX—all in the span of 97 seconds. Don’t forget to check the leaderboard for the top 10 scores!</p>
                    <p><strong>Please see <span className="text-underline" onClick={handleHeroClick}>study design for HERO trial</span> and ORGOVYX full <span className="text-underline" onClick={handlePiClick}>Prescribing Information</span>.</strong></p>
                    <p><strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.</p>
                </div>
                <div className={styles.btnStart}>Tap the screen to begin.</div> 
                <Link to='/scan' className={styles.startLink1} />
                <Link to='/scan' className={styles.startLink2} />
                
            </div>
            <ISIPopup  setPiModal={setPiModal} />
            <ModalPI modalState={piModal} setPiModal={setPiModal} />
            <ModalHeroStudy modalState={heroModal} setHeroModal={setHeroModal} />
        </>
    )
}

export { Home }