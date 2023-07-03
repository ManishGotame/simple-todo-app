import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from "tamagui";

export default function Main() {
  return (
    <>
      <YStack f={1} jc="center" ai="center" backgroundColor={"black"}>
        <Paragraph color="$color" jc="center">
          Hi
        </Paragraph>

        <StatusBar style="auto" />
      </YStack>
    </>
  );
}
