import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const columns = [
  { name: 'id', header: 'Id', defaultWidth: 60 },
  { name: 'name', header: 'Name', defaultWidth: 120 },
  {
    name: 'country',
    header: 'Country',
    defaultWidth: 120,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'age', header: 'Age', type: 'number', defaultWidth: 120 },
];

const isRowReorderValidHandle = ({ dropRowIndex }) => {
  if (dropRowIndex === 4 || dropRowIndex === 5) {
    return false;
  }
  return true;
};

const App = () => {
  return (
    <div>
      <h3>Drag to reorder</h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        rowHeight={40}
        rowReorderColumn
        columns={columns}
        dataSource={[].concat(people)}
        isRowReorderValid={isRowReorderValidHandle}
      />
    </div>
  );
};

export default () => <App />;
