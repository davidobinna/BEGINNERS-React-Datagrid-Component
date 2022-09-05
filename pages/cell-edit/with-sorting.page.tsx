import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    minWidth: 300,
    type: 'number',
  },
  { name: 'name', header: 'Name', defaultFlex: 1, minWidth: 250 },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    minWidth: 100,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultFlex: 1, minWidth: 300 },
  { name: 'age', header: 'Age', minWidth: 150, type: 'number' },
];

const App = () => {
  const [dataSource, setDataSource] = useState(people);

  const onEditComplete = useCallback(
    ({ value, columnId, rowId }) => {
      const data = [...dataSource];
      data[rowId][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

  return (
    <div>
      <h3>Grid with inline edit</h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        onEditComplete={onEditComplete}
        editable={true}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
