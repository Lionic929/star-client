import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

export const ResponsiveLayout = ({ children, className, size = 'medium' }) => {
  return (
    <Content size={size} className={className}>
      {children}
    </Content>
  );
};

ResponsiveLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ size }) => sizes.layout[size] || sizes.layout.default};
`;
