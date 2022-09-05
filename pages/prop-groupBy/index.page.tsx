/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import DataGrid from '@inovua/reactdatagrid-enterprise';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';
import people from '../people';

const gridStyle = { minHeight: 450 };

const columns = [
  { name: 'id', type: 'number', width: 70 },
  { name: 'firstName', flex: 1, minWidth: 100 },
  { name: 'country', flex: 1, minWidth: 100 },
  { name: 'age', type: 'number', width: 70 },
];

const renderGroupCollapseTool = ({ domProps, size, rtl }) => {
  domProps = { ...domProps, style: { ...domProps.style, fill: 'orange' } };

  return (
    <svg {...domProps} height={size} width={size} viewBox="0 0 48 48">
      {rtl ? (
        <g transform="rotate(180, 24, 24)">
          <path d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
        </g>
      ) : (
        <path d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
      )}
    </svg>
  );
};

const renderGroupExpandTool = ({ domProps, size }) => {
  domProps = { ...domProps, style: { ...domProps.style, fill: 'orange' } };

  return (
    <svg {...domProps} height={size} width={size} viewBox="0 0 48 48">
      <path d="M24 40 8 24 10.1 21.9 22.5 34.3V8H25.5V34.3L37.9 21.9L40 24Z" />
    </svg>
  );
};

const App = () => {
  const [rtl, setRtl] = useState(false);

  return (
    <div>
      <h3>Custom group tools</h3>

      <div style={{ marginBottom: 20 }}>
        <CheckBox checked={rtl} onChange={setRtl}>
          Right-to-left
        </CheckBox>
      </div>

      <DataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={people}
        defaultGroupBy={['country']}
        renderGroupCollapseTool={renderGroupCollapseTool}
        renderGroupExpandTool={renderGroupExpandTool}
        rtl={rtl}
      />
    </div>
  );
};
export default () => <App />;
