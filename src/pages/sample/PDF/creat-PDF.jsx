import {Page, Document, StyleSheet, Text, Image, View} from "@react-pdf/renderer";

    export function CreatPDF() {

        const listIcon = [
            {
                icon:'/admin/icons/map-pinned.png',
                title:'Ideal joylashuv'
            },
            {
                icon:'/admin/icons/building-2.png',
                title:'Ta\'sirchan arxitektura'
            },
            {
                icon:'/admin/icons/trees.png',
                title:'Yashil muhit'
            },
            {
                icon:'/admin/icons/sofa.png',
                title:'Hashamatli lobbi'
            },
            {
                icon:'/admin/icons/gamepad-2.png',
                title:'50 000 kv.m. Savdo va ko\'ngilochar markaz'
            },
            {
                icon:'/admin/icons/circle-parking.png',
                title:'Er osti to\'xtash joyi'
            },

        ]

    const styles = StyleSheet.create({
        body: {
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 40,
            display:"flex",
            flexDirection:"column",
            fontStyle:'Times-Roman'
        },
        row: {
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
        },
        center: {
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        widthHalf: {
          width:'48%'
        },
        title_gold: {
          fontSize:16,
            fontWeight:600,
            color:'#D4B57C',
            fontFamily: 'Helvetica-Bold',

        },
        title: {
            fontSize: 18,
            fontFamily: 'Helvetica-Bold',
            textAlign: 'center',
            color:'#D4B57C',
        },
        listItem: {
            color:'#918C86',
            fontSize:14,
            fontFamily: 'Helvetica',
        },
        marginSmY: {
          marginVertical: 3,
        },
        marginY: {
            marginVertical: 10,
        },

        text: {
            margin: 12,
            fontSize: 14,
            textAlign: 'justify',
        },
        logo: {
            height:90,
            width:90,
            objectFit: 'contain'
        },
        imageBg: {
            width:'100%',
            objectFit:'cover',
            height:200,
            marginBottom:8,
        },

        iconList:{
            flexWrap:"wrap"
        },

        iconBox: {
            display:"flex",
            alignItems:"center",
            flexDirection:'row',

        },
        icon: {
            width:20,
            height:20,
            objectFit:'contain',
            objectPosition:'center',
            marginRight:4
        },
        iconBg: {
            width:'100%',
            objectFit:'cover',
            objectPosition:'center',
            height:300
        },

    //     TABLE

        table: {
            display: 'table',
            width: 'auto',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor:'#D4B57C',
            borderRightWidth: 0,
            borderBottomWidth: 0,
        },
        tableRow: {
            margin: 'auto',
            flexDirection: 'row',
        },
        tableCol: {
            width: '50%',
            borderStyle: 'solid',
            borderColor:'#D4B57C',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
        },
        tableHeader: {
          // width:'100%',
          backgroundColor:'#D4B57C',
            paddingVertical:5,
            color:'white',
        },
        tableCell: {
            margin: 'auto',
            marginTop: 5,
            fontSize: 12,
        },
        tableList: {
            paddingVertical:5,
            color:'#4F4F4F',
            borderBottom:1,
            borderColor:'#4F4F4F',
            fontSize:14
        }

    });
    return (
        <Document>
            <Page size={'A4'} style={styles.body}>
                <View style={styles.center}>
                    <Image style={styles.logo} src={'/admin/logo.png'} />

                </View>
                <View style={styles.row}>
                    <View style={styles.widthHalf}>
                        <Text style={[styles.title_gold , styles.marginY]}>
                            Information
                        </Text>
                        <View style={[styles.row , styles.marginSmY ,styles.listItem]}>
                            <Text>
                                Ismingiz:
                            </Text>
                            <Text>
                                Berdiev Bobur
                            </Text>
                        </View>
                        <View style={[styles.row , styles.marginSmY ,styles.listItem]}>
                            <Text>
                                Ismingiz:
                            </Text>
                            <Text>
                                Berdiev Bobur
                            </Text>
                        </View>
                    </View>
                    <View style={styles.widthHalf}>
                        <Text style={[styles.title_gold , styles.marginY]}>
                            Information
                        </Text>
                        <View style={[styles.row , styles.marginSmY ,styles.listItem]}>
                            <Text>
                                Ismingiz:
                            </Text>
                            <Text>
                                Berdiev Bobur
                            </Text>
                        </View>
                        <View style={[styles.row , styles.marginSmY ,styles.listItem]}>
                            <Text>
                                Ismingiz:
                            </Text>
                            <Text>
                                Berdiev Bobur
                            </Text>
                        </View>
                    </View>
                </View
                >
                <View style={[styles.center , styles.title , styles.marginY]}>
                    <Text>
                        Sizga muvaffaqiyatli xarid tilaymiz!
                    </Text>
                </View>
                <View>
                    <Image style={styles.imageBg} src={'/admin/location.png'} />
                    <View style={styles.row}>
                        <Image style={[styles.imageBg, styles.widthHalf]} src={'/admin/location.png'} />
                        <Image style={[styles.imageBg, styles.widthHalf]} src={'/admin/location.png'} />
                    </View>
                </View>

                <View style={[styles.center, styles.marginY]}>
                    <Text style={styles.title }>
                        +998 78 113-16-66
                    </Text>
                </View>
            </Page>
            <Page size={'A4'} style={styles.body}>
                <View style={styles.center}>
                    <Image style={styles.logo} src={'/admin/logo.png'} />

                </View>
                <View style={[styles.center , styles.title , styles.marginY]}>
                    <Text>
                        Loyihaning oziga xosligi
                    </Text>
                </View>
                <View >
                    <View >
                        <View style={[styles.row ,styles.iconList]}>
                            {
                                listIcon.map(item => (
                                    <View key={item?.icon} style={[styles.iconBox ,styles.widthHalf  , styles.marginSmY]}>
                                        <Image style={styles.icon} src={item.icon} />
                                        <Text style={styles.listItem}>
                                            {item.title}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View
                >
                <View>
                    <Image style={[styles.iconBg , styles.marginY]} src={'/admin/location.png'} />
                </View>
                <View style={[styles.center, styles.marginY]}>
                    <Text style={styles.title }>
                        +998 78 113-16-66
                    </Text>
                </View>
            </Page>
            <Page size={'A4'} style={styles.body}>
                <View style={styles.center}>
                    <Image style={styles.logo} src={'/admin/logo.png'} />

                </View>
                <View style={styles.marginY}>
                <View style={styles.tableList}>
                    <View style={styles.row}>
                        <Text>
                            Loyiha:
                        </Text>
                        <Text>
                            Wonderful city
                        </Text>
                    </View>

                </View>

                </View>
                <View style={styles.table}>
                    <View style={[ styles.tableHeader]}>
                            <Text style={styles.tableCell}>Investitsion shartnoma uchun 100% oldindan to`lov</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}> shartnoma uchun 100% oldindan to`lov</Text>
                        </View>
                        <View style={styles.tableCol}>

                            <View style={[styles.row ]}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>92 230 $</Text>
                                </View >
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>922 309 200 usd </Text>
                                </View >
                            </View>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}> shartnoma uchun 100% oldindan to`lov</Text>
                        </View>
                        <View style={styles.tableCol}>

                            <View style={[styles.row ]}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>92 230 $</Text>
                                </View >
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>922 309 200 usd </Text>
                                </View >
                            </View>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}> shartnoma uchun 100% oldindan to`lov</Text>
                        </View>
                        <View style={styles.tableCol}>

                            <View style={[styles.row ]}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>92 230 $</Text>
                                </View >
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>922 309 200 usd </Text>
                                </View >
                            </View>
                        </View>
                    </View>
                    <View style={[styles.tableRow , styles.tableHeader]}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}> Jami:</Text>
                        </View>
                        <View style={styles.tableCol}>

                            <View style={[styles.row ]}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>92 230 $</Text>
                                </View >
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>922 309 200 usd </Text>
                                </View >
                            </View>
                        </View>
                    </View>

                </View>
                <View style={[styles.center, styles.marginY]}>
                    <Text style={styles.title }>
                        +998 78 113-16-66
                    </Text>
                </View>
            </Page>
        </Document>
    );
}



