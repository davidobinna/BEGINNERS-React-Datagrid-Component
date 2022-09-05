import React from 'react';
import DateFilter from '../../../enterprise-edition/DateFilter';
import NumberFilter from '../../../enterprise-edition/NumberFilter';
import SelectFilter from '../../../enterprise-edition/SelectFilter';

import DateEditor from '../../../community-edition/DateEditor';
import moment from 'moment';

const toLocaleFloatNumber = value => {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const email = {
  name: 'email',
  group: 'personalInfo',
  header: 'Email',
  render: ({ value, data }) => {
    if (!value) {
      return null;
    }

    return [value ? value : ''];
  },
};

const renderDateTime = value => {
  if (!value) {
    return 'N/A';
  }
  const date = new Date(value);
  return <span>{moment(value).format('MM/DD/YYYY hh:mm')}</span>;
};

export const sourceDataSource = [
  { id: 1, label: 'Banner Campaign' },
  { id: 2, label: 'Email Campaign' },
  { id: 3, label: 'Existing customer' },
  { id: 4, label: 'Facebook' },
  { id: 5, label: 'Google Adwords' },
  { id: 6, label: 'LinkedIn' },
  { id: 7, label: 'Partner' },
  { id: 8, label: 'Radio Campaign' },
  { id: 9, label: 'Refferal' },
  { id: 10, label: 'Telesales' },
  { id: 11, label: 'TV Campaign' },
  { id: 12, label: 'Website' },
];

export const ratingOptions = [
  { id: 1, label: 'Cold' },
  { id: 2, label: 'Hot' },
  { id: 3, label: 'Warm' },
];

export const statusDataSource = [
  { id: 1, label: 'New' },
  { id: 2, label: 'Attempted To Contact' },
  { id: 3, label: 'Contacted' },
  { id: 4, label: 'Qualified' },
  { id: 5, label: 'Unqualified' },
];

export const industryDataSource = [
  { id: 1, label: 'Agriculture' },
  { id: 2, label: 'Banking' },
  { id: 3, label: 'Beverage & Tabacco' },
  { id: 4, label: 'Chemical' },
  { id: 5, label: 'Defence' },
  { id: 6, label: 'Energy' },
  { id: 7, label: 'Food' },
  { id: 8, label: 'Grocery' },
  { id: 9, label: 'Health Care' },
  { id: 10, label: 'Internet' },
  { id: 11, label: 'Legal' },
  { id: 12, label: 'Music' },
  { id: 13, label: 'Other' },
  { id: 14, label: 'Pharmaceuticals' },
  { id: 15, label: 'Real Estate' },
  { id: 16, label: 'Software' },
];

const phoneIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6156 9.52781L10.6556 9.30226C10.1811 9.24781 9.71448 9.41115 9.38003 9.74559L7.94114 11.1845C6.83748 10.6245 5.83648 9.89415 4.97159 9.02848C4.10592 8.16359 3.37559 7.16259 2.81559 6.05892L4.25448 4.62003C4.58892 4.28559 4.75225 3.81892 4.69781 3.34448L4.47225 1.38448C4.37892 0.598924 3.71781 0.0078125 2.92448 0.0078125H1.57892C0.700032 0.0078125 -0.0310795 0.738924 0.023365 1.61781C0.229476 4.93815 1.65981 7.92404 3.86792 10.1321C6.07603 12.3403 9.06192 13.7706 12.3823 13.9767C13.2611 14.0311 13.9923 13.3 13.9923 12.4211V11.0756C13.9923 10.2823 13.4011 9.62115 12.6156 9.52781Z"
      fill="#737F8B"
    />
  </svg>
);

export const columns = [
  {
    name: 'lastName',
    header: 'Name',
    resizable: true,
    render: ({ data }) => `${data.firstName} ${data.lastName}`,

    headerVerticalAlign: 'center',
  },
  { ...email },
  {
    name: 'address',
    header: 'Address',
    type: 'number',
    group: 'personalInfo',
    textVerticalAlign: 'top',
    render: ({ value }) => {
      if (!value) {
        return null;
      }

      return [
        <div key="phone_icon" className="datagrid-demo__phone-icon">
          {phoneIcon}
        </div>,
        <span key="whitespace" style={{ marginLeft: 22 }}></span>,
        value,
      ];
    },
  },
  {
    name: 'annualRevenue',
    header: 'Annual revenue',
    headerVerticalAlign: 'bottom',
    filterDelay: 500,
    type: 'number',
    render: ({ value }) =>
      value == null ? null : `$ ${toLocaleFloatNumber(value)}`,
    filterEditor: NumberFilter,
  },
  {
    name: 'status',
    header: 'Status',
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: 'All',
    },
    dataSource: sourceDataSource,
    sortName: 'status.label',
    render: ({ value: source }) => (source ? source.label : source),
  },
  {
    name: 'createdOn',
    header: 'Created on',
    defaultWidth: 200,
    renderGroupTitle: renderDateTime,
    filterEditor: DateFilter,
    editor: DateEditor,
    filterEditorProps: {
      dateFormat: 'MM-DD-YYYY',
      cancelButton: false,
      highlightWeekends: false,
      weekNumbers: false,
      placeholder: 'Placeholder',
    },

    render: ({ value, data }) => renderDateTime(value),
  },
  {
    name: 'createdBy',
    header: 'Created by',
    sortName: 'createdBy.username',
    filterName: 'createdBy.username',
    groupByName: 'createdBy.username',
    filterEditor: DateFilter,
    render: ({ value }) => value && value.username,
  },
  {
    name: 'rating',
    header: 'Rating',
    sortName: 'rating.label',
    groupByName: 'rating.label',
    render: ({ value: source }) => (source ? source.label : source),
  },
  {
    name: 'company',
    header: 'Company',
  },
  {
    name: 'jobTitle',
    header: 'Job title',
  },
  {
    name: 'industry',
    header: 'Industry',
    render: ({ value: industry }) => (industry ? industry.label : industry),
  },
  {
    name: 'permissionToCall',
    header: 'Permission to call',
    render: ({ data }) => (data.permissionToCall ? 'Yes' : 'No'),
  },
  {
    name: 'permissionToEmail',
    header: 'Permission to email',
    render: ({ data }) => (data.permissionToEmail ? 'Yes' : 'No'),
  },
];

export const defaultFilterValue = [
  {
    name: 'lastName',
    type: 'string',
    operator: 'contains',
    value: '',
  },
  {
    name: 'email',
    type: 'string',
    operator: 'contains',
    value: '',
  },
  {
    name: 'address',
    type: 'string',
    operator: 'contains',
    value: '',
  },
  {
    name: 'source',
    type: 'select',
    operator: 'eq',
    value: '',
    filterEditorProps: {
      placeholder: 'All',
    },
    dataSource: sourceDataSource,
  },
  {
    name: 'annualRevenue',
    type: 'number',
    operator: 'gt',
    value: '',
    filterEditorProps: {
      minValue: 0,
      initialStep: 100000,
      step: 100000,
      shiftStep: 1000000,
      precision: 2,
      format: 'currency',
      currencySimbol: '$',
      currencyPosition: 'start',
    },
  },
  {
    name: 'industry',
    type: 'select',
    operator: 'eq',
    value: '',
    filterEditorProps: {
      placeholder: 'All',
    },
    dataSource: industryDataSource,
  },
  {
    name: 'rating',
    type: 'select',
    operator: 'eq',
    value: '',
    filterEditorProps: {
      placeholder: 'All',
    },
    dataSource: ratingOptions,
  },
  {
    name: 'status',
    type: 'select',
    operator: 'eq',
    value: '',
    filterEditorProps: {
      placeholder: 'All',
    },
    dataSource: statusDataSource,
  },
  {
    name: 'createdBy',
    value: '',
  },
  {
    name: 'createdOn',
    value: '',
    type: 'date',
    operator: 'eq',
  },
];
