import styles from './NextButton.module.css';

export const NextButton = ({ question, userPoints, onClick, disabledBtn }) => {
    
    let nextBtnClasses = disabledBtn ? `${styles.nextBtn} ${styles.disabled}` : styles.nextBtn;;
        
    const handleNextBtn = (e) => {

        if (!disabledBtn) {
            let thisBtn =  e.currentTarget,
                questionPoints = 0,
                isCorrect,
                buttons = thisBtn.previousSibling.querySelectorAll('button');

            question.answerOptions.map((answer, index) => {
                return  answer.isCorrect ? questionPoints++ : '';
            })

            // if correct answers length for this question === total clicked  
            if (questionPoints === userPoints){
                isCorrect = true;
            } else {
                isCorrect = false;
            }

            // Clear general 'clicked' styles to reveal correct/incorrect btn colors
            buttons.forEach((button) => {
                button.classList.remove("clicked");
            });
        
            setTimeout(function(){
                onClick(isCorrect);
            }, 500);
            
        } else {
            return;
        }
    }


    return (
        <button 
            className={nextBtnClasses} 
            onClick={(e) => handleNextBtn(e)}
            disabled={disabledBtn}
        >
            NEXT&nbsp;<span className={styles.arrow}>></span>
        </button>
    )
    
}
