import React from 'react';
import { Table, Spin, Button, Space, message } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { type InventoryItem, InventoryItemApi } from './api/InventoryItem';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (text: string | undefined) => text || <span style={{ color: '#aaa' }}>N/A</span>,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Category ID',
    dataIndex: 'categoryId',
    key: 'categoryId',
  },
];

const Inventory: React.FC = () => {
 

  return (
    <div>
      <h1>HIIII</h1>
    </div>
  );
};

export default Inventory;