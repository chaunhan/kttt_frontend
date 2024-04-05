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
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://172.16.28.230:3000/api/course/")
      .then(response => setData(response.data.courselists))
      .catch(error => console.log(error));
  }, []);
  console.log(data);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View style={{marginTop:30}}>
          <Text style={{fontSize:16,flex:1,textAlign:"center"}}>Khoá Học</Text>
        </View>
        <View>
          {data.map(course => (
            <Pressable style={{marginVertical:10,flex:1,alignItems:"center",flexDirection:"column",width:150}}>
              <Text style={{fontWeight:"bold",fontSize:10}}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.GiaCourse)}</Text>
              <Image style={{width:120,height:120,resizeMode:"contain",backgroundColor:"gray"}} source={{uri:"https://kiemtientiktoksl.com/upload/course/2023/07/05/khoa-hoc-769252.jpg"}} />
              <Text style={{width:150, fontSize:16,fontWeight:"bold",textAlign:"center"}}>{course.DesSP}</Text>
              <View style={{width:150}}>
                <Text style={{fontSize:16,textAlign:"center"}}>{course.SlBai} Bài Học</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
