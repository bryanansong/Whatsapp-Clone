import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const InputBox = () => {
    
    const [newMessage, setNewMessage] = useState('')

    const onSend = () => {
        console.warn('send a new message');

        setNewMessage('')
    };

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            {/* Icon */}
            <AntDesign name='plus' size={28} color='royalblue' />

            {/* Text Input */}
            <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='Type your message...' />

            {/* Icon */}
            <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color={'white'} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        fontSize: 16,

        borderRadius: 50,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden'
    }
})

export default InputBox;