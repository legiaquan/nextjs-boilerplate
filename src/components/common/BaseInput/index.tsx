import type { InputProps } from 'antd';
import { Input } from 'antd';
import React from 'react';

// Define your custom input component
const BaseInput: React.FC<InputProps> = (props) => {
  return <Input {...props} />;
};

export default BaseInput;
