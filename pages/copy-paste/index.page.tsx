import React, { useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import Checkbox from '../../../community-edition/packages/CheckBox';

const columns = [
  { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
  { name: 'age', header: 'Age', maxWidth: 1000, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 };

const dataSource = [
  { id: 1, name: 'John McQueen', age: 35 },
  { id: 2, name: 'Mary Stones', age: 25 },
  { id: 3, name: 'Robert Fil', age: 27 },
  { id: 4, name: 'Roger Robson', age: 81 },
  { id: 5, name: 'Billary Konwik', age: 18 },
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
        onCopySelectedCellsChange={(cells: any) => {
          console.log(cells);
        }}
        defaultCellSelection={{}}
        enableClipboard
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        clipboardSeparator="\n"
        copySpreadsheetCompatibleString={copySpreadsheetCompatibleString}
      />
    </div>
  );
};

export default () => <App />;
