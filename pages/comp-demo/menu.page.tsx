import React from 'react';
import Menu from '../../../community-edition/packages/Menu';

const createItems = (length, nest) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push({
      id: `${i}`,
      itemId: `${i}`,
      label: `label: ${i}`,
      name: `name: ${i}`,
      value: `${i}`,
      items: nest ? createItems(25, false) : [],
    });
  }
  return result;
};

const constainStyle = {
  width: 500,
  height: 500,
  border: '1px dashed #c9c9c9',
};

const MenuApp = () => {
  return (
    <div>
      <h2>Menu app</h2>
      <div id="constrain" style={constainStyle}>
        <Menu
          theme="default-dark"
          constrainTo="#constrain"
          items={createItems(25, true)}
        />
      </div>
    </div>
  );
};

export default MenuApp;
