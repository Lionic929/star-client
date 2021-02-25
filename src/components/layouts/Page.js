import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fade, sizes, colors } from '../../theme';
import { APP_PAGE_ID } from '../../constants';

export const PageLayout = ({ align = 'top', children, ...props }) => {
  return (
    <Page align={align} id={APP_PAGE_ID} {...props}>
      {children}
    </Page>
  );
};

const Page = styled.div`
  animation: ${fade} 0.5s;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  justify-content: ${(p) => p.align};
  flex-direction: column;
  padding: ${sizes.indent.header} 0 0;
`;

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};
