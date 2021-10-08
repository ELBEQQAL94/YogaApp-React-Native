// Libs
import React from 'react';

// React Native
import {View, StyleSheet} from 'react-native';

// Constants
import {SIZES} from '../../constants';

const Header = ({leftComponent, rightComponent}) => {
  return (
    <View style={styles.container}>
      {leftComponent}

      {rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
});

export default Header;
