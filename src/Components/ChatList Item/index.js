import { Text, View, Image, StyleSheet } from 'react-native';

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'}} style={styles.image}/>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>
                        Lukas
                    </Text>
                    <Text style={styles.subTitle}>07:30</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>Last Message</Text>
            </View>
        </View>
    )
};

export default ChatListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        // backgroundColor: 'purple',

        height: 70
    },
    image: {
        flex: 1,
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 6,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgrey'
        // backgroundColor: 'red',
        // flexDirection: 'row'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 7,
    },
    name: {
        flex: 1,
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'grey'
    }
})