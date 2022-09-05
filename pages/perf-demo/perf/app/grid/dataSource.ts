const buildDataSource = (
  records: number,
  columns: string[],
  callback?: Function
) => {
  if (callback) {
    return callback();
  }

  const dataSource: any = [];

  for (let i = 0; i < records; i++) {
    const result: any = {
      id: i,
    };

    for (let j = 0; j < columns.length; j++) {
      const letter = columns[j];

      result[letter] = letter.toUpperCase() + ' ' + (i + 1);
    }

    dataSource.push(result);
  }

  return dataSource;
};

export default buildDataSource;
