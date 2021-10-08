// Libs
import React from 'react';

// React Native Components
import {View, TouchableWithoutFeedback} from 'react-native';

// Icon
import Icon from 'react-native-vector-icons/Feather';

// Constants
import {COLORS} from '../../constants';

const TabButton = ({icon, isFocus}) => {
  return (
    <Icon name={icon} size={30} color={isFocus ? COLORS.black : COLORS.white} />
  );
};

export default TabButton;
