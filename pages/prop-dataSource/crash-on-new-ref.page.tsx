import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

const columns = [
  { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
  { name: 'age', header: 'Age', maxWidth: 1000, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 };

const dataSource = [
  { id: 1, name: 'John McQueen', age: 35 },
  { id: 2, name: 'Mary Stones', age: 25 },
  { id: 3, name: 'Robert Fil', age: 27 },
  { id: 4, name: 'Roger Robson', age: 81 },
  { id: 5, name: 'Billary Konwik', age: 18 },
  { id: 6, name: 'Bob Martin', age: 18 },
  { id: 7, name: 'Matthew Richardson', age: 54 },
  { id: 8, name: 'Ritchie Peterson', age: 54 },
  { id: 9, name: 'Bryan Martin', age: 40 },
  { id: 10, name: 'Mark Martin', age: 44 },
  { id: 11, name: 'Michelle Sebastian', age: 24 },
  { id: 12, name: 'Michelle Sullivan', age: 61 },
  { id: 13, name: 'Jordan Bike', age: 16 },
  { id: 14, name: 'Nelson Ford', age: 34 },
  { id: 15, name: 'Tim Cheap', age: 3 },
  { id: 16, name: 'Robert Carlson', age: 31 },
  { id: 17, name: 'Johny Perterson', age: 40 },
];

export default () => {
  const [count, setCount] = React.useState(2);

  React.useEffect(() => {
    if (count !== 0) {
      setCount(count - 1);
    }
  }, [count]);

  const currentDataSource = count !== 0 ? [] : dataSource;

  console.log(
    'rendered with count: ',
    count,
    ' and dataSource: ',
    currentDataSource
  );

  return (
    <ReactDataGrid
      idProperty="id"
      columns={columns}
      licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
      dataSource={currentDataSource}
      style={gridStyle}
    />
  );
};
