import React, { useState, useCallback } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import NumericEditor from '@inovua/reactdatagrid-community/NumericEditor';
import BoolEditor from '@inovua/reactdatagrid-community/BoolEditor';
import DateEditor from '@inovua/reactdatagrid-community/DateEditor';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };
const editorStyle = {
  cursor: 'pointer',
  position: 'absolute',
  background: '#464d56',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  paddingLeft: 8,
  paddingTop: 9,
};

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    minWidth: 100,
    type: 'number',
  },
  {
    name: 'name',
    header: 'Name',
    defaultFlex: 1,
    minWidth: 150,
    maxWidth: 300,
    renderEditor: editorProps => {
      return (
        <input
          type="text"
          autoFocus
          onKeyDown={event => {
            if (event.key === 'Escape') {
              editorProps.onCancel();
            }
            if (event.key === 'Enter') {
              editorProps.onChange('Some value');
              setTimeout(() => {
                editorProps.onComplete();
              }, 500);
            }
          }}
        />
      );
    },
  },
  {
    name: 'birthDate',
    header: 'Birth Date',
    minWidth: 150,
    type: 'date',
    editor: DateEditor,
    editorProps: {
      dateFormat: 'DD-MM-YYYY',
    },
  },
  {
    name: 'age',
    header: 'Age',
    minWidth: 150,
    type: 'number',
    editor: NumericEditor,
    editorProps: { allowNegative: false },
  },
  {
    name: 'student',
    header: 'Student',
    width: 150,
    render: ({ value }) => (value ? 'yes' : 'no'),
    editor: BoolEditor,
  },
  {
    name: 'country',
    header: 'Country',
    width: 150,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultFlex: 1, minWidth: 200 },
];

const App = () => {
  const [dataSource, setDataSource] = useState(people);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex] = Object.assign({}, data[rowIndex], { [columnId]: value });

      setDataSource(data);
    },
    [dataSource]
  );

  return (
    <div>
      <h3>Grid with custom renderEditor for student column </h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        onEditComplete={onEditComplete}
        editable={true}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
