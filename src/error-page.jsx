import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {

  return (
    <div id="error-page">
      <h1 className="ft-w-bold">404</h1>
      <p className="ft-w-normal">Oups! La page que vous demandez n'existe pas.</p>
      <Link to={`/`} className="ft-w-normal">Retourner sur la page d’accueil</Link>
    </div>
  );
}