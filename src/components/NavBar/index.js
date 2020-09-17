import React from 'react';
// import PropTypes from 'prop-types';
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style';
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';
import 'styled-components/macro'; // 支持行内使用styled-component

import profileImage from 'assets/images/face-male-1.jpg';
import {
  faCommentDots,
  faUsers,
  faFolder,
  faStickyNote,
  faEllipsisH,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { Link, matchPath, useLocation } from 'react-router-dom';

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem to="/" showBadge icon={faCommentDots} />
        <MenuItem to="/contacts" icon={faUsers} />
        <MenuItem to="/files" icon={faFolder} />
        <MenuItem to="/notes" icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          to="/settings"
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ to, icon, showBadge, ...rest }) {
  // 获取当前路由的location
  const loc = useLocation();
  const active = !!matchPath(loc.pathname, {
    path: to,
    exact: to === '/',
  });
  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;
export { MenuItem };
