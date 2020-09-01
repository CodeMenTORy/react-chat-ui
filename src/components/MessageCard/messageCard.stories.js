import React from 'react';
import MessageCard from '.';

import face1 from 'assets/images/face-male-1.jpg';

export default {
  title: 'UI 组件/MessageCard',
  component: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    name="汤泽一"
    avatarStatus="online"
    statusText="在线"
    time="3小时之前"
    message="即使爬到最高的山上，每一次也只能脚踏实地地去实现"
    unreadCount={2}
  />
);

export const ActiveCard = () => (
  <MessageCard
    active
    avatarSrc={face1}
    name="汤泽一"
    avatarStatus="online"
    statusText="在线"
    time="3小时之前"
    message="即使爬到最高的山上，每一次也只能脚踏实地地去实现"
    unreadCount={2}
  />
);

export const Replied = () => (
  <MessageCard
    replied
    avatarSrc={face1}
    name="汤泽一"
    avatarStatus="online"
    statusText="在线"
    time="3小时之前"
    message="即使爬到最高的山上，每一次也只能脚踏实地地去实现"
    unreadCount={2}
  />
);

export const RepliedActiveCard = () => (
  <MessageCard
    active
    replied
    avatarSrc={face1}
    name="汤泽一"
    avatarStatus="online"
    statusText="在线"
    time="3小时之前"
    message="即使爬到最高的山上，每一次也只能脚踏实地地去实现"
    unreadCount={2}
  />
);
