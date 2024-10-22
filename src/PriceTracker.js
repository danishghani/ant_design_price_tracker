import React, { useState } from 'react';
import { Table, Select, Button } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

const priceData = [
  { key: '1', blockchain: 'Ethereum', price: '$1800', change: '+2%' },
  { key: '2', blockchain: 'Polygon', price: '$1.20', change: '-1%' },
  { key: '3', blockchain: 'Solana', price: '$30', change: '+5%' },
];

const PriceTracker = () => {
  const [filteredData, setFilteredData] = useState(priceData);
  const [selectedBlockchain, setSelectedBlockchain] = useState('All');

  const handleFilterChange = (value) => {
    setSelectedBlockchain(value);
    if (value === 'All') {
      setFilteredData(priceData);
    } else {
      setFilteredData(priceData.filter(item => item.blockchain === value));
    }
  };

  const columns = [
    { title: 'Blockchain', dataIndex: 'blockchain', key: 'blockchain' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Change (24h)', dataIndex: 'change', key: 'change' },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Blockchain Price Tracker</h2>
      <div style={{ marginBottom: 16 }}>
        <Select
          defaultValue="All"
          style={{ width: 200, marginRight: 16 }}
          onChange={handleFilterChange}
        >
          <Option value="All">All Blockchains</Option>
          <Option value="Ethereum">Ethereum</Option>
          <Option value="Polygon">Polygon</Option>
          <Option value="Solana">Solana</Option>
        </Select>
        <Button type="primary">Refresh Prices</Button>
      </div>
      <Table columns={columns} dataSource={filteredData} />
    </div>
  );
};

export default PriceTracker;
