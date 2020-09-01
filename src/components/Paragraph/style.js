import styled, { css } from 'styled-components';
import StyledText from 'components/Text/style';

const Styledparagraph = styled(StyledText)`
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export default Styledparagraph;
