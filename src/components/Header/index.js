import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = ({setPiModal}) => {
  
  const handleBtnClick = () => {
    setPiModal(true);
  }
  return (
    <div id="header" className={styles.container}>
        <Link to='/' id={styles['logo']}></Link>
        <button id={styles['pi-popup']} className="font-bold" onClick={handleBtnClick}>FULL PRESCRIBING INFORMATION</button>
    </div>
  );
};
