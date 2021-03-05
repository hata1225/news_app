import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import axios from "axios";

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  headerSafe: {
    flex: 1,
    backgroundColor: "#39b774",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  header: {
    height: 60,
    backgroundColor: "#39b774",
  },
  fotterSafe: {
    backgroundColor: "#f7f9f7",
  },
});

export default HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  useEffect(
    () => {
      // useEffectに渡された関数は、レンダーの結果が画面に反映されたあとに動作します。DOMの書き換え、データの購読(API)、タイマーなど。
      fetchArticles();
    },
    [] //[]の中には条件付きで
  );

  const fetchArticles = async () => {
    //axiosのgithubドキュメントからコピペ。responseにapi叩いたときの結果が入る。
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const dateFormat = (date) => {
    const dt = new Date(date);
    const Y = dt.getFullYear();
    const M = ("00" + (dt.getMonth() + 1)).slice(-2);
    const D = ("00" + dt.getDate()).slice(-2);
    const h = ("00" + dt.getHours()).slice(-2);
    const m = ("00" + dt.getMinutes()).slice(-2);
    const s = ("00" + dt.getSeconds()).slice(-2);
    return {
      date: Y + "/" + M + "/" + D,
      time: h + ":" + m + ":" + s,
    };
  };

  return (
    <>
      <SafeAreaView style={styles.headerSafes} />
      <View style={styles.header}></View>
      <FlatList
        data={articles}
        // articlesから一つずつ取り出したのがitem
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author || item.source.name}
            dateTime={dateFormat(item.publishedAt)}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        //keyの設定、indexもkeyExtractorから自動で返ってくる
        keyExtractor={(item, index) => index.toString()}
      />
      <SafeAreaView style={styles.fotterSafe} />
    </>
  );
};
