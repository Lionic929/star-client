import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { TextField, TextAreaField } from '.';
import { Snackbar } from '../index';

export const CopyField = ({ value, alertTid, isTextarea = false, ...props }) => {
  const [copied, setCopied] = React.useState(false);

  const onCopyKey = () => {
    setCopied(true);
  };

  return (
    <React.Fragment>
      {isTextarea ? (
        <TextAreaField
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <CopyToClipboard text={value} onCopy={onCopyKey}>
                <IconButton size="medium" edge="end">
                  <FileCopyIcon fontSize="small" />
                </IconButton>
              </CopyToClipboard>
            </InputAdornment>
          }
          {...props}
        />
      ) : (
        <TextField
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <CopyToClipboard text={value} onCopy={onCopyKey}>
                <IconButton size="medium" edge="end">
                  <FileCopyIcon fontSize="small" />
                </IconButton>
              </CopyToClipboard>
            </InputAdornment>
          }
          {...props}
        />
      )}

      <Snackbar tid={alertTid} active={copied} onClose={() => setCopied(false)} />
    </React.Fragment>
  );
};

CopyField.propTypes = {
  value: PropTypes.string.isRequired,
  alertTid: PropTypes.string.isRequired,
  isTextarea: PropTypes.bool,
};
