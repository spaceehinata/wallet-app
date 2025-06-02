import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 295.34;
const DESIGN_HEIGHT = 363.86;

const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" backgroundColor="#ffffff" />

      <Image
        source={require("../assets/images/onboarding.png")}
        style={{
          width: screenWidth,
          height: calculatedHeight,
        }}
        resizeMode="cover"
      />
    </View>
  );
}
