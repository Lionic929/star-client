import React from 'react';
import styled from 'styled-components';

import { Skeleton } from './index';
import { spacing } from '../../theme';

export const SkeletonMenu = () => {
  return (
    <Container>
      <Skeleton variant="text" height={18} width="93%" />
      <Skeleton variant="text" height={18} width="100%" />
      <Skeleton variant="text" height={18} width="95%" />
      <Skeleton variant="text" height={18} width="97%" />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: ${spacing(3)};
  grid-template-columns: 50px 50px 50px 50px;
`;
