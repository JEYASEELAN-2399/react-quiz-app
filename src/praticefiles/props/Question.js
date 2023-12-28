import Answer from "./Answer";

const Question = ({Questions}) => {
  console.log(Questions)
  return (
    <div>
      <div className="question">Text of your Question</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
