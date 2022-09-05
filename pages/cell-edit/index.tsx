import React, { useState, useCallback, useEffect } from 'react';

import ReactDataGrid from '../../../community-edition';
import Button from '../../../community-edition/packages/Button';
import people from '../people';

const gridStyle = { minHeight: 550 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    minWidth: 300,
    type: 'number',
  },
  {
    name: 'name',
    header: 'Name',
    defaultFlex: 1,
    minWidth: 250,
  },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    minWidth: 100,
  },
  { name: 'city', header: 'City', defaultFlex: 1, minWidth: 300 },
  { name: 'age', header: 'Age', minWidth: 150, type: 'number' },
  { name: 'email', header: 'Email', defaultFlex: 1, minWidth: 150 },
  {
    name: 'student',
    header: 'Student',
    defaultFlex: 1,
    render: ({ value }) => (value === true ? 'Yes' : 'No'),
  },
];

const App = () => {
  const [dataSource, setDataSource] = useState(people);
  const [gridRef, setGridRef] = useState(null);

  useEffect(() => {
    // console.log('grid ref: ', gridRef);
  }, [gridRef]);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

  const startEdit = () => {
    gridRef.current.startEdit({ columnId: 'name', rowIndex: 3 });
  };

  return (
    <div>
      <h3>Grid with inline edit</h3>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={startEdit}>Start edit</Button>
      </div>

      <ReactDataGrid
        idProperty="id"
        handle={setGridRef}
        defaultGroupBy={[]}
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
