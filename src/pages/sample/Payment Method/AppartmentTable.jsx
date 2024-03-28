import {Button, Popconfirm, Space, Table, Tag} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";

const AppartmentTable = ({data,deleteHandle}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const Delete = async (id) => {
        deleteHandle('/PaymentMetod',id)
    };


    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/payment/add')
    };
    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            id: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Скидка',
            dataIndex: 'discount',
            id: 'discount',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Первый взнос',
            dataIndex: 'fristPay',
            id: 'fristPay',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Количество месяцев',
            dataIndex: 'monthCount',
            id: 'monthCount',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Количество месяцев',
            dataIndex: 'activate',
            id: 'activate',
            render: (text) => <Tag color={text ? "#007fd0": '#ff0000'}>{text ? 'Active' : 'No active'}</Tag>,
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => Edit(record.id)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>
                    <Popconfirm
                        title={'Are you sure to delete this task?'}
                        description={'Delete the task '}
                        onConfirm={() => Delete(record.id)}>
                        <Button type='danger' icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
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



AppartmentTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default AppartmentTable;