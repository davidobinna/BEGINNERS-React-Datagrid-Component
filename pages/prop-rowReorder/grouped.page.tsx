import React, { useState } from 'react';

import ReactDataGrid from '../../../enterprise-edition';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';
import Button from '@inovua/reactdatagrid-community/packages/Button';

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    type: 'number',
    defaultWidth: 80,
    groupBy: false,
  },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'country', header: 'Country', defaultWidth: 150 },
  { name: 'city', header: 'City', defaultWidth: 150 },
  { name: 'age', header: 'Age', defaultWidth: 100, type: 'number' },
  { name: 'email', header: 'Email', defaultWidth: 150, defaultFlex: 1 },
];

const App = () => {
  const [gridRef, setGridRef] = useState(null);
  const [stickyGroupRows, setStickyGroupRows] = useState(false);
  const [
    allowRowReoderBetweenGroups,
    setAllowRowReoderBetweenGroups,
  ] = useState(true);
  const [smallGrid, setSmallGrid] = useState<boolean>(false);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={stickyGroupRows}
          onChange={setStickyGroupRows}
        >
          Use sticky group rows
        </CheckBox>
      </div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={allowRowReoderBetweenGroups}
          onChange={setAllowRowReoderBetweenGroups}
        >
          AllowRowReoderBetweenGroups
        </CheckBox>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button
          theme="default-dark"
          onClick={() => {
            console.log('ref', gridRef.current);
            gridRef.current.setItemAt(
              2,
              { country: 'usa' },
              { replace: false }
            );
          }}
        >
          Set group by country
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={smallGrid}
          onChange={setSmallGrid}
        >
          Small grid
        </CheckBox>
      </div>
      <ReactDataGrid
        idProperty="id"
        handle={setGridRef}
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={{ minHeight: smallGrid ? 450 : 750 }}
        stickyGroupRows={stickyGroupRows}
        defaultGroupBy={['country']}
        columns={columns}
        dataSource={people}
        rowReorderColumn
        allowRowReoderBetweenGroups={allowRowReoderBetweenGroups}
      />
    </div>
  );
};

export default () => <App />;
