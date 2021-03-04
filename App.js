import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ListItem from "./components/ListItem";
import article from "./dummies/articles.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
  },
  newsImage: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

export default function App() {
  const items = article.map((article, index) => {
    // article.jsonを展開、一つ一つの要素が引数articleに入り、returnでListItemoを返したものを変数itemsに入れている。
    // ListItemコンポーネントが複数個itemsに入っているので、keyを設定してreactが追跡できるようにする。
    return (
      <ListItem
        imageUrl={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index}
      />
    );
  });

  return <View style={styles.container}>{items}</View>;
}
