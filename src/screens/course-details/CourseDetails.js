// Libs
import React from 'react';

// React Native Components
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Layout
import {MainLayout} from '../../layouts';

// Constants
import {SIZES, COLORS} from '../../constants';

const CourseDetails = ({navigation}) => {
  return (
    <MainLayout
      leftComponent={
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <AntDesign
            name="left"
            size={30}
            color={COLORS.primary}
            style={{marginRight: -15}}
          />
        </TouchableOpacity>
      }
      rightComponent={
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <Icon
            name="dots-two-vertical"
            size={30}
            color={COLORS.primary}
            style={{marginRight: -15}}
          />
          <Icon name="dots-two-vertical" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      }>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Text</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    backgroundColor: '#FEFFFF',
    borderRadius: SIZES.base,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
export default CourseDetails;
