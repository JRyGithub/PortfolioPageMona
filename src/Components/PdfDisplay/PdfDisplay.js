import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import samplePdf from './SurgePricing.pdf';
import './PdfDisplay.scss';

function PdfDisplay() {
    const [numPages, setNumPages] = useState(null);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    return (
        <div className="all-page-container">
            <Document
                file={samplePdf}
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