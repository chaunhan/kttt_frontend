import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const ProfileScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#308a5a",
      },
      headerLeft: () => (
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            marginTop: 12,
            color: "black",
          }}
        >
          KIẾM TIỀN TIK TOK
        </Text>
      ),
    });
  });
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const userId = await AsyncStorage.getItem("user");
      try {
        const res = await axios.get(
          `http://192.168.1.5:3000/api/user/find/${userId}`
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  console.log(user);

  const isActive = () => {
    if (user.cDaMua == "true") {
      return (
        <Text style={{ fontSize: 16, color: "#308a5a" }}> Đã kích hoạt</Text>
      );
    } else {
      return (
        <Text style={{ fontSize: 16, color: "#308a5a" }}> Chưa kích hoạt</Text>
      );
    }
  };

  const logOut = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("user");
    navigation.replace("Login");
  };
  return (
    <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "#eef3f6" }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hi! {user?.ten}</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Feather name="credit-card" size={16} color="gray">
            {" "}
            ID:
          </Feather>
          <Text style={{ fontSize: 16 }}> {user._id}</Text>
        </Pressable>

        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <AntDesign name="checkcircleo" size={16} color="gray">
            {" "}
            Tên :
          </AntDesign>
          <Text style={{ fontSize: 16, textTransform: "uppercase" }}>
            {" "}
            {user.ten}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Feather name="mail" size={16} color="gray">
            {" "}
            Email:
          </Feather>
          <Text style={{ fontSize: 16 }}> {user.email}</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <AntDesign name="checkcircleo" size={16} color="gray">
            {" "}
            Trạng Thái :
          </AntDesign>
          {isActive()}
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Feather name="dollar-sign" size={16} color="#308a5a">
            {" "}
            Money:
          </Feather>
          <Text style={{ fontSize: 16 }}> {user.tien}</Text>
        </Pressable>
      </View>

      <Text
        style={{
          height: 1,
          borderColor: "#D0D0D0",
          borderWidth: 2,
          marginTop: 15,
        }}
      ></Text>

      <View
        style={{
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Pressable
          onPress={logOut}
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flexDirection: "row",
          }}
        >
          <AntDesign name="logout" size={16} color="black">
            {" "}
            Đăng Xuất
          </AntDesign>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
