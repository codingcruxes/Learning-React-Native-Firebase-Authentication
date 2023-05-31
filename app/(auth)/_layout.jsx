import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";

export default function AuthTabLayout() {
  const theme = useTheme();
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
          title: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
              name="login"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
              name="account-plus"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="resetPassword"
        options={{
          title: "Reset Password",
          href: null,
        }}
      />
    </Tabs>
  );
}
