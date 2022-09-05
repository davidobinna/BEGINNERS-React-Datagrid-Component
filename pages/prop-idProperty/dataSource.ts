const dataSource = [
  {
    id: 0,
    person: {
      personId: `id-${0}`,
      name: 'Amanda Soaresz',
      personalData: { age: 35, location: 'Rome' },
    },
  },
  {
    id: 1,
    person: {
      personId: `id-${1}`,
      name: 'Mary Adamson',
      personalData: { age: 25, location: 'Madrid' },
    },
  },
  {
    id: 2,
    person: {
      personId: `id-${2}`,
      name: 'Robert Fil',
      personalData: { age: 27, location: 'Seattle' },
    },
  },
  {
    id: 3,
    person: {
      personId: `id-${3}`,
      name: 'Roger Bob',
      personalData: { age: 81, location: 'Frankfurt' },
    },
  },
  {
    id: 4,
    person: {
      personId: `id-${4}`,
      name: 'Billary Konwik',
      personalData: { age: 18, location: 'Vienna' },
    },
  },
  {
    id: 5,
    person: {
      personId: `id-${5}`,
      name: 'Bob Marc',
      personalData: { age: 18, location: 'Brussels' },
    },
  },
  {
    id: 6,
    person: {
      personId: `id-${6}`,
      name: 'Matthew Richardson',
      personalData: { age: 54, location: 'Amsterdam' },
    },
  },
  {
    id: 7,
    person: {
      personId: `id-${7}`,
      name: 'Richy Peterson',
      personalData: { age: 54, location: 'Salzburg' },
    },
  },
];

const simpleDataSource = [
  { name: 'John Lewis', age: 35, uniqueId: 'john4' },
  { name: 'Mary Stones', age: 25, uniqueId: 'mary8' },
  { name: 'Mary Stones', age: 43, uniqueId: 'mary67' },
  { name: 'Andrew Clark', age: 31, uniqueId: 'and99' },
  { name: 'Vanessa Williams', age: 29, uniqueId: 'vane2' },
  { name: 'Terence More', age: 27, uniqueId: 'tere0' },
  { name: 'Leonard Stevenson', age: 48, uniqueId: 'leo64' },
];

const getDataSource = (simpleId: boolean) => {
  if (simpleId) {
    return simpleDataSource;
  }
  return dataSource;
};

export default getDataSource;
