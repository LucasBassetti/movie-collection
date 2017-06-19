import styled from 'styled-components';
import { colors } from '../../configs';

export default styled.textarea`
  border: ${props => props.error ? `1px solid ${colors.danger}` : 0};
  font-size: 14px;
  margin: 6px 0 2px 0;
  max-width: 768px;
  padding: 6px;
  width: calc(100% - 12px);
`;
