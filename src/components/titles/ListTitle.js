import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { colors, spacing } from '../../theme';

export const ListTitle = ({ tid, offset = 5 }) => (
  <Container offset={offset}>
    <Title>
      <Text tid={tid} />
    </Title>
  </Container>
);

ListTitle.propTypes = {
  tid: PropTypes.string.isRequired,
  offset: PropTypes.number,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ offset }) => spacing(offset)};
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: ${colors.textSecondary};
`;
