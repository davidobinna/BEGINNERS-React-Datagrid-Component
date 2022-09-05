import React, { useState } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';
import DateFilter from '@inovua/reactdatagrid-community/DateFilter';
import BoolFilter from '../../../community-edition/BoolFilter';

import Checkbox from '../../../community-edition/packages/CheckBox';

import people from '../people';
import flags from '../flags';
import moment from 'moment';
import CheckBox from '../../../community-edition/packages/CheckBox';

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

const defaultFilterValue = [
  { name: 'name', operator: 'startsWith', type: 'string', value: 'Bill' },
  { name: 'age', operator: 'gte', type: 'number', value: null },
  { name: 'city', operator: 'startsWith', type: 'string', value: '' },
  {
    name: 'birthDate',
    operator: 'before',
    type: 'date',
    value: '',
  },
  { name: 'student', operator: 'eq', type: 'bool', value: null },
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
  {
    name: 'name',
    header: 'Name',
    defaultFlex: 1,
    enableColumnFilterContextMenu: false,
  },
  {
    name: 'age',
    header: 'Age',
    defaultFlex: 1,
    type: 'number',
    filterEditor: NumberFilter,
    enableColumnFilterContextMenu: false,
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
    enableColumnFilterContextMenu: true,
  },
  {
    name: 'birthDate',
    header: 'Bith date',
    defualtFlex: 1,
    minWidth: 200,
    filterEditor: DateFilter,
    enableColumnFilterContextMenu: true,
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
  {
    name: 'student',
    header: 'Student',
    defaultFlex: 1,
    filterEditor: BoolFilter,
    render: ({ data }) => {
      return data.student ? 'Yes' : 'No';
    },
  },
  {
    name: 'city',
    header: 'City',
    defaultFlex: 1,
  },
];

const App = () => {
  const [
    enableColumnFilterContextMenu,
    setEnableColumnFilterContextMenu,
  ] = useState(true);

  const checkboxProps = {
    checked: enableColumnFilterContextMenu,
    onChange: setEnableColumnFilterContextMenu,
  };

  return (
    <div>
      <h3>Grid with default filter value</h3>

      <div style={{ marginBottom: 20 }}>
        <CheckBox {...checkboxProps}>
          Enable Column Filter Context Menu
        </CheckBox>
      </div>

      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        defaultFilterValue={defaultFilterValue}
        columns={columns}
        dataSource={people}
        enableColumnFilterContextMenu={enableColumnFilterContextMenu}
      />
    </div>
  );
};

export default () => <App />;
