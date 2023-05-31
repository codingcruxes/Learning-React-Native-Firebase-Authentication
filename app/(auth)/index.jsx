import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import { Text, View, Button } from "../../components/Themed";
import { auth } from "../../firebaseConfig";
import ErrorDisplay from "../../components/ErrorDisplay";

export default function Login() {
  const [email, setEmail] = React.useState("halecolin4@gmail.com");
  const [password, setPassword] = React.useState("chatapp");
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const onSubmitHandler = async ({ email, password, auth }) => {
    setError("");
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // set user context here
        router.push("/(tabs)");
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput
          value={email}
          placeholder="Email"
          onChangeText={(t) => setEmail(t)}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          value={password}
          placeholder="Password"
          onChangeText={(t) => setPassword(t)}
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setPasswordVisible((p) => !p)}
            />
          }
        />
      </View>
      <View>
        <Button
          mode="contained"
          onPress={() => onSubmitHandler({ email, password, auth })}
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
        <ErrorDisplay message={error} />
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push("/(auth)/resetPassword")}>
          <Text>Reset password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    rowGap: 20,
  },
  header: {
    padding: 6,
    borderColor: "#eeeeee60",
    borderBottomWidth: 1,
    width: "100%",
  },
  title: {
    color: "#eee",
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
