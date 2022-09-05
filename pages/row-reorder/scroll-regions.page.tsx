import React from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 300 };

const groups = [
  { name: 'group1', group: 'group2' },
  { name: 'group2' },
  { name: 'group3' },
];

const columns = [
  { name: 'id', defaultWidth: 60, header: 'Id', group: 'group1' },
  { name: 'name', defaultWidth: 120, header: 'Name', group: 'group1' },
  {
    name: 'country',
    defaultWidth: 120,
    header: 'Country',
    group: 'group1',
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  {
    name: 'age',
    type: 'number',
    defaultWidth: 120,
    header: 'Age',
    group: 'group1',
  },
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
        rowReorderAutoScroll
        rowReorderScrollByAmount={15}
        groups={groups}
      />
    </div>
  );
};

export default () => <App />;
