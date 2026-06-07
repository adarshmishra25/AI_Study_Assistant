import { Link } from "react-router-dom";

export const Actions = () => {
  return (
    <div className="action">
      <Link to="/summary">
        <button>Generate Summary</button>
      </Link>

      <Link to="/keypoints">
        <button>Generate Key Points</button>
      </Link>

      <Link to="/quiz">
        <button>Generate Quiz</button>
      </Link>

      <Link to="/questions">
        <button>Ask Questions</button>
      </Link>
    </div>
  );
};