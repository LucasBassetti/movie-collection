import styled from 'styled-components';
import { colors } from '../../configs';

export default styled.span`
  color: ${colors.default};
  font-size: 20px;
  margin: 0;
  padding: 0 12px;
  transform: ${props => props.hover ? 'translateY(0)' : 'translateY(60px)'};
  transition: transform .3s ease;
`;
