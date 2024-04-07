import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CourseItem = ({ item }) => {
  const navigation = useNavigation();
  const viewCourse = () => {
    navigation.navigate("Course");
  };
  return (
    <Pressable
      onPress={viewCourse}
      style={{
        marginVertical: 10,
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        width: 230,
        borderRadius: 10,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#04ce9e",
          }}
        >
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.GiaGoc)}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontWeight: "bold",
            fontSize: 13,
            textDecorationLine: "line-through",
          }}
        >
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item?.GiaCourse)}
        </Text>
        <Text
          style={{
            width: 50,
            color: "white",
            marginLeft: 10,
            fontWeight: "bold",
            fontSize: 15,
            backgroundColor: "red",
          }}
        >
          67%
        </Text>
      </View>
      <Image
        style={{
          marginTop: 10,
          width: 180,
          height: 180,
          resizeMode: "contain",
          backgroundColor: "gray",
        }}
        source={{
          uri: "http://fastdl.kiemtientiktoksl.com/img/khoa-hoc-769252.jpg",
        }}
      />
      <Text
        style={{
          width: 200,
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {item?.DesSP}
      </Text>
      <View style={{ width: 150 }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "#008E97",
          }}
        >
          {item?.SlBai} Bài Học
        </Text>
      </View>
    </Pressable>
  );
};

export default CourseItem;

const styles = StyleSheet.create({});
