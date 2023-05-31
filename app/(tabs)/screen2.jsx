import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { useTheme } from "react-native-paper";

export default function Page() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={{ ...styles.subtitle, color: colors.primary }}>
          This is the second page of your app.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
  },
});
