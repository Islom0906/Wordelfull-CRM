import {Page, Document, StyleSheet, Text, Image} from "@react-pdf/renderer";


const Orders = () => {

// Create styles
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      display:"flex",
      flexDirection:"column",
      backgroundColor:'red'
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });


  return (

      <Document>
        <Page size={'A4'} style={styles.body}>
          <Text style={styles.header} fixed>
            ~ Created with react-pdf ~
          </Text>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Image/>
        </Page>
      </Document>
  );
};

export default Orders;