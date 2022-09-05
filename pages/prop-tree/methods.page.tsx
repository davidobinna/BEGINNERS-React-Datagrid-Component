import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import Button from '@inovua/reactdatagrid-community/packages/Button';

const gridStyle = { minHeight: 750 };

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
          {
            id: 2,
            name: 'Work.xls',
            nodes: [
              { id: 1, name: 'Business' },
              { id: 2, name: 'Employee' },
              { id: 3, name: 'Secretary' },
            ],
          },
        ],
      },
      { id: 2, name: 'MacRestore.gzip' },
    ],
  },
  { id: 4, name: 'Docs' },
];

const columns = [
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'size', header: 'Size', defaultWidth: 160 },
];

const defaultFilterValue = [
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  { name: 'size', operator: 'startsWith', type: 'string', value: '' },
];

const App = () => {
  const [expandedNodes, setExpandedNodes] = useState({
    1: true,
    3: true,
    '3/1': true,
    '3/1/2': true,
  });
  const [gridRef, setGridRef] = useState(null);

  const onExpandedNodesChange = useCallback(({ expandedNodes }) => {
    setExpandedNodes(expandedNodes);
  }, []);

  return (
    <div>
      <h3>Methods on TreeGrid</h3>

      <div style={{ marginBottom: 20 }}>
        <Button
          onClick={() => {
            const computedProps = gridRef.current;
            if (!computedProps) {
              return;
            }

            if (computedProps.expandAllTreeNodes) {
              computedProps.expandAllTreeNodes();
            }
          }}
        >
          Expand all
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          onClick={() => {
            const computedProps = gridRef.current;
            if (!computedProps) {
              return;
            }

            if (computedProps.collapseAllTreeNodes) {
              computedProps.collapseAllTreeNodes();
            }
          }}
        >
          Collapse all
        </Button>
      </div>

      <ReactDataGrid
        treeColumn="name"
        handle={setGridRef}
        expandedNodes={expandedNodes}
        onExpandedNodesChange={onExpandedNodesChange}
        style={gridStyle}
        columns={columns}
        dataSource={treeData}
        defaultFilterValue={defaultFilterValue}
      />
    </div>
  );
};

export default () => <App />;
