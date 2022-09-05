import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';
import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

const gridStyle = { minHeight: 350 };

const isStartEditKeyPressed = ({ event }) => event.key === 'k' && event.ctrlKey;

const colString = 'abcdefghijklmnopqrstuvwxyz';
const records = 30;
const initialData = [...new Array(records)].map((_: any, index: number) => {
  const result = {
    id: index,
  };

  colString.split('').map((letter: string) => {
    result[letter] = letter.toUpperCase() + ' ' + (index + 1);
  });

  return result;
});

const columns = colString.split('').map((letter: string, index: number) => {
  return {
    defaultWith: 120,
    header: letter.toUpperCase() + ' ' + index,
    name: letter,
    // editable: index <= 8,
  };
});

const renderRowDetails = ({ data }) => {
  return (
    <div style={{ padding: 20 }}>
      <h3>Row details:</h3>
      <table>
        <tbody>
          {Object.keys(data).map((name, i) => {
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{data[name]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [dataSource, setDataSource] = useState(initialData);
  const [rowSelection, setRowSelection] = useState(false);
  const [cellSelection, setCellSelection] = useState({});
  const [cellSelectionFlag, setCellSelectionFlag] = useState(false);
  const [editable, setEditable] = useState(false);
  const [enableRowDetails, setEnableRowDetails] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  const [checkboxColumn, setCheckboxColumn] = useState(false);

  const [lastEdit, setLastEdit] = useState(null);

  const onEditStop = useCallback(({ value, columnId, rowIndex }) => {
    setLastEdit({ columnId, rowIndex, value });
  }, []);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

  const edit = lastEdit ? (
    <div style={{ marginBottom: 20 }}>
      Last edited value: [{lastEdit.columnId}][{lastEdit.rowIndex}] ={' '}
      {lastEdit && lastEdit.value}
    </div>
  ) : null;

  return (
    <div>
      <h3>Trigger inline edit via a custom keyboard shortcut: Ctrl+K</h3>

      <div style={{ marginBottom: '20px' }}>
        <CheckBox checked={rowSelection} onChange={setRowSelection}>
          Row selection
        </CheckBox>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <CheckBox checked={cellSelectionFlag} onChange={setCellSelectionFlag}>
          Cell selection
        </CheckBox>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <CheckBox checked={multiSelect} onChange={setMultiSelect}>
          Multi select
        </CheckBox>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <CheckBox checked={editable} onChange={setEditable}>
          Editable
        </CheckBox>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <CheckBox checked={enableRowDetails} onChange={setEnableRowDetails}>
          Row details
        </CheckBox>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <CheckBox checked={checkboxColumn} onChange={setCheckboxColumn}>
          Checkbox column
        </CheckBox>
      </div>

      <ReactDataGrid
        idProperty="id"
        key={`keys__${enableRowDetails}__${editable}`}
        style={gridStyle}
        columns={columns}
        dataSource={dataSource}
        // onEditComplete={editable ? onEditComplete : undefined}
        // editable={editable}
        // isStartEditKeyPressed={isStartEditKeyPressed}
        // enableSelection={rowSelection}
        cellSelection={cellSelectionFlag ? cellSelection : undefined}
        onCellSelectionChange={cellSelectionFlag ? setCellSelection : undefined}
        // rowExpandHeight={400}
        // renderRowDetails={enableRowDetails ? renderRowDetails : undefined}
        // onEditStop={editable ? onEditStop : undefined}
        // multiSelect={multiSelect}
        // checkboxColumn={checkboxColumn}
        // enableColumnHover
      />
    </div>
  );
};

export default () => <App />;
