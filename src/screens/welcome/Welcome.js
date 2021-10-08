// Libs
import React from 'react';

// React Native Components
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// Constants
import {COLORS, FONTS, images, SIZES} from '../../constants';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logoStyle} />
        <Text style={{color: COLORS.white, ...FONTS.h1}}>YOGA</Text>
        <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
          life in harmony
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Text style={{color: COLORS.white, textAlign: 'center'}}>
          Lorem ipsum is placeholder text commonly used in the graphic
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={[styles.logoContainer, {paddingHorizontal: SIZES.padding}]}>
        <Text style={styles.buttonStyle}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.termsContainer}>
        <Text style={{color: COLORS.white, textAlign: 'center'}}>
          Terms & Condition
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 150,
    height: 150,
    tintColor: COLORS.white,
  },
  termsContainer: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
  },
  buttonStyle: {
    color: COLORS.white,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    width: '100%',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    borderRadius: SIZES.base,
  },
});

export default Welcome;
