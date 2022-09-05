import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';
import Button from '../../../community-edition/packages/Button';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const isStartEditKeyPressed = ({ event }) => event.key === 'k' && event.ctrlKey;

const columns: any = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    minWidth: 50,
    type: 'number',
  },
  {
    name: 'name',
    header: 'Name',
    defaultFlex: 1,
    minWidth: 200,
    render: ({ value, data }) => {
      if (data.id === 3) {
        return `${value} (Not Editable)`;
      }

      return value;
    },
    editable: (_, { data }) => {
      return data.id !== 3;
    },
  },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    minWidth: 200,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultFlex: 1, minWidth: 200 },
  { name: 'age', header: 'Age', minWidth: 50, type: 'number', editable: false },
];

const App = () => {
  const [dataSource, setDataSource] = useState(people);
  const [gridRef, setGridRef] = useState(null);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

  return (
    <div>
      <h3>Trigger inline edit via a custom keyboard shortcut: Ctrl+K</h3>
      <h4>
        AGE columns is not editable. Use TAB/SHIFT+TAB while editing to navigate
        to next/prev editable cell.
      </h4>
      <div style={{ marginBottom: 20 }}>
        <Button
          theme="default-dark"
          onClick={() => gridRef.current.cancelEdit()}
        >
          cancelEdit
        </Button>
      </div>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        onReady={setGridRef}
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        onEditComplete={onEditComplete}
        editable={true}
        isStartEditKeyPressed={isStartEditKeyPressed}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
