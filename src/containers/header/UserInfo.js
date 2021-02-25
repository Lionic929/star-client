import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import { colors, spacing } from '../../theme';
import { ROUTES } from '../../constants/routes';
import { Link, Text } from '../../components';

import { UserIcon } from './UserIcon';

export const UserInfo = ({ balance, onSelect }) => {
  return (
    <Container>
      <Actions>
        <IconButton size="small" color="secondary">
          <Badge variant="dot" color="secondary" overlap="circle">
            <NotificationsNoneIcon fontSize="medium" style={{ color: colors.textSecondary }} />
          </Badge>
        </IconButton>
      </Actions>
      <Balance href={ROUTES.PAYMENT} underline="none">
        <Text tid="NAVIGATION.BALANCE" values={{ balance }} />
      </Balance>

      <UserIcon onClick={onSelect} />
    </Container>
  );
};

UserInfo.propTypes = {
  balance: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const Actions = styled.div`
  border-right: 1px solid ${colors.textSecondary};
  padding: 0 ${spacing(2)};
  margin-right: ${spacing(3)};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Balance = styled(Link)`
  color: ${colors.textSecondary} !important;
  && {
    font-size: 14px;
    font-weight: 600;
    margin-right: ${spacing(3)};
  }
`;
