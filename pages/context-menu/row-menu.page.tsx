import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 250 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    defaultWidth: 80,
    type: 'number',
  },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultFlex: 1 },
  { name: 'age', header: 'Age', defaultFlex: 1, type: 'number' },
];

const App = () => {
  const renderRowContextMenu = (menuProps, { rowProps, cellProps }) => {
    menuProps.autoDismiss = true;
    menuProps.items = [
      {
        label: 'Row ' + rowProps.rowIndex,
      },
      {
        label:
          'Want to visit ' +
          (cellProps.id === 'city'
            ? rowProps.data.city
            : rowProps.data.country) +
          '?',
      },
    ];
  };

  return (
    <div>
      <h3>Grid with row context menu</h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        renderRowContextMenu={renderRowContextMenu}
        columns={columns}
        dataSource={people}
      />
    </div>
  );
};

export default () => <App />;
