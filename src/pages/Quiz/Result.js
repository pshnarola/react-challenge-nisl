import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import parse from 'html-react-parser';
import calculateResult from "../../helpers/calculateResult";
import { useEffect } from "react";
export default function Result() {
  const { questionList } = useSelector((state) => state.quiz);
  const totalCorrectAnswer = calculateResult(questionList);
  const navigate = useNavigate();
  useEffect(() => {
    if (Array.isArray(questionList) && questionList.length === 0) {
      navigate("/");
    }
  }, [questionList]);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 quiz-container max-vh-100 ">
          <div className="text-center">
            <h3>
              You Scored
            </h3>
            <h3>
              {totalCorrectAnswer}/{questionList.length}
            </h3>
          </div>
          <div className="result-wrapper mt-3">
            {questionList.map((question, index) => {
              return (
                <div className="result" key={index}>
                  {(question.correct_answer === question.candidateAnswer) ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#28a745" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc3545" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  }
                  <div
                    className={`alert ${question.correct_answer === question.candidateAnswer
                      ? "alert-success"
                      : "alert-danger"
                      }`}
                  >
                    {parse(question.question)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link to="/quiz" className="btn btn-default btn-outline-dark"> Play again ? </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
