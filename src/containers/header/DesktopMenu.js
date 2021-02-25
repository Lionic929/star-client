import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Text, Link } from '../../components';
import { spacing, colors, sizes } from '../../theme';

export const DesktopMenu = ({ items, activePath }) => {
  return (
    <Container>
      {items.map(({ tid, path, id }) => {
        return (
          <React.Fragment key={id}>
            <Item underline="none" href={path} active={activePath === path}>
              <Text tid={tid} />
            </Item>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: ${colors.textPrimary};
`;

const Item = styled(Link)`
  && {
    padding: ${spacing(4)} 0;
    font-size: 16px;
    color: ${colors.textSecondary} !important;
    opacity: 0.75 !important;
    transition: ${sizes.transition.default};
    &:hover {
      opacity: 1 !important;
    }
    ${(p) =>
      p.active
        ? css`
            opacity: 1 !important;
            color: ${colors.textSecondary} !important;
          `
        : ''}

    &:not(:last-of-type) {
      margin-right: ${spacing(5)};
    }
  }
`;

DesktopMenu.propTypes = {
  items: PropTypes.bool.isRequired,
  activePath: PropTypes.string.isRequired,
};
