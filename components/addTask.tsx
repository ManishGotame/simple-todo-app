import { XStack, YStack, Text, Spacer, Button } from "tamagui";
import { useState } from "react";
import {
  Adapt,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  TooltipSimple,
  Unspaced,
  TextArea,
} from "tamagui";

import { Task } from "./types";

import { X } from "@tamagui/lucide-icons";

export default function AddTasks({ tasks, setTask }) {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const createTask = () => {
    const currentTasks = [...tasks];

    const newTask: Task = {
      title: taskTitle,
      description: desc,
    };
    currentTasks.push(newTask);
    setTask(currentTasks);
  };

  return (
    <Dialog
      modal
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <Dialog.Trigger asChild>
        <Button>Add Task</Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Add Task</Dialog.Title>
          <Dialog.Description>
            Add the title and description for your task.
          </Dialog.Description>
          <Fieldset space="$4" horizontal>
            <Label width={80} justifyContent="flex-end" htmlFor="title">
              Title
            </Label>
            <Input
              flex={1}
              onChangeText={setTitle}
              id="name"
              placeholder="Finish Notes"
            />
          </Fieldset>
          <Fieldset space="$4" horizontal>
            <Label width={80} justifyContent="flex-end" htmlFor="description">
              Description
            </Label>
            <TextArea
              onChangeText={setDesc}
              size="$4"
              borderWidth={2}
              width={255}
            />
          </Fieldset>

          <XStack alignSelf="flex-end" space>
            <Dialog.Close displayWhenAdapted asChild>
              <Button onPress={createTask} theme="alt1" aria-label="Close">
                Create
              </Button>
            </Dialog.Close>
          </XStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
