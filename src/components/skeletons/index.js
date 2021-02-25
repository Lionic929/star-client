import React from 'react';
import styled from 'styled-components';

import SkeletonUI from '@material-ui/lab/Skeleton';
import { colors } from '../../theme';

export { SkeletonTable } from './SkeletonTable';
export { SkeletonMenu } from './SkeletonMenu';
export { SkeletonList } from './SkeletonList';

export const Skeleton = ({ ...props }) => <StyledSkeleton {...props} />;

const StyledSkeleton = styled(SkeletonUI)`
  background-color: ${colors.darkLight} !important;
`;
