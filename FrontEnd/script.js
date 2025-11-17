// Lista de emoções e frases
const emotions = {
  ansioso: 'A ansiedade é um sinal de que algo importa para você.',
  triste: 'A tristeza também faz parte do crescimento.',
  estressado: 'O estresse pode ser aliviado com respiração e pausa.',
  feliz: 'A felicidade é feita de pequenos momentos.',
  cansado: 'O descanso é essencial para o bem-estar.',
  motivado: 'A motivação te leva além dos limites.',
  calmo: 'A calma traz clareza para a mente.'
};

function showEmotion(emotion) {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h2>${capitalize(emotion)}</h2>
    <p>${emotions[emotion]}</p>
    <button onclick="location.reload()">Voltar</button>
  `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
