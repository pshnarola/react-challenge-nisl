import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "./Question";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import fetchQuestion from "../../redux/api/question";
import { QUESTION } from "../../redux/actions";
export default function Container() {
  const { questionList, isLoading, currentQuestion } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => { dispatch(fetchQuestion()); }, []);
  const changeCurrentAnswer = () => {
    dispatch({ type: QUESTION.CHANGE_CURRENT_ANSWER });
    if (questionList.length - 1 === currentQuestion.index) navigate("/result")
  };
  if (isLoading || !currentQuestion) return <Spinner />
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 quiz-container vh-100 m-auto">
          <Question
            currentQuestion={currentQuestion}
            changeCurrentAnswer={changeCurrentAnswer}
          />
          <p className="mb-0 text-center mt-5">
            {currentQuestion.index + 1} of {questionList.length}
          </p>
        </div>
      </div>
    </div>
  );
}