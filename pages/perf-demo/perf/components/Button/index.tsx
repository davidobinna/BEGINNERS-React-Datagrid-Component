import React from 'react';

import InovuaButton from '@inovua/reactdatagrid-community/packages/Button';
import { useAppState } from '../../hooks';

const Button = (props: any) => {
  const { theme } = useAppState();

  return <InovuaButton theme={theme} {...props}></InovuaButton>;
};

export default Button;
