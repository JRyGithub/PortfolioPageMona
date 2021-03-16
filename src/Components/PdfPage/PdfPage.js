
import React from "react";
import PdfDisplay from "../PdfDisplay/PdfDisplay";
import './PdfPage.scss';
import { useSwipeable } from "react-swipeable";
import { BrowserView, MobileView } from "react-device-detect";

function PdfPage({ setRoute, route }) {
    const handlers = useSwipeable({
        onSwipedRight: () => setRoute('pictureRubric'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    return (
        <article className="cf" {...handlers}>
            <BrowserView>
                <section className="pdfPage" class="vh-100 fr w-50 flex-wrap">
                    <div className="vh-10 w-100 tc headerForpdf">
                        <div className="headerForpdf dtc v-mid tc" id="titleContainer">
                            <span className="pointer f3  fw1 i black-60 pa1 dim tc" onClick={() => setRoute('home')} role="button" aria-hidden="true">Return...</span>
                        </div>
                    </div>
                    <div className="pdfSection vh-100 w-100" >
                        <PdfDisplay route={route} />
                    </div>
                </section>
            </BrowserView>
            <MobileView>
                <section className="pdfPage" class="vh-100 fr w-100 flex-wrap">
                    <div className="pdfSection vh-100 w-100" >
                        <PdfDisplay route={route} />
                    </div>
                </section>
            </MobileView>
        </article>
    );
}

export default PdfPage;