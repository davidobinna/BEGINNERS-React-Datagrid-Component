import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import people from '../people';
import flags from '../flags';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

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
  const [selected, setSelected] = useState(null);
  const [showActiveRowIndicator, setShowActiveRowIndicator] = useState(true);
  const [cellSelection, setCellSelection] = useState({
    '2,name': true,
    '2,city': true,
  });
  const [enableSelection, setEnableSelection] = useState(true);

  const onSelectionChange = useCallback(({ selected: selectedMap, data }) => {
    const newSelected = Object.keys(selectedMap).map((id: any) => id * 1);

    setSelected(newSelected);
  }, []);

  return (
    <div>
      <h3>Multiple row selection - uncontrolled</h3>

      <div style={{ marginBottom: 20 }}>
        <CheckBox
          checked={showActiveRowIndicator}
          onChange={setShowActiveRowIndicator}
        >
          showActiveRowIndicator
        </CheckBox>
      </div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={enableSelection} onChange={setEnableSelection}>
          Enable row selection
        </CheckBox>
      </div>

      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        enableSelection={enableSelection}
        // multiSelect
        // onSelectionChange={onSelectionChange}
        style={gridStyle}
        columns={columns}
        dataSource={people}
        // preventRowSelectionOnClickWithMouseMove={false}
        // showActiveRowIndicator={showActiveRowIndicator}
        // activeRowIndicatorClassName="active-row-border"
        groupBy={[]}
        // checkboxColumn
        cellSelection={!enableSelection ? cellSelection : undefined}
        onCellSelectionChange={!enableSelection ? setCellSelection : undefined}
      />
      <p>
        Selected rows: {selected == null ? 'none' : JSON.stringify(selected)}.
      </p>
    </div>
  );
};

export default () => <App />;
