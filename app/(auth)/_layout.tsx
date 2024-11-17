import { Stack } from "one";
import { useSession } from "~/code/store/session";
import { useRouter } from "one";
import { useEffect } from "react";

export default function AuthLayout() {
  const { session } = useSession();
  const router = useRouter();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (session) {
      router.replace("/(tabs)");
    }
  }, [session]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="sign-in" />
    </Stack>
  );
} 