import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { staticPath } from '../../utils/staticPath';
import { colors, spacing } from '../../theme';
import { Logo, Text } from '../index';
import { PageLayout, SectionLayout, ResponsiveLayout, ContentLayout } from '.';

export const AuthLayout = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <ContentLayout>
        <ResponsiveLayout size="small">
          <SectionLayout indent>
            <HeaderBlock>
              <Logo />
              <Title>
                <Text tid="COMMON.PROJECT_DESCRIPTION" />
              </Title>
            </HeaderBlock>
            {children}
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </Container>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.object,
};

const Container = styled(PageLayout)`
  background-image: url(${staticPath('/png/main-bg.png')});
  background-color: ${colors.background};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #656565;
  margin-top: ${spacing(3)};
`;
