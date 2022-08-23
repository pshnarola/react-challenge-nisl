import { Link } from "react-router-dom";
export default function HomeScreen() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mt-5">
            Welcome to the <br />
            Trivia Challenge !
          </h1>
          <h2 className="mt-5">You will be presented with 10 True or False questions.</h2>
          <h2 className="mt-5">Can you score 100 ?</h2>
          <Link to="/quiz" className="btn btn-default btn-outline-dark mt-5">
            Let's Begin !
          </Link>
        </div>
      </div>
    </div>
  );
}