import React, { useState } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';
import DateFilter from '@inovua/reactdatagrid-community/DateFilter';

import Button from '../../../community-edition/packages/Button';

import people from '../people';
import flags from '../flags';
import moment from 'moment';

const gridStyle = { minHeight: 600 };

const COUNTRIES = {
  ca: 'Canada',
  uk: 'United Kingdom',
  usa: 'United States of America',
};

const countries = people.reduce((countries, p) => {
  if (countries.filter(c => c.id === p.country).length) {
    return countries;
  }
  countries.push({
    id: p.country,
    label: COUNTRIES[p.country] || p.country,
  });

  return countries;
}, []);

const filterValue = [
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  { name: 'age', operator: 'gte', type: 'number', value: null },
  { name: 'city', operator: 'startsWith', type: 'string', value: '' },
  {
    name: 'birthDate',
    operator: 'before',
    type: 'date',
    value: '',
  },
  { name: 'country', operator: 'eq', type: 'select', value: null },
];

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    defaultWidth: 80,
    type: 'number',
  },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  {
    name: 'age',
    header: 'Age',
    defaultFlex: 1,
    type: 'number',
    filterEditor: NumberFilter,
  },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: 'All',
      dataSource: countries,
    },
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  {
    name: 'birthDate',
    header: 'Bith date',
    defualtFlex: 1,
    minWidth: 200,
    filterEditor: DateFilter,
    filterEditorProps: (props, { index }) => {
      // for range and notinrange operators, the index is 1 for the after field
      return {
        dateFormat: 'MM-DD-YYYY',
        cancelButton: false,
        highlightWeekends: false,
        placeholder:
          index === 1
            ? 'Created date is before...'
            : 'Created date is after...',
      };
    },
    render: ({ value, cellProps }) => {
      return moment(value).format('MM-DD-YYYY');
    },
  },
  { name: 'city', header: 'City', defaultFlex: 1 },
];

const App = () => {
  const [gridRef, setGridRef] = useState(null);
  const [key, setKey] = useState(0);

  return (
    <div>
      <h3>Grid with default filter value</h3>
      <div style={{ marginBottom: 20 }}>
        <Button
          theme="default-dark"
          onClick={() => {
            gridRef.current.setFilterValue([
              {
                name: 'name',
                operator: 'startsWith',
                type: 'string',
                value: '',
              },
              { name: 'age', operator: 'gte', type: 'number', value: 33 },
              {
                name: 'city',
                operator: 'startsWith',
                type: 'string',
                value: '',
              },
              {
                name: 'birthDate',
                operator: 'before',
                type: 'date',
                value: '',
              },
              { name: 'country', operator: 'eq', type: 'select', value: null },
            ]);
          }}
        >
          Set filter value
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button
          theme="default-dark"
          onClick={() => {
            gridRef.current.setSortInfo({ name: 'city', dir: 1 });
          }}
        >
          Set sort info
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button theme="default-dark" onClick={() => setKey(key + 1)}>
          Change key
        </Button>
      </div>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        key={`grid_${key}`}
        handle={setGridRef}
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        defaultFilterValue={filterValue}
        columns={columns}
        dataSource={people}
        defaultSortInfo={{ name: 'name', dir: 1 }}
      />
      <p>
        Delete the filters if you want to show all data. You can click the
        configure icon and then "Clear All"
      </p>
    </div>
  );
};

export default () => <App />;
