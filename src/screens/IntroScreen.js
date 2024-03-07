import React, {useState, useRef} from 'react';
import {View, StyleSheet, FlatList, Animated} from 'react-native';
import {gettingStarted} from '../data/GSdata';

import Paginator from '../components/Paginator';
import {useNavigation} from '@react-navigation/native';
import WelcomeItem from '../components/WelcomeItem';
import CustomButton from '../components/CustomButton';

const IntroScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const navigation = useNavigation();

  const handleNum = () => {
    const totalIndex = gettingStarted.length - 1;
    if (currentIndex <= totalIndex - 1) {
      slidesRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      index = 0;
      slidesRef.current.scrollToIndex({animated: true, index: 0});
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 3, marginTop: 10}}>
        <FlatList
          data={gettingStarted}
          renderItem={({item}) => <WelcomeItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={gettingStarted} scrollX={scrollX} />
      <View className="w-full mb-[58]" style={{padding: 50, gap: 14}}>
        {currentIndex != 2 && <CustomButton title="Next" onPress={handleNum} />}
        {currentIndex === 2 && (
          <CustomButton
            title="Get Started"
            arrow={true}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        )}
      </View>
      <View style={styles.topCircle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  topCircle: {
    backgroundColor: '#FFBE98',
    height: 400,
    width: '100%',
    borderRadius: 200,
    position: 'absolute',
    top: -250,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default IntroScreen;
