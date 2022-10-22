import Logements from "../assets/logements.json"
import Banner from "../assets/banner_home.png";
import Card from "../components/card";

export default function Home() {
    return (
      <>
        <div className="banner">
          <img src={Banner} alt="paysage de bord de mer" />
          <h1 className="ft-w-medium">Chez vous, partout et ailleur</h1>
        </div>
        <div className="content">
          {
            Logements && Logements.map( logement => {
              return (<Card logement={logement} key={ logement.id} />)
            })
          }
        </div>
      </>
    );
  }