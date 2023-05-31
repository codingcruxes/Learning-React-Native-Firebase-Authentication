import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function AppTabLayout() {
  const theme = useTheme();
  const router = useRouter();

  const onLogoutHander = async () => {
    await signOut(auth);
    router.replace("/");
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: { backgroundColor: theme.colors.background },
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: "#ffffff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "One",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
              name="numeric-1-box"
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={onLogoutHander}>
              <MaterialCommunityIcons
                size={28}
                style={{ marginBottom: -3 }}
                color="#fff"
                name="logout"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="screen2"
        options={{
          title: "Two",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
              name="numeric-2-box"
            />
          ),
        }}
      />
    </Tabs>
  );
}
