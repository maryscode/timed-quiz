import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";


export const CorrectAnswers = ({totalCorrect, questions, userAnswers}) => {
    const toggleAnswer = (e) => {

        let thisIcon = e.currentTarget;
        let thisQuestion = thisIcon.parentNode;
        let thisAnswer = thisQuestion.querySelector('ul');
        
        if (thisAnswer.className === "hide") {
            thisIcon.children[0].classList.add("show");
            thisIcon.children[1].classList.add("hide");
            thisAnswer.className = "show";
            thisQuestion.style.backgroundColor = '#D8D8D8';

        } else if (thisAnswer.className === "show") {
            thisIcon.children[0].classList.remove("show");
            thisIcon.children[1].classList.remove("hide");
            thisAnswer.className = "hide";
            thisQuestion.style.backgroundColor = 'transparent';
        }        
    }


  return (
    <div className={styles.correctAnswersSection}>
        <h1>Thank you for participating!</h1>
        <p className='mb-40'>For more information, please speak with an ORGOVYX sales representative or visit orgovyxhcp.com.</p>
        <p className='text-indent'>See below for the full list of the ORGOVYX 97-Second Trivia Challenge questions, including the correct answers.</p>

        <div id={styles['questionsAnswers']}>
            <div className={styles.qaContainer}>
                <div>
                    {questions.map((question, index1) => {
                        let count = index1 + 1;
                        return (
                            <div className={styles.questionPanel} key={`answer-${index1}`}>
                                <h5 className={`${userAnswers[index1] ? styles.correct : styles.incorrect}`}>
                                   <span className="quesetionNumber">{count}.</span> <span dangerouslySetInnerHTML={{__html: question.questionText}}></span>
                                </h5>
                                <ul className="hide">
                                    {question.answerOptions.map((answer, index2) => {
                                        if (answer.isCorrect){
                                            return (
                                                <li key={`answer-${index1}-${index2}`}  className={`${userAnswers[index1] ? styles.correct : styles.incorrect}`}>
                                                    Correct Answer: <span dangerouslySetInnerHTML={{__html: answer.answerText}}></span>
                                                </li>
                                            )
                                        } else {
                                            return false
                                        }
                                    })}											
                                </ul>
                                <div className={styles.toggleIcon} onClick={(e) => toggleAnswer(e)}>
                                    <div className={`${styles.closeIcon}`}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className={`${styles.plusIcon}`}>+</div>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
        <Link to="/" className={styles.homeBtn}>Press the home button to play again and try to beat your previous score!</Link>		
        
    </div>   
  );
};