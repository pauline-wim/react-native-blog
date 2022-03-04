import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigate } from "react-router-native";
// Context
import { UserContext } from "../App";

export default function Logout() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userContext.id > 0) {
      userContext.setId(0);
      navigate("/");
    } else {
      Alert.alert("Unknown ID", "Please, try again.");
    }
  };
  return (
    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
