
import React from "react";
import PdfDisplay from "../PdfDisplay/PdfDisplay";
import './PdfPage.scss';


function PdfPage({ setRoute, route }) {
    return (
        <article className="cf">
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
        </article>
    );
}

export default PdfPage;