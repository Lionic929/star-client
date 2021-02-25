import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { ErrorView } from './View';
import { staticPath } from '../../utils/staticPath';
import { headerNavigatePath } from '../../actions/navigation';

export const ErrorContainer = ({ status, dispatch }) => {
  useState(() => {
    dispatch(headerNavigatePath(null));
  }, []);

  const getErrorTid = () => {
    let errorTid;

    switch (status) {
      case 401: {
        errorTid = 'ACCESS_DENIED';
        break;
      }
      case 404: {
        errorTid = 'NOT_FOUND';
        break;
      }
      default:
        return null;
    }

    return `ERROR.PAGE.${errorTid}`;
  };

  return <ErrorView status={status} errorTid={getErrorTid({ status })} />;
};

ErrorContainer.propTypes = {
  status: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

export const Error = compose(connect())(ErrorContainer);
