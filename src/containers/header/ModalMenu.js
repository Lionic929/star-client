import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Menu as MenuUI, MenuItem as MenuItemUI } from '@material-ui/core';

import { colors } from '../../theme';
import { linkRedirect } from '../../utils/navigation';
import { Text } from '../../components';

export const ModalMenu = ({ items, onSelect, onClose, open, activePath, anchorEl }) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted open={open} onClose={onClose}>
      {items.map(({ tid, id, path }) => (
        <MenuItem
          key={id}
          selected={activePath === path}
          component="a"
          onClick={(e) => {
            linkRedirect(path)(e);
            onSelect();
          }}
        >
          <Text tid={tid} />
        </MenuItem>
      ))}
    </Menu>
  );
};

const Menu = styled(MenuUI)`
  & .MuiPaper-root {
    background-color: ${colors.darkLight} !important;
  }
`;
const MenuItem = styled(MenuItemUI)`
  &,
  &:hover {
    color: ${colors.textSecondary} !important;
  }
  &:hover {
    background-color: ${colors.gray} !important;
  }
`;

ModalMenu.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  activePath: PropTypes.string.isRequired,
  anchorEl: PropTypes.node.isRequired,
};
