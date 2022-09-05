import React from 'react';
import ReactDataGrid from '../../../enterprise-edition';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const renderSortTool: any = (direction, extraProps) => {
  // console.log('sort info', direction, extraProps);
};

const defaultSortInfo: any = [
  { name: 'email', dir: 1 },
  { name: 'age', dir: 1 },
];

// const defaultSortInfo: any = { name: 'email', dir: 1 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    type: 'number',
    defaultWidth: 80,
  },
  { name: 'firstName', header: 'Name', defaultFlex: 1 },
  { name: 'email', header: 'Email', defaultFlex: 1 },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'age', header: 'Age', type: 'number', defaultFlex: 1 },
];

const App = () => {
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        defaultSortInfo={defaultSortInfo}
        style={gridStyle}
        renderSortTool={renderSortTool}
        columns={columns}
        dataSource={people}
      />
    </div>
  );
};

export default () => <App />;
