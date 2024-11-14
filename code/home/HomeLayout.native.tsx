import { Stack } from "one";
import { View } from "tamagui";

export function HomeLayout() {
  return (
    <View f={1}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="wallets"
          options={{
            title: "Accounts",
            presentation: "modal",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            title: "Notifications",
            presentation: "modal",
            animation: "slide_from_bottom",
          }}
        />
      </Stack>
    </View>
  );
}
