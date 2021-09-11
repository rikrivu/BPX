import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPDF, getPDFByFileName } from "../../services/data-service";

function PDFViewer () {

    const { facilityId, permitId, fileName } = useParams<{facilityId: string, permitId: string, fileName: string}>();
    // console.log('FacilityId', facilityId, permitId, permitId === '[object Response]');
    const [pdfData, setPdfData] = useState<any>()

    useEffect(() => {
        if (facilityId && permitId) {
            getPDF(facilityId, permitId)
            .then(res => {
                // console.log('PDF', res);
                const blob = new Blob([res], {type: 'application/pdf'});
                const fileURL = URL.createObjectURL(blob)
                setPdfData(fileURL);
            })
        }

        if (fileName) {
            getPDFByFileName(fileName)
            .then(res => {
                // console.log('PDF', res);
                const blob = new Blob([res], {type: 'application/pdf'});
                const fileURL = URL.createObjectURL(blob)
                setPdfData(fileURL);
            })
        }

    }, [facilityId, fileName, permitId])

    return pdfData ? (
        <div>
            <iframe
                style={{ width: "99.6vw", height: "98.7vh" }}
                src={pdfData}
                data-type='application/pdf'
                title='title'
            />
        </div>
    ): <div>Loading...</div>;
}

export default PDFViewer;