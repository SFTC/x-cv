import React, { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';

export interface TableListItem {
  name: string;
  age: number;
  sex: string;
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<TableListItem>
      headerTitle="查询表格"
      rowKey="id"
      actionRef={actionRef}
      rowClassName={(_, index) => (index % 2 === 1 ? 'dark-row' : '')}
      toolBarRender={() => [
        <Button key="1" type="primary">
          <PlusOutlined /> 新建
        </Button>,
      ]}
      request={async (params = {}) =>
        request<{
          data: TableListItem[];
        }>(
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/demo/table/basic',
          {
            params,
          },
        )
      }
      columns={columns}
    />
  );
};
