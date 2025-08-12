import React from "react";
import Text from "../components/text";
import Badge from "../components/badge";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
  const { CreatedTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-md-bold" className="!text-gray-300">Tarefas Criadas</Text>
        <Badge variant="secondary" loading={isLoadingTasks}>{CreatedTasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-md-bold" className="!text-gray-300">Concluidas</Text>
        <Badge variant="primary" loading={isLoadingTasks}>{concludedTasksCount} de {CreatedTasksCount}</Badge>
      </div>
    </>
  );
}
