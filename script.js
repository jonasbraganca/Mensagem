const mensagens = [
    { texto: "Oi, sinto muito pelo nosso desencontro do fds", cor: "#FFDEAD" },
    { texto: "Mas saiba que estou com sdds", cor: "#AFEEEE" },
    { texto: "Espero lhe ver amanhã e lhe encher de bjinhos", cor: "#98FB98" },
    { texto: "<3", cor: "#D8BFD8" }
  ];
  
  let indice = 0;
  
  const mensagemEl = document.getElementById("mensagem");
  const botaoProximo = document.getElementById("proximo");
  const botaoAnterior = document.getElementById("anterior");
  
  function atualizarMensagem() {
    const atual = mensagens[indice];
    mensagemEl.textContent = atual.texto;
    document.body.style.backgroundColor = atual.cor;
  
    botaoAnterior.disabled = indice === 0;
    botaoProximo.disabled = indice === mensagens.length - 1;
  }
  
  botaoProximo.addEventListener("click", () => {
    if (indice < mensagens.length - 1) {
      indice++;
      atualizarMensagem();
    }
  });
  
  botaoAnterior.addEventListener("click", () => {
    if (indice > 0) {
      indice--;
      atualizarMensagem();
    }
  });
  
  atualizarMensagem();
  
