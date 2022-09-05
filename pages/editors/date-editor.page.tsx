import React from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import DateEditor from '@inovua/reactdatagrid-community/DateEditor';

const gridStyle = { minHeight: 550 };

const renderRowDetails = ({ data, rowIndex }) => {
  return (
    <div key={rowIndex} style={{ padding: 20 }}>
      <h3>Row details:</h3>
      {data.name}
    </div>
  );
};

const columns = [
  { name: 'id', header: 'Id', defaultWidth: 80 },
  { name: 'name', header: 'Name', defaultWidth: 120 },
  {
    name: 'date',
    header: 'Date',
    editor: DateEditor,
    render: ({ value }) => <p>{value.toString()}</p>,
  },
];

export const App = () => {
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        rowExpandHeight={400}
        editable={true}
        renderRowDetails={renderRowDetails}
        columns={columns}
        dataSource={[
          {
            id: 1,
            name: 'John',
            date: new Date(),
          },
        ]}
      />
    </div>
  );
};

export default App;
