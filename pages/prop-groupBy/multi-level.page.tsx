/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import DataGrid from '@inovua/reactdatagrid-enterprise';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';
import { getGlobal } from '@inovua/reactdatagrid-community/getGlobal';

const globalObject = getGlobal();

const columns: TypeColumn[] = [
  {
    name: 'country',
    defaultFlex: 1,
    header: 'Country',
  },
  { name: 'firstName', defaultFlex: 1, header: 'First Name' },
  {
    name: 'age',
    type: 'number',
    defaultFlex: 1,
    header: 'Age',
  },
];

const people = [
  { id: 1, firstName: 'Paul', country: 'usa', age: 20 },
  { id: 2, firstName: 'Paul', country: 'usa', age: 20 },
  { id: 3, firstName: 'Paul - empty 20', country: 'usa', age: 20 },
  { id: 3, firstName: 'Paul - empty empty', country: 'uk', age: 10 },
  { id: 4, firstName: 'John - null', country: 'usa', age: 20 },
  { id: 5, firstName: 'Paul - undefined 40', country: 'fr', age: 40 },
  { id: 5, firstName: 'Paul - undefined empty', country: 'fr', age: 10 },
  { id: 6, firstName: 'Paul', country: 'uk', age: 20 },
  { id: 6, firstName: 'Paul', country: 'uk', age: 10 },
];

const App = () => {
  const [expandedGroups, setExpandedGroups] = useState({
    usa: true,
  });
  const [disableGroupByToolbar, setDisableGroupByToolbar] = useState(true);

  const checkboxProps = {
    checked: disableGroupByToolbar,
    onChange: setDisableGroupByToolbar,
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <CheckBox {...checkboxProps}>disableGroupByToolbar</CheckBox>
      </div>
      <DataGrid
        idProperty="id"
        defaultGroupBy={['country']}
        defaultCollapsedGroups={{ usa: true }}
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        columns={columns}
        dataSource={people}
        style={{ minHeight: '90vh' }}
        onReady={api => {
          (globalObject as any).api = api;
        }}
        disableGroupByToolbar={disableGroupByToolbar}
      />
    </div>
  );
};

export default () => <App />;
