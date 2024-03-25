import {Page, Document,StyleSheet} from "@react-pdf/renderer";


const Orders = () => {

// Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: 'red'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
  });
  // aaa

  return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Image
              style={styles.image}
              src="/images/quijote1.jpg"
          />
        </Page>
      </Document>
  );
};

export default Orders;