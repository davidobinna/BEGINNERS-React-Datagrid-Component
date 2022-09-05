import React, { useState, useCallback } from 'react';
import ReactDataGrid from '../../../enterprise-edition';

import people from '../people';

const gridStyle = { minHeight: 500 };

const columns = [
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'email', header: 'Email', defaultFlex: 1 },
];

const defaultSortInfo: { name: string; type: string; dir: -1 | 0 | 1 } = {
  name: 'age',
  type: 'number',
  dir: 1,
};

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [sortInfo, setSortInfo] = useState(defaultSortInfo);

  const onSortInfoChange1 = useCallback(value => {
    console.log('1');
    setToggle(toggle => !toggle);
    setSortInfo(value);
  }, []);

  const onSortInfoChange2 = useCallback(value => {
    console.log('2');
    setToggle(toggle => !toggle);
    setSortInfo(value);
  }, []);

  console.log(toggle);

  return (
    <ReactDataGrid
      idProperty="id"
      theme="default-dark"
      licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
      style={gridStyle}
      sortInfo={sortInfo}
      columns={columns}
      dataSource={people}
      onSortInfoChange={toggle ? onSortInfoChange2 : onSortInfoChange1}
    />
  );
};

export default () => <App />;
