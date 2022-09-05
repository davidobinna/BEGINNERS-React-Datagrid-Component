import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../community-edition';

import BoolEditor from '../../../community-edition/BoolEditor';
import SelectEditor from '../../../community-edition/SelectEditor';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';

const gridStyle = { minHeight: 320 };

const peopleData = [
  { id: 1, name: 'Will', country: 'de', citizen: true },
  { id: 2, name: 'Bill', country: 'fr', citizen: true },
  { id: 3, name: 'Matt', country: 'rus', citizen: true },
  { id: 4, name: 'Steve', country: 'jpn', citizen: true },
  { id: 5, name: 'John', country: 'cn', citizen: true },
  { id: 6, name: 'Tom', country: 'it', citizen: true },
  { id: 7, name: 'Tim', country: 'mx', citizen: true },
];

const countryData = [
  { id: 'uk', label: 'United Kindom' },
  { id: 'usa', label: 'United States' },
  { id: 'can', label: 'Canada' },
  { id: 'aus', label: 'Australia' },
  { id: 'jpn', label: 'Japan' },
  { id: 'cn', label: 'China' },
  { id: 'fr', label: 'France' },
  { id: 'de', label: 'Germany' },
  { id: 'it', label: 'Italy' },
  { id: 'mx', label: 'Mexico' },
  { id: 'bz', label: 'Brazil' },
  { id: 'rus', label: 'Russia' },
  { id: 'in', label: 'India' },
];

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    minWidth: 100,
    type: 'number',
  },
  {
    name: 'name',
    header: 'Name',
    defaultFlex: 1,
    minWidth: 200,
    maxWidth: 300,
  },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    width: 100,
    render: ({ value }) => {
      const tObj = countryData.find(country => country.id === value);
      return tObj ? tObj.label : '?Unknown?';
    },
    editor: SelectEditor,
    editorProps: {
      idProperty: 'id',
      dataSource: countryData,
      collapseOnSelect: true,
      clearIcon: null,
    },
    filterEditor: SelectFilter,
    filterEditorProps: {
      idProperty: 'id',
      dataSource: countryData,
      collapseOnSelect: true,
    },
  },
  {
    name: 'citizen',
    header: 'Citizen?',
    width: 100,
    render: ({ value }) => (value ? 'yes' : 'no'),
    editor: BoolEditor,
  },
];

const filterValue = [
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  { name: 'country', operator: 'contain', type: 'string', value: '' },
];

const App = () => {
  const [dataSource, setDataSource] = useState(peopleData);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex] = Object.assign({}, data[rowIndex], { [columnId]: value });

      setDataSource(data);
    },
    [dataSource]
  );

  return (
    <div>
      <h3>Persons Manager </h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        editable={true}
        onEditComplete={onEditComplete}
        columns={columns}
        dataSource={dataSource}
        defaultFilterValue={filterValue}
      />
    </div>
  );
};

export default () => <App />;
