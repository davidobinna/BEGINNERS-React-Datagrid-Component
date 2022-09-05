import React, { useState, useCallback } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';

const gridStyle = { minHeight: 550 };

const getColumns = ({ textEllipsis }) => {
  return [
    {
      name: 'id',
      header: 'Id',
      defaultVisible: false,
      defaultWidth: 80,
      type: 'number',
    },
    { name: 'name', header: 'Name', defaultFlex: 1 },
    { name: 'city', header: 'City', defaultFlex: 1 },
    {
      id: 'description',
      defaultFlex: 1,
      maxWidth: 150,
      textEllipsis,
      headerEllipsis: textEllipsis,
      header: 'Description column to test ellipsis',
      render: ({ data }) =>
        data.name + ', aged: ' + data.age + '. Lives in ' + data.country,
    },
  ];
};

const App = () => {
  const [textEllipsis, setTextEllipsis] = useState(true);
  const [columns, setColumns] = useState(getColumns({ textEllipsis }));

  const onTextEllipsisChange = useCallback(textEllipsis => {
    setTextEllipsis(textEllipsis);
    setColumns(getColumns({ textEllipsis }));
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={textEllipsis} onChange={onTextEllipsisChange}>
          Show text ellipsis on description header and column.
        </CheckBox>
      </div>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={people}
      />
    </div>
  );
};

export default () => <App />;
