// Lista de emoções e explicações detalhadas
const emotions = {
  ansioso: {
    titulo: 'Ansiedade',
    explicacao: 'A ansiedade é uma resposta natural do corpo frente a situações percebidas como ameaçadoras ou incertas. É uma emoção que envolve preocupação sobre eventos futuros e pode manifestar-se através de inquietação, aceleração cardíaca e dificuldade de concentração. Embora desconfortável, a ansiedade é um sinal de que algo importa para você e pode ser um motivador para ação. Técnicas como respiração profunda, meditação e exercício físico podem ajudar a gerenciar seus níveis de ansiedade.',
    dica: '💡 Dica: Tente a técnica 4-7-8: respire por 4 contagens, segure por 7 e solte por 8.'
  },
  triste: {
    titulo: 'Tristeza',
    explicacao: 'A tristeza é uma emoção fundamental que nos permite processar perdas, decepções e mudanças na vida. Diferente da depressão, a tristeza é uma resposta saudável a eventos difíceis e faz parte do crescimento emocional. Ela nos ensina resiliência, compaixão e nos aproxima de outras pessoas. Permitir-se sentir tristeza, sem julgar-se por isso, é um passo importante para a aceitação e cura emocional. Compartilhar seus sentimentos com amigos ou um profissional pode ser muito benéfico.',
    dica: '💡 Dica: Escreva em um diário ou converse com alguém de confiança sobre o que você sente.'
  },
  estressado: {
    titulo: 'Estressado',
    explicacao: 'O estresse é a resposta do corpo a demandas ou pressões do ambiente. Em pequenas doses, pode ser produtivo e motivador, mas o estresse crônico afeta negativamente a saúde física e mental. Seus sintomas incluem tensão muscular, insônia, irritabilidade e dificuldade de concentração. O gerenciamento eficaz envolve identificar as fontes de estresse, praticar relaxamento corporal, manter limites saudáveis e buscar apoio quando necessário. Pausas regulares e atividades prazerosas são essenciais para recuperação.',
    dica: '💡 Dica: Faça uma pausa agora. Caminhe, alongue-se ou simplesmente respire fundo por alguns minutos.'
  },
  feliz: {
    titulo: 'Feliz',
    explicacao: 'A felicidade é um estado emocional de bem-estar, contentamento e satisfação com a vida. Ao contrário do que muitos pensam, não é um destino permanente, mas momentos significativos que construímos através de conexões autênticas, realização pessoal e apreciação do presente. A verdadeira felicidade está nos pequenos momentos: um sorriso, um abraço, uma conversa significativa, uma conquista pessoal. Cultivar gratidão, manter relacionamentos significativos e trabalhar em objetivos pessoais são chaves para experimentar mais felicidade na vida.',
    dica: '💡 Dica: Anote três coisas pelas quais você é grato hoje. A gratidão amplifica a felicidade.'
  },
  cansado: {
    titulo: 'Cansado',
    explicacao: 'O cansaço pode ser físico, mental ou emocional, sinalizando que seu corpo e mente precisam de recuperação. É fácil ignorar os sinais de esgotamento em uma sociedade que valoriza a produtividade contínua, mas o descanso é essencial para a saúde integral. O cansaço crônico pode levar a problemas de saúde, redução da imunidade e dificuldades emocionais. Priorizar sono de qualidade, reduzir compromissos quando possível e praticar atividades relaxantes são estratégias fundamentais para recuperar sua energia e vitalidade.',
    dica: '💡 Dica: Durma pelo menos 7-9 horas. Se não conseguir, tire um cochilo de 20-30 minutos à tarde.'
  },
  motivado: {
    titulo: 'Motivado',
    explicacao: 'A motivação é a força que nos impulsiona a agir, perseguir objetivos e superar desafios. É um estado energizante onde você se sente direcionado, entusiasmado e capaz de alcançar suas metas. A motivação pode ser intrínseca (vem de dentro, de valores pessoais) ou extrínseca (vem de recompensas externas). Para manter a motivação, é importante ter objetivos claros, celebrar pequenas conquistas, rodear-se de pessoas inspiradoras e lembrar-se do "por quê" por trás de seus objetivos. Aproveite este momento para criar momentum e trabalhar nas coisas que importam para você.',
    dica: '💡 Dica: Defina uma meta pequena para hoje e trabalhe nela. Pequenas vitórias alimentam a motivação.'
  },
  calmo: {
    titulo: 'Calmo',
    explicacao: 'A calma é um estado de tranquilidade mental, onde há harmonia entre pensamentos e emoções. É um estado valioso que permite clareza de pensamento, melhor tomada de decisão e paz interior. A calma não significa apatia ou falta de ação, mas sim uma ação consciente e deliberada. Quando você está calmo, tem acesso melhor à sua intuição e sabedoria. Práticas como meditação, yoga, estar na natureza e cultivar mindfulness fortalecem sua capacidade de manter a calma diante de desafios. Aproveite este estado para refletir, planejar e conectar-se consigo mesmo.',
    dica: '💡 Dica: Pratique 5 minutos de meditação silenciosa para aprofundar este estado de paz.'
  }
};

function showEmotion(emotion) {
  const container = document.querySelector('.container');
  const emotionData = emotions[emotion];
  container.innerHTML = `
    <h2>${emotionData.titulo}</h2>
    <p class="emotion-explanation">${emotionData.explicacao}</p>
    <p class="emotion-tip">${emotionData.dica}</p>
    <button onclick="location.reload()">Voltar</button>
  `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
