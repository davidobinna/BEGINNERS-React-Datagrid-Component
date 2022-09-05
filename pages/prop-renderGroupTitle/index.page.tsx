import React from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

export default function App() {
  const [gridRef, setGridRef] = React.useState<any>(null);

  const columns = [
    {
      name: 'id',
      header: 'Id',
      type: 'number',
      flex: 1,
    },
    { name: 'firstName', header: 'First Name', flex: 1 },
    { name: 'lastName', header: 'Last Name', flex: 1 },
    { name: 'email', header: 'Email', groupBy: false, flex: 1 },
  ];

  const dataSource = React.useCallback(() => {
    return [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Wick',
        email: 'puppy.lover@gmail.com',
      },
      {
        id: 2,
        firstName: 'Harry',
        lastName: 'Potter',
        email: 'i.am.a.wizard@hotmail.com',
      },
    ];
  }, []);

  const renderGroupTitle = React.useCallback(
    (value, { onGroupToggle, groupProps, data }) => {
      const collapsed = groupProps.collapsed;
      const keyPath = data['keyPath'];

      return (
        <>
          {collapsed ? 'COLLAPSED -- ' : 'EXPANDED -- '} {value}{' '}
          <button
            onClick={() => {
              onGroupToggle(keyPath);
            }}
          >
            toggle
          </button>
        </>
      );
    },
    []
  );

  return (
    <>
      <button
        onClick={() => {
          gridRef?.current?.expandAllGroups();
        }}
      >
        Expand all
      </button>
      <button onClick={() => gridRef?.current?.collapseAllGroups()}>
        Collapse all
      </button>
      <ReactDataGrid
        onReady={setGridRef}
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        defaultGroupBy={['email']}
        style={{ width: '100%', height: 600 }}
        renderGroupTitle={renderGroupTitle}
        expandedGroups
      />
    </>
  );
}
