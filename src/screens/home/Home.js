// Libs
import React from 'react';

// React Native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  SafeAreaView,
  FlatList,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

// Core Components
import {Header} from '../../components';

// Icons
import Icon from 'react-native-vector-icons/Entypo';

// Constants
import {COLORS, FONTS, images, SIZES, dummyData} from '../../constants';

// Redux Tool Kit
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {setSelectedTab} from '../../stores/reducer/tabReducer';

// Main Layout
import {MainLayout} from '../../layouts';

const SPACING = 10;
const ITEM_SIZE =
  Platform.OS === 'ios' ? SIZES.width * 0.72 : SIZES.width * 0.74;
const EMPTY_ITEM_SIZE = (SIZES.width - ITEM_SIZE) / 2;

const CourseCard = ({poster, translateY, label, navigation}) => {
  return (
    <View style={{width: ITEM_SIZE}}>
      <Animated.View
        style={{
          marginHorizontal: SPACING,
          padding: SPACING * 2,
          alignItems: 'center',
          backgroundColor: COLORS.white,
          transform: [{translateY}],
        }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('CourseDetails')}>
          <Image source={poster} style={styles.posterImage} />
        </TouchableWithoutFeedback>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          <Text
            style={{...FONTS.h3, color: COLORS.darkGray, textAlign: 'center'}}>
            {label}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const Home = ({navigation}) => {
  const selectedTab = useSelector(state => state.tabState.selectedTab);
  const dispatch = useDispatch();

  // Initial animation
  const scrollX = new Animated.Value(0);

  const animatedScrollX = new Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  const renderContent = () => {
    return (
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        data={dummyData.courses}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        bounces={false}
        onScroll={animatedScrollX}
        scrollEventThrottle={16}
        contentContainerStyle={{
          alignItems: 'center',
          marginBottom: 100,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];
          const outputRange = [50, -50, 50];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });
          if (item.poster === undefined) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          } else {
            return (
              <CourseCard
                key={item.id}
                poster={item.poster}
                label={item.label}
                translateY={translateY}
                navigation={navigation}
              />
            );
          }
        }}
      />
    );
  };

  return (
    <MainLayout
      leftComponent={
        <View>
          <Text style={{...FONTS.h3, color: COLORS.gray}}>Welcome</Text>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>
            Hanna Montana
          </Text>
        </View>
      }
      rightComponent={
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.rightContainer}>
          <Icon
            name="dots-two-vertical"
            size={30}
            color={COLORS.primary}
            style={{marginRight: -15}}
          />
          <Icon name="dots-two-vertical" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      }>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Image source={images.yogaAnimation} style={styles.heroImageStyle} />
        <View>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>
            Yoga Improves
          </Text>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Strenght,</Text>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>
            {selectedTab}
          </Text>
        </View>
      </View>

      {/* Our Courses */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
        }}>
        <Text style={{color: COLORS.primary, ...FONTS.h2}}>Our Cources</Text>
        <TouchableOpacity onPress={() => dispatch(setSelectedTab('see all'))}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body4}}>See All</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.coursesContainer}>
        <View>{renderContent()}</View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  coursesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 600,
    paddingBottom: 100,
  },
  container: {backgroundColor: COLORS.white, flex: 1},
  rightContainer: {
    flexDirection: 'row',
    backgroundColor: '#FEFFFF',
    borderRadius: SIZES.base,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  heroImageStyle: {
    width: 200,
    height: 200,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding * 3,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.red,
    marginHorizontal: SIZES.radius / 2,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '22%' : '16%',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

export default Home;
