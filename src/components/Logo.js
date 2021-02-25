import React from 'react';
import styled from 'styled-components';

import { staticPath } from '../utils/staticPath';

export const Logo = () => {
  return <StyledLogo src={staticPath('/svg/logo.svg')} className="hoverable" />;
};

const StyledLogo = styled.img`
  cursor: pointer;
`;
