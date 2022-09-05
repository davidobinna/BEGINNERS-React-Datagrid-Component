import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 355 };

const isStartEditKeyPressed = ({ event }) => event.key === 'k' && event.ctrlKey;

const columns = [
  { name: 'id', header: 'Id', defaultWidth: 300, type: 'number' },
  { name: 'name', header: 'Name', defaultWidth: 350 },
  {
    name: 'country',
    header: 'Country',
    defaultWidth: 200,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultWidth: 350 },
  { name: 'age', header: 'Age', defaultWidth: 250, type: 'number' },
];

const App = () => {
  const [dataSource, setDataSource] = useState(people);

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
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey="AppName=multi_app,Company=Ramco,ExpiryDate=2022-05-07,LicenseDeveloperCount=3,LicenseType=multi_app,Ref=RamcoMultipleAppLicenseRef,Z=-1716786780-183550988815965548371833524863-17167867801805052899"
        style={gridStyle}
        onEditComplete={onEditComplete}
        editable
        isStartEditKeyPressed={isStartEditKeyPressed}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
