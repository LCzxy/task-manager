import React from 'react';
import { Input, Select, Space } from 'antd';

const { Option } = Select;
const { Search } = Input;

const QueryArea = () => {
  return (
    <Space>
      <Search placeholder="请输入标题" style={{ width: 180 }} />
      <Select style={{ width: 180 }} placeholder="请选择状态">
        <Option key={1} value={1}>
          钱钱钱
        </Option>
      </Select>
    </Space>
  );
};

export default QueryArea;
