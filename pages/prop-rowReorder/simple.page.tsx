import React from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 600 };

const columns = [
  { name: 'id', defaultWidth: 60, header: 'Id' },
  { name: 'name', defaultWidth: 120, header: 'Name' },
  {
    name: 'country',
    defaultWidth: 120,
    header: 'Country',
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'age', type: 'number', defaultWidth: 120, header: 'Age' },
];

const App = () => {
  return (
    <div>
      <h3>Grid with row reorder</h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        rowHeight={40}
        maxRowHeight={400}
        rowReorderColumn
        columns={columns}
        dataSource={people}
      />
    </div>
  );
};

export default () => <App />;
