import React, { useState, useCallback } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

const DATASET_URL = 'https://demos.reactdatagrid.io/api/v1/contacts';

const gridStyle = { minHeight: 500, marginTop: 10 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    type: 'number',
    maxWidth: 40,
  },
  {
    name: 'firstName',
    defaultFlex: 1,
    header: 'First Name',
    render: ({ value, rowIndex }) => {
      return (
        <>
          {rowIndex} - {value}
        </>
      );
    },
  },
  { name: 'lastName', defaultFlex: 1, header: 'Last Name' },
  { name: 'email', groupBy: false, defaultFlex: 1, header: 'Email' },
];

const loadData = ({ skip, limit }) => {
  return fetch(DATASET_URL + '?skip=' + skip + '&limit=' + limit).then(
    response => {
      const totalCount = response.headers.get('X-Total-Count');
      return response.json().then(data => {
        return { data, count: parseInt(totalCount) };
      });
    }
  );
};

const App = () => {
  const [livePagination, setLivePagination] = useState(true);

  const dataSource = useCallback(loadData, []);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={livePagination}
          onChange={setLivePagination}
        >
          Live pagination
        </CheckBox>
      </div>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        key={'grid-' + livePagination}
        style={gridStyle}
        columns={columns}
        livePagination={livePagination}
        pagination
        sortable={false}
        dataSource={dataSource}
        limit={15}
        editable
      />
    </div>
  );
};

export default () => <App />;
