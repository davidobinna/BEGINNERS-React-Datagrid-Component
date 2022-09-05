import React from 'react';

import ComboBox from '@inovua/reactdatagrid-community/packages/ComboBox';
import { useAppState } from '../../hooks';

const Select = (props: any) => {
  const { theme } = useAppState();

  return (
    <ComboBox
      theme={theme}
      collapseOnSelect
      changeValueOnNavigation
      {...props}
    />
  );
};

export default Select;
