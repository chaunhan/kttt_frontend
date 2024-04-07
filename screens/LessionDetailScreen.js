import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";

const LessionDetailScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const link = route.params.link;
  const vId = link.split("https://www.youtube.com/embed/");
  const CheckActive = () => {
    if (route.params.user == "true") {
      return (
        <View>
          <YoutubePlayer height={300} videoId={vId[1]} play={true} />
          <Text style={{ textAlign: "center" }}>Chúc bạn học tốt!!!</Text>
        </View>
      );
    }
    if (route.params.TenBai == "bai1" || route.params.TenBai == "bai2") {
      return (
        <View>
          <YoutubePlayer height={300} videoId={vId[1]} play={true} />
          <Text style={{ textAlign: "center" }}>Chúc bạn học tốt!!!</Text>
        </View>
      );
    }
    if (
      route.params.user != "true" &&
      route.params.TenBai != "bai2" &&
      route.params.TenBai != "bai1"
    ) {
      return (
        <Text>Bạn phải đăng ký mua khoá học để xem được nội dung này</Text>
      );
    }
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: "#eef3f6" }}
      showsVerticalScrollIndicator={false}
    >
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              marginTop: 10,
              height: 150,
              resizeMode: "contain",
              backgroundColor: "#1b2932",
              alignItems: "center",
            }}
            source={{
              uri: "https://kiemtientictok.com/default/theme/assets/media/photos/lesson_detail.webp",
            }}
            imageStyle={{ opacity: 0.5 }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "white",
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              KIẾM TIỀN TIK TOK
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                paddingTop: 10,
                color: "lightblue",
              }}
            >
              {route.params.course.DesSP}:
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {route.params.Title}
            </Text>
          </ImageBackground>
          <View style={{ paddingTop: 10 }}>{CheckActive()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessionDetailScreen;

const styles = StyleSheet.create({});
