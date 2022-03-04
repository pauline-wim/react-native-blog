import React from "react";
// import { useContext } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  // TouchableOpacity,
  // Alert,
} from "react-native";
// Context
// import { UserContext } from "../App";

export default function Timeline() {
  // const userContext = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Timeline</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    // fontWeight: "bold",
    fontSize: 30,
  },
  btn: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
