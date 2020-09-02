import React from 'react';
import ChatBubble from '.';

export default {
  title: 'UI 组件/ChatBubble',
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: '24px' }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午14:26">这是一条其他人发送的聊天信息</ChatBubble>
);

export const FromMine = () => (
  <ChatBubble time="昨天 下午14:26" type="mine">
    这是一条其他人发送的聊天信息
  </ChatBubble>
);
