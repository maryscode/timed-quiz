import React, { useState } from 'react';
import { Header, ISIPopup, BackgroundSwirls, ModalPI, ModalHeroStudy } from "../../components";
import styles from "./Container.module.css";

export const Container = ({ children, className, id, hideISI, openISI, footnoteLinks }) => {
  
  const [piModal, setPiModal] = useState(false);
  const [heroModal, setHeroModal] = useState(false);
  
  const handlePiClick = () => {
    setPiModal(true);
  }
  const handleHeroClick = () => {
    setHeroModal(true);
  }  
  
  let ISIstate = openISI ? 'expanded' : null;
  
  return (
    <>
    <BackgroundSwirls topOpacity="0.3" btmOpacity="1" />
      <Header setPiModal={setPiModal} />   

      <div id={id} className={`${styles.container} ` + className}>
          {children}
      </div>

      {footnoteLinks ? (
        <div className={styles.footnoteLinks}>
				  Please see the <span onClick={handleHeroClick}>study design for the HERO trial</span> and ORGOVYX full <span onClick={handlePiClick}>Prescribing Information</span>.
				</div>
      ) : ''}

      {hideISI ? '' : <ISIPopup expanded={ISIstate} setPiModal={setPiModal} />}

      <ModalPI modalState={piModal} setPiModal={setPiModal} />
      <ModalHeroStudy modalState={heroModal} setHeroModal={setHeroModal} />
    </>
  ) 
};
