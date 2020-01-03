/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Alert, View, Text, TouchableHighlight } from 'react-native';
import TouchID from 'react-native-touch-id';
//or import TouchID from 'react-native-touch-id'

const optionalConfigObject = {
    title: 'FingerPrint', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export default class index extends Component {
    componentDidMount() {
        TouchID.isSupported(optionalConfigObject)
            .then(biometryType => {
                this.fingerAuth();
            })
            .catch(error => {
                // Failure code
                console.log('open PIN code');
                console.log(error.code);
            });
    }

    fingerAuth = () => {
        TouchID.authenticate('', optionalConfigObject)
            .then(success => {
                console.log(success);
                Alert.alert('Authenticated Successfully');
            })
            .catch(error => {
                console.log(error.code);
            });
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableHighlight onPress={this.fingerAuth}>
                    <Text>Authenticate with Touch ID</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
