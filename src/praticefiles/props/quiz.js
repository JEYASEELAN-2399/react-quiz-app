import Question from "./Question";
import { useReducer } from "react";

const initialState = {
  currentquestionindex: 0,
  questions: [],
};

const reducer = (state, action) => {
  if (action.type === "NEXT QUESTION") {
    return {
      currentquestionindex: state.currentquestionindex + 1,
    };
  }
  return state;
};

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const testClick = () => {
    console.log(state)
    
    dispatch({
      type: "NEXT QUESTION",
    });
  };

  return (
    <div className="quiz">
      <div className="score">Question 1/8</div>
      <Question Questions={state.questions}/>
      <div className="next-button" onClick={testClick}>
        NEXT QUESTION {state.currentquestionindex}
      </div>
    </div>
  );
};

export default Quiz;
