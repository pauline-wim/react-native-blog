import React from "react";
// import { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";
// Context
// import { UserContext } from "../App";
import { Dimensions } from "react-native";

export default function Nav() {
  //   const userContext = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => navigate("/")}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigate("/add")}>
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigate("/profile")}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const width = Dimensions.get("window").width; //full width

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "pink",
    height: 80,
    width: width,
  },
  btn: {
    padding: 20,
  },
});
