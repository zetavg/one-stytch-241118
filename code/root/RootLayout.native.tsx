import { useSession } from "~/code/store/session";
import { LoadingOverlay } from "~/code/ui/LoadingOverlay";
import { SignInPage } from "~/app/(auth)/sign-in";
import { HomeLayout } from "~/code/home/HomeLayout";

export function RootLayout() {
  const { isLoading, user } = useSession();

  if (isLoading) return <LoadingOverlay />;

  if (!user) {
    return <SignInPage />;
  }

  return <HomeLayout />;
}
