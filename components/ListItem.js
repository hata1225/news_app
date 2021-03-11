import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styleCssCom from "./styleCss";

const { lightYellow, lightGray, gray } = styleCssCom;

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: gray,
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: lightYellow,
  },
  leftContainer: {
    width: 100,
    height: "100%",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 12,
    justifyContent: "space-between",
  },
  newsImage: {
    width: 100,
    height: "100%",
  },
  text: {
    fontSize: 15,
  },
  subArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    fontSize: 12,
    color: "gray",
    width: 120,
  },
  dateTimeArea: {
    display: "flex",
    flexDirection: "row",
  },
  dateTime: {
    fontSize: 12,
    marginRight: 5,
  },
});

const ListItem = ({ imageUrl, title, author, onPress }) => {
  // const date = dateTime.date;
  // const time = dateTime.time;
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image style={styles.newsImage} source={{ uri: imageUrl }} />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {title}
        </Text>
        <View style={styles.subArea}>
          <Text style={styles.author} numberOfLines={1}>
            {author}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
