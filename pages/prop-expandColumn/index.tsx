import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import people from '../people';

const gridStyle = { minHeight: 550 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    type: 'number',
    defaultWidth: 80,
  },
  {
    id: 'desc',
    header: 'Description',
    defaultFlex: 2,
    render: ({ data }) =>
      data.firstName + ', aged: ' + data.age + '. Lives in ' + data.country,
  },
  { name: 'firstName', header: 'Name', defaultFlex: 1 },
  { name: 'email', header: 'Email', defaultFlex: 1 },
  { name: 'country', header: 'Country', defaultWidth: 100 },
  { name: 'age', header: 'Age', type: 'number', defaultFlex: 1 },
];

const expandColumn = ({ data }) => {
  if (data.country === 'uk') {
    return 'desc';
  }
};

const App = () => {
  return (
    <ReactDataGrid
      idProperty="id"
      theme="default-dark"
      licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
      expandColumn={expandColumn}
      style={gridStyle}
      columns={columns}
      dataSource={people}
    />
  );
};

export default () => <App />;
