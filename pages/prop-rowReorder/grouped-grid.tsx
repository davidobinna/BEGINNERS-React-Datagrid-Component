import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

const DATASET_URL: string = 'https://demos.reactdatagrid.io/api/v1/employees';

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
  { name: 'email', header: 'Email', groupBy: false, defaultFlex: 1 },
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
    DATASET_URL + '?skip=0&limit=20&sortInfo=' + JSON.stringify(sortInfo)
  ).then(response => response.json());
};

const App = () => {
  const [stickyGroupRows, setStickyGroupRows] = useState(false);
  const [showGroupColumn, setShowGroupColumn] = useState(false);
  const [groupBy, setGroupBy] = useState(['permissionToCall']);

  const dataSource = useCallback(loadData, []);

  return (
    <div>
      <h3>GroupBy example with default grouping</h3>

      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={stickyGroupRows}
          onChange={setStickyGroupRows}
        >
          Use sticky group rows
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={showGroupColumn}
          onChange={setShowGroupColumn}
        >
          Use dedicated group column
        </CheckBox>
      </div>

      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        groupColumn={showGroupColumn ? groupColumn : null}
        stickyGroupRows={stickyGroupRows}
        defaultGroupBy={groupBy}
        columns={columns}
        dataSource={dataSource}
        rowReorderColumn
      />
    </div>
  );
};

export default () => <App />;
