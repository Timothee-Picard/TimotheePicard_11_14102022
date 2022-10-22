import { useHousing } from "../hooks/hookHousing.js"

import Dropdown from "../components/dropdown"
import Slider from "../components/slider"

export default function Housing() {
  const logement = useHousing()
  if(!logement) {return (<></>)}
  return (
      <>
        <header>
          <Slider slides={logement.pictures} />
        </header>
        <div className="housing-infos">
          <div className="housing-infos-left">
            <h2 className="ft-w-medium">{logement.title}</h2>
            <address className="ft-w-medium">{logement.location}</address>
          </div>
          <div className="housing-infos-right">
            <span className="ft-w-medium">{logement.host.name.split(' ')[0]}<br />{logement.host.name.split(' ')[1]}</span>
            <img src={logement.host.picture}></img>
          </div>
          <div className="housing-infos-tags">
            {
              logement.tags && logement.tags.map( tag => {
                return (
                  <div key={tag} className="ft-w-medium housing-infos-tags-item">
                    {tag}
                  </div>
                )
              })
            }
          </div>
          <div className="housing-infos-rating">
            {
              logement.rating && [...Array(5)].map((r, i) => {
                return(
                  <i className={`fa-solid fa-star ${logement.rating > i? "": "not"}`} key={i}></i>
                )
              })
            }
          </div>
        </div>
        <div className="housing-dropdowns">
          <Dropdown title="Description">
            {logement.description}
          </Dropdown>
          <Dropdown title="Équipements">
            {
              logement.equipments && logement.equipments.map( equipment => {
                return (
                  <p key={ equipment }>{equipment}</p>
                )
              })
            }
          </Dropdown>
        </div>
      </>
  )
}
