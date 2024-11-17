import { SignInScreen } from "~/code/auth/sign-in-screen";
import { Stack } from "one";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignInPage() {
  console.log("sign-in");
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={["bottom", "left", "right", "top"]}
    >
      <Stack.Screen />
      <SignInScreen />
    </SafeAreaView>
  );
}
