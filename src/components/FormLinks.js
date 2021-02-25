import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { redirect } from '../utils/navigation';
import { Text, Link } from '.';
import { colors, spacing } from '../theme';

export const FormLinks = ({ items }) => (
  <FooterBlock length={items.length}>
    {items.map(({ link, tid, tvalues }) => (
      <React.Fragment key={link}>
        <Link href={link} underline="never" color="textSecondary">
          <Text tid={tid} tvalues={tvalues} />
        </Link>
      </React.Fragment>
    ))}
  </FooterBlock>
);

FormLinks.propTypes = {
  items: PropTypes.array.isRequired,
};

const FooterBlock = styled.div`
  padding: ${spacing(4)} 0 0;
  width: 100%;
  display: flex;
  justify-content: ${({ length }) => (length > 1 ? 'space-between' : 'center')};
  font-size: 14px;
  color: ${colors.textSecondary};
`;
