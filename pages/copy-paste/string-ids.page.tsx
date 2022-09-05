import React, { useState } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import Checkbox from '../../../community-edition/packages/CheckBox';

const columns = [
  { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
  { name: 'age', header: 'Age', maxWidth: 1000, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 };

const dataSource = [
  { id: 'a', name: 'John McQueen', age: 35 },
  { id: 'b', name: 'Mary Stones', age: 25 },
  { id: 'c', name: 'Robert Fil', age: 27 },
  { id: 'd', name: 'Roger Robson', age: 81 },
  { id: 'e', name: 'Billary Konwik', age: 18 },
];

const App = () => {
  const [
    copySpreadsheetCompatibleString,
    setCopySpreadsheetCompatibleString,
  ] = useState(true);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Checkbox
          checked={copySpreadsheetCompatibleString}
          onChange={setCopySpreadsheetCompatibleString}
        >
          copySpreadsheetCompatibleString
        </Checkbox>
      </div>

      <ReactDataGrid
        defaultCellSelection={{}}
        enableClipboard
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        copySpreadsheetCompatibleString={copySpreadsheetCompatibleString}
      />
    </div>
  );
};

export default () => <App />;
