import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import dummyArticles from "./dummies/articles.json";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default function App() {
  const [articles, setArticles] = useState([]); //state
  useEffect(() => {
    alert(Constants.manifest.extra.newsApiKey);
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    return () => clearTimeout(itmer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        // articlesから一つずつ取り出したのがitem
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        //keyの設定、indexもkeyExtractorから自動で返ってくる
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
