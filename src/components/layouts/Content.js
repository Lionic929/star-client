import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

export const ContentLayout = ({ children, className }) => {
  return <Padding className={className}>{children}</Padding>;
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Padding = styled.div`
  padding-left: ${sizes.content};
  padding-right: ${sizes.content};
`;
