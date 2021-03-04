
import React, { useCallback, useEffect, useState } from "react";
import PdfDisplay from "../PdfDisplay/PdfDisplay";
import './PdfPage.scss';


function PdfPage( { setRoute }) {
    return (
        <section className="pdfPage" class="vh-100 w-100 flex">
            <div className="commentSection vh-100 w-25">
                <div className="dtc v-mid" id="titleContainer">
                    <span className="pointer f3  fw1 i black-60 pa1 dim" onClick={() =>setRoute('home')}>Home</span>
                 </div>
            </div>
            <div className="pdfSection vh-100 w-75" >
                <PdfDisplay />
            </div>
        </section>
    );
}

export default PdfPage;