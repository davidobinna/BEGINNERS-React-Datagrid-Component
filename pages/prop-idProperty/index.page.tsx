import React, { useState } from 'react';
import ReactDataGrid from '../../../enterprise-edition';
import Button from '@inovua/reactdatagrid-community/packages/Button';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import getDataSource from './dataSource';
import getColumns from './columns';

const gridStyle = { minHeight: 550 };

const renderRowDetails = ({ data }) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Row details:</h2>
      <h3>This are the details of the row.</h3>
      <table>
        <tbody>
          {Object.keys(data).map((name, i) => {
            const value = data[name];

            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{JSON.stringify(value)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [gridRef, setGridRef] = useState(null);
  const [simpleId, setSimpleId] = useState(false);
  const [skipHeader, setSkipHeader] = useState(true);
  const [enableRowReorder, setEnableRowReorder] = useState(false);
  const [rowDetails, setRowDetails] = useState(false);
  const [enableCheckboxColumn, setEnableCheckboxColumn] = useState(false);

  const setItemsAt = () => {
    gridRef.current.setItemsAt(
      [
        {
          id: 1,
          person: {
            personId: `id-${1}`,
            name: 'Daniel Hood',
            personalData: { age: 25, location: 'Budapest' },
          },
        },
        {
          id: 2,
          person: {
            personId: `id-${2}`,
            name: 'Robert Muller',
            personalData: { age: 27, location: 'Prague' },
          },
        },
        {
          id: 3,
          person: {
            personId: `id-${3}`,
            name: 'Karl May',
            personalData: { age: 81, location: 'Geneva' },
          },
        },
      ],
      { replace: false }
    );
  };

  const setColumnsSizesAuto = () => {
    if (gridRef.current.setColumnsSizesAuto) {
      gridRef.current.setColumnsSizesAuto({
        skipHeader,
      });
    }
  };

  return (
    <div>
      <p>Grid with nested idProperty.</p>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={simpleId} onChange={setSimpleId}>
          Simple idProperty
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={enableRowReorder} onChange={setEnableRowReorder}>
          Enable row-reorder
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={rowDetails} onChange={setRowDetails}>
          Enable row details
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <CheckBox
          checked={enableCheckboxColumn}
          onChange={setEnableCheckboxColumn}
        >
          Enable checkbox column
        </CheckBox>
      </div>

      <div style={{ marginBottom: 20 }}>
        <Button
          onClick={() => {
            simpleId
              ? gridRef.current.setItemAt(
                  3,
                  { name: 'Daniel Muller' },
                  { replace: false }
                )
              : gridRef.current.setItemAt(
                  2,
                  {
                    person: {
                      personId: `id-${2}`,
                      name: 'Goerge Moody',
                      personalData: { age: 27, location: 'Seattle' },
                    },
                  },
                  { replace: false }
                );
          }}
        >
          Change 'name' to index 2
        </Button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <Button onClick={setItemsAt}>Set items</Button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={skipHeader} onChange={setSkipHeader}>
          Skip header
        </CheckBox>
        <Button style={{ marginLeft: 20 }} onClick={setColumnsSizesAuto}>
          Set columns sizes auto (skipHeader {skipHeader ? 'true' : 'false'})
        </Button>
      </div>

      <ReactDataGrid
        idProperty={simpleId ? 'uniqueId' : 'person.personId'}
        key={`id__${simpleId}`}
        handle={setGridRef}
        style={gridStyle}
        dataSource={getDataSource(simpleId)}
        columns={getColumns(simpleId)}
        onRowReorder={enableRowReorder}
        rowIndexColumn
        checkboxColumn={enableCheckboxColumn}
        rowExpandHeight={() => {
          return 300;
        }}
        renderRowDetails={rowDetails ? renderRowDetails : undefined}
        defaultGroupBy={[]}
        enableClipboard
      />
    </div>
  );
};

export default () => <App />;
