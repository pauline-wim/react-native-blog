import { useContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
// Components
import Login from "../components/Login";
import Timeline from "../components/Timeline";
// Context
import UserContext from "../App";

export default function Home() {
  const userContext = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      {/* {console.log(userContext.id)} */}
      <Text style={styles.title}>HOME</Text>
      {userContext.id ? <Timeline /> : <Login />}
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
    fontWeight: "bold",
    fontSize: 40,
  },
});
