import React from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import people from '../people';

const gridStyle = { minHeight: 550 };

const renderRowDetails = ({ data }) => {
  return (
    <div style={{ padding: 20 }}>
      <h3>Row details:</h3>
      <table>
        <tbody>
          {Object.keys(data).map((name, i) => {
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{data[name]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const columns = [
  { name: 'id', header: 'Id', defaultVisible: false, defaultWidth: 80 },
  { name: 'name', header: 'Name', defaultWidth: 120 },
  { name: 'email', header: 'Email', defaultWidth: 120 },
  { name: 'country', header: 'Country', defaultWidth: 120 },
  { name: 'city', header: 'City', defaultWidth: 120 },
  { name: 'age', header: 'Age', type: 'number', defaultWidth: 120 },
];

const renderRowDetailsExpandIcon = () => {
  return (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#fafafa">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
    </svg>
  );
};

const renderRowDetailsCollapsedIcon = () => {
  return (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#fafafa">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
  );
};

const renderRowDetailsMoreIcon = () => {
  return (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#fafafa">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
};

const App = () => {
  return (
    <div>
      <h3>Grid showing row details on expand - controlled</h3>

      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        rowExpandHeight={400}
        renderRowDetails={renderRowDetails}
        columns={columns}
        dataSource={people}
        renderRowDetailsExpandIcon={renderRowDetailsExpandIcon}
        renderRowDetailsCollapsedIcon={renderRowDetailsCollapsedIcon}
        renderRowDetailsMoreIcon={renderRowDetailsMoreIcon}
      />
    </div>
  );
};

export default () => <App />;
