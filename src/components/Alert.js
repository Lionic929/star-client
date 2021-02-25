import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AlertUI from '@material-ui/lab/Alert';

import { Text } from './Text';
import { colors } from '../theme';

export const Alert = ({ tid, type, className, variant }) => {
  return (
    <StyledAlert className={className} variant={variant} severity={type}>
      <Text tid={tid} />
    </StyledAlert>
  );
};

const StyledAlert = styled(AlertUI)`
  .MuiAlert-message {
    color: ${colors.textSecondary} !important;
  }
`;

Alert.propTypes = {
  tid: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
};
