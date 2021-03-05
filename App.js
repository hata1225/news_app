import React from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

const styles = StyleSheet.create({
  sample: {
    backgroundColor: "#333",
  },
});

export default function App() {
  return <AppNavigator style={styles.sample} />;
}
