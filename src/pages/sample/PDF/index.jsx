import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import {CreatPDF} from "./creat-PDF";

const PDF = () => {

  //
  return (
      <div>


          <PDFViewer style={{ width: '100%', height: '500px' }}>
              <CreatPDF />
          </PDFViewer>
          <br/>
          <br/>
          <br/>

          {<PDFDownloadLink
              document={<CreatPDF   />}
              fileName="CreatPDF.pdf"
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
