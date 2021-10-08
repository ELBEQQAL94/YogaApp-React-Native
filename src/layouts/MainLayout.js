// Libs
import React from 'react';

// React Native
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

// Core Components
import {Header, TabButton} from '../components';

// Constants
import {COLORS, SIZES, tabs} from '../constants';

// Redux
import {useSelector} from 'react-redux';

const MainLayout = ({children, leftComponent, rightComponent}) => {
  const selectedTab = useSelector(state => state.tabState.selectedTab);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* HEADER */}
      <Header leftComponent={leftComponent} rightComponent={rightComponent} />

      {/* CONTENT */}
      {children}

      {/* FOOTER */}
      {/* <View style={styles.tabContainer}>
        {tabs &&
          tabs?.map(tab => (
            <View
              style={{alignItems: 'center', justifyContent: 'center'}}
              key={tab.id}>
              <TabButton icon={tab.icon} isFocus={selectedTab === tab.path} />
            </View>
          ))}
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SIZES.big,
    borderTopRightRadius: SIZES.big,
  },
});

export default MainLayout;
