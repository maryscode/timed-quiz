import styles from "./BackgroundSwirls.module.css";


export const BackgroundSwirls = ({ topOpacity, btmOpacity }) => {
  const opacityTop = {topOpacity}.topOpacity;
  const opacityBtm = {topOpacity}.btmOpacity;
  
  return (
    <div className={styles.background}>
        <div id={styles['bg']}></div>

        <div style={{opacity: opacityTop}} className={styles.topContainer1}>
          <div className={styles.circleA}></div>
          <div className={styles.circleB}></div>          
        </div>
        <div style={{opacity: opacityTop}} className={styles.topContainer2}>
          <div className={styles.circleC}></div>
        </div>

        <div style={{opacity: opacityBtm}}  className={styles.btmContainer1}>
          <div className={styles.circleA}></div>
          <div className={styles.circleB}></div>          
        </div>
        <div style={{opacity: opacityBtm}} className={styles.btmContainer2}>
          <div className={styles.circleC}></div>
        </div>           
    </div>
  ) 
};
