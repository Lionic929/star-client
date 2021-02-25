import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { Skeleton } from './index';

export const SkeletonTable = () => {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <Skeleton variant="rect" height={60} width="100%" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton variant="rect" height={60} width="100%" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton variant="rect" height={60} width="100%" />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
