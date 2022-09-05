import React, { useState, useCallback } from 'react';
import ReactDataGrid from '../../../enterprise-edition';

import Button from '@inovua/reactdatagrid-community/packages/Button';

const gridStyle = { marginTop: 10, minHeight: 300 };

const dataSource = [
  { name: 'John Grayner', age: 35, id: 0 },
  { name: 'Mary Stones', age: 25, id: 1 },
  { name: 'Robert Fil', age: 27, id: 2 },
  { name: 'Bob Margin', age: 17, id: 3 },
  { name: 'Hillary Wilson', age: 53, id: 4 },
  { name: 'Franklin Richardson', age: 37, id: 5 },
];

const columns = [
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'age', header: 'Age', minWidth: 120 },
];

const App = () => {
  const [gridRef, setGridRef] = useState(null);
  const [focused, setFocused] = useState(false);

  const onFocus = useCallback(event => {
    setFocused(true);
  }, []);

  const onBlur = useCallback(event => {
    setFocused(false);
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Button theme="default-dark" onClick={() => gridRef.current.focus()}>
          Focus grid
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        The grid is {focused ? 'focused' : 'blurred'}.
      </div>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        onReady={setGridRef}
        enableKeyboardNavigation
        style={gridStyle}
        onFocus={onFocus}
        onBlur={onBlur}
        columns={columns}
        dataSource={dataSource}
        rowReorderColumn
      />
    </div>
  );
};

export default () => <App />;
