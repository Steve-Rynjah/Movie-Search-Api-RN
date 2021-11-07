import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

var { width, height } = Dimensions.get("window");

export const TopRatedDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>{item.overview}</Text> */}
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w342/` + item.poster_path }}
        style={styles.image}
      >
        <ScrollView contentContainerStyle={{marginTop: 50}} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.dates}>{item.release_date}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="star-half-full"
                size={17}
                color="#FFF"
                style={{ marginTop: 10, marginLeft: 15 }}
              />
              <Text style={styles.rating}>{item.vote_average}</Text>
              <FontAwesome
                name="eye"
                size={17}
                color="#FFF"
                style={{ marginTop: 10, marginLeft: 125 }}
              />
              <Text style={styles.rating}>{item.popularity}</Text>
            </View>
            <View
              style={{
                width: width / 2 + 150,
                height: height / 4 + 15,
                marginTop: 15,
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.overview}>{item.overview}</Text>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: width / 2 + 150,
    height: height / 2 - 50,
    borderRadius: 10,
    backgroundColor: "#000000c9",
    marginTop: 275,
  },
  title: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 15,
    marginTop: 15,
    marginLeft: 15,
  },
  dates: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 15,
    color: "#DCDCDC",
  },
  rating: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
    marginLeft: 10,
  },
  overview: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFF",
    marginHorizontal: 15,
  },
});
