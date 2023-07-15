import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import BG from '../../assets/images/BG.png';

import Message from "../Components/Message";
import messages from '../../assets/data/messages.json';
import InputBox from "../Components/InputBox";

// Recieving data from navigation from pressing a chat on chatslist scree
import { useRoute, useNavigation } from "@react-navigation/native";

// This is for updating name in the component
import { useEffect, useState } from "react";

import { API, graphqlOperation } from 'aws-amplify';
import { getChatRoom } from '../graphql/queries';
import { ActivityIndicator } from "react-native";


const ChatScreen = () => {

    const [chatRoom, setChatRoom] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    const chatroomID = route.params.id;

    useEffect(() => {
        API.graphql(graphqlOperation(getChatRoom, {id: chatroomID})).then((result) => setChatRoom(result.data?.getChatRoom))
    }, [])

    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])

    if (!chatRoom) {
        return <ActivityIndicator/>
    }
    
    console.log(chatRoom)

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90} style={styles.bg}>
            <ImageBackground source={BG} style={styles.bg}>
                <FlatList data={chatRoom.Messages.items} renderItem={({ item }) => <Message message={item}/>} style={styles.list} inverted/>
                <InputBox chatRoom={chatRoom}/>
            </ImageBackground>
        </KeyboardAvoidingView>

        // For when I am building my actual app
        // <View style={styles.bg}>
        //     <FlatList data={messages} renderItem={({ item }) => <Message message={item}/>} style={styles.list} inverted/>
        // </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        // color: '#F7F6F6'
    },
    list: {
        padding: 10,

    }
})


export default ChatScreen;