import { View, Text } from "react-native";

// For adding navigation
import { NavigationContainer } from '@react-navigation/native'; // Conainer to store stacks in screens
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Allows me to create a screen in the stack of screens

// Importing my various screens
import ChatsScreen from '../screens/ChatsScreen';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerStyle: {backgroundColor: 'whitesmoke'}}}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={MainTabNavigator} options={{headerShown: false}}/> 
                <Stack.Screen name="Chat" component={ChatScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;