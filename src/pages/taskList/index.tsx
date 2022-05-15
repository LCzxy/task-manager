import React from 'react';
import { Button, Table } from 'antd';
import QueryArea from './components/QueryArea';
import './index.scss';

const TaskList = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
    },
    {
      title: '状态',
      dataIndex: 'state',
    },
    {
      title: '优先级',
      dataIndex: 'level',
    },
    {
      title: '负责人',
      dataIndex: 'responseUser',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
    },
    {
      title: '到期日',
      dataIndex: 'endTime',
    },
    {
      title: '预估工作量',
      dataIndex: 'workLoad',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '操作',
      dataIndex: 'opt',
    },
  ];
  return (
    <>
      <div className="container-header">
        <span className="left">任务列表</span>
        <span className="right">
          <Button type="primary">创建任务</Button>
        </span>
      </div>
      <div className="container-content">
        <QueryArea />
        <Table
          size="middle"
          className="mt-12"
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </>
  );
};

export default TaskList;
