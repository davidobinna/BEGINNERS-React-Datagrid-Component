import React from 'react';
import ReactDataGrid from '../../../enterprise-edition';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const countryClass = 'global-row-color-tomato';
const blueColor = 'global-row-color-blue';

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: false,
    defaultWidth: 80,
    type: 'number',
  },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  {
    name: 'country',
    header: 'County',
    defaultFlex: 1,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultFlex: 1 },
  {
    name: 'age',
    header: 'Age',
    defaultFlex: 1,
    type: 'number',
    className: ({ value }) => {
      if (value < 30) {
        return countryClass;
      }
      return blueColor;
    },
  },
];

const renderMenuTool = ({ className }) => {
  return (
    <svg className={className} height="24px" viewBox="0 0 24 24" width="24px">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" />
    </svg>
  );
};

const App = () => {
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        columns={columns}
        dataSource={people}
        renderMenuTool={renderMenuTool}
      />
    </div>
  );
};

export default () => <App />;
