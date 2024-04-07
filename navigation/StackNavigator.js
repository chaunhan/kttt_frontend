import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import CourseScreen from "../screens/CourseScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CourseDetailScreen from "../screens/CourseDetailScreen";
import LessionDetailScreen from "../screens/LessionDetailScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#308a5a" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#308a5a" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#308a5a" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person-circle" size={24} color="#308a5a" />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Course"
          component={CourseDetailScreen}
          options={{
            tabBarLabel: "Course",
            tabBarLabelStyle: { color: "#308a5a" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="book-education"
                  size={24}
                  color="#308a5a"
                />
              ) : (
                <MaterialCommunityIcons
                  name="book-education-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LessionDetail"
          component={LessionDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
