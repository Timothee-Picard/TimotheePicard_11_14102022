import { useState } from "react";
import Arrow from "../assets/arrow.svg"

export default function Slider({slides}) {
  const [currentSlides, setCurrentSlides] = useState(slides)

  return (
    <div className="slider">
      {currentSlides.length > 1 &&
        <>
          <i className="arrow-Left" onClick={() => {
            let newArray = [...currentSlides]
            newArray.unshift(newArray[newArray.length-1])
            newArray.pop()
            setCurrentSlides(newArray)
          }}>
            <img src={Arrow} />
          </i>
          <i className="arrow-Right" onClick={() => {
            let newArray = [...currentSlides]
            newArray.push(newArray[0])
            newArray.shift()
            setCurrentSlides(newArray)
          }}>
            <img src={Arrow} />
          </i>
          <div className="indicator ft-w-medium ">
            {slides.findIndex((slide) => slide === currentSlides[0])+1 + "/" + slides.length}
          </div>
        </>
      }
      {currentSlides && currentSlides.map((currentSlide)=> {
        return(
          <img src={currentSlide} key={currentSlide} />
        )
      })}
    </div>
  );
}