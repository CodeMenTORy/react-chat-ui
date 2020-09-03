import React from 'react';
import Emoji from '.';
import ChatBubble from 'components/ChatBubble';

export default {
  title: 'UI 组件/Emoji',
  component: Emoji,
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => (
  <div>
    <Emoji>😀</Emoji>
    <Emoji>👿</Emoji>
    <Emoji>👻</Emoji>
  </div>
);

export const ChatBubbleEmoji = () => (
  <ChatBubble time="Yesterday 18:00">
    this is a emoji chat bubble <Emoji label="smile">😀</Emoji>
  </ChatBubble>
);
