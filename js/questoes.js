const questions = [
  {
    id: "LP-000",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A clareza na comunicação escrita é essencial para o bom atendimento ao cliente e para a imagem da instituição. Textos bem estruturados, objetivos e gramaticalmente corretos demonstram profissionalismo e respeito ao interlocutor.",
    instruction: "Com base no texto acima, assinale a alternativa correta:",
    alternatives: [
      { letter: "A", text: "A clareza na comunicação escrita é desejável, mas não influencia a imagem da instituição perante o cliente." },
      { letter: "B", text: "A correção gramatical, embora recomendável, não tem relação direta com o profissionalismo." },
      { letter: "C", text: "A boa estruturação de textos pode contribuir para o fortalecimento da imagem institucional." },
      { letter: "D", text: "O uso de linguagem rebuscada é o principal fator que garante a objetividade de um texto." },
      { letter: "E", text: "A comunicação escrita deve priorizar o uso de termos técnicos, mesmo que isso comprometa a clareza." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O texto afirma claramente que "textos bem estruturados, objetivos e gramaticalmente corretos demonstram profissionalismo e respeito ao interlocutor" e são "essenciais para a imagem da instituição".
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O texto estabelece uma relação direta entre a boa estruturação de textos e a imagem institucional, afirmando que textos bem estruturados são "essenciais para a imagem da instituição".
      `
    },
    comment: "Esta questão avalia a capacidade de compreensão textual, focando na identificação da ideia central do texto sobre comunicação escrita no ambiente corporativo. É fundamental identificar que o texto estabelece uma relação direta entre a qualidade da comunicação escrita e a imagem profissional da instituição."
  },
  {
    id: "LP-001",
    topic: "LP - Concordância Verbal",
    text: "A concordância verbal é um aspecto fundamental da língua portuguesa. Em uma frase, o verbo deve concordar em número e pessoa com o sujeito.",
    instruction: "Assinale a alternativa que apresenta a concordância verbal correta:",
    alternatives: [
      { letter: "A", text: "Os alunos estava estudando para a prova." },
      { letter: "B", text: "A equipe foram convocada para a reunião." },
      { letter: "C", text: "As crianças correm no parque todos os dias." },
      { letter: "D", text: "O grupo de amigos decidiu sair ontem à noite." },
      { letter: "E", text: "Os professores ensina com dedicação." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. Na frase "As crianças correm no parque todos os dias", o verbo "correm" concorda em número (plural) e pessoa (terceira) com o sujeito "As crianças".
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. A concordância verbal exige que o verbo esteja no plural para concordar com o sujeito "As crianças", o que ocorre apenas na alternativa C.
      `
    },
    comment: "Esta questão testa o conhecimento sobre concordância verbal, um pilar da gramática portuguesa. É essencial observar a relação entre sujeito e verbo em número e pessoa."
  },
  {
    id: "LP-002",
    topic: "LP - Regência Verbal",
    text: "No contexto profissional, a comunicação clara exige o uso correto dos verbos e suas regências. Por exemplo, o verbo 'assistir' pode ser transitivo direto ou indireto, dependendo do sentido.",
    instruction: "Assinale a alternativa com a regência verbal correta do verbo 'assistir':",
    alternatives: [
      { letter: "A", text: "Os funcionários assistiram o cliente com atenção." },
      { letter: "B", text: "Ela assistiu ao filme na televisão ontem." },
      { letter: "C", text: "O gerente assistiu a reunião sem participar." },
      { letter: "D", text: "Eles assistiram a palestra com entusiasmo." },
      { letter: "E", text: "Nós assistimos os documentos antes de assinar." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O verbo 'assistir', no sentido de ver ou presenciar, é transitivo indireto e exige a preposição 'a'. A frase "Ela assistiu ao filme na televisão ontem" está correta.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. O verbo 'assistir', no sentido de ver, exige a preposição 'a', como em "assistiu ao filme". Nas outras alternativas, há erros de regência, como o uso de 'assistir' como transitivo direto ou com preposições inadequadas.
      `
    },
    comment: "Esta questão avalia a regência verbal, um tema recorrente em concursos da Cesgranrio. É crucial entender o sentido do verbo e a preposição exigida."
  },
  {
    id: "LP-003",
    topic: "LP - Coesão e Coerência",
    text: "A coesão textual é garantida por elementos como pronomes, conjunções e sinônimos, que conectam as ideias de um texto. A ausência desses elementos pode comprometer a clareza.",
    instruction: "Assinale a alternativa que apresenta um elemento coesivo usado corretamente:",
    alternatives: [
      { letter: "A", text: "O banco lançou um novo serviço. Ele não foi bem recebido pelos clientes." },
      { letter: "B", text: "A reunião foi cancelada. Porque o gerente estava ausente." },
      { letter: "C", text: "Os funcionários foram treinados. Portanto, ninguém sabia como proceder." },
      { letter: "D", text: "O cliente fez uma reclamação. Esta foi resolvida rapidamente." },
      { letter: "E", text: "O sistema caiu. O que causou atrasos no atendimento." }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa A está correta. O pronome "Ele" retoma corretamente "um novo serviço", garantindo coesão textual.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. Apenas na alternativa A o elemento coesivo ("Ele") retoma o referente corretamente, mantendo a coesão. As demais apresentam problemas de coerência ou uso inadequado de conectivos.
      `
    },
    comment: "A Cesgranrio frequentemente testa a coesão textual, exigindo que o candidato identifique conectivos que mantenham a lógica e a clareza do texto."
  },
  {
    id: "LP-004",
    topic: "LP - Ortografia",
    text: "A escrita correta é essencial em documentos bancários, pois reflete a seriedade da instituição. Erros ortográficos podem comprometer a credibilidade.",
    instruction: "Assinale a alternativa com a grafia correta:",
    alternatives: [
      { letter: "A", text: "A excessão foi aprovada pelo gerente." },
      { letter: "B", text: "O documento foi analizado cuidadosamente." },
      { letter: "C", text: "A reunião está agendada para amanhã." },
      { letter: "D", text: "Houve uma cessessão de bens no contrato." },
      { letter: "E", text: "O cliente foi atendido com presteza." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. A palavra "agendada" está escrita corretamente, respeitando as regras ortográficas.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. As alternativas A ("excessão" deveria ser "exceção"), B ("analizado" deveria ser "analisado"), D ("cessessão" deveria be "cessão") e E (correta, mas apenas C é pedida) contêm erros ortográficos.
      `
    },
    comment: "Ortografia é um tema comum em provas da Cesgranrio, especialmente em palavras com grafias semelhantes, como 'exceção' e 'cessão'."
  },
  {
    id: "LP-005",
    topic: "LP - Pontuação",
    text: "A pontuação adequada garante a clareza e a correta interpretação de textos institucionais. O uso indevido de vírgulas, por exemplo, pode alterar o sentido da frase.",
    instruction: "Assinale a alternativa com pontuação correta:",
    alternatives: [
      { letter: "A", text: "O cliente, que fez a reclamação, foi atendido, rapidamente." },
      { letter: "B", text: "O gerente, elaborou o relatório, e o enviou." },
      { letter: "C", text: "O sistema, caiu e causou atrasos." },
      { letter: "D", text: "Os funcionários, treinados, resolveram o problema." },
      { letter: "E", text: "A reunião foi marcada, para amanhã, às 10 horas." }
    ],
    correctAnswer: "D",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa D está correta. As vírgulas isolam corretamente o termo explicativo "treinados", mantendo a clareza da frase.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>D</strong>. As demais alternativas apresentam erros de pontuação, como vírgulas desnecessárias ou que alteram o sentido.
      `
    },
    comment: "A Cesgranrio valoriza a pontuação correta, especialmente em contextos explicativos, onde vírgulas são usadas para isolar informações acessórias."
  },
  {
    id: "LP-006",
    topic: "LP - Semântica",
    text: "No contexto bancário, o uso de palavras com sentidos precisos evita mal-entendidos. Por exemplo, 'lucro' e 'rendimento' têm significados distintos.",
    instruction: "Assinale a alternativa com o uso correto do termo destacado:",
    alternatives: [
      { letter: "A", text: "O banco obteve um *lucro* elevado no último trimestre." },
      { letter: "B", text: "O cliente recebeu um *lucro* de 5% em seu investimento." },
      { letter: "C", text: "O *rendimento* da empresa foi reinvestido em ações." },
      { letter: "D", text: "O *lucro* do fundo foi aplicado em novos projetos." },
      { letter: "E", text: "O *rendimento* bruto do banco superou as expectativas." }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa A está correta. O termo "lucro" é usado adequadamente para indicar o ganho financeiro da instituição.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. "Lucro" refere-se ao ganho da instituição, enquanto "rendimento" é mais adequado para investimentos de clientes.
      `
    },
    comment: "Questões de semântica da Cesgranrio exigem atenção ao contexto e ao significado preciso das palavras."
  },
  {
    id: "LP-007",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A segurança da informação é crucial para proteger dados sensíveis dos clientes, garantindo a confiança na instituição financeira.",
    instruction: "Qual é a ideia central do texto?",
    alternatives: [
      { letter: "A", text: "A proteção de dados é opcional em instituições financeiras." },
      { letter: "B", text: "A segurança da informação é essencial para a confiança dos clientes." },
      { letter: "C", text: "Os dados dos clientes não precisam de proteção." },
      { letter: "D", text: "A confiança dos clientes é irrelevante para o banco." },
      { letter: "E", text: "A segurança da informação é apenas uma formalidade." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O texto destaca a importância da segurança da informação para garantir a confiança dos clientes.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. O texto enfatiza a relação entre segurança da informação e confiança, o que é negado ou distorcido nas demais alternativas.
      `
    },
    comment: "A Cesgranrio frequentemente cobra a identificação da ideia central em textos curtos, exigindo atenção ao foco principal."
  },
  {
    id: "LP-008",
    topic: "LP - Concordância Nominal",
    text: "A concordância nominal garante que adjetivos e outros termos concordem com o substantivo em gênero e número.",
    instruction: "Assinale a alternativa com concordância nominal correta:",
    alternatives: [
      { letter: "A", text: "As propostas apresentado foram rejeitadas." },
      { letter: "B", text: "Os relatórios completo foram entregues." },
      { letter: "C", text: "As contas bancárias foram analisadas minuciosamente." },
      { letter: "D", text: "Os documentos necessários estavam disponíveis." },
      { letter: "E", text: "A reunião longa durou horas." }
    ],
    correctAnswer: "D",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa D está correta. O adjetivo "necessários" concorda em gênero (masculino) e número (plural) com "documentos".
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>D</strong>. As demais alternativas apresentam erros de concordância nominal, como gênero ou número incorretos.
      `
    },
    comment: "A Cesgranrio testa concordância nominal em contextos formais, como documentos bancários, exigindo atenção aos detalhes."
  },
  {
    id: "LP-009",
    topic: "LP - Crase",
    text: "O uso correto da crase é essencial em comunicações formais, especialmente em documentos oficiais.",
    instruction: "Assinale a alternativa com o uso correto da crase:",
    alternatives: [
      { letter: "A", text: "O gerente encaminhou o relatório à diretoria." },
      { letter: "B", text: "A reunião foi adiada à pedido dos funcionários." },
      { letter: "C", text: "O cliente foi atendido à distância." },
      { letter: "D", text: "Os dados foram enviados à outro setor." },
      { letter: "E", text: "A proposta foi apresentada à ele." }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa A está correta. A crase é usada antes de "diretoria", pois o verbo "encaminhar" exige a preposição "a" e "diretoria" é um substantivo feminino.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. As demais alternativas apresentam erros, como crase indevida ou ausência dela onde necessária.
      `
    },
    comment: "A crase é um tema recorrente em provas da Cesgranrio, exigindo conhecimento das regras de regência e gênero."
  },
  {
    id: "LP-010",
    topic: "LP - Pronomes",
    text: "Os pronomes pessoais devem ser usados corretamente para evitar ambiguidades em textos formais.",
    instruction: "Assinale a alternativa com o uso correto do pronome:",
    alternatives: [
      { letter: "A", text: "O gerente entregou-lhe o relatório." },
      { letter: "B", text: "Eu vi ele na reunião." },
      { letter: "C", text: "O cliente falou com eu sobre a proposta." },
      { letter: "D", text: "Nós entregamos o documento à ele." },
      { letter: "E", text: "Ela conversou com mim ontem." }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa A está correta. O pronome "lhe" é usado corretamente como complemento do verbo "entregar" no caso dativo.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. As demais alternativas usam pronomes retos em vez de oblíquos ou vice-versa, violando as regras de colocação.
      `
    },
    comment: "Questões de pronomes da Cesgranrio testam o uso correto de casos reto e oblíquo em contextos formais."
  },
  {
    id: "LP-011",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A inovação tecnológica no setor bancário melhora a eficiência, mas exige treinamento contínuo dos funcionários.",
    instruction: "Qual é a relação destacada no texto?",
    alternatives: [
      { letter: "A", text: "A inovação tecnológica elimina a necessidade de treinamento." },
      { letter: "B", text: "O treinamento contínuo é opcional no setor bancário." },
      { letter: "C", text: "A eficiência do setor bancário depende apenas da tecnologia." },
      { letter: "D", text: "A inovação tecnológica e o treinamento são complementares." },
      { letter: "E", text: "Os funcionários não se beneficiam da inovação tecnológica." }
    ],
    correctAnswer: "D",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa D está correta. O texto indica que a inovação tecnológica melhora a eficiência, mas exige treinamento, sugerindo complementaridade.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>D</strong>. O texto destaca a relação entre inovação e treinamento, não sua exclusão ou irrelevância.
      `
    },
    comment: "A Cesgranrio testa a compreensão de relações lógicas em textos curtos, exigindo atenção ao sentido implícito."
  },
  {
    id: "LP-012",
    topic: "LP - Verbos",
    text: "O uso correto dos tempos verbais é essencial para a clareza em comunicações formais, como relatórios bancários.",
    instruction: "Assinale a alternativa com o tempo verbal correto:",
    alternatives: [
      { letter: "A", text: "O banco implementará o sistema amanhã." },
      { letter: "B", text: "O gerente revisou o relatório ontem." },
      { letter: "C", text: "Os clientes será atendidos amanhã." },
      { letter: "D", text: "A reunião fora marcada para hoje." },
      { letter: "E", text: "O sistema estava funcionando ontem." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O verbo "revisou" está no pretérito perfeito, adequado ao contexto de uma ação concluída no passado.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. As demais alternativas apresentam erros de conjugação ou inadequação ao contexto.
      `
    },
    comment: "A Cesgranrio cobra o uso correto de tempos verbais em contextos formais, como relatórios e comunicações institucionais."
  },
  {
    id: "LP-013",
    topic: "LP - Coesão e Coerência",
    text: "O uso de conectivos adequados garante a fluidez e a lógica em textos institucionais, como comunicados internos.",
    instruction: "Assinale a alternativa com o conectivo usado corretamente:",
    alternatives: [
      { letter: "A", text: "O sistema caiu, porque o atendimento foi suspenso." },
      { letter: "B", text: "O treinamento foi adiado, portanto o gerente estava ocupado." },
      { letter: "C", text: "O cliente reclamou, mas a solução foi apresentada." },
      { letter: "D", text: "A reunião foi longa, embora ninguém participou." },
      { letter: "E", text: "O relatório foi concluído, e ninguém revisou." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O conectivo "mas" estabelece corretamente uma relação de oposição entre a reclamação e a solução.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. As demais alternativas apresentam conectivos que não refletem a lógica do contexto.
      `
    },
    comment: "Questões de coesão da Cesgranrio exigem a escolha de conectivos que mantenham a lógica textual."
  },
  {
    id: "LP-014",
    topic: "LP - Ortografia",
    text: "A ortografia correta é essencial para a credibilidade de documentos bancários, especialmente em comunicações oficiais.",
    instruction: "Assinale a alternativa com a grafia correta:",
    alternatives: [
      { letter: "A", text: "O cliente solicitou uma anállise detalhada." },
      { letter: "B", text: "A proposta foi aceita sem ressalvas." },
      { letter: "C", text: "O gerente fez uma objeção à decisão." },
      { letter: "D", text: "A reunião foi conduzida com suceso." },
      { letter: "E", text: "O documento foi revisado com precisão." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A palavra "ressalvas" está escrita corretamente.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. As demais alternativas contêm erros ortográficos, como "anállise" (correto: análise) ou "suceso" (correto: sucesso).
      `
    },
    comment: "A Cesgranrio testa palavras com grafias próximas, exigindo atenção a detalhes ortográficos."
  },
  {
    id: "LP-015",
    topic: "LP - Pontuação",
    text: "A vírgula é usada para separar elementos explicativos ou para indicar pausas necessárias à compreensão do texto.",
    instruction: "Assinale a alternativa com pontuação correta:",
    alternatives: [
      { letter: "A", text: "O cliente, insatisfeito, fez uma reclamação." },
      { letter: "B", text: "O gerente, revisou o documento, e assinou." },
      { letter: "C", text: "Os funcionários, treinados, não sabiam o que fazer." },
      { letter: "D", text: "A reunião, longa, terminou tarde." },
      { letter: "E", text: "O sistema, caiu, ontem à noite." }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa A está correta. As vírgulas isolam corretamente o termo explicativo "insatisfeito".
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. As demais alternativas apresentam vírgulas desnecessárias ou que comprometem o sentido.
      `
    },
    comment: "A Cesgranrio cobra o uso correto da vírgula em contextos explicativos, comuns em textos institucionais."
  },
  {
    id: "LP-016",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A ética profissional no setor bancário exige transparência e respeito às normas regulatórias, garantindo a confiança dos clientes.",
    instruction: "Qual é o foco principal do texto?",
    alternatives: [
      { letter: "A", text: "A transparência é opcional no setor bancário." },
      { letter: "B", text: "As normas regulatórias são irrelevantes para a ética." },
      { letter: "C", text: "A ética profissional é essencial para a confiança dos clientes." },
      { letter: "D", text: "A confiança dos clientes não depende da ética." },
      { letter: "E", text: "A ética profissional é apenas uma formalidade." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O texto destaca a importância da ética profissional para a confiança dos clientes.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O texto enfatiza a relação entre ética, transparência e confiança, o que é negado nas demais alternativas.
      `
    },
    comment: "Questões da Cesgranrio sobre interpretação de texto exigem a identificação do foco principal, muitas vezes ligado a valores institucionais."
  },
  {
    id: "LP-017",
    topic: "LP - Regência Verbal",
    text: "O verbo 'implicar' pode ser transitivo direto ou indireto, dependendo do contexto, exigindo atenção ao seu uso em comunicações formais.",
    instruction: "Assinale a alternativa com a regência correta do verbo 'implicar':",
    alternatives: [
      { letter: "A", text: "A decisão implicou em aumento de custos." },
      { letter: "B", text: "O erro implicou em atrasos no projeto." },
      { letter: "C", text: "A nova política implicou mudanças significativas." },
      { letter: "D", text: "O gerente implicou à equipe novas responsabilidades." },
      { letter: "E", text: "O sistema implicou à falhas no atendimento." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O verbo "implicar", no sentido de resultar, é transitivo direto e não exige preposição.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O verbo "implicar" não exige preposição "em" ou "a" nesse contexto, como ocorre nas demais alternativas.
      `
    },
    comment: "A Cesgranrio testa a regência verbal em verbos polissêmicos, exigindo atenção ao contexto."
  },
  {
    id: "LP-018",
    topic: "LP - Pronomes",
    text: "A colocação pronominal em textos formais segue regras específicas, especialmente em contextos com verbos no infinitivo ou gerúndio.",
    instruction: "Assinale a alternativa com a colocação pronominal correta:",
    alternatives: [
      { letter: "A", text: "Quero me apresentar ao cliente." },
      { letter: "B", text: "O gerente quer apresentar-me ao cliente." },
      { letter: "C", text: "Estamos nos preparando para a reunião." },
      { letter: "D", text: "Vamos preparar-nos para o evento." },
      { letter: "E", text: "O cliente deseja encontrar-se com ele." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O pronome "nos" está corretamente posicionado antes do gerúndio "preparando" em um contexto formal.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. As demais alternativas apresentam colocações indevidas em contextos formais.
      `
    },
    comment: "A Cesgranrio cobra a colocação pronominal em contextos formais, exigindo atenção às regras de próclise, mesóclise e ênclise."
  },
  {
    id: "LP-019",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A digitalização dos serviços bancários trouxe agilidade, mas também desafios relacionados à inclusão digital e à segurança.",
    instruction: "Qual é o principal desafio mencionado no texto?",
    alternatives: [
      { letter: "A", text: "A agilidade dos serviços bancários." },
      { letter: "B", text: "A inclusão digital e a segurança." },
      { letter: "C", text: "A redução dos custos operacionais." },
      { letter: "D", text: "A substituição de funcionários por tecnologia." },
      { letter: "E", text: "A falta de treinamento dos funcionários." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O texto menciona explicitamente a inclusão digital e a segurança como desafios da digitalização.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. As demais alternativas não refletem os desafios mencionados no texto.
      `
    },
    comment: "A Cesgranrio testa a identificação de informações explícitas em textos, exigindo atenção aos detalhes."
  }
];

const state = questions.map(() => ({
  selectedAnswer: null,
  answerShown: false
}));
function renderQuestions() {
  const container = document.getElementById('questionContainer');
  container.innerHTML = questions.map((question, index) => `
        <div class="question-container" id="question-${index}">
            <div class="question-header">
                <div class="question-number">${question.id}</div>
                <div class="badges">
                    <span class="badge badge-concurso">Concurso: Banco do Brasil</span>
                    <span class="badge badge-area">Área: Conhecimentos Bancários</span>
                    <span class="badge badge-cargo">Cargo: Escriturário</span>
                </div>
            </div>
            
            <div class="topic-tag">${question.topic}</div>
            
            <div class="instruction">Leia o trecho a seguir:</div>
            
            <div class="text-base">${question.text}</div>
            
            <div class="instruction">${question.instruction}</div>
            
            <div class="alternatives">
                ${question.alternatives.map(alt => `
                    <div class="alternative alternative-${alt.letter.toLowerCase()}" data-letter="${alt.letter}" data-question-index="${index}">
                        <div class="alternative-letter">${alt.letter}</div>
                        <div class="alternative-text">${alt.text}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="answer-section">
                <div class="answer-box" id="answerBox-${index}">
                    <span id="answerText-${index}">Selecione uma alternativa</span>
                </div>
                <button class="btn btn-answer" onclick="showAnswer(${index})">✓ Resposta</button>
                <button class="btn btn-comment" onclick="showComment(${index})">💬 Comentário</button>
            </div>
            
            <div class="answer-result" id="answerResult-${index}">
                <div class="answer-explanation" id="answerExplanation-${index}">${question.explanation.correct}</div>
            </div>
            
            <div class="comment-section" id="commentSection-${index}">
                <div class="comment-title">Comentário do Professor</div>
                <div class="comment-text">${question.comment}</div>
            </div>
        </div>
    `).join('');

  // Add click event listeners to alternatives
  document.querySelectorAll('.alternative').forEach(alternative => {
    alternative.addEventListener('click', () => {
      const questionIndex = parseInt(alternative.getAttribute('data-question-index'));
      const letter = alternative.getAttribute('data-letter');
      selectAlternative(questionIndex, letter);
    });
  });
}

function selectAlternative(questionIndex, letter) {
  const questionState = state[questionIndex];
  const alternatives = document.querySelectorAll(`#question-${questionIndex} .alternative`);

  alternatives.forEach(alt => {
    alt.style.backgroundColor = '';
    alt.style.border = '';
  });

  const selectedAlt = document.querySelector(`#question-${questionIndex} .alternative-${letter.toLowerCase()}`);
  if (selectedAlt) {
    selectedAlt.style.backgroundColor = 'rgba(139, 76, 187, 0.2)';
    selectedAlt.style.border = '2px solid var(--border-primary)';
  }

  questionState.selectedAnswer = letter;

  const answerBox = document.getElementById(`answerBox-${index}`);
  const answerText = document.getElementById(`answerText-${index}`);

  if (questionState.selectedAnswer) {
    answerText.textContent = `Alternativa selecionada: ${letter}`;
    answerBox.style.borderColor = 'var(--border-primary)';
    answerBox.style.backgroundColor = 'rgba(139, 76, 187, 0.05)';
  }
}

function showAnswer(questionIndex) {
  const questionState = state[questionIndex];
  const question = questions[questionIndex];
  const answerResult = document.getElementById(`answerResult-${questionIndex}`);
  const explanation = document.getElementById(`answerExplanation-${questionIndex}`);

  if (questionState.selectedAnswer) {
    answerResult.style.display = 'block';
    if (questionState.selectedAnswer === question.correctAnswer) {
      answerResult.className = 'answer-result answer-correct';
      explanation.innerHTML = question.explanation.correct;
    } else {
      answerResult.className = 'answer-result answer-incorrect';
      explanation.innerHTML = question.explanation.incorrect;
    }
  } else {
    alert('Por favor, selecione uma alternativa antes de ver a resposta.');
  }

  questionState.answerShown = true;
}

function showComment(questionIndex) {
  const commentSection = document.getElementById(`commentSection-${questionIndex}`);
  commentSection.style.display = commentSection.style.display === 'none' || commentSection.style.display === '' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuestions();
});