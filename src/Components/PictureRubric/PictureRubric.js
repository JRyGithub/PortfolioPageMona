import React from "react";
import './PictureRubric.scss';
import { useSwipeable } from "react-swipeable";

function PictureRubric({ setRoute }) {
  const handlers = useSwipeable({
    onSwipedRight: () => setRoute('informationSection'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div className="pictureRubricImage" {...handlers}>
      <div className="vh-25 flex">
        <div className="bgaqua h-100 w-40 flowers"></div>
        <div className="bgred h-100 w-60 colorPainting"></div>
      </div>
      <div className="vh-50 flex dib w-100">
        <div className="w-100">
          <div className="bgblue w-100 h-50 basketball"></div>
          <div className="bggreen w-100 h-50 dim phonePic pdfClickable" id="surgePricing" onClick={() => setRoute('surgePricing')} role="button" aria-hidden="true"></div>
        </div>
        <div className="w-100">
          <div className="bgpink w-100 h-75 dim greenFlower pdfClickable" id="renewableEnergy" onClick={() => setRoute('renewableEnergy')} role="button" aria-hidden="true"></div>
          <div className="bgsilver w-100 h-25 painting"></div>
        </div>
      </div>
      <div className="vh-25 flex">
        <div className="bgblack w-60 dim houseAndSky pdfClickable" id="housePrices" onClick={() => setRoute('housePrices')} role="button" aria-hidden="true"></div>
        <div className="bgyellow w-40 dim bagOnHead pdfClickable" id="mentalHealth" onClick={() => setRoute('mentalHealth')} role="button" aria-hidden="true"></div>
      </div>
    </div>
  )
}
export default PictureRubric;
