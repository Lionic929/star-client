import React from 'react';
import styled from 'styled-components';

import LinearProgress from '@material-ui/core/LinearProgress';

export const Loader = () => {
  return <StyledLoader color="primary" />;
};

const StyledLoader = styled(LinearProgress)`
  && {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999999999;
  }
`;
