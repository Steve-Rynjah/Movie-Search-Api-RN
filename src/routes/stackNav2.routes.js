import React from "react";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {TopRatedScreen} from '../screens/topRated.screen'
import {TopRatedDetailScreen} from '../screens/topRatedDetail.screen'

const Stack = createStackNavigator()

export const StackNavRated = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="_TOP_RATED" component={TopRatedScreen} options={{headerShown: false}}/>
            <Stack.Screen name="_TOP_DETAIL" component={TopRatedDetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}