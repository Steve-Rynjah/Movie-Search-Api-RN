import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {StackNav} from './stackNav.routes'
import {StackNavRated} from './stackNav2.routes'

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const MainNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="_HOME"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#252252",
        tabBarInactiveTintColor: "#7a7a7a",
        tabBarActiveBackgroundColor: "#FFF",
        tabBarInactiveBackgroundColor: "#FFF",
      }}
    >
      <Tab.Screen
        name="_HOME"
        component={StackNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons style={{position: 'relative'}} name="movie-open" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="_TOP"
        component={StackNavRated}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons style={{position: 'relative'}} name="stars" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
