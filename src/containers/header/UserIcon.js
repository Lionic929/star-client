import React from 'react';
import styled from 'styled-components';

import { staticPath } from '../../utils/staticPath';
import { colors, sizes } from '../../theme';

export const UserIcon = ({ ...props }) => {
  return (
    <Icon {...props}>
      <img src={staticPath('/svg/user.svg')} alt="User" />
    </Icon>
  );
};

const Icon = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 50%;
  transition: ${sizes.transition.default};

  & svg path {
    stroke: ;
  }

  &:hover {
    opacity: ${sizes.opacity.default};
  }
`;
