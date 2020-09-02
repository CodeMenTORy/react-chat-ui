import React from 'react';
import PropTypes from 'prop-types';
import StyledVoiceMessage from './style';
import Icon from 'components/Icon';

import { ReactComponent as Play } from 'assets/icon/play.svg';
import { ReactComponent as Wave } from 'assets/icon/wave.svg';
import { useTheme } from 'styled-components';
import Text from 'components/Text';
import Button from 'components/Button';

function VoiceMessage({ children, time, type, ...rest }) {
  const theme = useTheme();
  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size="40px">
        <Icon
          icon={Play}
          color="white"
          width={14}
          height={16}
          style={{ tranform: 'translateX(1px)' }}
        />
      </Button>
      <Icon icon={Wave} color={theme.primaryColor} width="100%" height="100%" />
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
  time: PropTypes.string,
  type: PropTypes.oneOf(['mine']),
};

export default VoiceMessage;
