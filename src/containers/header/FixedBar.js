import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import { colors } from '../../theme';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export const FixedBar = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <StyledAppBar>{children}</StyledAppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

const StyledAppBar = styled(AppBar)`
  background: ${colors.darkLight} !important;
  box-shadow: 0 0 15px ${colors.darkLight} !important;
`;

FixedBar.propTypes = {
  children: PropTypes.element.isRequired,
};
