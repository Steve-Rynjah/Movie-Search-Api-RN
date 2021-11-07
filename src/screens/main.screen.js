import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

var { width, height } = Dimensions.get("window");

const URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

export const MainScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [userFiltered, setUserFiltered] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [store, setStore] = useState([]);

  // useEffect(async () => {
  //   await axios.get(`${URL}`).then((res) => {
  //     setUserFiltered(res.data);
  //     setMasterData(res.data);
  //   })
  //   .catch((err) => console.log(err))

  //   return () => {
  //     setUserFiltered([])
  //     setMasterData([])
  //   }
  // }, []);

  useEffect(async () => {
    await fetch(`${URL}`)
      .then((res) => res.json())
      .then((json) => {
        setUserFiltered(json);
        setMasterData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.results.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setStore(newData);
      setUserFiltered([]);
      setSearch(text);
    } else {
      setUserFiltered(masterData);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#252252" />
      <View style={styles.searchBarContainer}>
        <MaterialIcons
          name="search"
          size={32}
          color="#252252"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          value={search}
          placeholder="Search..."
          placeholderTextColor="#252252"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
          style={styles.input}
        />
      </View>

      {userFiltered.results ? (
        <FlatList
          data={userFiltered.results}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 25 }}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardContainer} key={item.id}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("_DETAIL", { item: item })}
                >
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{
                      uri:
                        `https://image.tmdb.org/t/p/w342/` + item.poster_path,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.title}>{item.title.toLowerCase()}</Text>
              </View>
            );
          }}
        />
      ) : (
        <FlatList
          data={store}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 25 }}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardContainer} key={item.id}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("_DETAIL", { item: item })}
                >
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{
                      uri:
                        `https://image.tmdb.org/t/p/w342/` + item.poster_path,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.title}>{item.title.toLowerCase()}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252252",
  },
  label: {
    color: "#FFF",
    fontSize: 17,
  },
  searchBarContainer: {
    width: width / 2 + 175,
    height: height / 13,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  input: {
    width: width / 2 + 160,
    height: height / 12,
    fontSize: 18,
    color: "#252252",
    marginLeft: 10,
  },
  cardContainer: {
    width: width / 2 + 155,
    height: height / 3 + 50,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginTop: 25,
  },
  image: {
    width: width / 2 + 155,
    height: height / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#252252",
    fontSize: 17,
    marginTop: 10,
    textTransform: "capitalize",
  },
});
