import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import treeFilter from '../../../community-edition/treeFilter';
import filter from '../../../community-edition/filter';

const gridStyle = { minHeight: 1050 };

const treeData: any = [
  {
    id: 1,
    name: 'Applications',
    folder: true,
    nodes: [
      { id: 1, name: 'App store', size: '4.5Mb' },
      { id: 2, name: 'iMovie', size: '106Mb' },
      { id: 3, name: 'IRecall', size: '200Mb' },
    ],
  },
  {
    id: 2,
    name: 'Documents',
    nodes: [
      { id: 1, name: 'Todo.md', size: '2Kb' },
      { id: 2, name: 'Calendar.md', size: '15.2Kb' },
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
          { id: 1, name: 'Personal.xls', size: '100Gb' },
          { id: 2, name: 'Hobby', size: '200Mb' },
          {
            id: 3,
            name: 'Work.xls',
            nodes: [
              { id: 1, name: 'Business' },
              {
                id: 2,
                name: 'Employee',
                nodes: [
                  { id: 1, name: 'Frontend Programmer' },
                  { id: 2, name: 'Backend Programmer' },
                  { id: 3, name: 'Backend Tester' },
                  { id: 4, name: 'Tester' },
                ],
              },
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

const defaultFilterValue: any = [
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  // { name: 'size', operator: 'startsWith', type: 'string', value: '' },
];

const App = () => {
  const initialData = useCallback(
    () => treeFilter(treeData, defaultFilterValue),
    []
  );

  const [expandedNodes, setExpandedNodes] = useState({
    1: true,
    2: true,
    3: true,
    '3/1': true,
  });
  const [
    treeGridChildrenSelectionEnabled,
    setTreeGridChildrenSelectionEnabled,
  ] = useState(true);
  const [
    treeGridChildrenDeselectionEnabled,
    setTreeGridChildrenDeselectionEnabled,
  ] = useState(true);
  const [filterValue, setFilterValue] = useState(defaultFilterValue);
  const [dataSource, setDataSource] = useState<any>(initialData);
  const [filterText, setFilterText] = useState('');

  const render = useCallback(
    ({ value }) => {
      const lowerFilterText = filterText && filterText.toLowerCase();
      if (!lowerFilterText) {
        return value;
      }

      const str = value + ''; // get string value
      const v = str.toLowerCase(); // our search is case insensitive
      const index = v.indexOf(lowerFilterText);

      if (index === -1) {
        return value;
      }

      return [
        <span key="before">{str.slice(0, index)}</span>,
        <span
          key="match"
          style={{ background: 'yellow', fontWeight: 'bold', color: 'black' }}
        >
          {str.slice(index, index + lowerFilterText.length)}
        </span>,
        <span key="after">{str.slice(index + lowerFilterText.length)}</span>,
      ];
    },
    [filterText]
  );

  const columns = [
    { name: 'name', header: 'Name', render, defaultFlex: 1 },
    { name: 'size', header: 'Size', defaultWidth: 120 },
  ];

  const onExpandedNodesChange = useCallback(({ expandedNodes }) => {
    setExpandedNodes(expandedNodes);
  }, []);

  const onFilterValueChange = useCallback(value => {
    const data = treeFilter(treeData, filterValue);

    const filterTextValue = value[0].value;

    setFilterText(filterTextValue);
    setFilterValue(value);
    setDataSource(data);
  }, []);

  return (
    <div>
      <h3>Basic TreeGrid</h3>

      <div style={{ marginBottom: 20 }}>
        <CheckBox
          checked={treeGridChildrenSelectionEnabled}
          onChange={setTreeGridChildrenSelectionEnabled}
        >
          treeGridChildrenSelectionEnabled
        </CheckBox>
      </div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          checked={treeGridChildrenDeselectionEnabled}
          onChange={setTreeGridChildrenDeselectionEnabled}
        >
          treeGridChildrenDeselectionEnabled
        </CheckBox>
      </div>

      <ReactDataGrid
        treeColumn="name"
        expandedNodes={expandedNodes}
        onExpandedNodesChange={onExpandedNodesChange}
        style={gridStyle}
        columns={columns}
        dataSource={dataSource}
        checkboxColumn
        treeGridChildrenSelectionEnabled={treeGridChildrenSelectionEnabled}
        treeGridChildrenDeselectionEnabled={treeGridChildrenDeselectionEnabled}
        defaultFilterValue={filterValue}
        onFilterValueChange={onFilterValueChange}
      />
    </div>
  );
};

export default () => <App />;
