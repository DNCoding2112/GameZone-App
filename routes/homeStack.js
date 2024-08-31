import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack=createStackNavigator();

export default function HomeStack(){
    return (
        <Stack.Navigator 
        initialRouteName="Home"
        // screenOptions={{
        //     headerStyle:{backgroundColor:'#DDDFF0'},
        //     headerTintColor:'#5A5A9B',
        // }}
        >
            <Stack.Screen 
            name="Home" 
            component={Home} 
            //options-> title:'🎮 GameZone 🕹️',
            //options-> headerStyle:{backgroundColor:'#DDDFF0'}
            options={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} title='GameZone' val='home'/>,
            })} />
            <Stack.Screen 
            name="ReviewDetails" 
            component={ReviewDetails} 
            options={{
                // title:'📝 Review Details ✍️',
                title:'Review Details'
                // headerStyle:{backgroundColor:'#FDF0FF'}
                }}/>
        </Stack.Navigator>
        );
};