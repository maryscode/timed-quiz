import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./ISIPopup.module.css";
import "./ISIPopup.css";
import myovantLogo from '../../assets/img/logo-myovant.svg';
import pfizerLogo from '../../assets/img/logo-pfizer.svg';

export const ISIPopup = ({expanded, setPiModal}) => {
  const [expand, setExpand] = useState(false);
  
  let loadStatus = expanded ? true : false;

  useEffect(() => { 
      setExpand(loadStatus)
  }, [loadStatus]) 
	  
  const toggleIsi = () => {
    if (expand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  }
  const openPiModal = () => {
    setPiModal(true);
  }  

  return (
    <div id="isiComponent">
      <div id="isiContainer" className={`${expand ? 'expanded' : ''}`}>
  
      { !loadStatus ? (
        <button id="toggleBtn" onClick={toggleIsi}>
          <span></span>
          <span></span>
        </button>
      ) : ''}
        
        { expand ? (
            <>
              <h2 className={styles.heading}>indication and important safety information</h2>
              <div className="flexContainer">
                <div className={styles.col1}>
                  <h3>INDICATION</h3>
                  <p>ORGOVYX is a gonadotropin-releasing hormone (GnRH) receptor antagonist indicated for the treatment of adult patients with advanced prostate cancer.</p>

                  <h3>IMPORTANT SAFETY INFORMATION</h3>
                  <h4 className="mt-0">Warnings and Precautions</h4>

                  <p><strong>QT/QTc Interval Prolongation:</strong> Androgen deprivation therapy, such as ORGOVYX may prolong the QT/QTc interval. Providers should consider whether the benefits of androgen deprivation therapy outweigh the potential risks in patients with congenital long QT syndrome, congestive heart failure, or frequent electrolyte abnormalities and in patients taking drugs known to prolong  the QT interval. Electrolyte abnormalities should be corrected. Consider periodic monitoring of electrocardiograms and electrolytes.</p>

                  <p><strong>Embryo-Fetal Toxicity:</strong> The safety and efficacy of ORGOVYX have not been established in females. Based on findings in animals and mechanism of action, ORGOVYX can cause fetal harm and loss of pregnancy when administered to a pregnant female. Advise males with female partners of reproductive potential to use effective contraception during treatment and for 2 weeks after the last dose of ORGOVYX</p>

                  <p><strong>Laboratory Testing:</strong> Therapy with ORGOVYX results in suppression of the pituitary gonadal system. Results of diagnostic tests of the pituitary gonadotropic and gonadal functions conducted during and after ORGOVYX may be affected. The therapeutic effect of ORGOVYX should be monitored by measuring serum concentrations of prostate-specific antigen (PSA) periodically. If PSA increases, serum concentrations of testosterone should be measured.</p>

                  <h4>Adverse Reactions</h4>
                  <p><strong>Serious adverse reactions</strong> occurred in 12% of patients receiving ORGOVYX. Serious adverse reactions in ≥0.5% of patients included myocardial infarction (0.8%), acute kidney injury (0.6%), arrhythmia (0.6%), hemorrhage (0.6%), and urinary tract infection (0.5%). </p>
                </div>
                <div className={styles.col2}>
                  <div>
                    <p>Fatal adverse reactions occurred in 0.8% of patients receiving ORGOVYX including metastatic lung cancer (0.3%), myocardial infarction (0.3%), and acute kidney injury (0.2%). Fatal and non-fatal myocardial infarction and stroke were reported in 2.7% of patients receiving ORGOVYX.</p>
                    <p><strong>Most common adverse reactions (≥10%) and laboratory abnormalities (≥15%)</strong> in patients receiving ORGOVYX were hot flush (54%), glucose increased (44%), triglycerides increased (35%), musculoskeletal pain (30%), hemoglobin decreased (28%), alanine aminotransferase increased (27%), fatigue (26%), aspartate aminotransferase increased (18%), constipation (12%), and diarrhea (12%).</p>
                    <h4>Drug Interactions</h4>
                    <p><strong>Co-administration of ORGOVYX with a P-gp inhibitor</strong> increases the area under the curve (AUC) and maximum concentration (C<sub>max</sub>) of ORGOVYX, which may increase the risk of adverse reactions associated with ORGOVYX. Avoid co-administration of ORGOVYX with oral P-gp inhibitors. If co-administration is unavoidable, take ORGOVYX first, separate dosing by at least 6 hours, and monitor patients more frequently for adverse reactions. Treatment with ORGOVYX may be interrupted for up to 2 weeks for a short course of treatment with certain P-gp inhibitors. If treatment with ORGOVYX is interrupted for more than 7 days, resume administration of ORGOVYX with a 360 mg loading dose on the first day, followed by 120 mg once daily.</p>
                    <p><strong>Co-administration of ORGOVYX with a combined P-gp and strong CYP3A inducer</strong> decreases the AUC and C<sub>max</sub> of ORGOVYX, which may reduce the effects of ORGOVYX. Avoid co-administration of ORGOVYX with combined P-gp and strong CYP3A inducers. If co-administration is unavoidable, increase the ORGOVYX dose to 240 mg once daily. After discontinuation of the combined P-gp and strong CYP3A inducer, resume the recommended ORGOVYX dose of 120 mg once daily.</p>                    
                  </div>
                  <p><strong>Please see full <span className="text-underline" onClick={openPiModal}>Prescribing Information</span> for ORGOVYX.</strong></p>
                </div>
              </div>
              <div className={styles.isiFooter}>
                
                  <div className={styles.logoContainer}>
                    <img src={myovantLogo} className={styles.logoMyovant} alt="Myovant Logo" />
                    <img src={pfizerLogo} className={styles.logoPfizer} alt="Pfizer Logo" />
                  </div>
                  <div className={styles.copyright}>
                  ORGOVYX&reg; and its associated logo are registered trademarks of Myovant Sciences GmbH.<br /> 
                  &copy;2021 Myovant Sciences GmbH and Pfizer Inc. All rights reserved. <br />
                  PP-US-REL-2100245 09/21
                  </div>                  
              </div>
            </>
          ) : (
            <>
            <div id={styles['collapsedContainer']} className="flexContainer">
              <div className={styles.col1}>
                <h3>INDICATION</h3>
                <p>ORGOVYX is a gonadotropin-releasing hormone (GnRH) receptor antagonist indicated for the treatment of adult patients with advanced prostate cancer.</p>
              </div>
              <div className={styles.col2}>
                <h3>IMPORTANT SAFETY INFORMATION</h3>
                <h4 className="mt-0">Warnings and Precautions</h4>
                <p><strong>QT/QTc Interval Prolongation:</strong> Androgen deprivation therapy, such as ORGOVYX may prolong the QT/QTc interval. Providers should consider whether the benefits of androgen deprivation therapy outweigh the potential risks in patients with congenital long QT syndrome, congestive heart failure, or frequent electrolyte abnormalities and in patients taking drugs known to prolong  the QT interval. Electrolyte abnormalities should be corrected. Consider periodic monitoring of electrocardiograms and electrolytes.</p>
              </div>
              </div>
            </>
          )}
          <Link to="/isi-popup" id='isi-expand'></Link>
      </div>
    </div>
  );
};
