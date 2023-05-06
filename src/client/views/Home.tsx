import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
};
