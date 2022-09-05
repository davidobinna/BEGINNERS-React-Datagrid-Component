import Table from '@inovua/reactdatagrid-community';
import { TypeColumn, TypeGroup } from '@inovua/reactdatagrid-community/types';

interface RowData {
  firstName: string;
  lastName: string;
  age: number;
}

const dataSource: RowData[] = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 32,
  },
  {
    firstName: 'Bob',
    lastName: 'Vance',
    age: 59,
  },
];

const columns: TypeColumn[] = [
  {
    name: 'firstName',
    header: 'First Name',
    group: 'fullName',
    headerProps: {
      style: {
        backgroundColor: 'lightblue',
      },
    },
  },
  {
    name: 'lastName',
    header: 'Last Name',
    headerProps: {
      style: {
        backgroundColor: 'yellow',
      },
    },
    group: 'fullName',
  },
  {
    name: 'age',
    header: 'Age',
  },
];

const groups: TypeGroup[] = [
  {
    name: 'fullName',
    header: 'Full Name',
    headerAlign: 'center',
    headerProps: {
      style: {
        backgroundColor: 'red',
      },
    },
  },
];

export default function App() {
  return <Table dataSource={dataSource} columns={columns} groups={groups} />;
}
