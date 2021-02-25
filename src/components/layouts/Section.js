import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, sizes } from '../../theme';

export const SectionLayout = ({ children, className, indent }) => {
  return (
    <Grid indent={indent} className={className}>
      {children}
    </Grid>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  indent: PropTypes.bool,
};

const Grid = styled.div`
  display: grid;
  padding-top: ${({ indent }) => (indent ? sizes.indent.default : 0)};
  padding-bottom: ${({ indent }) => (indent ? sizes.indent.default : 0)};
  grid-template-rows: auto;
  grid-gap: ${spacing(6)};
`;
