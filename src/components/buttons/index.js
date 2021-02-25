import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { colors, sizes } from '../../theme';

export const ButtonPrimary = ({ ...props }) => <StyledButtonPrimary {...props} />;

const StyledButtonPrimary = styled(Button)`
  height: 50px;
  color: #fff !important;
  ${({ variant, color }) =>
    variant === 'outlined'
      ? `&[disabled] {
            opacity: 0.6;
            border-color: rgba(97, 0, 255, 0.5) !important;
            color: ${colors.textSecondary} !important;
          }`
      : (variant = 'contained'
          ? `
          &[disabled] {
            opacity: 0.6;
            background-color: ${colors[color]} !important;
            color: ${colors.textSecondary} !important;
          }
  `
          : null)}
  ${({ color }) =>
    color === 'default' &&
    `
    transition: ${sizes.transition.field} !important;
    border-color: ${colors.gray} !important;
    &:hover {
      opacity: 0.8;
    }
  `}

  & .MuiButton-label {
    font-weight: 400;
    text-transform: none;
    font-size: 16px;
  }
`;
