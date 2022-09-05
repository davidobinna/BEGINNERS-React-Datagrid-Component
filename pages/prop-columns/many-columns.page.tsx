import React from 'react';

import ReactDataGrid from '../../../enterprise-edition';

const gridStyle = { minHeight: 600 };

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

const COLS = 1;
const loadDataSource = n => {
  const data = times(
    [
      [...new Array(COLS)].reduce(
        (acc, _, i) => {
          acc[`id-${i}`] = i;
          return acc;
        },
        { id: 0 }
      ),
    ],
    n
  );

  return data;
};

let columns = times([{ name: 'id' }], COLS, (_, i) => {
  return {
    name: i ? `id-${i}` : 'id',
    id: i ? `id-${i}` : 'id',
    render: ({ value, rowIndex }) => {
      // console.log(`render ${rowIndex} - ${i}`);
      // console.log(
      //   'rows',
      //   document.querySelector('.inovua-react-virtual-list__row-container')
      //     .childElementCount
      // );
      return value;
    },
  };
});

const App = () => {
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={loadDataSource(100)}
      />
    </div>
  );
};

export default App;
