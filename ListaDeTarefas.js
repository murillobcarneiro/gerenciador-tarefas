import React from "react";
import { useTarefas } from "../App";
import Tarefa from "./Tarefa";

export default function ListaDeTarefas() {
  const { tarefasFiltradas } = useTarefas();

  if (tarefasFiltradas.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
