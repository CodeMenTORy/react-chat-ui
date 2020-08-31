import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

import 'story.css';
// 增加对styled-component的支持
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

// 显示分区
addParameters({
  options: {
    showRoots: true,
  },
});
