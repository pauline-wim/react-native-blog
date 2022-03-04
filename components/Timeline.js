import React from "react";
import { useContext } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  // TouchableOpacity,
  // Alert,
} from "react-native";
// Context
import { UserContext } from "../App";

export default function Timeline() {
  const userContext = useContext(UserContext);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.post}>
        <Text>{index}</Text>
        <Text>User ID: {item.userId}</Text>
        <Text>Title: {item.title}</Text>
        <Text>{item.body}</Text>
        <Text>N comments</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Timeline</Text>
        <FlatList
          style={styles.list}
          data={userContext.posts}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 622,
  },
  title: {
    // fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 30,
  },
  post: {
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
});
