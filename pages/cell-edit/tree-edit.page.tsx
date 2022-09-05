import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

const gridStyle = { minHeight: 550 };

const generateTreeData = () => {
  const additionalData = [];

  for (let i = 3; i < 50; i += 1) {
    additionalData.push({
      id: i + 1,
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
    });
  }

  return additionalData;
};

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
  ...generateTreeData(),
];

const columns = [
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'size', header: 'Size', defaultWidth: 160 },
];

const App = () => {
  const [expandedNodes, setExpandedNodes] = useState({
    1: false,
    2: false,
    '3/1': false,
  });

  const onExpandedNodesChange = useCallback(({ expandedNodes }) => {
    setExpandedNodes(expandedNodes);
  }, []);

  const [dataSource, setDataSource] = useState(treeData);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];

      data[rowIndex][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

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
        dataSource={dataSource}
        editable={true}
        onEditComplete={onEditComplete}
      />
    </div>
  );
};

export default () => <App />;
