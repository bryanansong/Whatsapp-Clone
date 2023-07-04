import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createChatRoom, createUserChatRoom } from '../../graphql/mutations';
import { getCommonChatRoomWithUser } from '../../Services/chatRoomService';

dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
    const navigation = useNavigation();

    const onPress = async () => {
        // Check if we already have a ChatRoom with user
        const existingChatRoom  = await getCommonChatRoomWithUser(user.id)

        if (existingChatRoom) {
            navigation.navigate("Chat", {id: existingChatRoom.id })
            return;
        }

        // Create a new chatroom
        const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, { input: {}}));
        console.log(newChatRoomData);

        if (!newChatRoomData.data?.createChatRoom) {
            console.log("Error creating chat room")
        }

        const newChatRoom = newChatRoomData.data?.createChatRoom;

        // Add the clicked user to the chatroom
        await API.graphql(graphqlOperation(createUserChatRoom, { input: {chatRoomID: newChatRoom.id, userID: user.id}}))

        // Add the auth user to the chat room
        const authUser = await Auth.currentAuthenticatedUser();
        await API.graphql(graphqlOperation(createUserChatRoom, { input: {chatRoomID: newChatRoom.id, userID: authUser.attributes.sub }}))

        // navigate to the newly created chat room
        navigation.navigate("Chat", { id: newChatRoom.id })
    }

    return (
        <Pressable onPress={ onPress } style={styles.container}>
            <Image source={{uri: user.image}} style={styles.image}/>
            <View style={styles.content}>
                <Text numberOfLines={1} style={styles.name}>
                    {user.name}
                </Text>
                <Text numberOfLines={2} style={styles.subTitle}>
                    {user.status}
                </Text>
            </View>
        </Pressable>
    )
};

export default ContactListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center',
        height: 70
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
    },
    subTitle: {
        color: 'gray'
    }
})