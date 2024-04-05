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
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ref, setRef] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      ten: name,
      email: email,
      pass: pass,
      ref: ref,
    };

    axios
      .post("http://172.16.28.230:3000/api/user/register", user)
      .then((req) => {
        console.log(req);
        Alert.alert("Đăng ký thành công");
        setName("");
        setPassword("");
        setEmail("");
      })
      .catch((error) => {
        Alert.alert("Đăng Ký Thất Bại");
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
          Đăng Ký
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
            <Ionicons
              style={{ marginLeft: 8 }}
              name="person-circle"
              size={24}
              color="#6c757d"
            />

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="Hãy nhập tên của bạn"
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
              style={{ marginLeft: 8 }}
              name="addusergroup"
              size={24}
              color="#6c757d"
            />
            <TextInput
              value={ref}
              onChangeText={(text) => setRef(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: ref ? 16 : 16,
              }}
              placeholder="Mã giới thiệu"
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }} />

        <Pressable
          onPress={handleRegister}
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
            ĐĂNG KÝ
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
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
            Đã có tài khoản? Đăng Nhập ngay!!!
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
