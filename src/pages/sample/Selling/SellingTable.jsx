import {Button, Col, Form, Image, message, Modal, Row, Select, Space, Table} from "antd";
import PropTypes from "prop-types";
import {FaFilePdf} from "react-icons/fa";
import {AppLoader} from "../../../@crema";
import React, {useEffect, useMemo, useState} from "react";
import {useMutation} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {EditOutlined} from "@ant-design/icons";

const initialValueForm = {
    status: null,
};
const SellingTable = ({data,refetch,setPdfId}) => {

    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId, setEditId] = useState(null)


    const {
        mutate: editStatusMutate,
        data: editStatus,
        isLoading: editStatusLoading,
        isSuccess: editStatusSuccess,
    } = useMutation(({url, data, id}) => apiService.editData(url, data, id), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    const CreatePDF = (id) => {
        setPdfId(id)
    };

    // status edit
    const EditStatus = (id) => {
        setIsModalOpen(true)
        setEditId(id)
    };


    const onFinish = (values) => {
        editStatusMutate({url: "/Apartment/SelerUpdateAsync", data: values, id: editId});
    }
    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                onFinish(values);
            })
            .catch((errorInfo) => {
                console.log('Failed:', errorInfo);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (editStatusSuccess) {
            setIsModalOpen(false)
            form.setFieldsValue(initialValueForm)
            refetch()
        }
    }, [editStatus]);

    // option status
    const optionsStatus = useMemo(() => {
        return [
            {
                value: 1,
                label: 'Доступно',
            },
            {
                value: 2,
                label: 'Занято',
            },
            {
                value: 3,
                label: 'Продано',
            },
        ];
    }, []);


    // table columns
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
            render: (text,record) =>
                (
                    <Button
                        onClick={() => EditStatus(record.id)}
                        style={{backgroundColor:text === 1 ? "#0232f6" : text === 2 ? "#f7ff00" : "#ff0000",
                            color:text === 1 ?
                                "#fff" :
                                text === 2 ? "#000000" :
                                    "#fff"}}
                        icon={<EditOutlined />
                        }
                    >
                        {text === 1 ? "Empty" : text === 2 ? "Busied" : "Bought"}
                    </Button>
                )


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
                )
            },
        },
        {
            title: 'Событие',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        disabled={record.status!==1}
                        onClick={() => CreatePDF(record.id)}
                        type='outline'
                        icon={<FaFilePdf/>}>

                    </Button>

                </Space>
            ),
        },
    ];

    return (
        <div>
            <Modal title="Изменить активный" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {(editStatusLoading) ?
                    <AppLoader/> :
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{
                            span: 24
                        }}
                        wrapperCol={{
                            span: 24
                        }}
                        style={{
                            maxWidth: "100%"
                        }}
                        initialValues={initialValueForm}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Row gutter={20}>
                            <Col span={24}>
                                <Form.Item
                                    label={'Изменить статус дома'}
                                    name={'status'}
                                    rules={[{
                                        required: true, message: 'Вы должны выбрать состояние'
                                    }]}
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                >
                                    <Select
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder='Изменить статус дома'
                                        optionLabelProp='label'
                                        options={optionsStatus}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>


                    </Form>
                }
            </Modal>
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
    refetch:PropTypes.func,
    setPdfId:PropTypes.func
}

export default SellingTable;