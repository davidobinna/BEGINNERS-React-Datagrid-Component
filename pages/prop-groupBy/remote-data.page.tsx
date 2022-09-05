import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import { CellProps } from '@inovua/reactdatagrid-enterprise/types';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';
import Button from '@inovua/reactdatagrid-community/packages/Button';

const DATASET_URL = 'https://demos.reactdatagrid.io/api/v1';

const gridStyle = { minHeight: 400 };

const groupColumn = {
  renderGroupValue: ({ value }) =>
    value === 'true' ? 'Yes' : value === 'false' ? 'No' : value,
};

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    type: 'number',
    defaultWidth: 60,
  },
  { name: 'firstName', header: 'First Name', defaultFlex: 1 },
  { name: 'lastName', header: 'Last Name', defaultFlex: 1 },
  {
    name: 'email',
    header: 'Email',
    groupBy: false,
    defaultFlex: 1,
  },
  {
    name: 'permissionToCall',
    header: 'Permission to call',
    minWidth: 80,
    render: ({ data }) => (data.permissionToCall ? 'Yes' : 'No'),
    renderGroupTitle: value =>
      value === true || value === 'true' ? 'Calls allowed' : 'No calls allowed',
  },
];

const loadData = ({ sortInfo }) => {
  return fetch(
    DATASET_URL + '/leads?skip=0&limit=50&sortInfo=' + JSON.stringify(sortInfo)
  ).then(response => response.json());
};

const App = () => {
  const [stickyGroupRows, setStickyGroupRows] = useState(false);
  const [showGroupColumn, setShowGroupColumn] = useState(false);
  const [groupBy, setGroupBy] = useState(['permissionToCall']);
  const [dataSource, setDataSource] = useState([]);

  return (
    <div>
      <h3>GroupBy example with default grouping</h3>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={stickyGroupRows} onChange={setStickyGroupRows}>
          Use sticky group rows
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={showGroupColumn} onChange={setShowGroupColumn}>
          Use dedicated group column
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <Button
          onClick={async () => {
            setDataSource(await loadData({ sortInfo: undefined }));
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
        groupColumn={showGroupColumn ? groupColumn : null}
        stickyGroupRows={stickyGroupRows}
        defaultGroupBy={groupBy}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
