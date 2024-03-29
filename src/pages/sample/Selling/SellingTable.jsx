import {Button, Image, Space, Table, Tag} from "antd";
import PropTypes from "prop-types";
import {FaFilePdf} from "react-icons/fa";

const SellingTable = ({data}) => {


    const CreatePDF = (id) => {
        console.log(id)
    };









    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            id: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Площадь',
            dataIndex: 'size',
            id: 'size',
            render: (text) => <p>{text}м²</p>,
        },
        {
            title: 'Количество номеров',
            dataIndex: 'roomCount',
            id: 'roomCount',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Стоимость номера',
            dataIndex: 'price',
            id: 'price',
            render: (text) => <p>{text}$</p>,
        },
        {
            title: 'Состояние номера',
            dataIndex: 'status',
            id: 'status',
            render: (text) => <Tag color={text===0?"#0232f6":text===1 ?"#f5c306" :"#ff0000"}>{text===0?"Empty":text===1 ?"Busied" :"Bought"}</Tag>,
        },
        {
            title: 'Изображение комнаты',
            dataIndex: 'homeImage',
            id: 'homeImage',
            render: (image) => {
                return (
                    <Image
                        width={50}

                        src={`${process.env.REACT_APP_IMAGE_URL}/${image?.path}`}
                    />
                )},
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => CreatePDF(record.id)}
                        type='outline'
                        icon={<FaFilePdf />}>

                    </Button>

                </Space>
            ),
        },
    ];

    return (
        <div>

            <Table
                columns={columns}

                dataSource={data}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

SellingTable.propTypes = {
    data: PropTypes.array,
}

export default SellingTable;