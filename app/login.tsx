import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Make sure this package is installed

export default function HomeTab() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Header.png")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingVertical: 12.6,
    paddingHorizontal: 15.7,
  },
  image: {
    width: "100%",
    height: 23,
  },
});
