import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import styles from './styles';

const ButtonLayout = props => {
    return (
        <View style={styles.btn}>
            <Button title={`${props.text}`} onPress={() => props.navigation.navigate(props.nav)} />
        </View>
    );
};

export default class DefaultScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <ButtonLayout {...this.props} text={'Qr코드 생성'} nav={'QrcodeText'} />
                    <ButtonLayout {...this.props} text={'Qr코드 스캔'} nav={'QrcodeScanner'} />
                    <ButtonLayout {...this.props} text={'PIN 코드'} nav={'PinCode'} />
                    <ButtonLayout {...this.props} text={'지문인식'} nav={'Fingerprint'} />
                    <ButtonLayout {...this.props} text={'스크롤 액션'} nav={'ScrollEvent'} />
                    <ButtonLayout {...this.props} text={'로딩 레이아웃'} nav={'SkeletonLoad'} />
                    <ButtonLayout {...this.props} text={'Flatlist 애니메이션'} nav={'FlatlistAnimation'} />
                    <ButtonLayout {...this.props} text={'테스트'} nav={'Test'} />
                </View>
            </ScrollView>
        );
    }
}
