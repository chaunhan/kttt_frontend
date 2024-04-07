import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LessionItem = ({ item }) => {
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://192.168.1.5:3000/api/course/detail/KH%C3%93A%20H%E1%BB%8CC%20L%C3%99A%20G%C3%80"
        );
        setDetail(res.data.course);
        const user = await AsyncStorage.getItem("user");
        const resUser = await axios.get(
          `http://192.168.1.5:3000/api/user/${user}`
        );
        setUser(resUser.data.cDaMua);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, []);
  const navigation = useNavigation();
  const viewLession = () => {
    navigation.navigate("LessionDetail", {
      CourseID: item.CourseID,
      TenBai: item.TenBai,
      Title: item.Title,
      _id: item._id,
      link: item.link,
      next: item.next,
      pre: item.pre,
      course: detail,
      user: user,
    });
    console.log(detail);
  };
  return (
    <Pressable onPress={viewLession}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#eef3f6",
        }}
      >
        <View
          style={{
            paddingTop: 5,
            borderWidth: 1,
            borderColor: "white",
            flexDirection: "row",
            height: 50,
          }}
        >
          <AntDesign name="folder1" size={15} color="black" />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 15,
              color: "#04ce9e",
            }}
          >
            {item?.Title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default LessionItem;

const styles = StyleSheet.create({});
