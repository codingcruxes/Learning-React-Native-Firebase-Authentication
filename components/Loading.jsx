import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "./Themed";

export default function ({ loading, size = "small" }) {
  if (!loading) return null;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator animating size={size} />
    </View>
  );
}
