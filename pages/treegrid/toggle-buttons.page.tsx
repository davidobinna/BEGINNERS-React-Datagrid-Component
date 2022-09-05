import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

const gridStyle = { minHeight: 550 };

const treeData = [
  {
    id: 1,
    name: 'Applications',
    folder: true,
    nodes: [
      {
        id: 1,
        name: 'App store',
        size: '4.5Mb',
      },
      {
        id: 2,
        name: 'iMovie',
        size: '106Mb',
      },
      {
        id: 3,
        name: 'IRecall',
        size: '200Mb',
      },
    ],
  },
  {
    id: 2,
    name: 'Documents',
    nodes: [
      {
        id: 1,
        name: 'Todo.md',
        size: '2Kb',
      },
      {
        id: 2,
        name: 'Calendar.md',
        size: '15.2Kb',
      },
      { id: 3, name: 'Shopping list.csv', size: '20Kb' },
    ],
  },
  {
    id: 3,
    name: '3 Downloads',
    nodes: [
      {
        id: 1,
        name: 'Email data',
        nodes: [
          {
            id: 1,
            name: 'Personal.xls',
            size: '100Gb',
          },
          { id: 2, name: 'Work.xls' },
        ],
      },
      { id: 2, name: 'MacRestore.gzip' },
    ],
  },
];

const columns = [
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'size', header: 'Size', defaultWidth: 160 },
];

const App = () => {
  const [expandedNodes, setExpandedNodes] = useState({
    1: true,
    2: true,
    '3/1': true,
  });

  const onExpandedNodesChange = useCallback(({ expandedNodes }) => {
    setExpandedNodes(expandedNodes);
  }, []);

  const renderCollapseTool = ({ domProps, size }) => {
    return (
      <svg
        {...domProps}
        height={size}
        viewBox="0 0 24 24"
        width={size}
        style={{ ...domProps.style, fill: 'red' }}
      >
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    );
  };

  const renderExpandTool = ({ domProps, size }) => {
    return (
      <svg
        {...domProps}
        height={size}
        viewBox="0 0 24 24"
        width={size}
        style={{ ...domProps.style, fill: 'red' }}
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
    );
  };

  return (
    <div>
      <h3>Basic TreeGrid</h3>
      <p>
        Expanded nodes:{' '}
        {expandedNodes == null
          ? 'none'
          : JSON.stringify(expandedNodes, null, 2)}
        .
      </p>
      <ReactDataGrid
        treeColumn="name"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        expandedNodes={expandedNodes}
        onExpandedNodesChange={onExpandedNodesChange}
        style={gridStyle}
        columns={columns}
        dataSource={treeData}
        renderTreeCollapseTool={renderCollapseTool}
        renderTreeExpandTool={renderExpandTool}
      />
    </div>
  );
};

export default () => <App />;
