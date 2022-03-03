import React from "react";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
// Context
import { UserContext } from "../App";

export default function Timeline() {
  const userContext = useContext(UserContext);
  // const [id, _setId] = useState(0);

  const handleSubmit = () => {
    if (userContext.id > 0) {
      userContext.setId(0);
    } else {
      Alert.alert("Unknown ID", "Please, try again.");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Timeline</Text>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text>Logout</Text>
      </TouchableOpacity>
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
