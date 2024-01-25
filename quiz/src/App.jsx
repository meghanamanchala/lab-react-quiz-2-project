// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import questionData from './resources/quizQuestion.json'
import "./App.css";
const Quiz =()=> {
  const[currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questionData[currentQuestionIndex];
 const handlePrevious =() =>{
    if (currentQuestionIndex >0){
        setCurrentQuestionIndex(currentQuestionIndex-1);
      }
 }
 const handleNext=()=>{
    if(currentQuestionIndex<questionData.length-1){
      setCurrentQuestionIndex(currentQuestionIndex+1);
    }
  };

  const handleQuit=()=>{
    const confirmQuit=window.confirm("Do you really want to quit?");

    if(confirmQuit){
      setCurrentQuestionIndex(0);
    }
  }
 
    return (
      <>
        <div className="main-container">
          <div className="heading">
            <h1 className="heading-quiz">Question</h1>
          </div>
          <h3 className="number-count">{`${currentQuestionIndex+1} of ${questionData.length}`}</h3>
          <div className="question">
            <p className="para-question">{`${currentQuestion.question}`}</p>
          </div>
          <div className="optionsbtn-quiz">
            <div className="first-box">
            <button  className="option-1">{`${currentQuestion.optionA}`}</button>
            <button className="option-2">{`${currentQuestion.optionC}`}</button>
            </div>
            <div className="second-box">
            <button  className="option-3">{`${currentQuestion.optionC}`}</button>
            <button  className="option-4">{`${currentQuestion.optionD}`}</button>
            </div>
          </div>
          <div className="prev-next-quit-btns">
            <button className="prev" onClick={handlePrevious}>Previous</button>
            <button className="nxt"onClick={handleNext}>Next</button>
            <button  className="quit"onClick={handleQuit}>Quit</button>
          </div>
        </div>
      </>
    );
  }


export default Quiz;