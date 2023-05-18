import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/Components/ChatList Item';

const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "David Bobs",
  },
  lastMessage: {
    text: "Kwabena is the best!",
    createdAt: "07:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
