import React, { useEffect } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import { statuses } from '../../utils';
import { useAppState, useAppActions } from '../../hooks';

const gridStyles = {
  width: '100%',
  height: 'calc(100vh - 64px)',
  flex: 1,
  zIndex: 1,
};

const TextWithSpinner = ({ text }: { text: string }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {text}
      <div style={{ marginLeft: 10 }} className="spinner" />
    </div>
  );
};

const emptyText = (text: string, loading: boolean) => {
  return (
    <div style={{ fontSize: 14, color: '#9ba7b4' }}>
      {!loading ? text : <TextWithSpinner text={text} />}
    </div>
  );
};

const DataGrid = (props: any) => {
  const { theme, data, columns, reinit, loading } = useAppState();
  const { setLoading } = useAppActions();

  useEffect(() => {
    setLoading(false);
    props.setStatus(statuses.STAND_BY);
    props.setText('No records available');
  }, [data]);

  const gridDOMProps: any = {
    key: `${columns.length}-${data.length}-${reinit}`,
    idProperty: 'id',
    theme,
    handle: props.setGridRef,
    style: gridStyles,
    licenseKey:
      'AppName=multi_app,Company=Inovua,ExpiryDate=2022-07-06,LicenseDeveloperCount=1,LicenseType=multi_app,Ref=InovuaLicenseRef,Z=-464174999-2163366611737475820-2096356925-464174999-785223719',
    columns: columns || [],
    dataSource: data || [],
    rowIndexColumn: true,
    emptyText: emptyText(props.text, loading) || 'No data',
  };

  return <ReactDataGrid {...gridDOMProps} />;
};

export default DataGrid;
