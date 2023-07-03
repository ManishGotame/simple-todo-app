import { XStack, YStack, Text, Spacer, Button, ScrollView } from "tamagui";
import { H1 } from "tamagui";

import { useState } from "react";

import { Task } from "./types";

// components
import ListTask from "./listTasks";
import AddTasks from "./addTask";

// sample
const sampleTasks: Task[] = [
  {
    title: "Finish the todo-app.",
    description: "Fucking Finish it hai.",
  },
  {
    title: "Study Solidity Low-level.",
    description: "Use Degatchi's blog",
  },
  {
    title: "Fuck",
    description: "Self-explanatory",
  },
];

export default function Main() {
  const [tasks, setTask] = useState<Task[]>(sampleTasks);

  return (
    <ScrollView
      width="100%"
      height="100%"
      backgroundColor="$background"
      padding="$4"
      borderRadius="$4"
    >
      <XStack flex={1} flexWrap="wrap" jc="center" ai="center">
        <YStack space="$3">
          <Spacer />
          <H1> Todos </H1>
        </YStack>

        <YStack>
          <Spacer />
          <ListTask tasks={tasks} />
        </YStack>

        <YStack>
          <Spacer />
          <AddTasks tasks={tasks} setTask={setTask} />
        </YStack>
      </XStack>
    </ScrollView>
  );
}
