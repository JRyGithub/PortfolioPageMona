import React from "react";
import './PictureRubric.scss';

function PictureRubric({setRoute}) {
  return (
    <>
    <div className="vh-25 flex">
      <div className="bgaqua h-100 w-40 dim flowers"></div>
      <div className="bgred h-100 w-60 dim colorPainting"></div>
    </div>
    <div className="vh-50 flex dib w-100">
      <div className="w-100">
        <div className="bgblue w-100 h-50 dim basketball"></div>
        <div className="bggreen w-100 h-50 dim phonePic" id="surgePricing" onClick={() =>setRoute('surgePricing')} role="button"  aria-hidden="true"></div>
      </div>
      <div className="w-100">
        <div className="bgpink w-100 h-75 dim greenFlower" id="renewableEnergy" onClick={() =>setRoute('renewableEnergy')} role="button"  aria-hidden="true"></div>
        <div className="bgsilver w-100 h-25 dim painting"></div>
      </div>
    </div>
    <div className="vh-25 flex">
      <div className="bgblack w-60 dim houseAndSky" id="housePrices" onClick={() =>setRoute('housePrices')} role="button"  aria-hidden="true"></div>
      <div className="bgyellow w-40 dim bagOnHead" id="mentalHealth" onClick={() =>setRoute('mentalHealth')} role="button"  aria-hidden="true"></div>
    </div>
  </>
  )
}
export default PictureRubric;
