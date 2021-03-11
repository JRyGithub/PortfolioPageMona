import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import surgePricing from './SurgePricing.pdf';
import renewableEnergy from './RenewableEnergyCommunities.pdf';
import housePrices from './NZHousingBubble.pdf';
import mentalHealth from './MentalHealthEconomics.pdf';
import './PdfDisplay.scss';

function PdfDisplay({ route }) {
    const [numPages, setNumPages] = useState(null);
    const [pdfName, setPdfName] = useState(null);
   
    useEffect(() => {
        switch (route) {
            case "surgePricing":
                setPdfName(surgePricing);
                break;
            case "renewableEnergy":
                setPdfName(renewableEnergy);
                break;
            case "housePrices":
                setPdfName(housePrices);
                break;
            case "mentalHealth":
                setPdfName(mentalHealth);
                break;
            default:
                break;
        }
        console.log(route);
    }, [route]);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="all-page-container">
            <Document
                file={pdfName}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
}

export default PdfDisplay;