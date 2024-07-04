import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import QrReader from 'react-qr-scanner'
import { Container, DefaultButton } from "../../components";
import styles from "./Scan.module.css";


function Scan(props) {
    
    const [code, setCode] = useState("");

    const setScanResults = (scanResults) => {
      if (!scanResults || (scanResults && !scanResults.text)) {
        return;
      }
  
      let code = scanResults.text.split("|")[1];
      setCode(code);
    };

    let history = useHistory();
    
    useEffect(() => {
      if (!code) return;
      //console.log(code);
     history.push('/loading');  

    }, [code, history]);

    return (
        <Container id={styles['scan']} className="container screen"  hideISI='true'>   
            <h1 className={`${styles.heading} text-yellow`}>SCAN YOUR BADGE</h1>
            <div id={styles["qr-scanner"]}>
              {/* <QrReader
                  delay={300}
                  onError={console.log}
                  onScan={setScanResults}
                  className={styles.qrReader}
              /> */}
              <div className={styles.qrReader}></div>
            </div>
            <div className={styles.content}>
              <p className={`${styles.instructions} font-24`}>Place your badge in the frame above.</p>
              <p className="font-15 mb-10 font-medium">By scanning your badge, you acknowledge that Myovant and Pfizer are sourcing your name and state.<br />Your information may appear on the ORGOVYX 97-Second Trivia Challenge leaderboard along with your score.  You will have the option to opt out of the leaderboard after taking the quiz. Myovant and Pfizer may use this information for marketing purposes, including to send you information and updates about ORGOVYX.</p>
              <p className="font-15 font-medium">The ORGOVYX 97-Second Trivia Challenge can only be played by US conference attendees. </p>
              
              <p className={`mt-20 mb-10 font-24`}>Having trouble?</p>
              <DefaultButton routeTo="/register" btnText="ENTER INFORMATION MANUALLY" arrow="true" />
            </div>  
        </Container>
    )
}

export { Scan }