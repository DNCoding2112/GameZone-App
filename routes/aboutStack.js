import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import About from "../screens/about";
import Header from "../shared/header";

const Stack=createStackNavigator();

export default function AboutStack(){
    return (
        <Stack.Navigator 
        initialRouteName="About"
        // screenOptions={{
        //     headerStyle:{backgroundColor:'#DDDFF0'},
        //     headerTintColor:'#5A5A9B',
        // }}
        >
            <Stack.Screen 
            name="About" 
            component={About} 
            options={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} title='About GameZone' val='game'/>,
            })} />
        </Stack.Navigator>
    );
};