import React, { useState } from "react";
import Start from "./components/Start";
import styles from ".././src/styles/Start.module.css";
import stylesApp from "./App.module.css";

export default function App() {
  const questions = [
    {
      questionText: "Which is Worlds Best Company?",
      answerOptions: [
        { answerText: "Upraised", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
        { answerText: "Facebook", isCorrect: false },
        { answerText: "Google", isCorrect: false },
      ],
    },

    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "Bangalore", isCorrect: false },
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Kolkata", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Google?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Sundar Pichai", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "Who is Founder of CRED?",
      answerOptions: [
        { answerText: "Kunal Shah", isCorrect: true },
        { answerText: "Jay Kapoor", isCorrect: false },
        { answerText: "Aman Singh", isCorrect: false },
        { answerText: "Martin Louis", isCorrect: false },
      ],
    },

    {
      questionText: "Who is Non Indian",
      answerOptions: [
        { answerText: "Virat Kohli", isCorrect: true },
        { answerText: "Rohit Sharma", isCorrect: false },
        { answerText: "Dinesh Kartik", isCorrect: false },
        { answerText: "Martin Guptill", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  let percentage = (score / questions.length) * 100;
  let correct = score;
  let incorrect = questions.length - score;
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="app">
      {showScore ? (
        <div className={stylesApp.question_container}>
          <div className={stylesApp.question_container1}></div>

          <div className={stylesApp.question_container2}>
            <div className={stylesApp.score_section}>
              <h1>Your Result</h1>
              <div className={stylesApp.percent_box}>{percentage}%</div>
              {/* You scored {score} out of {questions.length} */}
              <div className={stylesApp.correct_container}>
                {correct} correct
              </div>
              <div className={stylesApp.incorrect_container}>
                {incorrect} Incorrect
              </div>
              <button className={stylesApp.btn_last} onClick={refreshPage}>
                Start Again
              </button>
            </div>
          </div>
        </div>
      ) : start ? (
        <div className={styles.start_container}>
          <img
            src={require("./assets/logo.png")}
            className={styles.logo_img}
          ></img>

          <img
            src={require("./assets/quiz.png")}
            className={styles.quiz_img}
          ></img>
          <button
            className={styles.btn}
            onClick={() => {
              setStart(false);
            }}
          >
            Start
          </button>
        </div>
      ) : (
        <div className={stylesApp.question_container}>
          <div className={stylesApp.question_container1}>
            {/* <h1>Top</h1> */}
          </div>

          <div className={stylesApp.question_container2}>
            <div className={stylesApp.question_container_sub}>
              {/* <div className="question-section"> */}
              <div className={stylesApp.question_count}>
                <span className={stylesApp.number}>
                  {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className={stylesApp.question_text}>
                {questions[currentQuestion].questionText}
              </div>
              {/* </div> */}
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className={stylesApp.option}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* <div className={stylesApp.questions_screen}> */}
          {/* <div>
              <h1>Questions</h1>
            </div> */}
          {/* <div>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div> */}
          {/* </div> */}
        </div>
      )}
    </div>
  );
}
