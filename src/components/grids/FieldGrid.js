import styled from 'styled-components';
import { spacing } from '../../theme';

export const FieldGrid = styled.div`
  margin-bottom: ${spacing(4)};
  display: grid;
  grid-gap: ${spacing(4)};
  grid-template-columns: ${(p) => (p.double ? '1fr 1fr' : '1fr')};

  @media all and (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`;
