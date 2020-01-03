import React from 'react';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade, Shine, Loader, Progressive, ShineOverlay } from 'rn-placeholder';
import { View, ScrollView } from 'react-native';
import styles from './styles';

const ShapeRect = ({ ani = Fade }) => {
    return (
        <View style={styles.box}>
            <Placeholder Animation={ani} Left={PlaceholderMedia}>
                <PlaceholderLine />
                <PlaceholderLine />
                <PlaceholderLine />
            </Placeholder>
        </View>
    );
};

const SkeletonLoadScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ShapeRect ani={Fade} />
                <ShapeRect ani={Shine} />
                <ShapeRect ani={Loader} />
                <ShapeRect ani={Progressive} />
                <ShapeRect ani={ShineOverlay} />
            </View>
        </ScrollView>
    );
};

export default SkeletonLoadScreen;
