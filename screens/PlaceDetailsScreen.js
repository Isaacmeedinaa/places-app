import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PlacesDetailsScreen = (props) => {
  return (
    <View>
      <Text>PlacesDetailsScreen.js</Text>
    </View>
  );
};

PlacesDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle"),
  };
};

const styles = StyleSheet.create({});

export default PlacesDetailsScreen;
