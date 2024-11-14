import { View } from "@tamagui/core";
import { Bell } from "@tamagui/lucide-icons";
import { Link } from "one";

export function NotificationsButton() {
  return (
    <Link asChild href="/notifications">
      <View pointerEvents="auto">
        <Bell size={22} />
      </View>
    </Link>
  );
}
