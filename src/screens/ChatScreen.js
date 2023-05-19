import { View, Text, ImageBackground, StyleSheet, FlatList } from "react-native";
import kiwihug from '../../assets/images/kiwihug.jpg';

import Message from "../Components/Message";
import messages from '../../assets/data/messages.json';

const ChatScreen = () => {
    return (
        // <ImageBackground source={kiwihug} style={styles.bg}>
        //     <FlatList data={messages} renderItem={({ item }) => <Message message={item}/>} style={styles.list} inverted/>
        // </ImageBackground>
        <View style={styles.bg}>
            <FlatList data={messages} renderItem={({ item }) => <Message message={item}/>} style={styles.list} inverted/>
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        color: '#F7F6F6'
    },
    list: {
        padding: 10,

    }
})


export default ChatScreen;