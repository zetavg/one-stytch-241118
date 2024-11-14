import { Stack, useLoader, type LoaderProps } from "one";
import { RefreshControl } from "react-native";
import { ScrollView, View } from "tamagui";
import { PageContainer } from "~/code/ui/PageContainer";

export async function loader({ path }: LoaderProps) {
  // TODO: Fetch user profile
  return {};
}

export function ProfilePage() {
  const {} = useLoader(loader);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <View />,
        }}
      />

      <PageContainer>
        <ScrollView maxHeight="100%">
          <RefreshControl refreshing={false} />
        </ScrollView>
      </PageContainer>
    </>
  );
}
