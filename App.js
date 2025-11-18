import React, { useState, createContext, useContext } from "react";
import ListaDeTarefas from "./components/ListaDeTarefas";

const TarefasContext = createContext();
export const useTarefas = () => useContext(TarefasContext);

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const nova = {
      id: Date.now(),
      nome: novaTarefa,
      concluida: false,
    };
    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };

  const alternarTarefa = (id) => {
    const atualizadas = tarefas.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    setTarefas(atualizadas);
  };

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "concluidas") return t.concluida;
    if (filtro === "pendentes") return !t.concluida;
    return true;
  });

  return (
    <TarefasContext.Provider value={{ tarefasFiltradas, alternarTarefa }}>
      <div style={estilos.container}>
        <h1>🗂️ Gerenciador de Tarefas</h1>

        <div style={estilos.inputArea}>
          <input
            type="text"
            placeholder="Digite uma nova tarefa..."
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            style={estilos.input}
          />
          <button onClick={adicionarTarefa} style={estilos.botao}>
            Adicionar
          </button>
        </div>

        <div style={estilos.filtros}>
          <button onClick={() => setFiltro("todas")}>Todas</button>
          <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
          <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
        </div>

        <ListaDeTarefas />
      </div>
    </TarefasContext.Provider>
  );
}

const estilos = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: 20,
  },
  inputArea: {
    marginBottom: 20,
  },
  input: {
    padding: 8,
    width: "60%",
    marginRight: 10,
  },
  botao: {
    padding: 8,
  },
  filtros: {
    marginBottom: 20,
  },
};
