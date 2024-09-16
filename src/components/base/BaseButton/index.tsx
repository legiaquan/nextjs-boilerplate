import { Button } from 'antd';
import React from 'react';

import type { BaseButtonProps } from './types';

const BaseButton: React.FC<BaseButtonProps> = (props) => {
  return <Button {...props} />;
};

export default BaseButton;
