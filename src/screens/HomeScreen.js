import { Text, View, StyleSheet, Image, Platform, Pressable } from 'react-native';
import qrcode from '../../assets/images/qrcode.png';

// For navigating to next screen
import { useNavigation } from '@react-navigation/native';

// Make the View Chats button pressable and perform an action

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.upperInfo}>
                <Text style={styles.mainText}>Hello User!</Text>
                <Text style={styles.subText}>Scan the QR code below to start a chat</Text>
            </View>
            <View style={styles.bottomInfo}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}><Text style={styles.buttonText}>View chats</Text></Pressable>
                <View style={styles.imageContainer} >
                    <Image source={qrcode} style={styles.image}/>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8B4D3',
        paddingTop: 50,
        flex: 1,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },
    upperInfo: {
        flex: 1,
    },
    mainText: {
        flex: 8,
        fontSize: 50,
        alignSelf: 'center',
    },
    subText: {
        flex: 7,
        width: '38%',
        alignSelf: 'center',
        color: '#735b66',
        textAlign: 'center'
    },
    bottomInfo: {
        flex: 4,
        backgroundColor: '#F7F6F6',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },
    button: {
        alignSelf: 'center',
        marginVertical: 41,
        paddingVertical: 16,
        paddingHorizontal: 38,
        borderRadius: 12,
        backgroundColor: '#F8B4D3',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    },
    buttonText: {
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
    },
    imageContainer: {
        width: 330,
        height: 330,
        elevation: 4,
        alignSelf: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    image: {
        width: 330,
        height: 330,
        alignSelf: 'center',
        borderRadius: 9,
    }
})

export default HomeScreen;