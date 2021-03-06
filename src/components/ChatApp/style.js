import styled, { css } from 'styled-components';

const Nav = styled.nav`
  flex-shrink: 0;
`;

const Siderbar = styled.aside`
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.grediantGray};
`;

const Content = styled.main`
  flex: 2;
  position: relative;
`;

const Drawer = styled.div`
  max-height: 310px;
  width: 0;
  ${({ show }) =>
    show &&
    css`
      width: 310px;
    `}
`;

const StyledChatApp = styled.div`
  display: flex;
  height: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export default StyledChatApp;
export { Nav, Siderbar, Content, Drawer };
