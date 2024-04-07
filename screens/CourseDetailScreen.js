import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LessionItem from "../components/LessionItem";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const CourseDetailScreen = () => {
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState([]);
  const [lession, setLession] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://192.168.1.5:3000/api/course/detail/KH%C3%93A%20H%E1%BB%8CC%20L%C3%99A%20G%C3%80"
        );
        setDetail(res.data.course);
        AsyncStorage.setItem("cID", res.data.course._id);
        ////lay du lieu user
        const user = await AsyncStorage.getItem("user");
        const resUser = await axios.get(
          `http://192.168.1.5:3000/api/user/find/${user}`
        );
        setUser(resUser.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();

    const fetchDataLession = async () => {
      const cId = await AsyncStorage.getItem("cID");
      const resLession = await fetch(
        `http://192.168.1.5:3000/api/course/lession/${cId}`
      );
      const data = await resLession.json();
      setLession(data);
      // await axios
      //   .get(`http://192.168.1.5:3000/api/course/lession/${cId}`)
      //   .then((response) => setLession(response.data))
      //   .catch((error) => console.log(error));
    };
    fetchDataLession();
  }, []);
  const buyCheck = () => {
    if (user.cDaMua === "true") {
      return (
        <Pressable
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#308a5a",
              height: 30,
              width: 150,
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="check"
              size={16}
              color="rgba(255, 255, 255, .5)"
              marginTop={8}
              marginLeft={10}
            />
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 8,
                marginLeft: 3,
              }}
            >
              ĐÃ KÍCH HOẠT
            </Text>
          </View>
        </Pressable>
      );
    } else {
      return (
        <Pressable
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#308a5a",
              height: 30,
              width: 150,
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="arrowright"
              size={16}
              color="rgba(255, 255, 255, .5)"
              marginTop={8}
              marginLeft={10}
            />
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 8,
                marginLeft: 3,
              }}
            >
              ĐĂNG KÝ NGAY
            </Text>
          </View>
        </Pressable>
      );
    }
  };

  console.log("detail", detail);
  console.log("user", user);
  console.log("lession", lession);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "#eef3f6",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
          }}
        >
          <ImageBackground
            style={{
              width: "100%",
              height: 120,
              resizeMode: "contain",
              backgroundColor: "#1b2932",
              flexDirection: "row",
              alignItems: "center",
            }}
            source={{
              uri: "https://kiemtientictok.com/default/theme/assets/media/photos/lp-headerbg.webp",
            }}
          >
            <View style={{ width: "50%" }}>
              <View
                style={{
                  backgroundColor: "#308a5a",
                  width: 130,
                  height: 50,
                  alignSelf: "center",
                  flexDirection: "row",
                }}
              >
                <FontAwesome
                  name="users"
                  size={24}
                  color="white"
                  style={{ marginTop: 13, marginLeft: 10 }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    paddingTop: 17,
                    marginLeft: 10,
                    color: "white",
                  }}
                >
                  {detail.selled} Lược mua
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "rgba(27, 41, 50,.6)",
                width: 195,
                height: 80,
              }}
            >
              <Text
                style={{
                  color: "rgba(255, 255, 255, .5)",
                  textAlign: "center",
                }}
              >
                Giá chỉ
              </Text>
              <Text style={{ color: "#18ebdd", textAlign: "center" }}>
                298.000d
              </Text>
              <View style={{ width: 200 }}>{buyCheck()}</View>
            </View>
          </ImageBackground>
        </View>
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        ></Text>
        <View style={{ backgroundColor: "white" }}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Chi tiết khóa học
          </Text>
          {lession.map((item, index) => (
            <LessionItem item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({});
