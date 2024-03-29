import {PageContainer} from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {List, message} from "antd";
import {listInterfaceInfoByPage} from "@/services/yixianapi-backend/interfaceInfoController";

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfo[]>([]);
  const [total, setTotal] = useState<number>(0)

  const loadData = async (current = 1, pageSize = 10) => {
    setLoading(true);
    try {
      const res = await listInterfaceInfoByPage({
        current: current,
        pageSize: pageSize,
        status: 1,
      })
      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? 0);
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <PageContainer title="在线接口开放平台">
      <List
        className="my-List"
        loading={loading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => {
          const apiLink = `/interface_info/${item.id}`;
          return (
            <List.Item actions={[<a key={item.id} href={apiLink}>查看</a>]}>
              <List.Item.Meta
                title={<a href={apiLink}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
          )
        }}
        pagination={
          {
            pageSize: 10,
            total: total,
            showTotal(total: number) {
              return '总数: ' + total;
            },
            onChange(page, pageSize) {
              loadData(page, pageSize);
            }
          }
        }
      />
    </PageContainer>
  );
};

export default Index;
