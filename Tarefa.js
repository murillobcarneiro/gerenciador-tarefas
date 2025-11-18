import React from "react";
import { useTarefas } from "../App";

export default function Tarefa({ tarefa }) {
  const { alternarTarefa } = useTarefas();

  return (
    <li style={estilos.item}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarTarefa(tarefa.id)}
      />
      <span
        style={{
          textDecoration: tarefa.concluida ? "line-through" : "none",
          marginLeft: 10,
        }}
      >
        {tarefa.nome}
      </span>
    </li>
  );
}

const estilos = {
  item: {
    marginBottom: 10,
  },
};
