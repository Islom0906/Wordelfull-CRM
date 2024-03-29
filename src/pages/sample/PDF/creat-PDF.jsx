import {Page, Document, StyleSheet, Text, Image, View} from "@react-pdf/renderer";

    export function CreatPDF() {
// Create styles
    const styles = StyleSheet.create({
        body: {
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 10,
            display:"flex",
            flexDirection:"column",
            backgroundColor:'red',
        },
        row: {
            display:"flex",
            flexDirection:"row",
            backgroundColor:'red',
            justifyContent:"space-between",
        },
        widthHalf: {
          width:'50%', backgroundColor:'blue',
        },
        title_gold: {
          fontSize:50,
            color:'#D4B57C',
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            // fontFamily: 'Oswald'
        },
        author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
        },
        subtitle: {
            fontSize: 18,
            margin: 12,
            // fontFamily: 'Oswald'
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
            height:100
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
        },

    });
    return (
        <Document>
            <Page size={'A4'} style={styles.body}>
                <Image style={styles.image} src={'https://leapmotorca.uz/api/media/00c49c2d-14ed-4d62-a0af-b994e5cd16a4-index-5-section-bg.jpg'} alt={'nfksndf'}/>
                <View style={styles.widthHalf}>
                    <View style={styles.row}>
                        <Text>
                            Ismingiz:
                        </Text>
                        <Text>
                            Berdiev Bobur
                        </Text>
                    </View>
                </View>

                <Text style={styles.header} fixed>
                    ~ Created with react-pdf ~
                </Text>
                <Text style={styles.title}>Don Quijote de la Mancha</Text>
            </Page>
        </Document>
    );
}



