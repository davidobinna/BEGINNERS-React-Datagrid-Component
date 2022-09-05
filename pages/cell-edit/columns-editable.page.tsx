import React, { useState, useCallback } from 'react';
import ReactDataGrid from '../../../enterprise-edition';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';
import {
  TypeCellProps,
  TypeColumn,
} from '@inovua/reactdatagrid-community/types';

const gridStyle = { minHeight: 550 };

const getColumns = (state: { editable: boolean }) => {
  return [
    {
      name: 'id',
      type: 'number',
      defaultWidth: 80,
      header: 'Id',
      defaultVisible: false,
    },
    { name: 'name', defaultFlex: 1, editable: state.editable, header: 'Name' },
    { name: 'country', defaultFlex: 1, minWidth: 80, header: 'Country' },
    { name: 'city', defaultFlex: 1, editable: state.editable, header: 'City' },
    { name: 'age', minWidth: 80, type: 'number', header: 'Age' },
  ];
};

const App = () => {
  const [editable, setEditable] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState(people);
  const [columns, setColumns] = useState<TypeColumn[]>(
    getColumns({ editable })
  );

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

  const onEditableChange = useCallback((editable: boolean) => {
    setEditable(editable);
    setColumns(getColumns({ editable }));
  }, []);

  const onCellClick = useCallback(
    (_event: MouseEvent, cellProps: TypeCellProps) => {
      const { rowIndex } = cellProps;

      const newColumns: TypeColumn[] = columns.map((column: TypeColumn) => {
        if (column.name === 'city' && rowIndex === 2) {
          Object.assign(column, { editable: true });
        } else {
          Object.assign(column, { editable: false });
        }

        return column;
      });

      setColumns(newColumns);
    },
    []
  );

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={editable}
          onChange={onEditableChange}
        >
          Make Name and City columns editable
        </CheckBox>
      </div>
      <p>
        Override the columns.editable prop via onCellClick on city column at row
        index 2.
      </p>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        onEditComplete={onEditComplete}
        columns={columns}
        dataSource={dataSource}
        onCellClick={onCellClick}
      />
    </div>
  );
};

export default () => <App />;
