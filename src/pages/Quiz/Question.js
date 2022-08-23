import { useDispatch } from "react-redux";
import { QUESTION } from "../../redux/actions";
import Input from "../../components/Input";
import parse from 'html-react-parser';
export default function Question({ currentQuestion, changeCurrentAnswer }) {
  const dispatch = useDispatch();
  const handleAnswer = (e) => {
    // For custom Loading.
    setTimeout(() => {
      dispatch({
        type: QUESTION.SET_CANDIDATE_ANSWER,
        payload: {
          index: currentQuestion.index,
          candidateAnswer: e.target.value,
        },
      });
      changeCurrentAnswer(e.target.value);
    }, 100);
  };
  return (
    <div className="question-container" key={currentQuestion.index} >
      <h2 className="mb-4 text-center">
        {currentQuestion.question.category}{" "}
      </h2>
      <div className="card custom-card mt-5">
        <p className="question-text"><>{parse(currentQuestion.question.question)}</></p>
        <div className="form-group mt-3 answer-wrapper">
          <Input type="radio" name="answer" value="True" onChange={handleAnswer} label="True" />
          <Input type="radio" name="answer" value="False" onChange={handleAnswer} label="False" />
        </div>
      </div>
    </div>
  );
}

