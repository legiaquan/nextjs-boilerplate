import type { CheckboxProps } from 'antd';
import React from 'react';

import * as S from './styles';

export type BaseCheckboxProps = CheckboxProps;

interface BaseCheckboxInterface extends React.FC<BaseCheckboxProps> {
  Group: typeof S.CheckboxGroup;
}

export const BaseCheckbox: BaseCheckboxInterface = (props) => {
  return <S.Checkbox {...props} />;
};

BaseCheckbox.Group = S.CheckboxGroup;
