import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import createComponent from '../../utils/lib/createComponent';
import mapError from '../../utils/mapError';
import { spacing, colors } from '../../theme';

export const ListField = ({ className, itemComponent, helperText, itemProps, error, label, fields }) => {
  return (
    <Container className={className}>
      <Label>
        <React.Fragment>{label}</React.Fragment>
        <IconButton onClick={() => fields.push('')} size="small" aria-label="delete">
          <AddIcon fontSize="small" />
        </IconButton>
      </Label>
      {fields.map((item, i) => (
        <React.Fragment key={i}>
          <Item>
            <Field name={item} component={itemComponent} {...itemProps} size="small" />
            <ItemActionBlock>
              <IconButton onClick={() => fields.remove(i)} size="small" aria-label="delete">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ItemActionBlock>
          </Item>
        </React.Fragment>
      ))}
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Container>
  );
};

const HelperText = styled.div`
  margin-top: ${spacing(1)};
  ${(p) => p.error && `color: ${colors.error};`}
`;

const Label = styled.div`
  margin-bottom: ${spacing(2)};
  border-bottom: 1px solid ${colors.light};
  color: ${colors.textLight};
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ItemActionBlock = styled.div`
  margin-left: ${spacing(2)};
`;

const Item = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${spacing(2)};
  }
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

ListField.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.object.isRequired,
  error: PropTypes.bool,
  itemProps: PropTypes.object,
  children: PropTypes.element,
  label: PropTypes.node,
  helperText: PropTypes.node,
  itemComponent: PropTypes.element,
  onChange: PropTypes.func.isRequired,
};

export default createComponent(ListField, ({ defaultValue, ...props }) => mapError(props));
