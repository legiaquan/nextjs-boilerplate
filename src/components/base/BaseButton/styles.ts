import { Button as AntButton } from 'antd';
import styled from 'styled-components';

interface BtnProps {
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>``;
