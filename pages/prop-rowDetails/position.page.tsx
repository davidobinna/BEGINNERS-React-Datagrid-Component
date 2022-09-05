import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

const columns = [
  { name: 'name', header: 'Name', minWidth: 50 },
  { name: 'age', header: 'Age', minWidth: 1000 },
];

const gridStyle = { minHeight: 550 };

const dataSource = [
  { id: 1, name: 'John McQueen', age: 35 },
  { id: 2, name: 'Mary Stones', age: 25 },
  { id: 3, name: 'Robert Fil', age: 27 },
  { id: 4, name: 'Roger Robson', age: 81 },
  { id: 5, name: 'Billary Konwik', age: 18 },
  { id: 6, name: 'Bob Martin', age: 18 },
  { id: 7, name: 'Matthew Richardson', age: 54 },
  { id: 8, name: 'Ritchie Peterson', age: 54 },
  { id: 9, name: 'Bryan Martin', age: 40 },
  { id: 10, name: 'Mark Martin', age: 44 },
  { id: 11, name: 'Michelle Sebastian', age: 24 },
  { id: 12, name: 'Michelle Sullivan', age: 61 },
  { id: 13, name: 'Jordan Bike', age: 16 },
  { id: 14, name: 'Nelson Ford', age: 34 },
  { id: 15, name: 'Tim Cheap', age: 3 },
  { id: 16, name: 'Robert Carlson', age: 31 },
  { id: 17, name: 'Johny Perterson', age: 40 },
];

const renderRowDetails = () => {
  return (
    <div style={{ padding: 20, background: 'darkgreen' }}>
      <h3>Row details:</h3>
      <div>1</div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        rowExpandHeight={150}
        renderRowDetails={renderRowDetails}
        dataSource={dataSource}
        style={gridStyle}
        rowDetailsWidth="viewport-width"
        rtl
      />
    </div>
  );
}
