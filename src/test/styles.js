import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    backgroundColor: level => ({
        backgroundColor: level,
    }),
    insideStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});
