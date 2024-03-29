import React, {useEffect, useState} from 'react';
import AppartmentTable from './AppartmentTable';
import {Button, Col, Input, message, Row, Space, Spin} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import apiService from '../../../@crema/services/apis/api';
import {useMutation, useQuery} from 'react-query';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';
import {useDispatch} from 'react-redux';

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    mutate,
    isSuccess,
    isLoading: deleteNewsLoading,
  } = useMutation(({url, id}) => apiService.deleteData(url, id),{
    onSuccess: () => {

      message.success('Success')
    },
    onError: (error) => {

      message.error(error.message);
      // Handle the error
    },
  });
  const {
    data,
    isLoading: getNewsLoading,
    refetch,
  } = useQuery('payment-get', () => apiService.getData('/PaymentMetod'), {
    // enabled:false,
    onError: (error) => {
      message.error(error.message);
      // Handle the error
    },
  });
  const [search, setSearch] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const deleteHandle = (url, id) => {
    mutate({url, id});
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  const addArticle = () => {
    dispatch({type: EDIT_DATA, payload: ''});
    navigate('/payment/add');
  };


  const serachFunc = (value) => {

    if (value === '') {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }

    const filterData = data?.result?.filter(
        (data) =>
            data.name.toLowerCase().includes(value.toLowerCase()));
    setSearch(filterData);
  };

  return (
      <div className={'site-space-compact-wrapper'}>
        <Space direction={'vertical'} style={{width: '100%'}}>
          <Row gutter={20}>
            <Col span={16}>
              <Input onChange={(e) => serachFunc(e.target.value)} />
            </Col>
            <Col span={8}>
              <Button
                  type='primary'
                  icon={<PlusOutlined />}
                  style={{width: '100%'}}
                  onClick={addArticle}>
                Add
              </Button>
            </Col>
          </Row>
          <Spin
              size='medium'
              spinning={getNewsLoading || deleteNewsLoading}>
            <AppartmentTable
                data={isSearch ? search : data?.result}
                deleteHandle={deleteHandle}
                refetch={refetch}
            />
          </Spin>
        </Space>
      </div>
  );
};

export default Index;
