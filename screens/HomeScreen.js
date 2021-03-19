import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import axios from "axios";
import styleCssCom from "../components/styleCss";
import { BlurView } from "expo-blur";
import Header from "../components/Header";

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;
const { yellow, lightGray, lightYellow, white } = styleCssCom;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  main: {
    flex: 1,
  },
  fotter: {
    position: "absolute",
    height: 115,
    width: "100%",
    flex: 1,
    bottom: 0,
    // backgroundColor: yellow,
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  console.log(articles);

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
      <Header />
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.main}
          data={articles}
          // articlesから一つずつ取り出したのがitem
          renderItem={({ item }) => (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author || item.source.name}
              onPress={() => navigation.navigate("Article", { article: item })}
              dateTime={dateFormat(item.publishedAt)}
            />
          )}
          //keyの設定、indexもkeyExtractorから自動で返ってくる
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <BlurView intensity={85} tint="light" style={styles.fotter}></BlurView>
    </>
  );
};
