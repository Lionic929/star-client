import React from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import { colors } from '../../theme';

export const Box = ({ ...props }) => <StyledPaper {...props} />;

const StyledPaper = styled(Paper)`
  background-color: ${colors.dark} !important;
`;
