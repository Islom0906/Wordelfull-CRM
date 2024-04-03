import {Page, Document, StyleSheet, Text, Image, View, Font} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import MontserratRegular from '../../../assets/fonts/Montserrat-Regular.ttf'
import MontserratBold from '../../../assets/fonts/Montserrat-Bold.ttf'
import MontserratSemiBold from '../../../assets/fonts/Montserrat-SemiBold.ttf'
import MontserratMedium from '../../../assets/fonts/Montserrat-Medium.ttf'
import moment from "moment";
import logo from '../../../assets/logo-pdf.png'
import location from '../../../assets/location-crm.png'
import wonderfullCity from '../../../assets/wonderful-city-img.jpg'
import mapPinned from '../../../assets/pdf-icon/map-pinned.png'
import building from '../../../assets/pdf-icon/building-2.png'
import trees from '../../../assets/pdf-icon/trees.png'
import sofa from '../../../assets/pdf-icon/sofa.png'
import gamepad from '../../../assets/pdf-icon/gamepad-2.png'
import parking from '../../../assets/pdf-icon/circle-parking.png'


// Register fonts
Font.register({
    family: 'Montserrat',
    fonts: [
        {src: MontserratRegular, fontStyle: "normal", fontWeight: "normal"},
        {src: MontserratBold, fontStyle: "normal", fontWeight: "bold"},
        {src: MontserratSemiBold, fontStyle: "normal", fontWeight: "700"},
        {src: MontserratMedium, fontStyle: "normal", fontWeight: "500"},
    ]
});


const styles = StyleSheet.create({
    dashed: {
        width: "100%",
        borderBottom: "1px dashed #553248",
        flex: '1 1 0%'
    },
    body: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 40,
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    widthHalf: {
        width: '48%'
    },
    title_gold: {
        fontSize: 14,
        color: '#553248',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight:'bold',
        textAlign: 'center',
        color: '#553248',
    },
    listItem: {
        color: '#918C86',
        fontSize: 10,
        fontFamily: 'Montserrat',
    },
    marginSmY: {
        marginVertical: 3,
    },
    marginY: {
        marginVertical: 10,
    },
    textValue:{
        fontWeight:"bold",
    },
    text: {
        margin: 12,
        fontSize: 12,
        textAlign: 'justify',
    },
    logo: {
        height: 70,
        width: 70,
        objectFit: 'contain'
    },
    imageBg: {
        width: '100%',
        objectFit: 'cover',
        height: 200,
        marginBottom: 8,
    },
    floorImage:{
      width:'100%',
      objectFit:'contain',
      height:'280px',
        marginTop:'20px'
    },
    iconList: {
        flexWrap: "wrap"
    },

    iconBox: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',

    },
    icon: {
        width: 20,
        height: 20,
        objectFit: 'contain',
        objectPosition: 'center',
        marginRight: 4
    },
    iconBg: {
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        height: 500
    },

    //     TABLE

    table: {
        display: 'table',
        width: 'auto',
        marginBottom:'15px',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#553248',
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: 'auto',
        flexDirection: 'row',
        fontFamily: 'Montserrat',
    },
    tableCol: {
        width: '50%',
        borderStyle: 'solid',
        borderColor: '#553248',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColRight: {
        width: '50%',
        borderStyle: 'solid',
        borderColor: '#553248',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottom:0
    },
    tableHeader: {
        // width:'100%',
        backgroundColor: '#553248',
        padding: "1px 0 4px 0",
        color: 'white',
        fontFamily: 'Montserrat'
    },

    tableCell: {
        margin: 'auto',
        marginTop: 5,
        fontSize: 10,
    },
    tableList: {
        paddingVertical: 5,
        color: '#4F4F4F',
        borderBottom: 1,
        borderColor: '#4F4F4F',
        fontSize: 12
    },
    bottomInfo: {
        paddingVertical: 5,
        color: '#000',
        fontSize: 12
    }
});

export default function CreatPDF({data}) {

    const listIcon = [
        {
            icon: mapPinned,
            title: 'Идеальное расположение'
        },
        {
            icon: building,
            title: 'Уникальные проекты '
        },
        {
            icon: trees,
            title: 'Впечатляющая архитектура '
        },
        {
            icon: sofa,
            title: 'Роскошное Лобби'
        },
        {
            icon: gamepad,
            title: '50.000 кв метров Торгово Развлекательный Центр'
        },
        {
            icon: parking,
            title: 'Подземный паркинг'
        },

    ]


    return (
        <Document>
            <Page size={'A4'} style={styles.body}>
                <View style={styles.center}>
                    <Image style={styles.logo} src={logo}/>

                </View>
                <View style={styles.row}>
                    <View style={styles.widthHalf}>
                        <Text style={[styles.title_gold, styles.marginY]}>
                            Информация
                        </Text>
                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <Text>
                                Ваша квартира:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {data?.apartmentName}
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.row, styles.marginSmY, styles.listItem,styles.widthHalf]}>
                                <Text>
                                    Блок:
                                </Text>
                                <Text style={styles.dashed}>
                                </Text>
                                <Text style={styles.textValue}>
                                    {data?.slotName}
                                </Text>
                            </View>
                            <View style={[styles.row, styles.marginSmY, styles.listItem,styles.widthHalf]}>
                                <Text>
                                    Этаж:
                                </Text>
                                <Text style={styles.dashed}>
                                </Text>
                                <Text style={styles.textValue}>
                                    {data?.floorName}
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <Text>
                                Площадь (м2):
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {data?.ploshd}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <Text>
                                Количество комнат:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {data?.roomCount}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.widthHalf}>
                        <Text style={[styles.title_gold, styles.marginY]}>
                            Стоимость
                        </Text>
                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <Text>
                                Дата передачи ключей:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {moment(data?.slotFinished
                                ).format("DD.MM.YYYY")}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <Text>
                                Дата печати:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>

                                {moment(data?.nowTime
                                ).format("DD.MM.YYYY")}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <Text>
                                Ваш менеджер:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>

                                {data?.sellerName}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <Text>
                                Телефон менеджера:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>

                                {data?.sellerPhoneNumber}
                            </Text>
                        </View>
                    </View>
                </View
                >
                <View style={{...styles.center,marginTop:30}}>
                    <Text style={styles.title}>
                        Желаем Вам удачной покупки!
                    </Text>
                    <Text style={{...styles.listItem,marginTop:5}}>
                        Расположение Вашей
                        квартиры
                    </Text>
                </View>
                <View>
                    <Image style={styles.floorImage}
                           src={`${process.env.REACT_APP_IMAGE_URL}/${data?.apartmentFloorImage}`}
                    />
                    <View style={{...styles.row,marginTop:'10px'}}>
                        <Image style={[styles.imageBg, styles.widthHalf]} src={wonderfullCity}/>
                        <Image style={[styles.imageBg, styles.widthHalf]} src={location}/>
                    </View>
                </View>

                <View style={[styles.center, styles.marginY]}>
                    <Text style={styles.title}>
                        +998 78 113-16-66
                    </Text>
                </View>
            </Page>
            <Page size={'A4'} style={styles.body}>
                <View style={styles.center}>
                    <Image style={styles.logo} src={logo}/>

                </View>
                <View style={[styles.center, {...styles.title,marginBottom:"25px"}]}>
                    <Text>
                        Уникальность проекта
                    </Text>
                </View>
                <View>
                    <View>
                        <View style={[styles.row, styles.iconList]}>
                            {
                                listIcon.map(item => (
                                    <View key={item?.icon} style={[styles.iconBox, {...styles.widthHalf,marginBottom:'15px',gap:"10px"}]}>
                                        <Image style={styles.icon} src={item.icon}/>
                                        <Text style={styles.listItem}>
                                            {item.title}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
                <View>
                    <Image style={[styles.iconBg, styles.marginY]}
                           src={`${process.env.REACT_APP_IMAGE_URL}/${data?.apartmentHouseImage}`}/>
                </View>
                <View style={[styles.center, styles.marginY]}>
                    <Text style={styles.title}>
                        +998 78 113-16-66
                    </Text>
                </View>
            </Page>
            <Page size={'A4'} style={styles.body}>
                <View style={styles.center}>
                    <Image style={styles.logo} src={logo}/>

                </View>
                <View style={styles.marginY}>
                    <View style={styles.tableList}>
                        <View style={[styles.row, styles.listItem]}>
                            <Text>
                                Проект:
                            </Text>
                            <Text>
                                Wonderful city
                            </Text>
                        </View>

                    </View>
                    <View style={styles.tableList}>
                        <View style={[styles.row, styles.listItem]}>
                            <Text>
                                Блок
                            </Text>
                            <Text>
                                {data?.slotName}
                            </Text>
                        </View>

                    </View>
                    <View style={styles.tableList}>
                        <View style={[styles.row, styles.listItem]}>
                            <Text>
                                Этаж:
                            </Text>
                            <Text>
                                {data?.floorName}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableList}>
                        <View style={[styles.row, styles.listItem]}>
                            <Text>
                                Номер квартиры:
                            </Text>
                            <Text>
                                {data?.apartmentName}
                            </Text>
                        </View>

                    </View>


                    <View style={styles.tableList}>
                        <View style={[styles.row, styles.listItem]}>
                            <Text>
                                Площадь квартиры (м2):
                            </Text>
                            <Text>
                                {data?.ploshd}
                            </Text>
                        </View>

                    </View>
                    <View style={styles.tableList}>
                        <View style={[styles.row, styles.listItem]}>
                            <Text>
                                Количество комнат:
                            </Text>
                            <Text>
                                {data?.roomCount}
                            </Text>
                        </View>

                    </View>
                    <View style={{...styles.tableList, marginTop: '20px', fontWeight: "bold"}}>
                        <View style={[styles.row, styles.listItem]}>
                            <Text style={{color:"black"}}>
                                Базовая цена квартиры:
                            </Text>
                            <Text style={{color:"black"}}>
                                {data?.priceDollor} $
                            </Text>
                        </View>

                    </View>

                </View>
                {
                    data?.payments?.map((payment, ind) => (
                        <View key={ind} style={styles.table}>
                            <View style={[styles.tableHeader]}>
                                <Text style={styles.tableCell}>
                                    {payment.monthCount === 0 ? '100% предоплата при Инвест договоре' : `Рассрочка при Инвест договоре с ${payment?.fristPay}% ПВ`}
                                </Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}> Цена со скидкой {payment?.discount}%</Text>
                                </View>
                                <View style={styles.tableCol}>

                                    <View style={[styles.row]}>
                                        <View style={styles.tableColRight}>
                                            <Text style={styles.tableCell}>{payment?.skidka?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} $</Text>
                                        </View>
                                        <View style={{width:'50%'}}>
                                            <Text style={styles.tableCell}>{payment?.skidkaSum?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} сум </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}> {payment?.fristPay}% предоплата </Text>
                                </View>
                                <View style={styles.tableCol}>

                                    <View style={[styles.row]}>
                                        <View style={styles.tableColRight}>
                                            <Text style={styles.tableCell}>{payment?.initialPayment?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} $</Text>
                                        </View>
                                        <View style={{width:'50%'}}>
                                            <Text style={styles.tableCell}>{payment?.initialPaymentSum?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} сум </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {
                                payment?.monthCount>0
                                &&
                                <View style={styles.tableRow}>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}> Сумма ежемесячных оплат ({payment?.monthCount})</Text>
                                    </View>
                                    <View style={styles.tableCol}>

                                        <View style={[styles.row]}>
                                            <View style={styles.tableColRight}>
                                                <Text style={styles.tableCell}>{payment?.monthPayment?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} $</Text>
                                            </View>
                                            <View style={{width:'50%'}}>
                                                <Text style={styles.tableCell}>{payment?.monthPaymentSum?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} сум </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            }

                            <View style={[styles.tableRow]}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}> Итоговая цена</Text>
                                </View>
                                <View style={styles.tableCol}>

                                    <View style={[styles.row]}>
                                        <View style={styles.tableColRight}>
                                            <Text style={styles.tableCell}>{payment?.amountExcludingSkidk?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} $</Text>
                                        </View>
                                        <View style={{width:'50%'}}>
                                            <Text style={styles.tableCell}>{payment?.amountExcludingSkidkSum?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} сум </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                }


                <View style={{...styles.bottomInfo, marginTop: "15px"}}>
                    <View style={[styles.row, styles.listItem]}>
                        <Text>
                            Актуальный курс валют
                        </Text>
                        <Text>
                            {data?.kurs}$
                        </Text>
                    </View>

                </View>
                <View style={styles.bottomInfo}>
                    <View style={[styles.row, styles.listItem]}>
                        <Text>
                            Договора заключаются и оплачиваются строго в национальной валюте Узб
                        </Text>
                    </View>

                </View>


                <View style={{...styles.bottomInfo, marginTop: "15px", fontWeight: "bold"}}>
                    <View style={[styles.row, styles.listItem]}>
                        <Text>
                            Менеджер
                        </Text>
                        <Text>
                            {data?.sellerName}
                        </Text>
                    </View>

                </View>
                <View style={{...styles.bottomInfo, fontWeight: "bold"}}>
                    <View style={[styles.row, styles.listItem]}>
                        <Text>
                            Контакты
                        </Text>
                        <Text>
                            {data?.sellerPhoneNumber}
                        </Text>
                    </View>

                </View>

                <View style={{...styles.bottomInfo, marginTop: "15px"}}>
                    <View style={[styles.row, styles.listItem]}>
                        <Text>
                            Дата прайса
                        </Text>
                        <Text>
                            {moment(data?.nowTime).format("DD.MM.YYYY")}
                        </Text>
                    </View>

                </View>
                <View style={styles.bottomInfo}>
                    <View style={[styles.row, styles.listItem]}>
                        <Text>
                            Цены действительны до первого повышения
                        </Text>
                    </View>

                </View>

                <View style={[styles.center, styles.marginY]}>
                    <Text style={styles.title}>
                        +998 78 113-16-66
                    </Text>
                </View>
            </Page>
        </Document>
    );
}


CreatPDF.propTypes = {
    data: PropTypes.object
}


