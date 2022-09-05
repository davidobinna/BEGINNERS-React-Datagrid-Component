import React, { useCallback, useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';
import { columns, defaultFilterValue } from './utils';

const DATASET_URL = 'https://demos.reactdatagrid.io/api/v1';
const gridStyle = { minHeight: 550 };

const loadData = ({ sortInfo }) => {
  return fetch(
    DATASET_URL + '/leads?skip=0&limit=50&sortInfo=' + JSON.stringify(sortInfo)
  ).then(response => response.json());
};

const App = () => {
  const [rtl, setRtl] = useState<boolean>(false);

  const dataSource = useCallback(loadData, []);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={rtl} onChange={setRtl}>
          RTL
        </CheckBox>
      </div>

      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={dataSource}
        rtl={rtl}
      />
    </div>
  );
};

export default App;
