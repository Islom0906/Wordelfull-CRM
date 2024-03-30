import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Row, Select, Space, Spin} from 'antd';
import apiService from '../../../@crema/services/apis/api';
import {useQuery} from 'react-query';
import SellingTable from "./SellingTable";
import {PiBroomFill} from "react-icons/pi";

const Index = () => {
    const [form] = Form.useForm();
    const [filterStatus, setFilterStatus] = useState("")
    const [filterId, setFilterId] = useState({
        slotId:null,
        houseId:null,
        floorId:null
    })




    // query-slot-get
    const {data: slotData, refetch: slotFetch} = useQuery(
        'get-slot',
        () => apiService.getData('/Slot'),
        {
            enabled: false,
        },
    );
    // query-house-get
    const {data: houseData, refetch: houseFetch,remove:removeHouse} = useQuery(
        'get-house',
        () => apiService.getData(`/House?slotId=${filterId?.slotId}`),
        {
            enabled: false,
        },
    );

    // query-floor-get
    const {data: floorData, refetch: floorFetch,remove:removeFloor} = useQuery(
        'get-floor',
        () => apiService.getData(`/Floor?housId=${filterId?.houseId}`),
        {
            enabled: false,
        },
    );

    // get apartment
    const {
        data:apartmentData,
        isLoading: getLoading,
        refetch
    } = useQuery('selling-apartment-get', () => apiService.getData(`/Apartment/?${filterStatus ? `status=${filterStatus}` : ""}${filterId?.slotId ?`&SlotId=${filterId?.slotId}`:""}${filterId?.houseId ?`&HouseId=${filterId?.houseId}`:""}${filterId?.floorId ?`&FlorId=${filterId?.floorId}`:""}`), {
        // enabled:false,
        onError: (error) => {

            message.error(error);
            // Handle the error
        },
    });


    useEffect(() => {
        slotFetch()
    }, []);
    // refetch house
    useEffect(() => {
        if (filterId?.slotId){
        houseFetch()

        }
    }, [filterId?.slotId]);

    // refetch floor
    useEffect(() => {
        if (filterId?.houseId){
            floorFetch()

        }
    }, [filterId?.houseId]);

    useEffect(() => {
        refetch()
    }, [filterStatus,filterId]);

    const onChangeFilterStatus = (data) => {
        setFilterStatus(data)
    }

    // option status
    const optionsStatusFilter = useMemo(() => {

        return [
            {
                value: '',
                label: 'Все',
            },
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
        ]
    }, []);


    // option slot
    const optionsSlot = useMemo(() => {
        return slotData?.result?.map((option) => {
            return {
                value: option?.id,
                label: option?.name,
            };
        });
    }, [slotData]);


    const onChangeSlot=(id)=>{
        form.setFieldsValue({houseId:null,floorId:null})
        setFilterId({
            slotId: id,
            houseId: null,
            floorId: null
        })
    }


    // option house
    const optionsHouse = useMemo(() => {

        return houseData?.result?.map((option) => {
            return {
                value: option?.id,
                label: option?.name,
            };
        });
    }, [houseData]);
    const onChangeHouse=(id)=>{
        form.setFieldsValue({floorId:null})
        setFilterId(prevState => ({...prevState,houseId:id,floorId: null}))
    }

    //option floor
    const optionsFloor = useMemo(() => {
        return floorData?.result?.map((option) => {
            return {
                value: option?.id,
                label: option?.name,
            };
        });
    }, [floorData]);
    const onChangeFloor=(id)=>{
        setFilterId(prevState => ({...prevState,floorId:id}))
    }

    // clear filter
    const clearFiler=()=>{
        form.setFieldsValue({slotId:null,houseId:null,floorId:null,status:""})
        setFilterId({
            slotId: null,
            houseId: null,
            floorId: null
        })
        setFilterStatus("")
        removeHouse()
        removeFloor()
    }

    return (
        <div className={'site-space-compact-wrapper'}>
            <Space direction={'vertical'} style={{width: '100%'}}>
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
                    autoComplete="off"
                >
                <Row gutter={20}>
                    <Col span={6}>
                        <Form.Item
                            label={'Выберите слот'}
                            name={'slotId'}

                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                optionLabelProp='label'
                                onChange={onChangeSlot}
                                options={optionsSlot}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label={'Выберите дом'}
                            name={'houseId'}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                optionLabelProp='label'
                                onChange={onChangeHouse}
                                options={optionsHouse}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label={'Выберите этаж'}
                            name={'floorId'}

                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                optionLabelProp='label'
                                options={optionsFloor}
                                onChange={onChangeFloor}
                            />
                        </Form.Item>
                    </Col>
                    <Col  span={6}>
                        <Form.Item
                            label={'Фильтровать по статусу'}
                            name={'status'}

                            wrapperCol={{
                                span: 24,
                            }}
                        >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            optionLabelProp='label'
                            onChange={onChangeFilterStatus}
                            options={optionsStatusFilter}
                        />
                        </Form.Item>
                    </Col>
                </Row>

                </Form>
                <Row gutter={20}>
                    <Col offset={18} span={6}>
                        <Button
                            type='dashed'
                            icon={<PiBroomFill />}
                            style={{width: '100%'}}
                            onClick={clearFiler}>
                            Очистка фильтра
                        </Button>
                    </Col>
                </Row>
                <Spin
                    size='medium'
                    spinning={getLoading}>
                    <SellingTable
                        data={apartmentData?.result}
                        refetch={refetch}
                    />
                </Spin>
            </Space>
        </div>
    );
};

export default Index;
