/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import DataGrid from '../../../enterprise-edition';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';

const gridStyle = { minHeight: 500 };

const times = (arr, n, fn?) => {
  const result = [];

  for (var i = 0; i < n; i++) {
    result.push(
      ...arr.map(x => {
        if (fn) {
          return fn(x, i);
        }
        return {
          ...x,
          id: `${i}-${x.id}`,
        };
      })
    );
  }

  return result;
};

const peopleCols = [
  { name: 'id', type: 'number', defaultWidth: 80 },
  { name: 'firstName', defaultFlex: 1, minWidth: 150 },
  { name: 'country', defaultFlex: 1, minWidth: 150 },
  { name: 'age', type: 'number', defaultFlex: 1, minWidth: 150 },
  // {
  //   id: 'desc',
  //   header: 'Description',
  //   defaultFlex: 2,
  //   minWidth: 150,
  //   render: ({ data }) =>
  //     data.firstName + ', aged: ' + data.age + '. Lives in ' + data.country,
  // },
];

const COLS = 100;
const columns = times([{ name: 'id' }], COLS, (_, i) => {
  return {
    name: i ? `id-${i}` : 'id',
    id: i ? `id-${i}` : 'id',
    header: i ? `ID ${i}` : 'ID',
  };
});

const loadData = () => {
  return times(
    [
      [...new Array(COLS)].reduce(
        (acc, _, i) => {
          acc[`id-${i}`] = i;
          return acc;
        },
        { id: 0 }
      ),
    ],
    5
  );
};

const App = () => {
  const [virtualColumns, setVirtualColumns] = useState(true);
  const [secondGrid, setSecondGrid] = useState(false);

  if (!process.browser) {
    return null;
  }
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={virtualColumns}
          onChange={setVirtualColumns}
        >
          Virtual columns
        </CheckBox>
      </div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={secondGrid}
          onChange={setSecondGrid}
        >
          Second Grid
        </CheckBox>
      </div>
      <DataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        pagination
        columns={columns}
        dataSource={loadData}
        headerHeight={virtualColumns ? 48 : undefined}
      />
      {secondGrid ? (
        <DataGrid
          idProperty="id"
          theme="default-dark"
          key={`grid_${secondGrid}`}
          licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
          style={{ height: 500, marginTop: 30 }}
          pagination
          columns={peopleCols}
          dataSource={people}
          headerHeight={virtualColumns ? 48 : undefined}
        />
      ) : null}
    </div>
  );
};

export default () => <App />;
