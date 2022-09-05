import React from 'react';
import ReactDataGrid from '../../../enterprise-edition';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const redStyle = {
  color: '#ef9a9a',
};
const blueColor = {
  color: '#7986cb',
  padding: 0,
  height: '100%',
};

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    defaultWidth: 80,
    type: 'number',
  },
  {
    name: 'name',
    header: 'Name',
    defaultFlex: 1,
    headerProps: { headerCellStyle: blueColor },
  },
  {
    name: 'country',
    header: 'County',
    defaultFlex: 1,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  {
    name: 'city',
    header: 'City',
    defaultFlex: 1,
    headerProps: { style: redStyle },
  },
  { name: 'age', header: 'Age', defaultFlex: 1, type: 'number' },
];

const App = () => {
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        columns={columns}
        dataSource={people}
      />
    </div>
  );
};

export default () => <App />;
