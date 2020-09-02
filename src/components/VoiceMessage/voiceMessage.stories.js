import React from 'react';
import VoiceMessage from '.';
import ChatBubble from 'components/ChatBubble';

export default {
  title: 'UI 组件/VoiceMessage',
  component: VoiceMessage,
};

export const VoiceMessageType = () => <VoiceMessage time="01:25" />;

export const VoiceMessageTypeMine = () => (
  <VoiceMessage time="01:25" type="mine" />
);

export const ChatBubbleVoiceMessage = () => (
  <ChatBubble time="昨天 下午18:30">
    <VoiceMessage time="01:24" />
  </ChatBubble>
);

export const ChatBubbleVoiceMessageMine = () => (
  <ChatBubble time="昨天 下午18:30" type="mine">
    <VoiceMessage time="01:24" type="mine" />
  </ChatBubble>
);
