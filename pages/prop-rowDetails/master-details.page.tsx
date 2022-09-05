import React, { useState, useCallback } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';

const API_URL = 'https://demos.reactdatagrid.io/api/v1';

const accountsGridStyle = { minHeight: 800 };

const getDataSource = entity => {
  return ({ skip, limit, sortInfo, groupBy, filterValue }) => {
    const queryParams = [
      skip ? 'skip=' + skip : null,
      limit ? 'limit=' + limit : null,
      groupBy && groupBy.length ? 'groupBy=' + groupBy : null,
      filterValue && filterValue.length
        ? 'filterBy=' +
          JSON.stringify(
            filterValue
              .filter(v => v.active !== false)
              .map(v => ({
                value: v.value,
                name: v.name,
                operator: v.operator,
                type: v.type,
              }))
          )
        : null,
      sortInfo ? 'sortInfo=' + JSON.stringify(sortInfo) : null,
    ]
      .filter(value => value)
      .join('&');

    return fetch(API_URL + '/' + entity + '?' + queryParams).then(response => {
      const totalCount = response.headers.get('X-Total-Count');
      return response.json().then(data => {
        return { data, count: parseInt(totalCount) };
      });
    });
  };
};

const floatNumber = value =>
  Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const renderGroupTitle = value => value || 'N/A';
const renderLabeledGroupTitle = value => (value ? value.label : 'N/A');
const defaultVisible = false;

const gridLinkStyle = { color: '#9BA7B4' };

const GridLink = ({ value }) => (
  <a style={gridLinkStyle} href={value} target="_blank">
    {value}
  </a>
);

const columns = [
  { name: 'id', maxWidth: 50, defaultVisible, header: 'ID' },
  { name: 'name', renderGroupTitle, header: 'Name' },
  { name: 'email', renderGroupTitle, header: 'Email' },
  { name: 'phone', renderGroupTitle, header: 'Phone' },
  {
    name: 'website',
    header: 'Website',
    renderGroupTitle,
    render: ({ data }) => <GridLink value={data.website} />,
  },
  {
    name: 'type',
    header: 'Type',
    renderGroupTitle,
    groupToString: value => (value ? value.label : 'N/A'),
    filterEditor: SelectFilter,
    sortName: 'type.label',
    groupByName: 'type.label',
    render: ({ data }) => {
      return data.type && data.type.label;
    },
  },
  {
    name: 'industry',
    header: 'Industry',
    filterEditor: SelectFilter,
    renderGroupTitle,
    groupToString: value => (value ? value.label : 'N/A'),
    sortName: 'industry.label',
    groupByName: 'industry.label',
    render: ({ data }) => {
      return data.industry && data.industry.label;
    },
  },
  {
    name: 'annualRevenue',
    header: 'Annual Revenue',
    filterEditor: NumberFilter,
    defaultVisible,
    renderGroupTitle,
    type: 'number',
    filterDelay: 500,
    render: ({ data }) => '$ ' + floatNumber(data.annualRevenue),
  },
  {
    name: 'noOfEmployees',
    header: '# of Employees',
    filterEditor: NumberFilter,
    defaultVisible,
    renderGroupTitle,
  },
  {
    name: 'facebook',
    header: 'Facebook',
    renderGroupTitle,
    defaultVisible,
    render: ({ data }) => <GridLink value={data.facebook} />,
  },
  {
    name: 'twitter',
    header: 'Twitter',
    renderGroupTitle,
    defaultVisible,
    render: ({ data }) => <GridLink value={data.twitter} />,
  },
  {
    name: 'linkedIn',
    header: 'LinkedIn',
    renderGroupTitle,
    defaultVisible,
    render: ({ data }) => <GridLink value={data.linkedIn} />,
  },
];

const dataSourceCache = {};

const contactsColumns = [
  { name: 'id', maxWidth: 50, defaultVisible, header: 'ID' },
  {
    name: 'firstName',
    header: 'Name',
    renderGroupTitle,
    render: ({ data }) => data.firstName + ' ' + data.lastName,
  },
  { name: 'email', renderGroupTitle, header: 'Email' },
  { name: 'phone', renderGroupTitle, header: 'Phone' },
  {
    name: 'account',
    header: 'Account',
    defaultVisible,
    groupByName: 'account.name',
    sortName: 'account.name',
    filterName: 'account.name',
    minWidth: 250,
  },
  {
    name: 'dateOfBirth',
    header: 'Date of Birth',
    defaultVisible,
    renderGroupTitle,
    render: ({ data }) => {
      return data.dateOfBirth.toString();
    },
  },
  {
    name: 'facebook',
    header: 'Facebook',
    defaultVisible,
    resizable: true,
    renderGroupTitle,
    group: 'socialMedia',
    render: ({ data }) => {
      return <GridLink value={data.facebook} />;
    },
  },
  {
    name: 'twitter',
    header: 'Twitter',
    group: 'socialMedia',
    resizable: true,
    defaultVisible,
    renderGroupTitle,
    render: ({ data }) => {
      return <GridLink value={data.twitter} />;
    },
  },
  {
    name: 'linkedIn',
    header: 'Linked In',
    defaultVisible,
    group: 'socialMedia',
    resizable: true,
    renderGroupTitle,
    render: ({ data }) => {
      return <GridLink value={data.linkedIn} />;
    },
  },
  {
    name: 'address',
    header: 'Address',
    defaultVisible,
    renderGroupTitle,
    group: 'contactInfo',
  },
];

const getContactsFilterValue = account => {
  return [
    {
      name: 'account.id',
      value: account ? account.id : '',
      operator: 'eq',
      type: 'string',
    },
    {
      name: 'firstName',
      type: 'string',
      operator: 'contains',
      value: '',
    },
    {
      name: 'phone',
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
      name: 'account',
      type: 'string',
      operator: 'contains',
      value: '',
    },
    {
      name: 'facebook',
      type: 'string',
      operator: 'contains',
      value: '',
    },
    {
      name: 'twitter',
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
      name: 'createdBy',
      type: 'string',
      operator: 'contains',
      value: '',
    },
    {
      name: 'linkedIn',
      type: 'string',
      operator: 'contains',
      value: '',
    },
    {
      name: 'permissionToCall',
      type: 'bool',
      operator: 'eq',
      value: null,
    },
    {
      name: 'permissionToEmail',
      type: 'bool',
      operator: 'eq',
      value: null,
    },
  ];
};

const defaultGroupBy = [];

const accountRowHeight = 40;
const contactRowHeight = accountRowHeight;
const accountExpandHeight = 500;

const renderRowDetailsExpandIcon = () => {
  return (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#fafafa">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
    </svg>
  );
};

const renderRowDetailsCollapsedIcon = () => {
  return (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#fafafa">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
  );
};

const renderRowDetailsMoreIcon = () => {
  return (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#fafafa">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
};

const App = () => {
  const [accountRowHeights, setAccountRowHeights] = useState({});

  const accountsDataSource = useCallback(getDataSource('accounts'), []);
  const contactsDataSource = useCallback(getDataSource('contacts'), []);

  const renderContactsGrid = ({ data }) => {
    const defaultFilterValue = getContactsFilterValue(data);

    return (
      <ReactDataGrid
        defaultFilterValue={defaultFilterValue}
        dataSource={contactsDataSource}
        pagination
        columns={contactsColumns}
        columnDefaultWidth={200}
      />
    );
  };

  return (
    <ReactDataGrid
      dataSource={accountsDataSource}
      style={accountsGridStyle}
      rowHeight={accountRowHeight}
      pagination
      rowExpandHeight={accountExpandHeight}
      rowHeights={accountRowHeights}
      renderDetailsGrid={renderContactsGrid}
      defaultGroupBy={defaultGroupBy}
      columnDefaultWidth={200}
      columns={columns}
      renderRowDetailsExpandIcon={renderRowDetailsExpandIcon}
      renderRowDetailsCollapsedIcon={renderRowDetailsCollapsedIcon}
      renderRowDetailsMoreIcon={renderRowDetailsMoreIcon}
    />
  );
};

export default () => <App />;
