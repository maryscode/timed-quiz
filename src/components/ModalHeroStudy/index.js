import ReactModal from 'react-modal';
import styles from "./ModalHeroStudy.module.css";
import pg1 from '../../assets/img/HERO_trial_study_design.png';


const ModalHeroStudy = ({modalState, setHeroModal}) => {
    // TO DO: create global modal component/styles w/ ModalPI
    const closePI = () => {
        setHeroModal(false)
    }

    ReactModal.setAppElement('#root');
 
    return (
        <ReactModal 
            id={styles['heroModal']}
            isOpen={modalState}
            parentSelector={() => document.querySelector('#root')}
            overlayClassName={styles.overlay}
            className={styles.content}
        >
            <button id="toggleBtn" className="close" onClick={closePI}>
                <span></span>
                <span></span>
            </button>    

            <div className={styles.scroll}>
                <img src={pg1} alt="HERO trial study design" />
            </div>

        </ReactModal>
    )
}
export { ModalHeroStudy }    