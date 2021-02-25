import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { Text, Link } from '../../components';
import { colors, sizes, spacing } from '../../theme';
import { ROUTES } from '../../constants/routes';

export const ErrorView = ({ status, errorTid }) => {
  return (
    <ContentLayout>
      <ResponsiveLayout size="small">
        <Container>
          <Error>{status}</Error>
          <Title>
            <Text tid="ERROR.PAGE.TITLE" />
          </Title>
          <ErrorText>
            <Text tid={errorTid} />
          </ErrorText>
          <BackToHomeLink href={ROUTES.HOME} underline="hover" color="primary">
            <Text tid="ERROR.PAGE.LINK" />
          </BackToHomeLink>
        </Container>
      </ResponsiveLayout>
    </ContentLayout>
  );
};

ErrorView.propTypes = {
  status: PropTypes.string,
  errorTid: PropTypes.string,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Error = styled.h2`
  color: ${colors.textSecondary};
  font-weight: 700;
  font-size: 150px;
  line-height: 1;
  letter-spacing: 0.1em;
`;
const Title = styled.h2`
  color: ${colors.textSecondary};
  font-weight: 600;
  font-size: 21px;
  line-height: 150%;
  margin: ${spacing(7)} 0 ${spacing(1)};
  text-align: center;
`;

const ErrorText = styled.p`
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  margin-bottom: ${spacing(3)};
  color: ${colors.textSecondary};
`;

const BackToHomeLink = styled(Link)`
  transition: ${sizes.transition.default};
  color: ${colors.primary} !important;

  &:hover {
    color: ${colors.primary} !important;
    opacity: ${sizes.opacity.hover};
  }
  font-size: 16px;
`;
