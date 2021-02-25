import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';

import { colors, sizes } from '../../theme';
import createComponent from '../../utils/lib/createComponent';
import mapError from '../../utils/mapError';

const TextFieldComponent = ({ className, endAdornment, children, label, loading, disabled, ...props }) => {
  return (
    <Container>
      <FieldStyled
        InputProps={{
          endAdornment: endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>,
        }}
        label={label}
        variant="outlined"
        color="secondary"
        className={className}
        {...props}
        disabled={loading || disabled}
      >
        {children}
      </FieldStyled>
      {loading && <Loading color="secondary" size={24} />}
    </Container>
  );
};

const Loading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  right: 14px;
  margin-top: -12px;
  margin-left: -12px;
`;

const Container = styled.div`
  position: relative;
`;

const FieldStyled = styled(Field)`
  ${({ multiline }) =>
    !multiline &&
    `
.MuiInputLabel-outlined {
    transform: translate(14px, 17px) scale(1) !important;
  }
  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -7px) scale(0.75) !important;
  }
`}

  && {
    width: 100%;
  }
  & input {
    height: 50px;
    padding: 0 14px;
    color: ${colors.textSecondary};
    -webkit-text-fill-color: ${colors.textSecondary};
  }
  & label {
    color: ${colors.textSecondary};
  }
  & fieldset {
    transition: ${sizes.transition.field} !important;
    border-width: 1px !important;
    border-color: ${colors.gray};
  }
  &:hover {
    fieldset {
      border-color: ${colors.grayLight} !important;
    }
  }
`;

TextFieldComponent.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element,
  label: PropTypes.node,
  endAdornment: PropTypes.node,
};

export const TextField = createComponent(TextFieldComponent, ({ defaultValue, ...props }) => mapError(props));

export const TextAreaField = ({ ...props }) => {
  return <TextField multiline rowsMax={6} {...props} />;
};
TextAreaField.propTypes = {};

export const TextFieldPassword = ({ ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            size="medium"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={(e) => e.preventDefault()}
            edge="end"
            color="secondary"
          >
            {showPassword ? (
              <Visibility fontSize="small" style={{ color: colors.textSecondary }} />
            ) : (
              <VisibilityOff fontSize="small" style={{ color: colors.textSecondary }} />
            )}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};
