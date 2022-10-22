import { useState } from "react";
import Arrow from "../assets/arrow.svg"

export default function Dropdown({children, title}) {

  const [hide, setHide] = useState(true)
  
  return (
    <section className={`dropDown ${hide ? "hidden" : ""}`}>
      <header onClick={() => setHide(hide? false : true)}>
        <h2 className="ft-w-medium">{title}</h2>
        <i>
          <img src={Arrow} />
        </i>
      </header>
      <main>
        <div className="content ft-w-normal">{children}</div>
      </main>
    </section>
  );
}