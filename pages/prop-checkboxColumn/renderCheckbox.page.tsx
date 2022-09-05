import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    defaultWidth: 60,
    type: 'number',
  },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultFlex: 1 },
  { name: 'age', header: 'Age', defaultFlex: 1, type: 'number' },
];

const App = () => {
  const [enableSelection, setEnableSelection] = useState(true);
  const [selected, setSelected] = useState(null);

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected);
  }, []);

  return (
    <div>
      <h3>DataGrid with selection and with keyboard navigation</h3>
      <CheckBox
        style={{ marginBottom: 20 }}
        checked={enableSelection}
        onChange={checked => {
          setSelected(null);
          setEnableSelection(checked);
        }}
      >
        Enable selection
      </CheckBox>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={people}
        enableSelection={enableSelection}
        onSelectionChange={onSelectionChange}
        checkboxColumn={{
          renderCheckbox: () => {
            return <div>X</div>;
          },
        }}
      />
      <p>
        Selected row id: {selected == null ? 'none' : JSON.stringify(selected)}.
      </p>
    </div>
  );
};

export default () => <App />;
