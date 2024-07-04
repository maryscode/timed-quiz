import React, { useState, useEffect } from 'react';
import { questions }  from "../../data/questions";
import { Container, Answers, ModalTimer, NextButton } from "../../components";
import { Score } from "./Score";
import styles from './Quiz.module.css';

function Quiz(props) {
	const userInfo  = (props.location && props.location.state) || {};
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [totalCorrect, setTotalCorrect] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]); // All user answers saved in array
	const [userPoints, setUserPoints] = useState(0); // Keeps track of multiple choice points. Resets per question
	const [finishQuiz, setFinishQuiz] = useState(false);
	const [answerList, setAnswerList] = useState([]);
	const [disableBtn, setdisableBtn] = useState(false);
	const [hideIsi, setHideIsi] = useState(false);
	const [footnoteLinks, setFootnoteLinks] = useState(false);
	const [duration, setDuration] = useState(0);
	const [enableNextBtn, setEnableNextBtn] = useState(false);
	let isMultiChoice = (questions[currentQuestion].answerType === "multiAnswer") ? true : false;
	const nextQuestion = currentQuestion + 1;

	let progressDecimal = nextQuestion/questions.length,
	    progressPercent = (progressDecimal*100) + "%";
	
	const progressStatus = {
		width: progressPercent
	};
		
	function getStartTime(){
		const startTime = Date.now();
		setDuration(startTime);
	}
	
	function getTimeStamp(){	
		const timePassed = Date.now() - duration;
		setDuration(timePassed);
		// const secondsPassed = Math.floor(timePassed / 1000);
		// setDuration(secondsPassed);
	}

	function saveAnswers(isCorrect){
		let updatedAnswerList = []
		if(isCorrect){
			updatedAnswerList = [...userAnswers, 1]
            setUserAnswers(updatedAnswerList);
			let newTotal = totalCorrect + 1;
			setTotalCorrect(newTotal);
		} else {
            updatedAnswerList = [...userAnswers, 0]
            setUserAnswers(updatedAnswerList);
        }
	}



	function goToNextQuestion(isCorrect){
		setUserPoints(0)
		setdisableBtn(false)
		setEnableNextBtn(false);
		saveAnswers(isCorrect);

		if (nextQuestion < questions.length ){
			setCurrentQuestion(nextQuestion);
			setFootnoteLinks((questions[nextQuestion].heroStudyDesign));
			shuffleAnswers(questions[nextQuestion]);
		} else {
			// FINISH QUIZ
			setFinishQuiz(true);
			setHideIsi(true);
			setFootnoteLinks(false);
			getTimeStamp();
			
		}
	}

	
	function answerBtnClick(isCorrect, selected){
        if(isMultiChoice){
			setEnableNextBtn(true);

			// MULTIPLE CHOICE: if button is selected and correct || button is unselected and it wasn't correct
			if ( (selected && isCorrect) || (!selected && !isCorrect) ) {
				setUserPoints(userPoints + 1)	
			} else {
				setUserPoints(userPoints - 1)	
			}

       } else {
			setdisableBtn(true)
			setTimeout(function(){
				goToNextQuestion(isCorrect);
			}, 500)  
	   }
	}

	const modalTimerClose = () => {
        setFinishQuiz(true);
        setHideIsi(true);
		setFootnoteLinks(false);
	}
		
	const shuffleAnswers = (currentQuestion) => {
		let answerList = [];	
		const shuffle = (array) => { // Fisher Yates Shuffle  
			for (let i = array.length -1; i > 0; i--) {
				let j = Math.floor(Math.random() * i)
				let k = array[i]
				array[i] = array[j]
				array[j] = k
			} 
		}
		// Copy over answers in array
		currentQuestion.answerOptions.map((answer) => {
		   return answerList = [...answerList, answer]
		})		
		
		if (currentQuestion.answerType !== "boolean") {
			shuffle(answerList)
		} 
		setAnswerList(answerList)
	}


	let nextButton;

	if (enableNextBtn) {
		nextButton = <NextButton question={questions[currentQuestion]} userPoints={userPoints} onClick={goToNextQuestion} />;
	  } else {
		nextButton = <NextButton disabledBtn />;
	}

	useEffect(() => { /* Shuffle only once on load */
		shuffleAnswers(questions[0]);
		setFootnoteLinks((questions[0].heroStudyDesign));
		getStartTime();
	}, []) 	

	return (
		<Container id={styles['quiz']} className={styles.screen} hideISI={hideIsi} footnoteLinks={footnoteLinks}>

			{finishQuiz ? (
				
				<Score 
					userInfo={userInfo}
					totalCorrect={totalCorrect} 
					questions={questions} 
					userAnswers={userAnswers}
					setHideIsi={setHideIsi}
					duration={duration}
					setFootnoteLinks={setFootnoteLinks}
				 />
				
			) : (
				<>
				
					<div id={styles['progressContainer']}>
						<div id={styles['progressBg']}>
							<div id={styles['progressBar']} style={progressStatus}></div>
							<div id={styles['progressCount']}> {currentQuestion + 1 }/{questions.length}</div>
						</div>
						<div id={styles['stopwatch']}>
							<div id={styles['timer']}>
								<ModalTimer
									onTimerEnd={setDuration}
									onModalClose={modalTimerClose}
									milliseconds='97000'
								/>
							</div>
						</div>
					</div>

					<div 
						id={styles[questions[currentQuestion].answerType]} 
						className={`${styles.questionSection} ${questions[currentQuestion].customClass ? questions[currentQuestion].customClass : ''}`}
					>
						<div className={`${styles.questionText}`}>
							<span className={styles.number}>{currentQuestion + 1 }.&nbsp;</span>
							<div dangerouslySetInnerHTML={{__html: questions[currentQuestion].questionText}}></div>
							{ isMultiChoice ? (
								<div className="font-regular">(SELECT ALL THAT APPLY AND HIT “NEXT”)</div>
							) : '' }
						</div>
						<div className={styles.ref} dangerouslySetInnerHTML={{__html: questions[currentQuestion].ref}}></div>
					</div>

					<div className={styles.answerSection}>
						<Answers 
							question={questions[currentQuestion]} 
							answerBtnClick={answerBtnClick} 
							userAnswers={userAnswers}
							setUserAnswers={setUserAnswers}
							baseKey={currentQuestion}
							answerList={answerList}
							disableBtn={disableBtn}
							setdisableBtn={setdisableBtn}
							setEnableNextBtn={setEnableNextBtn}
						 />
						
					</div>
					
					{ isMultiChoice ? nextButton : '' }					
				</>
			)}
			
		</Container>
	);
}

export { Quiz }