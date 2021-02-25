import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import createComponent from '../../utils/lib/createComponent';
import mapError from '../../utils/mapError';

export const createItems = (items, t) =>
  items.map(({ id, tid, name, value, disabled }) => (
    <MenuItem disabled={disabled} key={id} value={value}>
      {name || t(tid)}
    </MenuItem>
  ));

const SelectFieldComponent = ({
  className,
  variant,
  label,
  items,
  helperText,
  placeholder,
  error,
  size,
  multiple,
  value,
  ...props
}) => {
  const { t } = useTranslation();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Container size={size} variant={variant} className={className} error={error}>
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <Select labelWidth={labelWidth} multiple={multiple} value={multiple && !value ? [] : value} {...props}>
        {placeholder && (
          <MenuItem value="" disabled>
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {createItems(items, t)}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Container>
  );
};

const Container = styled(FormControl)`
  width: 100%;
`;

SelectFieldComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.node,
};

export const SelectField = createComponent(SelectFieldComponent, ({ input: { ...inputProps }, ...props }) => ({
  ...mapError(props),
  ...inputProps,
}));
