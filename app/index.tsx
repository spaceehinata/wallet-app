import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 295.34;
const DESIGN_HEIGHT = 363.86;

const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" />

      <Image
        source={require("../assets/images/onboarding.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Easy Online Payment</Text>
        <Text style={styles.subtitle}>
          Make your payment experience better today. No additional admin fee.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => router.navigate("/login")}
          style={[styles.button, styles.loginButton]}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("/signup")}
          style={[styles.button, styles.signupButton]}
        >
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
  },
  textContainer: {
    paddingTop: 56,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: 25.2,
    lineHeight: 25.2 * 1.2,
    letterSpacing: 0,
    textAlign: "center",
    color: "#0B0A0A",
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 12.6,
    lineHeight: 12.6 * 1.5,
    color: "#595F67",
    textAlign: "center",
  },
  buttonWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 6.3,
    marginTop: 37,
  },
  button: {
    borderRadius: 3.15,
    borderWidth: 1,
    borderColor: "black",
    height: 37.9,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#000000",
  },
  signupButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000000",
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12.6,
  },
  signupText: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 12.6,
  },
});
