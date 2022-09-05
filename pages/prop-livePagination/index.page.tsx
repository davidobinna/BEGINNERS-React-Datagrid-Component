/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import DataGrid from '../../../enterprise-edition';
import { getGlobal } from '@inovua/reactdatagrid-community/getGlobal';

const globalObject = getGlobal();

const DATASET_URL = 'https://demos.reactdatagrid.io/api/v1/';

const gridStyle = { minHeight: '70vh' };
const columns = [
  { name: 'id', type: 'number', maxWidth: 60 },
  { name: 'lastName', header: 'Name', defaultFlex: 2 },
  { name: 'firstName', header: 'First', defaultFlex: 2 },
  { name: 'email', defaultFlex: 3 },
];

const defaultFilterValue = [
  {
    name: 'firstName',
    type: 'string',
    value: '',
    operator: 'contains',
  },
];

const App = () => {
  const [count, setCount] = useState<any>(800);

  const dataSource = ({ skip, sortInfo, limit, filterValue }: any) =>
    fetch(
      DATASET_URL +
        '/contacts?skip=' +
        skip +
        '&limit=' +
        limit +
        '&filterBy=' +
        JSON.stringify(filterValue) +
        '&sortInfo=' +
        JSON.stringify(sortInfo)
    ).then(response => {
      const totalCount = `${count}`; // response.headers.get('X-Total-Count');
      return response.json().then(data => {
        console.log('count', totalCount);
        return { data, count: parseInt(totalCount) };
      });
    });

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setCount(`${parseInt(count) - 10}`)}>
          Decrease count
        </button>
        <button onClick={() => setCount(`${parseInt(count) + 10}`)}>
          Increase count
        </button>
      </div>
      <DataGrid
        idProperty="id"
        theme="default-dark"
        style={gridStyle}
        defaultLimit={40}
        scrollThreshold={'50%'}
        columns={columns}
        handle={x => {
          (globalObject as any).x = x;
        }}
        livePagination
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        defaultFilterValue={defaultFilterValue}
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
