import { Link } from "react-router-dom";

const ShowMore = ({ path }) => {
  return (
    <Link to={path} className="font-bold text-accent-500 hover:opacity-80">
      Show More
    </Link>
  );
};

export default ShowMore;
