import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//  screens
import DefaultScreen from 'screens/DefaultScreen';
import PinCodeScreen from 'screens/PinCodeScreen';
import QrcodeTextScreen from 'screens/QrcodeScreen/QrcodeText';
import QrcodeScannerScreen from 'screens/QrcodeScreen/QrcodeScanner';
// import ScrollEventScreen from 'screens/ScrollEventScreen/ScrollEvent';
import SkeletonLoadScreen from 'screens/SkeletonLoadScreen';
import FingerprintScreen from 'screens/FingerprintScreen';

//  animation screens
import FlatlistAnimationScreen from 'animationscreens/FlatlistAnimationScreen';

import Test from './src/test';

const App = createStackNavigator(
    {
        Default: {
            screen: DefaultScreen,
        },
        QrcodeText: {
            screen: QrcodeTextScreen,
        },
        QrcodeScanner: {
            screen: QrcodeScannerScreen,
        },
        PinCode: {
            screen: PinCodeScreen,
        },
        Fingerprint: {
            screen: FingerprintScreen,
        },
        // ScrollEvent: {
        //     screen: ScrollEventScreen,
        // },
        SkeletonLoad: {
            screen: SkeletonLoadScreen,
        },
        FlatlistAnimation: {
            screen: FlatlistAnimationScreen,
        },
        Test: {
            screen: Test,
        },
    },
    { defaultNavigationOptions: { header: null } },
);

export default createAppContainer(App);
