import React, { useState, useEffect, useCallback, useRef } from 'react';

import Grid from './grid';
import Configurator from './configurator';
import { useAppState, useAppActions } from '../hooks';
import buildDataSource from './grid/dataSource';
import buildColumns from './grid/columns';
import { statuses } from '../utils';

const buildColumnsArray = (count: number) => {
  const cols = 'abcdefghijklmnopqrstuvwxyz';
  const colsArray = cols.split('');
  const length = colsArray.length;
  const scale = Math.floor(count / length) + 1;

  let colsLetters: any = [];
  for (let i = 0; i < scale; i++) {
    for (let j = 0; j < length; j++) {
      if (i === 0) {
        colsLetters.push(colsArray[j]);
      } else if (i > 0) {
        const letter = `${colsArray[i - 1]}${colsArray[j]}`;
        colsLetters.push(letter);
      }
    }
  }

  const result = colsLetters.slice(0, count);

  return result;
};

const App = () => {
  const [gridRef, setGridRef] = useState(null);
  const [status, setStatus] = useState(statuses.STAND_BY);
  const [text, setText] = useState('No records available');

  const init = useRef(true);

  const {
    setColumnsArray,
    setData,
    setColumns,
    setRecords,
    setColumnsCount,
    setReinit,
    setLoading,
    setReload,
  } = useAppActions();
  const { records, columnsCount, columnsArray, data, loading, reload } =
    useAppState();

  useEffect(() => {
    const columnsArray = buildColumnsArray(columnsCount);
    setColumnsArray(columnsArray);
  }, [columnsCount]);

  useEffect(() => {
    if (init.current) {
      loadColumns();
      loadData();

      if (columnsArray.length) {
        init.current = false;
      }
    }
  }, [columnsArray]);

  const loadData = useCallback(() => {
    setReinit();
    if (columnsArray.length) {
      const buildedData = buildDataSource(records, columnsArray);
      setData(buildedData);
    }
  }, [records, columnsArray, data]);

  const loadColumns = useCallback(() => {
    const newColumns = buildColumns(columnsArray);
    setColumns(newColumns);
  }, [columnsArray]);

  const onRecordsChange = useCallback((value) => {
    setReload(true);
    setRecords(value);
  }, []);

  const onColumnsCountChange = useCallback((value) => {
    setReload(true);
    setColumnsCount(value);
  }, []);

  const onLoadDataChange = useCallback(() => {
    setLoading(true);
    setReload(false);
    setStatus(statuses.UPDATING);

    setTimeout(() => loadColumns(), 0);
    if (reload) {
      setText('Generating data...');
      setTimeout(() => loadData(), 0);
    } else {
      if (data.length) {
        setTimeout(() => setData([]), 0);
      } else if (data.length === 0) {
        setText('Generating data...');
        setTimeout(() => loadData(), 0);
      }
    }
  }, [data, records, columnsArray]);

  return (
    <div className="app">
      <div className="app-content">
        <Grid
          setGridRef={setGridRef}
          setStatus={setStatus}
          text={text}
          setText={setText}
        />
        <Configurator
          gridRef={gridRef}
          onRecordsChange={onRecordsChange}
          onColumnsCountChange={onColumnsCountChange}
          onLoadDataChange={onLoadDataChange}
          data={data}
          status={status}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default App;
