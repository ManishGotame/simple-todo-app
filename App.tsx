import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import config from "./tamagui.config";
import Main from "./components/main";

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={"dark"}>
        <Main />
      </Theme>
    </TamaguiProvider>
  );
}
