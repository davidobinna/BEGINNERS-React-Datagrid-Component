import React, { useState } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';
import flags from '../flags';
import ComboBox from '@inovua/reactdatagrid-community/packages/ComboBox';

const gridStyle = { minHeight: 550 };

const columns1 = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    type: 'number',
    maxWidth: 40,
  },
  { name: 'firstName', defaultWidth: 135, header: 'First Name' },
  { name: 'name', defaultWidth: 135, header: 'Last Name' },
  { name: 'email', groupBy: false, defaultWidth: 135, header: 'Email' },
  {
    id: 'col_4',
    header: 'Column 4',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_5',
    header: 'Column 5',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_6',
    header: 'Column 6',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_7',
    header: 'Column 7',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_8',
    header: 'Column 8',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_9',
    header: 'Column 9',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_10',
    header: 'Column 10',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_11',
    header: 'Column 11',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_12',
    header: 'Column 12',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_13',
    header: 'Column 13',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_14',
    header: 'Column 14',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_15',
    header: 'Column 15',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_16',
    header: 'Column 16',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_17',
    header: 'Column 17',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_18',
    header: 'Column 18',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_19',
    header: 'Column 19',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_20',
    header: 'Column 20',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_21',
    header: 'Column 21',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_22',
    header: 'Column 22',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_23',
    header: 'Column 23',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_24',
    header: 'Column 24',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_25',
    header: 'Column 25',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_26',
    header: 'Column 26',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_27',
    header: 'Column 27',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_28',
    header: 'Column 28',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_29',
    header: 'Column 29',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
  {
    id: 'col_30',
    header: 'Column 30',
    minWidth: 135,
    render: ({ data, rowIndex, columnIndex }) =>
      'Row ' + rowIndex + ', col ' + (columnIndex + 1),
  },
];

const comboDataSource = [
  { id: 'default', label: 'Default' },
  { id: 'default-light', label: 'Default Light' },
  { id: 'default-dark', label: 'Default Dark' },
  { id: 'amber-dark', label: 'Amber Dark' },
  { id: 'amber-light', label: 'Amber Light' },
  { id: 'blue-dark', label: 'Blue Dark' },
  { id: 'blue-light', label: 'Blue Light' },
  { id: 'green-dark', label: 'Green Dark' },
  { id: 'green-light', label: 'Green Light' },
  { id: 'pink-dark', label: 'Pink Dark' },
  { id: 'pink-light', label: 'Pink Light' },
];

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultWidth: 60,
    type: 'number',
    // resizable: false,
  },
  { name: 'name', header: 'Name', defaultWidth: 100 },
  {
    name: 'country',
    header: 'Country',
    defaultWidth: 100,
    // resizable: false,
    render: ({ value }: { value: string }) =>
      flags[value] ? flags[value] : value,
  },
  {
    name: 'city',
    header: 'City',
    defaultWidth: 120,
    resizable: false,
    enableColumnHover: false,
  },
  {
    name: 'age',
    header: 'Age',
    defaultWidth: 100,
    type: 'number',
  },
];

const App = () => {
  const [enableColumnHover, setEnableColumnHover] = useState(true);
  const [virtualizeColumns, setVirtualizeColumns] = useState(true);
  const [theme, setTheme] = useState('default-dark');

  return (
    <div>
      <h3>Grid with column hover</h3>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={enableColumnHover} onChange={setEnableColumnHover}>
          Enable column hover
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={virtualizeColumns} onChange={setVirtualizeColumns}>
          Virtualize columns
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <ComboBox
          dataSource={comboDataSource}
          value={theme}
          onChange={setTheme}
          changeValueOnNavigation
          collapseOnSelect
        ></ComboBox>
      </div>

      <ReactDataGrid
        idProperty="id"
        theme={theme}
        style={gridStyle}
        columns={columns}
        dataSource={people}
        enableColumnHover={enableColumnHover}
        virtualizeColumn={virtualizeColumns}
        columnHoverClassName="custom-column-hover-class-name"
      />
    </div>
  );
};

export default () => <App />;
