import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LinkUI from '@material-ui/core/Link';
import { sizes, colors } from '../theme';
import { redirect } from '../utils/navigation';

export const Link = ({ color = 'textPrimary', underline = 'always', onClick, href, ...props }) => {
  return (
    <LinkStyled
      {...props}
      color={color}
      underline={underline}
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          return onClick();
        }

        if (href[0] === '/') {
          e.preventDefault();
          redirect(href);
        }
      }}
    />
  );
};

Link.propTypes = {
  color: PropTypes.string,
  underline: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

const LinkStyled = styled(LinkUI)`
  && {
    cursor: pointer;
    color: ${({ color }) => colors[color] || colors.textPrimary};
    opacity: 1;
    transition: opacity ${sizes.transition.default};

    &:hover {
      opacity: ${sizes.opacity.hover};
    }
  }
`;
