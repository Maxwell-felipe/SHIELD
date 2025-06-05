function gerarFicha() {
  const nome = document.getElementById("nomeInput").value.trim();
  const cpf = document.getElementById("cpfInput").value.trim();

  if (nome === "" || cpf === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const crimes = [
    "Assalto à mão armada", "Tráfico de drogas", "Homicídio",
    "Furto qualificado", "Extorsão", "Lavagem de dinheiro",
    "Sequestro", "Contrabando", "Invasão de sistema", "Falsificação de documentos", "Sequestro e cárcere privado", "tortura", "atentado a democracia", "rceptação", "estelionato","corrupção ativa",
    "corrupção passiva","peculato","ato terrorista", "falsidade ideologica"

  ];

  const status = ["Foragido", "Preso", "Morto", "Em investigação", "Procurado internacionalmente"];

  const locais = [
    "São Paulo - SP", "Rio de Janeiro - RJ", "Recife - PE", "Curitiba - PR",
    "Porto Alegre - RS", "Salvador - BA", "Fortaleza - CE", "Manaus - AM",
    "Brasília - DF", "Belo Horizonte - MG", "xique-xique - BA"
  ];

  const fotos = [
    "pessoa 1.jpg",
    "pessoa 2.jpg",
    "pessoa 3.jpg",
    "pessoa 4.jpg",
    "pessoa 5.jpg",
    "pessoa 6.jpg",
    "pessoa 7.jpg",
    "pessoa 8.jpg",
  ];

  // Dados aleatórios
  const idade = Math.floor(Math.random() * 40) + 18;
  const crime = crimes[Math.floor(Math.random() * crimes.length)];
  const stat = status[Math.floor(Math.random() * status.length)];
  const local = locais[Math.floor(Math.random() * locais.length)];
  const foto = fotos[Math.floor(Math.random() * fotos.length)];

  // Preencher na tela
  document.getElementById("nomeFicha").textContent = nome;
  document.getElementById("cpfFicha").textContent = cpf;
  document.getElementById("idadeFicha").textContent = idade + " anos";
  document.getElementById("crimeFicha").textContent = crime;
  document.getElementById("statusFicha").textContent = stat;
  document.getElementById("localFicha").textContent = local;
  document.getElementById("fotoCriminal").src = foto;

  document.getElementById("ficha").style.display = "block";
}
