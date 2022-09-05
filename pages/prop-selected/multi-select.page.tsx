import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const columns = [
  { name: 'id', defaultWidth: 60, header: 'Id', defaultVisible: false },
  { name: 'name', defaultFlex: 1, header: 'Name' },
  {
    name: 'country',
    defaultFlex: 1,
    header: 'Country',
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'age', type: 'number', defaultFlex: 1, header: 'Age' },
  { name: 'email', header: 'Email', defaultFlex: 1 },
];

const App = () => {
  const [selected, setSelected] = useState({ 1: true, 2: true });
  const [multiSelect, setMultiSelect] = useState(true);

  const onSelectionChange = useCallback(({ selected: selectedMap }) => {
    setSelected(selectedMap);
  }, []);

  return (
    <div>
      <p>
        Selected rows:{' '}
        {selected == null
          ? 'none'
          : JSON.stringify(
              typeof selected === 'object' ? Object.keys(selected) : selected
            )}
        .
      </p>
      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={multiSelect} onChange={setMultiSelect}>
          multiSelect
        </CheckBox>
      </div>
      <ReactDataGrid
        idProperty="id"
        multiSelect={multiSelect}
        selected={selected}
        onSelectionChange={onSelectionChange}
        style={gridStyle}
        columns={columns}
        dataSource={people}
      />
    </div>
  );
};

export default () => <App />;
