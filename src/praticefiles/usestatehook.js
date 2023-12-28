import Question from "./Question";
import { useState } from "react";

const Quiz = () => {
  const [state, setstate] = useState({
    currentquestionindex: 0,
    questions: [],
  });

  const testClick = () => {
    console.log("hii");
    setstate({
      currentquestionindex: state.currentquestionindex + 1,
    });
  };

  return (
    <div className="quiz">
      <div className="score">Question 1/8</div>
      <Question />
      <div className="next-button" onClick={testClick}>
        NEXT QUESTION {state.currentquestionindex}
      </div>
    </div>
  );
};

export default Quiz;
