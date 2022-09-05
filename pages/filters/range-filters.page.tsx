import React from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import DateFilter from '@inovua/reactdatagrid-community/DateFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';

import flags from '../flags';
import contacts from '../contacts';
import moment from 'moment';

const gridStyle = { minHeight: 600 };

globalThis.moment = moment;

const defaultFilterValue = [
  { name: 'firstName', operator: 'contains', type: 'string', value: '' },
  { name: 'createdOn', operator: 'inrange', type: 'date', value: '' },
  {
    name: 'age',
    operator: 'inrange',
    type: 'number',
    value: { start: 30, end: 40 },
  },
];

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    defaultWidth: 50,
    type: 'number',
  },
  { name: 'firstName', defaultWidth: 150, maxWidth: 200, header: 'First name' },
  {
    name: 'age',
    defaultWidth: 250,
    maxWidth: 350,
    type: 'number',
    header: 'Age',
    filterEditor: NumberFilter,
  },
  {
    name: 'createdOn',
    header: 'User created date',
    type: 'date',
    defaultFlex: 1,
    // need to specify dateFormat
    dateFormat: 'YYYY-MM-DD',
    filterEditor: DateFilter,
    filterEditorProps: (props, { index }) => {
      // for range and notinrange operators, the index is 1 for the after field
      return {
        placeholder:
          index == 1 ? 'Created date is before...' : 'Created date is after...',
      };
    },
    render: ({ value, cellProps: { dateFormat } }) =>
      moment(value).format(dateFormat),
  },
];

const App = () => {
  return (
    <div>
      <h3>Filterable DataGrid with date filter</h3>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        enableFiltering
        defaultFilterValue={defaultFilterValue}
        columns={columns}
        dataSource={contacts}
      />
    </div>
  );
};

export default () => <App />;
