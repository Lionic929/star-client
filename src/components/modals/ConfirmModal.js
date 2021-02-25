import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Text } from '../index';

export const ConfirmModal = ({ children, action }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    handleClose();
    action();
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>{children}</div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Text tid="MODAL.CONFIRM.TITLE" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Text tid="MODAL.CONFIRM.CONTENT" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Text tid="MODAL.CONFIRM.BUTTON_NOT_AGREE" />
          </Button>
          <Button onClick={handleAction} color="primary" autoFocus>
            <Text tid="MODAL.CONFIRM.BUTTON_AGREE" />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
