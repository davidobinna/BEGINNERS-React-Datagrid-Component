import React, { StrictMode } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';

const gridStyle = { minHeight: 550 };

const columns = [
  { name: 'id', header: 'Id', defaultWidth: 80, defaultVisible: false },
  {
    name: 'name',
    sortable: false,
    header: 'Name (column not sortable)',
    defaultFlex: 1,
  },
  { name: 'age', header: 'Age', type: 'number', defaultFlex: 1 },
];

const dataSource = [
  { name: 'Little Johny', age: 8, id: 0 },
  { name: 'John Grayner', age: 35, id: 1 },
  { name: 'Mary Stones', age: 35, id: 2 },
  { name: 'Robert Fil', age: 17, id: 3 },
  { name: 'Bob Margin', age: 17, id: 4 },
  { name: 'Hillary Wilson', age: 53, id: 5 },
  { name: 'Franklin Richardson', age: 37, id: 6 },
];

const App = () => {
  return (
    <ReactDataGrid
      idProperty="id"
      style={gridStyle}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default () => <App />;
