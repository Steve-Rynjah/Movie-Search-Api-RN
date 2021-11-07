import React from "react";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {MainScreen} from '../screens/main.screen'
import {DetailScreen} from '../screens/detail.screen'

const Stack = createStackNavigator()

export const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="_MAIN" component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen name="_DETAIL" component={DetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}