import React from 'react';

import InovuaCheckbox from '@inovua/react-ui-toolkit/CheckBox';
import { useAppState } from '../../hooks';

const Checkbox = (props: any) => {
  const { theme } = useAppState();

  return <InovuaCheckbox theme={theme} {...props} />;
};

export default Checkbox;
