import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        width,
        padding: 30,
    },
    box: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
});
