import React from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import DateFilter from '@inovua/reactdatagrid-community/DateFilter';
import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';

import people from '../people';
import flags from '../flags';
import moment from 'moment';
import { getGlobal } from '@inovua/reactdatagrid-community/getGlobal';

const globalObject = getGlobal();

let window = globalObject || globalThis;

if (window.moment == null) {
  window.moment = moment;
}

const gridStyle = { minHeight: 600 };

const COUNTRIES = {
  ca: 'Canada',
  uk: 'United Kingdom',
  usa: 'United States of America',
};

const countries = people.reduce((countries, p) => {
  if (countries.filter(c => c.id == p.country).length) {
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
  { name: 'age', operator: 'eq', type: 'number', value: null },
  { name: 'city', operator: 'startsWith', type: 'string', value: '' },
  {
    name: 'birthDate',
    operator: 'before',
    type: 'date',
    value: '',
  },
  { name: 'country', operator: 'startsWith', type: 'string', value: '' },
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
    dateFormat: 'MM-DD-YYYY',
    filterEditor: DateFilter,
    filterEditorProps: (props, { index }) => {
      // for range and notinrange operators, the index is 1 for the after field
      return {
        dateFormat: 'MM-DD-YYYY',
        cancelButton: false,
        highlightWeekends: false,
        placeholder:
          index == 1 ? 'Created date is before...' : 'Created date is after...',
      };
    },
    render: ({ value, cellProps }) => {
      return moment(value).format('MM-DD-YYYY');
    },
  },
  { name: 'city', header: 'City', defaultFlex: 1 },
];

const App = () => {
  return (
    <div>
      <h3>Grid with default filter value</h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        defaultFilterValue={filterValue}
        columns={columns}
        dataSource={people}
      />
      <p>
        Delete the filters if you want to show all data. You can click the
        configure icon and then "Clear All"
      </p>
    </div>
  );
};

export default () => <App />;
