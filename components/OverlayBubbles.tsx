import {View, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
interface props {
  animeCat: 1 | 2 | 3 | 4;
  children: any;
}

const OverlayBubbles = ({children, animeCat}: props) => {
  const styleCordinates = [
    {s1top: 350, s2top: 400, s3top: 100, s1left: 10, s2left: 330, s3left: 200},
    {s1top: 180, s2top: 60, s3top: 230, s1left: 4, s2left: 260, s3left: 360},
    {s1top: 200, s2top: 150, s3top: 450, s1left: 300, s2left: 280, s3left: 200},
    {s1top: 100, s2top: 250, s3top: 350, s1left: 200, s2left: 140, s3left: 290},
  ];
  const s1 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat - 1].s1top, {
        duration: 500,
      }),
      left: withTiming(styleCordinates[animeCat - 1].s1left, {
        duration: 500,
      }),
    };
  });
  const s2 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat - 1].s2top, {
        duration: 500,
      }),
      left: withTiming(styleCordinates[animeCat - 1].s2left, {
        duration: 500,
      }),
    };
  });
  const s3 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat - 1].s3top),
      left: withTiming(styleCordinates[animeCat - 1].s3left),
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.s1, s1]} />
      <Animated.View style={[styles.s2, s2]} />
      <Animated.View style={[styles.s3, s3]} />
      {children}
    </View>
  );
};

export default OverlayBubbles;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  s1: {
    width: 15,
    height: 15,
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 50,
    position: 'absolute',
  },
  s2: {
    width: 25,
    height: 25,
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 50,
    position: 'absolute',
  },
  s3: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 50,
    position: 'absolute',
  },
});
