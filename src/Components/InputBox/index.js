import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createMessages, updateChatRoom } from '../../graphql/mutations';

const InputBox = ({ chatRoom }) => {
    
    const [text, setText] = useState('')

    const onSend = async () => {
        console.warn('Sending a new message: ', text);

        const authUser = await Auth.currentAuthenticatedUser()

        const newMessage = {
            chatroomID: chatRoom.id, text, userID: authUser.attributes.sub
        }

        const newMessageData = await API.graphql(graphqlOperation(createMessages, { input: newMessage }))

        setText('');

        // Set new message as LastMessage of the chatroom
        await API.graphql(graphqlOperation(updateChatRoom, { _version: chatRoom._version, chatRoomLastMessageId: newMessageData.data.createMessages.id , id: chatRoom.id }))
    };

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            {/* Icon */}
            <AntDesign name='plus' size={28} color='royalblue' />

            {/* Text Input */}
            <TextInput value={text} onChangeText={setText} style={styles.input} placeholder='Type your message...' />

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