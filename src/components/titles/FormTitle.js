import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { colors, spacing } from '../../theme';
import { staticPath } from '../../utils/staticPath';

export const FormTitle = ({ icon: IconComponent, iconSrc, tid, offset = 6 }) => (
  <Container offset={offset}>
    {IconComponent && (
      <Icon>{iconSrc ? <img src={staticPath(iconSrc)} alt="" /> : <IconComponent color="inherit" />}</Icon>
    )}
    <Title>
      <Text tid={tid} />
    </Title>
  </Container>
);

FormTitle.propTypes = {
  iconSrc: PropTypes.string,
  icon: PropTypes.object,
  tid: PropTypes.string.isRequired,
  offset: PropTypes.number,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ offset }) => spacing(offset)};
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: ${spacing(3)};
  background-color: ${colors.lightPrimary};
  color: ${colors.textPrimary};
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: ${colors.textSecondary};
`;
