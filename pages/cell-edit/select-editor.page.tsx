import React, { useState, useCallback } from 'react';
import ReactDataGrid from '../../../enterprise-edition';
import SelectEditor from '../../../enterprise-edition/SelectEditor';

const DEBUG = true;

const columns = [];

for (let c = 1; c <= 40; c++) {
  columns.push({
    name: `col${c}`,
    header: `Column ${c}`,
    minWidth: 150,
    defaultFlex: 1,
    editor: SelectEditor,
    editorProps: {
      idProperty: 'id',
      dataSource: ['Item 1', 'Item 2', 'Item 3'].map(element => ({
        id: element,
        label: element,
      })),
      clearIcon: null,
    },
  });
}

const gridStyle = { minHeight: 550 };

const initialDataSource = [];

for (let r = 1; r < 10; r++) {
  const data = {};
  for (let c = 1; c <= 40; c++) {
    data[`col${c}`] = `Row ${r} - Col ${c}`;
  }

  initialDataSource.push(data);
}

export default function App() {
  const [dataSource, setDataSource] = useState(initialDataSource);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

  return (
    <ReactDataGrid
      idProperty="id"
      theme="default-dark"
      licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
      columns={columns}
      dataSource={dataSource}
      style={gridStyle}
      scrollProps={{
        autoHide: false,
        alwaysShowTrack: true,
        scrollThumbWidth: 15,
        scrollThumbOverWidth: 20,
        scrollThumbStyle: {
          background: '#ff7474',
        },
      }}
      editable={true}
      onEditComplete={onEditComplete}
    />
  );
}
