import Table from '@inovua/reactdatagrid-enterprise';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';

interface RowData {
  id: number;
  firstName: string;
  lastName: string;
  age: number | null | undefined;
}

const dataSource: any = [];

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

const COLS_TIMES: number = 5;
const initialCols = [
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
];

const columns = (): TypeColumn[] => {
  const result = [];

  result.push({
    name: 'id',
    header: 'ID',
    width: 80,
  });

  for (let i = 0; i < COLS_TIMES; i++) {
    for (let j = 0; j < initialCols.length; j++) {
      result.push({
        name: `${initialCols[j].name}--${i}`,
        header: `${initialCols[j].header}--${i}`,
      });
    }
  }

  return result;
};

for (let i = 0; i < 1000; i++) {
  let result = {};
  for (let j = 0; j < initialCols.length; j++) {
    let chunk = {};
    let columnIndex = 1;
    for (let k = 0; k < COLS_TIMES; k++) {
      const res = {
        [`firstName--${k}`]: `${columnIndex}--${makeid(5)}`,
        [`lastName--${k}`]: `${columnIndex + 1}--${makeid(10)}`,
        [`age--${k}`]: `${columnIndex + 2}--${randomIntFromInterval(20, 100)}`,
      };
      columnIndex = columnIndex + 3;

      Object.assign(chunk, res);
    }
    Object.assign(result, chunk);
  }

  dataSource.push(Object.assign({ id: i }, result));
}

export default function App() {
  return (
    <Table
      dataSource={dataSource}
      columns={columns()}
      style={{ width: '100%', minHeight: '500px' }}
      // checkboxColumn
      // showColumnMenuTool={false}
      headerHeight={50}
      nativeScroll={true}
      virtualizeColumns
      rowIndexColumn
      defaultGroupBy={[]}
    />
  );
}
