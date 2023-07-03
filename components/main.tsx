import { XStack, YStack, Text, Spacer, Button } from "tamagui";
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
  const [tasks, setTask] = useState<null | Task[]>([]);

  const createTask = (task: Task) => {
    console.log(task);
  };

  return (
    <>
      <XStack
        flex={1}
        flexWrap="wrap"
        jc="center"
        ai="center"
        backgroundColor="black"
      >
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
          <AddTasks title={"Create a Task"} createTask={createTask} />
        </YStack>
      </XStack>
    </>
  );
}
