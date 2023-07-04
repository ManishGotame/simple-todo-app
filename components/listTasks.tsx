import { H2, H3, Spacer, Text, YStack } from "tamagui";

import { Activity, ChevronRight } from "@tamagui/lucide-icons";
import { ListItem, Separator, XStack, YGroup } from "tamagui";
import { useState } from "react";
import { Task } from "./types";

import { ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Sheet } from "@tamagui/sheet";
import { Button, H1, Input, Paragraph } from "tamagui";

// onPress => pop up that should ask for task removal

function TaskDetails({ task }: null | Task[]) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem
        hoverTheme
        pressTheme
        borderRadius={5}
        icon={Activity}
        title={task?.title}
        subTitle={task?.description}
        iconAfter={ChevronRight}
        onPress={() => setOpen(true)}
      />
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={true}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        zIndex={100_000}
        animation="bouncy"
      >
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame
          flex={1}
          padding="$4"
          justifyContent="center"
          alignItems="center"
          space="$5"
        >
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => setOpen(false)}
          />
          <Input width={200} />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}

export default function ListTask({ tasks }: null | Task[]) {
  return (
    <>
      <YGroup
        alignSelf="center"
        bordered
        borderRadius={5}
        width={350}
        size="$4"
      >
        <YGroup.Item>
          {tasks !== null && tasks.length > 0 ? (
            <>
              {tasks.map((task: any) => (
                <TaskDetails task={task} />
              ))}
            </>
          ) : null}
        </YGroup.Item>
      </YGroup>
    </>
  );
}
