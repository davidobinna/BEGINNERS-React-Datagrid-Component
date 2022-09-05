import React from 'react';
import ReactDataGrid from '../../../enterprise-edition';

const gridStyle = { minHeight: 550 };

const dataSource = [
  {
    id: 0,
    person: {
      name: 'Amanda Soaresz',
      personalData: { age: 35, location: 'Rome' },
    },
  },
  {
    id: 1,
    person: {
      name: 'Mary Adamson',
      personalData: { age: 25, location: 'Madrid' },
    },
  },
  {
    id: 2,
    person: {
      name: 'Robert Fil',
      personalData: { age: 27, location: 'Seattle' },
    },
  },
  {
    id: 3,
    person: {
      name: 'Roger Bob',
      personalData: { age: 81, location: 'Frankfurt' },
    },
  },
  {
    id: 4,
    person: {
      name: 'Billary Konwik',
      personalData: { age: 18, location: 'Vienna' },
    },
  },
  {
    id: 5,
    person: {
      name: 'Bob Marc',
      personalData: { age: 18, location: 'Brussels' },
    },
  },
  {
    id: 6,
    person: {
      name: 'Matthew Richardson',
      personalData: { age: 54, location: 'Amsterdam' },
    },
  },
  {
    id: 7,
    person: {
      name: 'Richy Peterson',
      personalData: { age: 54, location: 'Salzburg' },
    },
  },
];

const defaultSortInfo = { name: 'age', dir: 1 };

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    type: 'number',
    defaultWidth: 80,
  },
  {
    name: 'person',
    header: 'Person',
    defaultFlex: 1,
    sortable: true,
    sort: (p1, p2) =>
      p1.name.split(' ')[1].localeCompare(p2.name.split(' ')[1]),
    render: ({ data }) => {
      return <span>{data.person.name}</span>;
    },
  },
  {
    name: 'person.personalData.age',
    header: 'Age',
    maxWidth: 400,
    defaultWidth: 200,
    sortable: true,
    sort: (a1, a2) => {
      console.log({ a1, a2 });
      return a1 - a2;
    },
    render: ({ data }) => <span>{data.person.personalData.age}</span>,
  },
  {
    name: 'person.personalData.location',
    header: 'Location',
    defaultWidth: 200,
    sortable: true,
    sort: (l1, l2) => {
      return l1.split(' ')[0].localeCompare(l2.split(' ')[0]);
    },
    render: ({ data }) => {
      return <span>{data.person.personalData.location}</span>;
    },
  },
];

const App = () => {
  return (
    <div>
      <p>In this example, you can sort the person column by the last name.</p>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        dataSource={dataSource}
        columns={columns}
        sortable
        defaultSortInfo={defaultSortInfo}
      />
    </div>
  );
};

export default () => <App />;
