import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItemUI from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Text } from '../../components';
import { colors } from '../../theme';
import { linkRedirect } from '../../utils/navigation';

export const MobileMenu = ({ items, activePath, onSelect }) => {
  return (
    <List component="div">
      {items.map(({ id, path, tid }) => (
        <React.Fragment key={id}>
          <ListItem
            button
            component="a"
            href={path}
            selected={activePath === path}
            onClick={(e) => {
              linkRedirect(path)(e);
              onSelect();
            }}
          >
            <ListItemText primary={<Text tid={tid} />} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

const ListItem = styled(ListItemUI)`
  &,
  &:hover {
    color: ${colors.textSecondary} !important;
  }
  &:hover {
    background-color: ${colors.gray} !important;
  }
`;

MobileMenu.propTypes = {
  items: PropTypes.array.isRequired,
  activePath: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
