import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CourseItem from "../components/CourseItem";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
  const viewDetail = () => {
    navigation.navigate("CourseDetail");
  };
  useEffect(() => {
    // const fetchUser = async () => {
    //   const token = await AsyncStorage.getItem("authToken");
    //   const decodedToken = await jwtDecode(token);
    //   const userId = decodedToken.userId.dât;
    //   console.log("token", userId);
    //   setUserId(userId);
    // };

    // fetchUser();
    axios
      .get("http://192.168.1.5:3000/api/course/")
      .then((response) => setData(response.data.courselists))
      .catch((error) => console.log(error));
  }, []);
  console.log("decode", userId);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "#eef3f6",
      }}
    >
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              flex: 1,
              marginLeft: 20,
            }}
          >
            Khoá Học
          </Text>
        </View>
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        ></Text>
        <View>
          {data?.map((item, index) => (
            <CourseItem item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
