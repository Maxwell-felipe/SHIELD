// Função para obter parâmetros da URL
const params = new URLSearchParams(window.location.search);
const nome = params.get('nome') || 'Desconhecido';
const cpf = params.get('cpf') || 'Não informado';

// Listas aleatórias
const crimes = [
  "Assalto à mão armada", "Tráfico de drogas", "Homicídio",
  "Furto qualificado", "Extorsão", "Lavagem de dinheiro",
  "Sequestro", "Contrabando", "Invasão de sistema", "Falsificação de documentos"
];

const status = ["Foragido", "Preso", "Morto", "Em investigação", "Procurado internacionalmente"];

const locais = [
  "São Paulo - SP", "Rio de Janeiro - RJ", "Recife - PE", "Curitiba - PR",
  "Porto Alegre - RS", "Salvador - BA", "Fortaleza - CE", "Manaus - AM",
  "Brasília - DF", "Belo Horizonte - MG"
];

const fotos = [
  "pessoa 1.jpg",
    "pessoa 2.jpg",
    "pessoa 3.jpg",
    "pessoa 4.jpg",
    "pessoa 5.jpg",
    "pessoa 6.jpg",
    "pessoa 7.jpg",
    "pessoa .8jpg",
];

// Preenchimento dos elementos da tela
document.getElementById("nomeFicha").textContent = nome;
document.getElementById("cpfFicha").textContent = cpf;
document.getElementById("idadeFicha").textContent = Math.floor(Math.random() * 33) + 18; // 18 a 50 anos
document.getElementById("crimeFicha").textContent = crimes[Math.floor(Math.random() * crimes.length)];
document.getElementById("statusFicha").textContent = status[Math.floor(Math.random() * status.length)];
document.getElementById("localFicha").textContent = locais[Math.floor(Math.random() * locais.length)];
document.getElementById("fotoCriminal").src = fotos[Math.floor(Math.random() * fotos.length)];
