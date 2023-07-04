import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react'

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: "landscape",

                });
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }
    return <Button onClick={downloadPdfDocument} style={{ 'background': '#171F3A', 'color': 'whitesmoke', 'padding': '5px', 'margin': '.2rem' }}>Download</Button>
}

export default GenericPdfDownloader