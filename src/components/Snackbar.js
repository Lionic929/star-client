import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import SnackbarComponent from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const Snackbar = ({
  active,
  onClose,
  tid,
  message,
  autoHideDuration = null,
  vertical = 'top',
  horizontal = 'right',
}) => {
  const { t } = useTranslation();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return null;
    }

    if (onClose) {
      onClose(reason, false);
    }
  };

  return (
    <SnackbarComponent
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      open={active}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message || t(tid)}
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

Snackbar.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  tid: PropTypes.string,
  message: PropTypes.string,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  autoHideDuration: PropTypes.string,
};
