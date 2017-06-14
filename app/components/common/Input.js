import styled from 'styled-components';

export default styled.input`
  border: ${props => props.error ? '1px solid #E57373' : 0};
  font-size: 14px;
  margin: 6px 0;
  max-width: 768px;
  padding: 6px;
  width: calc(100% - 12px);
`;
