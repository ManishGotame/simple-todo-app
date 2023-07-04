import {
  Dialog,
  Fieldset,
  H2,
  H3,
  Label,
  Spacer,
  Text,
  TextArea,
  YStack,
} from "tamagui";

import { Activity, ChevronRight } from "@tamagui/lucide-icons";
import { ListItem, Separator, XStack, YGroup } from "tamagui";
import { useState } from "react";
import { Task } from "./types";

import { ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Sheet } from "@tamagui/sheet";
import { Button, H1, Input, Paragraph } from "tamagui";

function TaskDetails({ id, tasks, setTask }: null | Task[]) {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTitle] = useState(tasks[id]?.title);
  const [desc, setDesc] = useState(tasks[id]?.description);

  // updates task details
  const updateTaskDetails = () => {
    const currentTasks = [...tasks];
    currentTasks[id].title = taskTitle;
    currentTasks[id].description = desc;

    setTask(currentTasks);
  };

  // deletes task from the list
  // this is buggy af
  const removeTask = () => {
    const currentTasks = [...tasks];
    currentTasks.splice(id, 1);

    setTask(currentTasks);
  };

  return (
    <>
      <ListItem
        hoverTheme
        pressTheme
        borderRadius={5}
        icon={Activity}
        title={tasks[id]?.title}
        subTitle={tasks[id]?.description}
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
        <Sheet.Frame flex={1} padding="$4" space="$5">
          <Dialog modal>
            <Dialog.Title>Edit Task</Dialog.Title>
            <Spacer />
            <Spacer />
            <Dialog.Description>
              Edit the title and description for your task.
            </Dialog.Description>
            <Spacer />
            <Fieldset space="$4" horizontal>
              <Label width={80} justifyContent="flex-end" htmlFor="title">
                Title
              </Label>
              <Input
                flex={1}
                onChangeText={setTitle}
                defaultValue={taskTitle}
              />
            </Fieldset>
            <Spacer />
            <Fieldset space="$4" horizontal>
              <Label width={80} justifyContent="flex-end" htmlFor="description">
                Description
              </Label>
              <TextArea
                onChangeText={setDesc}
                defaultValue={desc}
                size="$4"
                borderWidth={2}
                width={255}
              />
            </Fieldset>

            <Spacer />
            <XStack alignSelf="flex-end" space>
              <Button
                theme="alt1"
                aria-label="Close"
                backgroundColor={"red"}
                onPress={() => {
                  removeTask();
                  setOpen(false);
                }}
              >
                Finished
              </Button>
              <Button
                theme="alt1"
                aria-label="Close"
                backgroundColor={"green"}
                onPress={() => {
                  updateTaskDetails();
                  setOpen(false);
                }}
              >
                Save
              </Button>
            </XStack>
          </Dialog>
        </Sheet.Frame>
      </Sheet>
    </>
  );
}

export default function ListTask({ tasks, setTask }) {
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
              {tasks.map((task, taskId) => (
                <TaskDetails id={taskId} tasks={tasks} setTask={setTask} />
              ))}
            </>
          ) : null}
        </YGroup.Item>
      </YGroup>
    </>
  );
}
