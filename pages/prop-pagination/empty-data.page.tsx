import Button from '@inovua/reactdatagrid-community/packages/Button';
import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

const DATASET_URL = 'https://demos.reactdatagrid.io/api/v1/contacts';

const gridStyle = { minHeight: 550, marginTop: 10 };

const columns = [
  {
    name: 'id',
    type: 'number',
    maxWidth: 40,
    header: 'ID',
    defaultVisible: false,
  },
  { name: 'firstName', defaultFlex: 2, header: 'First Name' },
  { name: 'lastName', defaultFlex: 2, header: 'Last Name' },
  { name: 'email', defaultFlex: 3, header: 'Email' },
];

const loadData = ({ skip, limit, sortInfo }) => {
  const url =
    DATASET_URL +
    '?skip=' +
    skip +
    '&limit=' +
    limit +
    '&sortInfo=' +
    JSON.stringify(sortInfo);

  return fetch(url).then(response => {
    const totalCount = response.headers.get('X-Total-Count');
    return response.json().then(data => {
      return Promise.resolve({ data, count: parseInt(totalCount) });
    });
  });
};

const App = () => {
  const [dataSource, setDataSource] = useState<any>(
    loadData({ skip: 0, limit: 50, sortInfo: undefined })
  );

  return (
    <div>
      <h3>Remote data and pagination example</h3>

      <div style={{ marginBottom: 20 }}>
        <Button
          onClick={() => {
            const data = loadData({ skip: 0, limit: 50, sortInfo: undefined });
            setDataSource(data);
          }}
        >
          Load data
        </Button>
        <Button style={{ marginLeft: 20 }} onClick={() => setDataSource([])}>
          Clear data
        </Button>
      </div>

      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        pagination
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
