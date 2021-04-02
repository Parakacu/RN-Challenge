import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { UploadImage, ToDoList, ButtonNavigator, Loading } from "../Component";
import { Note, Profile } from "../Page";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MainApp = () =>{
    return(
        <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />} >
            <Tab.Screen name = "Profile" component={Profile} />
            <Tab.Screen name = "Note" component={Note} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "MainApp" 
            component = {MainApp}
            options = {{headerShown: false}}
            />
            <Stack.Screen name = "UploadImage" 
            component = {UploadImage}
            options = {{headerShown: false}}
            />
            <Stack.Screen name = "ToDo" 
            component = {ToDoList}
            options = {{headerShown: false}}
            />
            <Stack.Screen name = "Loading" 
            component = {Loading}
            options = {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router
