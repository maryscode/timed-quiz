import ReactModal from 'react-modal';
import styles from "./ModalPI.module.css";
import pg1 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_01.png';
import pg2 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_02.png';
import pg3 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_03.png';
import pg4 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_04.png';
import pg5 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_05.png';
import pg6 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_06.png';
import pg7 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_07.png';
import pg8 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_08.png';
import pg9 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_09.png';
import pg10 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_10.png';
import pg11 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_11.png';
import pg12 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_12.png';
import pg13 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_13.png';
import pg14 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_14.png';
import pg15 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_15.png';
import pg16 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_16.png';
import pg17 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_17.png';
import pg18 from '../../assets/img/NDA-214621-Final-USPIandPI_Page_18.png';

const ModalPI = ({modalState, setPiModal}) => {
    // TO DO: create global modal component/styles w/ ModalHeroStudy
    const closePI = () => {
        setPiModal(false)
    }

    ReactModal.setAppElement('#root');
 
    return (
        <ReactModal 
            id={styles['piModal']}
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
                <img src={pg1} alt="Full Prescribing Information Page 1" />
                <img src={pg2} alt="Full Prescribing Information Page 2" />
                <img src={pg3} alt="Full Prescribing Information Page 3" />
                <img src={pg4} alt="Full Prescribing Information Page 4" />
                <img src={pg5} alt="Full Prescribing Information Page 5" />
                <img src={pg6} alt="Full Prescribing Information Page 6" />
                <img src={pg7} alt="Full Prescribing Information Page 7" />
                <img src={pg8} alt="Full Prescribing Information Page 8" />
                <img src={pg9} alt="Full Prescribing Information Page 9" />
                <img src={pg10} alt="Full Prescribing Information Page 10" />
                <img src={pg11} alt="Full Prescribing Information Page 11" />
                <img src={pg12} alt="Full Prescribing Information Page 12" />
                <img src={pg13} alt="Full Prescribing Information Page 13" />
                <img src={pg14} alt="Full Prescribing Information Page 14" />
                <img src={pg15} alt="Full Prescribing Information Page 15" />
                <img src={pg16} alt="Full Prescribing Information Page 16" />
                <img src={pg17} alt="Full Prescribing Information Page 17" />
                <img src={pg18} alt="Full Prescribing Information Page 18" />
            </div>

        </ReactModal>
    )
}
export { ModalPI }    