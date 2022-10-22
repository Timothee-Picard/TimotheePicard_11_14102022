import { Link } from "react-router-dom";

export default function Card({logement}) {
  return (
    <Link to={`logement/` + logement.id }>
      <article style={{ backgroundImage: `url("${logement.cover}")` }}>
        <h2 className="ft-w-medium">{ logement.title }</h2>
      </article>
    </Link>
  );
}