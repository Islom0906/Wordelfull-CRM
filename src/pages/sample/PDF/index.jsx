import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import {CreatPDF} from "./creat-PDF";
import {useEffect} from "react";
import apiService from "../../../@crema/services/apis/api";
import {useQuery} from "react-query";

const PDF = () => {
    const {data, refetch} = useQuery(
        'get-slot',
        () => apiService.getDataByID('/PdfData',28),
        {
            enabled: false,
        },
    );
    useEffect(() => {
        refetch()
    }, []);
  //
  return (
      <div>


          <PDFViewer style={{ width: '100%', height: '700px' }}>
              <CreatPDF data={data} />
          </PDFViewer>
          <br/>
          <br/>
          <br/>

          {
              <PDFDownloadLink
              document={<CreatPDF data={data}  />}
              fileName="Wonderfull-city.pdf"
              style={{
                  textDecoration: "none",
                  padding: "10px",
                  color: "#4a4a4a",
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #4a4a4a"
              }}
          >
             salom
          </PDFDownloadLink>}
      </div>
  );
};

export default PDF;
