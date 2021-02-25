import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DrawerUI from '@material-ui/core/Drawer';

import { colors } from '../../theme';

export const Drawer = ({ children, open, onClose, ...props }) => {
  return (
    <React.Fragment>
      <StyledDrawer open={open} onClose={onClose} {...props}>
        {children}
      </StyledDrawer>
    </React.Fragment>
  );
};

const StyledDrawer = styled(DrawerUI)`
  & .MuiPaper-root {
    background-color: ${colors.darkLight} !important;
  }
`;

Drawer.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
