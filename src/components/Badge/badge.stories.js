import React from 'react';
import Badge from '.';
import { FontAwesome } from 'components/Icon/icon.stories';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'UI 组件/Badge',
  component: Badge,
};

export const Default = () => <Badge count={5} />;

export const DotVariant = () => {
  return (
    <Badge show variant="dot">
      <FontAwesome icon={faCommentDots} style={{ fontSize: '24px' }} />
    </Badge>
  );
};
