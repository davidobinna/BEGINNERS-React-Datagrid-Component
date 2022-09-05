import React from 'react';

import FieldWithLabel from '../../components/FieldWithLabel';
import { useAppState } from '../../hooks';
import { statuses } from '../../utils';

const recordsDataSource = [
  { id: 100, label: '100' },
  { id: 500, label: '500' },
  { id: 1000, label: '1.000' },
  { id: 10000, label: '10.000' },
  { id: 50000, label: '50.000' },
  { id: 100000, label: '100.000' },
  { id: 250000, label: '250.000' },
  { id: 500000, label: '500.000' },
  { id: 1000000, label: '1.000.000' },
];

const columnsDataSource = [
  { id: 10, label: '10' },
  { id: 20, label: '20' },
  { id: 30, label: '30' },
  { id: 40, label: '40' },
  { id: 50, label: '50' },
  { id: 100, label: '100' },
  { id: 250, label: '250' },
  { id: 500, label: '500' },
  { id: 1000, label: '1.000' },
  { id: 2500, label: '2.500' },
  { id: 5000, label: '5.000' },
];

const getButtonLabel = (length: number, reload: boolean) => {
  if (reload) {
    return 'Reload data';
  }
  if (length && !reload) {
    return 'Clear data';
  }
  return 'Load data';
};

const Configurator = (props: any) => {
  const { data, records, columnsCount, reload } = useAppState();

  const buttonLabel = getButtonLabel(data.length, reload);

  const disabledCombo = props.status !== statuses.STAND_BY;

  return (
    <div className="configurator">
      <div className="configurator-title">Configurator</div>

      <FieldWithLabel
        type="select"
        label="Record count"
        onSelectChange={props.onRecordsChange}
        selectData={recordsDataSource}
        selectValue={records}
        disabled={disabledCombo}
      ></FieldWithLabel>

      <FieldWithLabel
        type="select"
        label="Columns count"
        onSelectChange={props.onColumnsCountChange}
        selectData={columnsDataSource}
        selectValue={columnsCount}
        disabled={disabledCombo}
      ></FieldWithLabel>

      <FieldWithLabel
        type="button"
        onClick={props.onLoadDataChange}
        disabled={props.status === statuses.UPDATING}
        loading={props.loading}
      >
        {!props.loading && buttonLabel}
      </FieldWithLabel>
    </div>
  );
};

export default Configurator;
