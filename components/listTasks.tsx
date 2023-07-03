import { H2, H3, Spacer, Text, YStack } from "tamagui";

import { Activity, ChevronRight } from "@tamagui/lucide-icons";
import { ListItem, Separator, XStack, YGroup } from "tamagui";

import { Task } from "./types";

// onPress => pop up that should ask for task removal
export default function ListTask({ tasks }: null | Task[]) {
  return (
    <YGroup alignSelf="center" bordered width={350} size="$4">
      <YGroup.Item>
        {tasks !== null && tasks.length > 0 ? (
          <>
            {tasks.map((task: any) => (
              <ListItem
                hoverTheme
                pressTheme
                icon={Activity}
                title={task?.title}
                subTitle={task?.description}
                iconAfter={ChevronRight}
              />
            ))}
          </>
        ) : null}
      </YGroup.Item>
    </YGroup>
  );
}
