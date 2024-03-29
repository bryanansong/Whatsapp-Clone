import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

dayjs.extend(relativeTime);

const Message = ({message}) => {

    const [isMe, setIsMe] = useState(false);

    useEffect(() => {
        const isMyMessage = async () => {

            const authUser = await Auth.currentAuthenticatedUser();
    
            setIsMe(message.userID === authUser.attributes.sub);
        };
        
        isMyMessage()
    }, [])

    return (
        <View style={[styles.container, {
            backgroundColor: isMe ? '#DCF8C5' : 'white',
            alignSelf: isMe ? 'flex-end' : 'flex-start',
        }]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#D9D9D9',
        // alignSelf: 'flex-start',

        margin: 5,
        padding: 10,
        borderRadius: 20,
        maxWidth: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    time: {
        color: 'grey',
        alignSelf: 'flex-end'
    }
})

export default Message;