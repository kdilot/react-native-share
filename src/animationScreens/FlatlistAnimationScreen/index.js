import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView, Animated } from 'react-native';
import styles from './styles';
// import PropTypes from 'prop-types';

const data = new Array(20).fill({ name: 'name', subtitle: 'subtitle' });

const FlatlistAnimationScreen = ({ slide = 'left' }) => {
    const [animatedValue] = useState(new Animated.Value(0));
    const [position] = useState(1000);

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    }, []);

    const renderItem = ({ item, index }) => {
        const translateX = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [slide === 'right' ? position + index * position : -position - index * position, 0],
        });
        const translateY = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [slide === 'bottom' ? position + index * position : -position - index * position, 0],
        });
        return (
            <Animated.View style={[styles.listLayout, styles.backgroundColor(`hsl(177, 63%, ${30 + index * 3}%)`), { transform: slide === ('left' || 'right') ? [{ translateX }] : [{ translateY }] }]}>
                <View style={styles.insideStyle}>
                    <Text>{item.name}</Text>
                    <Text>{item.subtitle}</Text>
                </View>
            </Animated.View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList keyExtractor={(item, index) => index.toString()} data={data} renderItem={renderItem} />
        </SafeAreaView>
    );
};

// FlatlistAnimationScreen.propTypes = {
//     animationValue: PropTypes.string.isRequired,
//     startValue: PropTypes.number.isRequired,
//     slide: PropTypes.string.isRequired,
// };

export default FlatlistAnimationScreen;
