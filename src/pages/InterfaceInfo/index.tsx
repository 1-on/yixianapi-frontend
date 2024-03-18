import {PageContainer} from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {Button, Card, Descriptions, DescriptionsProps, Form, Input, message, Space} from "antd";
import {getInterfaceInfoVoById, interfaceInfoInvoke} from "@/services/yixianapi-backend/interfaceInfoController";
import {useParams} from "@@/exports";
import {addInvokeNum} from "@/services/yixianapi-backend/userInterfaceInfoController";

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfo>();
  const [invokeRes, setInvokeRes] = useState<any>();
  const [invokeLoading, setInvokeLoading] = useState(false);
  const params = useParams();


  const loadData = async () => {
    if (!params.id) {
      message.error("参数不存在")
      return;
    }
    setLoading(true);
    try {
      const res = await getInterfaceInfoVoById({
        id: Number(params.id)
      })
      setData(res.data);
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  }


  const onFinish = async (values: any) => {
    if (!params.id) {
      message.error("接口不存在")
      return;
    }
    setInvokeLoading(true);
    try {
      const res = await interfaceInfoInvoke({
        ...values,
        id: params.id
      })
      setInvokeRes(res.data);
      message.success("请求成功")
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setInvokeLoading(false);
  };
  const addInvokeNumHandle = async () => {
    if (!params.id) {
      message.error("接口不存在")
      return;
    }
    const res = await addInvokeNum({
      interfaceInfoId: Number(params.id)
    })
    if (res.code === 1) {
      message.success("成功" + res.data);
    } else {
      message.error("错误 " + res.message);
    }
  }

  useEffect(() => {
    loadData()
  }, []);
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '描述',
      children: data?.description,
    },
    {
      key: '2',
      label: '请求地址',
      children: data?.url,
    },
    {
      key: '3',
      label: '请求方法',
      children: data?.method,
    },
    {
      key: '4',
      label: '请求参数',
      children: data?.requestParams,
    },
    {
      key: '5',
      label: '请求头',
      children: data?.requestHeader,
    },
    {
      key: '6',
      label: '响应头',
      children: data?.responseHeader,
    },
    {
      key: '7',
      label: '接口状态',
      children: data?.status === 1 ? '开启' : '关闭',
    },
    {
      key: '8',
      label: '创建时间',
      children: data?.createTime,
    },
    {
      key: '9',
      label: '更新时间',
      children: data?.updateTime,
    },

  ];
  return (
    <PageContainer title="查看接口文档">
      <Card>
        {
          data ? (<Descriptions title={data.name} column={1} items={items}/>) : (<>接口不存在</>)
        }
      </Card>
      <Card title={"在线测试"}>
        <Form
          layout={"vertical"}
          name="invoke"
          onFinish={onFinish}
        >
          <Form.Item
            label="请求参数"
            name="userRequestParams"
          >
            <Input.TextArea/>
          </Form.Item>


          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                调用
              </Button>
              <Button type="primary" onClick={addInvokeNumHandle}>
                调用次数 + 5
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      <Card title={"返回结果"} loading={invokeLoading}>
        {invokeRes}
      </Card>
    </PageContainer>
  );
};

export default Index;
