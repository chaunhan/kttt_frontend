import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    const user = {
      email: email,
      pass: pass,
    };

    axios
      .post("http://192.168.1.5:3000/api/user/login", user)
      .then((req) => {
        console.log("data", req.data);
        const token = req.data.token;
        AsyncStorage.setItem("authToken", token);
        AsyncStorage.setItem("user", req.data.data._id);
        navigation.replace("Main");
      })
      .catch((error) => {
        Alert.alert("Đăng Nhập Thất Bại");
        console.log("failed", error);
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Text
          style={{
            fontSize: 27,
            fontWeight: "bold",
            marginTop: 100,
            color: "#308a5a",
          }}
        >
          Đăng Nhập
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#6c757d",
            }}
          >
            KIẾM TIỀN TIK TOK
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#6c757d",
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="#6c757d"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Hãy nhập email của bạn"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#6c757d",
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="#6c757d"
              style={{ marginLeft: 8 }}
            />

            <TextInput
              value={pass}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: pass ? 16 : 16,
              }}
              placeholder="Hãy nhập mật khẩu của bạn"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#6c757d", fontWeight: "500" }}>
            Lưu mật khẩu
          </Text>
          <Text style={{ color: "#308a5a", fontWeight: "500" }}>
            Quên Mật Khẩu
          </Text>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: "#308a5a",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ĐĂNG NHẬP
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#6c757d",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Chưa có tài khoản? Đăng ký ngay!!!
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
