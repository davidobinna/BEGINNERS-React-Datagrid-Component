import React, { useCallback, useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import Button from '@inovua/reactdatagrid-community/packages/Button';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  const columns = React.useMemo(
    () => [
      { name: 'id', header: 'Id', type: 'number' },
      { name: 'firstName', header: 'First Name' },
    ],
    []
  );

  const dataSource = React.useCallback(() => {
    return [
      { id: 1, firstName: 'John' },
      { id: 2, firstName: 'Harry' },
    ];
  }, []);

  return (
    <React.StrictMode>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={() => setLoading(prev => !prev)}>
          Toggle Loading
        </Button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ReactDataGrid columns={columns} dataSource={dataSource} />
      )}
    </React.StrictMode>
  );
};

export default App;
