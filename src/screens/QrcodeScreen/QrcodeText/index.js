import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PropTypes from 'prop-types';
import styles from './styles';

export default class QrcodeText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Qrcode sample text data',
        };
    }

    render() {
        const { text } = this.state;
        return (
            <View style={styles.container}>
                <QRCode size={150} value={text} />
                <Text style={{ ...styles.text, width: Dimensions.get('screen').width }}>{text}</Text>
            </View>
        );
    }
}

QrcodeText.proptpes = {
    text: PropTypes.string.isRequired,
};
