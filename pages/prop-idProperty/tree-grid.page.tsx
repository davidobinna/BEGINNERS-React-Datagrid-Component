import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

const gridStyle = { minHeight: 750 };

const treeData = [
  {
    treeId: 1,
    name: 'Applications',
    folder: true,
    nodes: [
      { treeId: 1, name: 'App store', size: '4.5Mb' },
      { treeId: 2, name: 'iMovie', size: '106Mb' },
      { treeId: 3, name: 'IRecall', size: '200Mb' },
    ],
  },
  {
    treeId: 2,
    name: 'Documents',
    nodes: [
      { treeId: 1, name: 'Todo.md', size: '2Kb' },
      { treeId: 2, name: 'Calendar.md', size: '15.2Kb' },
      { treeId: 3, name: 'Shopping list.csv', size: '20Kb' },
    ],
  },
  {
    treeId: 3,
    name: '3 Downloads',
    nodes: [
      {
        treeId: 1,
        name: 'Email data',
        nodes: [
          { treeId: 1, name: 'Personal.xls', size: '100Gb' },
          { treeId: 2, name: 'Work.xls' },
        ],
      },
      { treeId: 2, name: 'MacRestore.gzip' },
    ],
  },
  { treeId: 4, name: 'Movies' },
];

const columns = [
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'size', header: 'Size', defaultWidth: 160 },
];

const App = () => {
  const [expandedNodes, setExpandedNodes] = useState({
    1: true,
    2: true,
    3: true,
    '3/1': true,
  });

  const onExpandedNodesChange = useCallback(({ expandedNodes }) => {
    setExpandedNodes(expandedNodes);
  }, []);

  const onTreeRowReorderEnd = ({ updatedTreeData }) => {
    console.log('data', updatedTreeData);
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
        idProperty="treeId"
        expandedNodes={expandedNodes}
        onExpandedNodesChange={onExpandedNodesChange}
        style={gridStyle}
        columns={columns}
        dataSource={treeData}
        rowReorderColumn
        enableTreeRowReorder
        onTreeRowReorderEnd={onTreeRowReorderEnd}
      />
    </div>
  );
};

export default () => <App />;
