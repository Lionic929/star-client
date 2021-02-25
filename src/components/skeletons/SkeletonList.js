import React from 'react';

import { Skeleton } from './index';
import { ListGrid } from '../grids';

export const SkeletonList = () => {
  return (
    <ListGrid>
      <Skeleton variant="text" height={18} width="90%" />
      <Skeleton variant="text" height={18} width="94%" />
      <Skeleton variant="text" height={18} width="98%" />
      <Skeleton variant="text" height={18} width="92%" />
    </ListGrid>
  );
};
