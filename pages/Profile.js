import React from "react";
// import { useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
// Components
import Nav from "../components/Nav";
import Logout from "../components/Logout";
// // Context
// import { UserContext } from "../App";
import { Dimensions } from "react-native";

export default function Profile() {
  //   const userContext = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.title}>Profile</Text>
        <Logout />
      </View>
      <View style={styles.profile}>
        <View>
          <Text>Content...</Text>
        </View>
        <View style={styles.nav}>
          <Nav />
        </View>
      </View>
    </SafeAreaView>
  );
}

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // marginTop: 20,
    height: height,
    // backgroundColor: "lightgrey",
  },
  home: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
  profile: {
    height: height - 110,
    // height: 600,
    backgroundColor: "lightgreen",
    justifyContent: "space-between",
  },
});
