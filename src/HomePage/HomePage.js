import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/easy">Easy</Link>
        </li>
        <li>
          <Link to="/medium">Medium</Link>
        </li>
        <li>
          <Link to="/hard">Hard</Link>
        </li>
      </ul>
    </nav>
  );
};
