import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  //   Alert,
} from "react-native";
// Context
import UserContext from "../App";

export default function Login() {
  const userContext = useContext(UserContext);
  const [id, setId] = useState(0);

  const handleSubmit = () => {
    if (id > 0) {
      userContext.setId(id);
    } else {
      Alert.alert("Unknown ID", "Please, try again.");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text>Hi Bob3000 ! (username)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user ID"
          value={id}
          onChangeText={setId}
          maxLength={10}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    marginTop: 10,
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
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
