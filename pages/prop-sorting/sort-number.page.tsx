import Table from '@inovua/reactdatagrid-community';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';

interface RowData {
  firstName: string;
  lastName: string;
  age: number | null | undefined;
}

const dataSource: RowData[] = [];

function makeid(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 5000; i++) {
  dataSource.push({
    firstName: makeid(5),
    lastName: makeid(10),
    age: randomIntFromInterval(20, 100),
  });
}

const columns: TypeColumn[] = [
  {
    name: 'firstName',
    header: 'First Column',
  },
  {
    name: 'lastName',
    header: 'Second Column',
  },
  {
    name: 'age',
    header: 'Age',
    type: 'number',
  },
  {
    name: 'age',
    header: 'A Long Column Name',
    type: 'number',
  },
  {
    name: 'age',
    header: 'A Long Column Name',
    type: 'number',
  },
  {
    name: 'age',
    header: 'A Long Column Name',
    type: 'number',
  },
  {
    name: 'age',
    header: 'A Long Column Name',
    type: 'number',
  },
  {
    name: 'firstName',
    header: 'Another Name',
  },
  {
    name: 'lastName',
    header: 'Another Last Name',
  },
  {
    name: 'firstName',
    header: 'Another Name',
  },
  {
    name: 'lastName',
    header: 'Another Last Name',
  },
  {
    name: 'lastName',
    header: 'Another Value 2',
  },
  {
    name: 'lastName',
    header: 'AnotherValue 3',
  },
  {
    name: 'lastName',
    header: 'Another Value 2',
  },
  {
    name: 'lastName',
    header: 'AnotherValue 3',
  },
];

export default function App() {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      style={{ width: '100%', minHeight: '500px' }}
      checkboxColumn
      showColumnMenuTool={false}
      headerHeight={50}
      nativeScroll={true}
    />
  );
}
