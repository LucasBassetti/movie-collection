import styled from 'styled-components';
import { colors } from '../../configs';

export default styled.a`
  color: ${props => props.danger ? colors.danger : colors.default};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  opacity: .8;
  padding: 8px 16px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;
