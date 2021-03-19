import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import styleCssCom from "../components/styleCss";

const { white } = styleCssCom;

const styles = StyleSheet.create({
  headerSafe: {
    backgroundColor: white,
  },
  header: {
    height: 45,
    backgroundColor: white,
  },
});

export default Header = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.headerSafe} />
      <View style={styles.header}></View>
    </>
  );
};
