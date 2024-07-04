import styles from './AnswerButton.module.css';

export const AnswerButton = ({question, answer, onClick, disableBtn, setDisableBtn, index }) => {
    let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const handleClick = (e, isCorrect) => {
       
        let thisBtn =  e.currentTarget;

        // Add click classes
        if ( thisBtn.classList.contains('clicked') ){ // unclick button
            thisBtn.className = ''; // clear classes
            onClick(e, isCorrect, false);
        } else {
            thisBtn.classList.add('clicked') // click new button
            isCorrect ? thisBtn.classList.add("correct") :  thisBtn.classList.add("incorrect")
            onClick(e, isCorrect, true);
        }        
    }

        return (
            <div className={styles.btn}>
                <button
                    onClick={(e) => handleClick(e, answer.isCorrect)}
                    disabled={disableBtn}
                
                >
                    <span>
                        <span className='font-livesource'>{alpha[index]}.&nbsp;</span>
                        <span dangerouslySetInnerHTML={{__html: answer.answerText}}></span>
                    </span>
                </button>
            </div>
        )
    
}
