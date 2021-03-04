import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import articles from "./dummies/articles.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default function App() {
  const items = articles.map((article, index) => {
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

  return (
    <View style={styles.container}>
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
    </View>
  );
}
