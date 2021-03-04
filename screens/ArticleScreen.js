import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>this is article screen</Text>
    </SafeAreaView>
  );
};
