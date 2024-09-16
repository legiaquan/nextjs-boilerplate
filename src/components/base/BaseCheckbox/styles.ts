import { Checkbox as AntdCheckbox } from 'antd';
import styled from 'styled-components';

const { Group } = AntdCheckbox;

export const Checkbox = styled(AntdCheckbox)`
  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1.5px solid var(--checkbox-border-color);
  }

  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--disabled-color);
  }

  .ant-checkbox-disabled + span {
    color: var(--disabled-color);
  }
`;

export const CheckboxGroup = styled(Group)`
  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1.5px solid var(--checkbox-border-color);
  }
`;
