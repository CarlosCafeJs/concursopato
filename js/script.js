// const questions = [
//   {
//     id: "LP-000",
//     topic: "LP - Compreensão e Interpretação de Texto",
//     text: "A clareza na comunicação escrita é essencial para o bom atendimento ao cliente e para a imagem da instituição. Textos bem estruturados, objetivos e gramaticalmente corretos demonstram profissionalismo e respeito ao interlocutor.",
//     instruction: "Com base no texto acima, assinale a alternativa correta:",
//     alternatives: [
//       { letter: "A", text: "A clareza na comunicação escrita é desejável, mas não influencia a imagem da instituição perante o cliente." },
//       { letter: "B", text: "A correção gramatical, embora recomendável, não tem relação direta com o profissionalismo." },
//       { letter: "C", text: "A boa estruturação de textos pode contribuir para o fortalecimento da imagem institucional." },
//       { letter: "D", text: "O uso de linguagem rebuscada é o principal fator que garante a objetividade de um texto." },
//       { letter: "E", text: "A comunicação escrita deve priorizar o uso de termos técnicos, mesmo que isso comprometa a clareza." }
//     ],
//     correctAnswer: "C",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa C está correta. O texto afirma claramente que "textos bem estruturados, objetivos e gramaticalmente corretos demonstram profissionalismo e respeito ao interlocutor" e são "essenciais para a imagem da instituição".
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>C</strong>. O texto estabelece uma relação direta entre a boa estruturação de textos e a imagem institucional, afirmando que textos bem estruturados são "essenciais para a imagem da instituição".
//       `
//     },
//     comment: "Esta questão avalia a capacidade de compreensão textual, focando na identificação da ideia central do texto sobre comunicação escrita no ambiente corporativo. É fundamental identificar que o texto estabelece uma relação direta entre a qualidade da comunicação escrita e a imagem profissional da instituição."
//   },
//   {
//     id: "LP-001",
//     topic: "LP - Concordância Verbal",
//     text: "A concordância verbal é um aspecto fundamental da língua portuguesa. Em uma frase, o verbo deve concordar em número e pessoa com o sujeito.",
//     instruction: "Assinale a alternativa que apresenta a concordância verbal correta:",
//     alternatives: [
//       { letter: "A", text: "Os alunos estava estudando para a prova." },
//       { letter: "B", text: "A equipe foram convocada para a reunião." },
//       { letter: "C", text: "As crianças correm no parque todos os dias." },
//       { letter: "D", text: "O grupo de amigos decidiu sair ontem à noite." },
//       { letter: "E", text: "Os professores ensina com dedicação." }
//     ],
//     correctAnswer: "C",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa C está correta. Na frase "As crianças correm no parque todos os dias", o verbo "correm" concorda em número (plural) e pessoa (terceira) com o sujeito "As crianças".
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>C</strong>. A concordância verbal exige que o verbo esteja no plural para concordar com o sujeito "As crianças", o que ocorre apenas na alternativa C.
//       `
//     },
//     comment: "Esta questão testa o conhecimento sobre concordância verbal, um pilar da gramática portuguesa. É essencial observar a relação entre sujeito e verbo em número e pessoa."
//   },
//   {
//     id: "LP-002",
//     topic: "LP - Regência Verbal",
//     text: "No contexto profissional, a comunicação clara exige o uso correto dos verbos e suas regências. Por exemplo, o verbo 'assistir' pode ser transitivo direto ou indireto, dependendo do sentido.",
//     instruction: "Assinale a alternativa com a regência verbal correta do verbo 'assistir':",
//     alternatives: [
//       { letter: "A", text: "Os funcionários assistiram o cliente com atenção." },
//       { letter: "B", text: "Ela assistiu ao filme na televisão ontem." },
//       { letter: "C", text: "O gerente assistiu a reunião sem participar." },
//       { letter: "D", text: "Eles assistiram a palestra com entusiasmo." },
//       { letter: "E", text: "Nós assistimos os documentos antes de assinar." }
//     ],
//     correctAnswer: "B",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa B está correta. O verbo 'assistir', no sentido de ver ou presenciar, é transitivo indireto e exige a preposição 'a'. A frase "Ela assistiu ao filme na televisão ontem" está correta.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>B</strong>. O verbo 'assistir', no sentido de ver, exige a preposição 'a', como em "assistiu ao filme". Nas outras alternativas, há erros de regência, como o uso de 'assistir' como transitivo direto ou com preposições inadequadas.
//       `
//     },
//     comment: "Esta questão avalia a regência verbal, um tema recorrente em concursos da Cesgranrio. É crucial entender o sentido do verbo e a preposição exigida."
//   },
//   {
//     id: "LP-003",
//     topic: "LP - Coesão e Coerência",
//     text: "A coesão textual é garantida por elementos como pronomes, conjunções e sinônimos, que conectam as ideias de um texto. A ausência desses elementos pode comprometer a clareza.",
//     instruction: "Assinale a alternativa que apresenta um elemento coesivo usado corretamente:",
//     alternatives: [
//       { letter: "A", text: "O banco lançou um novo serviço. Ele não foi bem recebido pelos clientes." },
//       { letter: "B", text: "A reunião foi cancelada. Porque o gerente estava ausente." },
//       { letter: "C", text: "Os funcionários foram treinados. Portanto, ninguém sabia como proceder." },
//       { letter: "D", text: "O cliente fez uma reclamação. Esta foi resolvida rapidamente." },
//       { letter: "E", text: "O sistema caiu. O que causou atrasos no atendimento." }
//     ],
//     correctAnswer: "A",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa A está correta. O pronome "Ele" retoma corretamente "um novo serviço", garantindo coesão textual.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>A</strong>. Apenas na alternativa A o elemento coesivo ("Ele") retoma o referente corretamente, mantendo a coesão. As demais apresentam problemas de coerência ou uso inadequado de conectivos.
//       `
//     },
//     comment: "A Cesgranrio frequentemente testa a coesão textual, exigindo que o candidato identifique conectivos que mantenham a lógica e a clareza do texto."
//   },
//   {
//     id: "LP-004",
//     topic: "LP - Ortografia",
//     text: "A escrita correta é essencial em documentos bancários, pois reflete a seriedade da instituição. Erros ortográficos podem comprometer a credibilidade.",
//     instruction: "Assinale a alternativa com a grafia correta:",
//     alternatives: [
//       { letter: "A", text: "A excessão foi aprovada pelo gerente." },
//       { letter: "B", text: "O documento foi analizado cuidadosamente." },
//       { letter: "C", text: "A reunião está agendada para amanhã." },
//       { letter: "D", text: "Houve uma cessessão de bens no contrato." },
//       { letter: "E", text: "O cliente foi atendido com presteza." }
//     ],
//     correctAnswer: "C",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa C está correta. A palavra "agendada" está escrita corretamente, respeitando as regras ortográficas.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>C</strong>. As alternativas A ("excessão" deveria ser "exceção"), B ("analizado" deveria ser "analisado"), D ("cessessão" deveria be "cessão") e E (correta, mas apenas C é pedida) contêm erros ortográficos.
//       `
//     },
//     comment: "Ortografia é um tema comum em provas da Cesgranrio, especialmente em palavras com grafias semelhantes, como 'exceção' e 'cessão'."
//   },
//   {
//     id: "LP-005",
//     topic: "LP - Pontuação",
//     text: "A pontuação adequada garante a clareza e a correta interpretação de textos institucionais. O uso indevido de vírgulas, por exemplo, pode alterar o sentido da frase.",
//     instruction: "Assinale a alternativa com pontuação correta:",
//     alternatives: [
//       { letter: "A", text: "O cliente, que fez a reclamação, foi atendido, rapidamente." },
//       { letter: "B", text: "O gerente, elaborou o relatório, e o enviou." },
//       { letter: "C", text: "O sistema, caiu e causou atrasos." },
//       { letter: "D", text: "Os funcionários, treinados, resolveram o problema." },
//       { letter: "E", text: "A reunião foi marcada, para amanhã, às 10 horas." }
//     ],
//     correctAnswer: "D",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa D está correta. As vírgulas isolam corretamente o termo explicativo "treinados", mantendo a clareza da frase.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>D</strong>. As demais alternativas apresentam erros de pontuação, como vírgulas desnecessárias ou que alteram o sentido.
//       `
//     },
//     comment: "A Cesgranrio valoriza a pontuação correta, especialmente em contextos explicativos, onde vírgulas são usadas para isolar informações acessórias."
//   },
//   {
//     id: "LP-006",
//     topic: "LP - Semântica",
//     text: "No contexto bancário, o uso de palavras com sentidos precisos evita mal-entendidos. Por exemplo, 'lucro' e 'rendimento' têm significados distintos.",
//     instruction: "Assinale a alternativa com o uso correto do termo destacado:",
//     alternatives: [
//       { letter: "A", text: "O banco obteve um *lucro* elevado no último trimestre." },
//       { letter: "B", text: "O cliente recebeu um *lucro* de 5% em seu investimento." },
//       { letter: "C", text: "O *rendimento* da empresa foi reinvestido em ações." },
//       { letter: "D", text: "O *lucro* do fundo foi aplicado em novos projetos." },
//       { letter: "E", text: "O *rendimento* bruto do banco superou as expectativas." }
//     ],
//     correctAnswer: "A",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa A está correta. O termo "lucro" é usado adequadamente para indicar o ganho financeiro da instituição.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>A</strong>. "Lucro" refere-se ao ganho da instituição, enquanto "rendimento" é mais adequado para investimentos de clientes.
//       `
//     },
//     comment: "Questões de semântica da Cesgranrio exigem atenção ao contexto e ao significado preciso das palavras."
//   },
//   {
//     id: "LP-007",
//     topic: "LP - Compreensão e Interpretação de Texto",
//     text: "A segurança da informação é crucial para proteger dados sensíveis dos clientes, garantindo a confiança na instituição financeira.",
//     instruction: "Qual é a ideia central do texto?",
//     alternatives: [
//       { letter: "A", text: "A proteção de dados é opcional em instituições financeiras." },
//       { letter: "B", text: "A segurança da informação é essencial para a confiança dos clientes." },
//       { letter: "C", text: "Os dados dos clientes não precisam de proteção." },
//       { letter: "D", text: "A confiança dos clientes é irrelevante para o banco." },
//       { letter: "E", text: "A segurança da informação é apenas uma formalidade." }
//     ],
//     correctAnswer: "B",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa B está correta. O texto destaca a importância da segurança da informação para garantir a confiança dos clientes.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>B</strong>. O texto enfatiza a relação entre segurança da informação e confiança, o que é negado ou distorcido nas demais alternativas.
//       `
//     },
//     comment: "A Cesgranrio frequentemente cobra a identificação da ideia central em textos curtos, exigindo atenção ao foco principal."
//   },
//   {
//     id: "LP-008",
//     topic: "LP - Concordância Nominal",
//     text: "A concordância nominal garante que adjetivos e outros termos concordem com o substantivo em gênero e número.",
//     instruction: "Assinale a alternativa com concordância nominal correta:",
//     alternatives: [
//       { letter: "A", text: "As propostas apresentado foram rejeitadas." },
//       { letter: "B", text: "Os relatórios completo foram entregues." },
//       { letter: "C", text: "As contas bancárias foram analisadas minuciosamente." },
//       { letter: "D", text: "Os documentos necessários estavam disponíveis." },
//       { letter: "E", text: "A reunião longa durou horas." }
//     ],
//     correctAnswer: "D",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa D está correta. O adjetivo "necessários" concorda em gênero (masculino) e número (plural) com "documentos".
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>D</strong>. As demais alternativas apresentam erros de concordância nominal, como gênero ou número incorretos.
//       `
//     },
//     comment: "A Cesgranrio testa concordância nominal em contextos formais, como documentos bancários, exigindo atenção aos detalhes."
//   },
//   {
//     id: "LP-009",
//     topic: "LP - Crase",
//     text: "O uso correto da crase é essencial em comunicações formais, especialmente em documentos oficiais.",
//     instruction: "Assinale a alternativa com o uso correto da crase:",
//     alternatives: [
//       { letter: "A", text: "O gerente encaminhou o relatório à diretoria." },
//       { letter: "B", text: "A reunião foi adiada à pedido dos funcionários." },
//       { letter: "C", text: "O cliente foi atendido à distância." },
//       { letter: "D", text: "Os dados foram enviados à outro setor." },
//       { letter: "E", text: "A proposta foi apresentada à ele." }
//     ],
//     correctAnswer: "A",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa A está correta. A crase é usada antes de "diretoria", pois o verbo "encaminhar" exige a preposição "a" e "diretoria" é um substantivo feminino.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>A</strong>. As demais alternativas apresentam erros, como crase indevida ou ausência dela onde necessária.
//       `
//     },
//     comment: "A crase é um tema recorrente em provas da Cesgranrio, exigindo conhecimento das regras de regência e gênero."
//   },
//   {
//     id: "LP-010",
//     topic: "LP - Pronomes",
//     text: "Os pronomes pessoais devem ser usados corretamente para evitar ambiguidades em textos formais.",
//     instruction: "Assinale a alternativa com o uso correto do pronome:",
//     alternatives: [
//       { letter: "A", text: "O gerente entregou-lhe o relatório." },
//       { letter: "B", text: "Eu vi ele na reunião." },
//       { letter: "C", text: "O cliente falou com eu sobre a proposta." },
//       { letter: "D", text: "Nós entregamos o documento à ele." },
//       { letter: "E", text: "Ela conversou com mim ontem." }
//     ],
//     correctAnswer: "A",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa A está correta. O pronome "lhe" é usado corretamente como complemento do verbo "entregar" no caso dativo.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>A</strong>. As demais alternativas usam pronomes retos em vez de oblíquos ou vice-versa, violando as regras de colocação.
//       `
//     },
//     comment: "Questões de pronomes da Cesgranrio testam o uso correto de casos reto e oblíquo em contextos formais."
//   },
//   {
//     id: "LP-011",
//     topic: "LP - Compreensão e Interpretação de Texto",
//     text: "A inovação tecnológica no setor bancário melhora a eficiência, mas exige treinamento contínuo dos funcionários.",
//     instruction: "Qual é a relação destacada no texto?",
//     alternatives: [
//       { letter: "A", text: "A inovação tecnológica elimina a necessidade de treinamento." },
//       { letter: "B", text: "O treinamento contínuo é opcional no setor bancário." },
//       { letter: "C", text: "A eficiência do setor bancário depende apenas da tecnologia." },
//       { letter: "D", text: "A inovação tecnológica e o treinamento são complementares." },
//       { letter: "E", text: "Os funcionários não se beneficiam da inovação tecnológica." }
//     ],
//     correctAnswer: "D",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa D está correta. O texto indica que a inovação tecnológica melhora a eficiência, mas exige treinamento, sugerindo complementaridade.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>D</strong>. O texto destaca a relação entre inovação e treinamento, não sua exclusão ou irrelevância.
//       `
//     },
//     comment: "A Cesgranrio testa a compreensão de relações lógicas em textos curtos, exigindo atenção ao sentido implícito."
//   },
//   {
//     id: "LP-012",
//     topic: "LP - Verbos",
//     text: "O uso correto dos tempos verbais é essencial para a clareza em comunicações formais, como relatórios bancários.",
//     instruction: "Assinale a alternativa com o tempo verbal correto:",
//     alternatives: [
//       { letter: "A", text: "O banco implementará o sistema amanhã." },
//       { letter: "B", text: "O gerente revisou o relatório ontem." },
//       { letter: "C", text: "Os clientes será atendidos amanhã." },
//       { letter: "D", text: "A reunião fora marcada para hoje." },
//       { letter: "E", text: "O sistema estava funcionando ontem." }
//     ],
//     correctAnswer: "B",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa B está correta. O verbo "revisou" está no pretérito perfeito, adequado ao contexto de uma ação concluída no passado.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>B</strong>. As demais alternativas apresentam erros de conjugação ou inadequação ao contexto.
//       `
//     },
//     comment: "A Cesgranrio cobra o uso correto de tempos verbais em contextos formais, como relatórios e comunicações institucionais."
//   },
//   {
//     id: "LP-013",
//     topic: "LP - Coesão e Coerência",
//     text: "O uso de conectivos adequados garante a fluidez e a lógica em textos institucionais, como comunicados internos.",
//     instruction: "Assinale a alternativa com o conectivo usado corretamente:",
//     alternatives: [
//       { letter: "A", text: "O sistema caiu, porque o atendimento foi suspenso." },
//       { letter: "B", text: "O treinamento foi adiado, portanto o gerente estava ocupado." },
//       { letter: "C", text: "O cliente reclamou, mas a solução foi apresentada." },
//       { letter: "D", text: "A reunião foi longa, embora ninguém participou." },
//       { letter: "E", text: "O relatório foi concluído, e ninguém revisou." }
//     ],
//     correctAnswer: "C",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa C está correta. O conectivo "mas" estabelece corretamente uma relação de oposição entre a reclamação e a solução.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>C</strong>. As demais alternativas apresentam conectivos que não refletem a lógica do contexto.
//       `
//     },
//     comment: "Questões de coesão da Cesgranrio exigem a escolha de conectivos que mantenham a lógica textual."
//   },
//   {
//     id: "LP-014",
//     topic: "LP - Ortografia",
//     text: "A ortografia correta é essencial para a credibilidade de documentos bancários, especialmente em comunicações oficiais.",
//     instruction: "Assinale a alternativa com a grafia correta:",
//     alternatives: [
//       { letter: "A", text: "O cliente solicitou uma anállise detalhada." },
//       { letter: "B", text: "A proposta foi aceita sem ressalvas." },
//       { letter: "C", text: "O gerente fez uma objeção à decisão." },
//       { letter: "D", text: "A reunião foi conduzida com suceso." },
//       { letter: "E", text: "O documento foi revisado com precisão." }
//     ],
//     correctAnswer: "B",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa B está correta. A palavra "ressalvas" está escrita corretamente.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>B</strong>. As demais alternativas contêm erros ortográficos, como "anállise" (correto: análise) ou "suceso" (correto: sucesso).
//       `
//     },
//     comment: "A Cesgranrio testa palavras com grafias próximas, exigindo atenção a detalhes ortográficos."
//   },
//   {
//     id: "LP-015",
//     topic: "LP - Pontuação",
//     text: "A vírgula é usada para separar elementos explicativos ou para indicar pausas necessárias à compreensão do texto.",
//     instruction: "Assinale a alternativa com pontuação correta:",
//     alternatives: [
//       { letter: "A", text: "O cliente, insatisfeito, fez uma reclamação." },
//       { letter: "B", text: "O gerente, revisou o documento, e assinou." },
//       { letter: "C", text: "Os funcionários, treinados, não sabiam o que fazer." },
//       { letter: "D", text: "A reunião, longa, terminou tarde." },
//       { letter: "E", text: "O sistema, caiu, ontem à noite." }
//     ],
//     correctAnswer: "A",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa A está correta. As vírgulas isolam corretamente o termo explicativo "insatisfeito".
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>A</strong>. As demais alternativas apresentam vírgulas desnecessárias ou que comprometem o sentido.
//       `
//     },
//     comment: "A Cesgranrio cobra o uso correto da vírgula em contextos explicativos, comuns em textos institucionais."
//   },
//   {
//     id: "LP-016",
//     topic: "LP - Compreensão e Interpretação de Texto",
//     text: "A ética profissional no setor bancário exige transparência e respeito às normas regulatórias, garantindo a confiança dos clientes.",
//     instruction: "Qual é o foco principal do texto?",
//     alternatives: [
//       { letter: "A", text: "A transparência é opcional no setor bancário." },
//       { letter: "B", text: "As normas regulatórias são irrelevantes para a ética." },
//       { letter: "C", text: "A ética profissional é essencial para a confiança dos clientes." },
//       { letter: "D", text: "A confiança dos clientes não depende da ética." },
//       { letter: "E", text: "A ética profissional é apenas uma formalidade." }
//     ],
//     correctAnswer: "C",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa C está correta. O texto destaca a importância da ética profissional para a confiança dos clientes.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>C</strong>. O texto enfatiza a relação entre ética, transparência e confiança, o que é negado nas demais alternativas.
//       `
//     },
//     comment: "Questões da Cesgranrio sobre interpretação de texto exigem a identificação do foco principal, muitas vezes ligado a valores institucionais."
//   },
//   {
//     id: "LP-017",
//     topic: "LP - Regência Verbal",
//     text: "O verbo 'implicar' pode ser transitivo direto ou indireto, dependendo do contexto, exigindo atenção ao seu uso em comunicações formais.",
//     instruction: "Assinale a alternativa com a regência correta do verbo 'implicar':",
//     alternatives: [
//       { letter: "A", text: "A decisão implicou em aumento de custos." },
//       { letter: "B", text: "O erro implicou em atrasos no projeto." },
//       { letter: "C", text: "A nova política implicou mudanças significativas." },
//       { letter: "D", text: "O gerente implicou à equipe novas responsabilidades." },
//       { letter: "E", text: "O sistema implicou à falhas no atendimento." }
//     ],
//     correctAnswer: "C",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa C está correta. O verbo "implicar", no sentido de resultar, é transitivo direto e não exige preposição.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>C</strong>. O verbo "implicar" não exige preposição "em" ou "a" nesse contexto, como ocorre nas demais alternativas.
//       `
//     },
//     comment: "A Cesgranrio testa a regência verbal em verbos polissêmicos, exigindo atenção ao contexto."
//   },
//   {
//     id: "LP-018",
//     topic: "LP - Pronomes",
//     text: "A colocação pronominal em textos formais segue regras específicas, especialmente em contextos com verbos no infinitivo ou gerúndio.",
//     instruction: "Assinale a alternativa com a colocação pronominal correta:",
//     alternatives: [
//       { letter: "A", text: "Quero me apresentar ao cliente." },
//       { letter: "B", text: "O gerente quer apresentar-me ao cliente." },
//       { letter: "C", text: "Estamos nos preparando para a reunião." },
//       { letter: "D", text: "Vamos preparar-nos para o evento." },
//       { letter: "E", text: "O cliente deseja encontrar-se com ele." }
//     ],
//     correctAnswer: "C",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa C está correta. O pronome "nos" está corretamente posicionado antes do gerúndio "preparando" em um contexto formal.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>C</strong>. As demais alternativas apresentam colocações indevidas em contextos formais.
//       `
//     },
//     comment: "A Cesgranrio cobra a colocação pronominal em contextos formais, exigindo atenção às regras de próclise, mesóclise e ênclise."
//   },
//   {
//     id: "LP-019",
//     topic: "LP - Compreensão e Interpretação de Texto",
//     text: "A digitalização dos serviços bancários trouxe agilidade, mas também desafios relacionados à inclusão digital e à segurança.",
//     instruction: "Qual é o principal desafio mencionado no texto?",
//     alternatives: [
//       { letter: "A", text: "A agilidade dos serviços bancários." },
//       { letter: "B", text: "A inclusão digital e a segurança." },
//       { letter: "C", text: "A redução dos custos operacionais." },
//       { letter: "D", text: "A substituição de funcionários por tecnologia." },
//       { letter: "E", text: "A falta de treinamento dos funcionários." }
//     ],
//     correctAnswer: "B",
//     explanation: {
//       correct: `
//         <strong>✓ Resposta correta!</strong><br>
//         A alternativa B está correta. O texto menciona explicitamente a inclusão digital e a segurança como desafios da digitalização.
//       `,
//       incorrect: `
//         <strong>✗ Resposta incorreta.</strong><br>
//         A resposta correta é a alternativa <strong>B</strong>. As demais alternativas não refletem os desafios mencionados no texto.
//       `
//     },
//     comment: "A Cesgranrio testa a identificação de informações explícitas em textos, exigindo atenção aos detalhes."
//   }
// ];

const questions = [
  // QUESTÕES FÁCEIS (LP-001 a LP-005)
  {
    id: "LP-001",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A comunicação eficaz no atendimento bancário exige clareza, objetividade e cortesia. O cliente deve compreender facilmente as informações transmitidas, sentindo-se respeitado e bem atendido durante todo o processo.",
    instruction: "Com base no texto acima, assinale a alternativa correta:",
    alternatives: [
      { letter: "A", text: "A cortesia é o único requisito necessário para um bom atendimento bancário." },
      { letter: "B", text: "A comunicação eficaz no atendimento bancário depende de clareza, objetividade e cortesia." },
      { letter: "C", text: "O cliente não precisa compreender as informações, desde que seja bem tratado." },
      { letter: "D", text: "A objetividade na comunicação pode comprometer a cortesia no atendimento." },
      { letter: "E", text: "O processo de atendimento independe da qualidade da comunicação estabelecida." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B reproduz exatamente o que o texto afirma: "A comunicação eficaz no atendimento bancário exige clareza, objetividade e cortesia".
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. O texto estabelece claramente que três elementos são necessários para a comunicação eficaz: clareza, objetividade e cortesia.
      `
    },
    comment: "Esta questão de nível fácil avalia a capacidade de identificar informações explícitas no texto. A alternativa B é correta porque reproduz fielmente a informação principal apresentada, demonstrando compreensão literal do conteúdo."
  },

  {
    id: "LP-002",
    topic: "LP - Morfologia",
    text: "O funcionário organizou cuidadosamente os documentos dos clientes.",
    instruction: "Identifique a classe gramatical da palavra 'cuidadosamente':",
    alternatives: [
      { letter: "A", text: "Adjetivo" },
      { letter: "B", text: "Advérbio" },
      { letter: "C", text: "Substantivo" },
      { letter: "D", text: "Verbo" },
      { letter: "E", text: "Pronome" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        'Cuidadosamente' é um advérbio de modo, terminado em '-mente', que modifica o verbo 'organizou', indicando como a ação foi realizada.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. 'Cuidadosamente' é um advérbio de modo que modifica o verbo, indicando a maneira como a ação foi executada.
      `
    },
    comment: "Esta questão de nível fácil testa o conhecimento básico sobre classes gramaticais. A alternativa B é correta porque advérbios terminados em '-mente' são facilmente identificáveis e modificam verbos, indicando modo, tempo ou lugar."
  },

  {
    id: "LP-003",
    topic: "LP - Sintaxe",
    text: "Os clientes aguardavam pacientemente na fila do banco.",
    instruction: "Na oração apresentada, o sujeito é:",
    alternatives: [
      { letter: "A", text: "pacientemente" },
      { letter: "B", text: "na fila" },
      { letter: "C", text: "Os clientes" },
      { letter: "D", text: "do banco" },
      { letter: "E", text: "aguardavam" }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        'Os clientes' é o sujeito da oração, pois é quem pratica a ação de aguardar. O artigo 'Os' e o substantivo 'clientes' formam o sujeito simples.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. 'Os clientes' é o sujeito porque indica quem pratica a ação expressa pelo verbo 'aguardavam'.
      `
    },
    comment: "Esta questão de nível fácil avalia o reconhecimento do sujeito em uma oração simples. A alternativa C é correta porque 'Os clientes' representa o termo que pratica a ação verbal, conceito fundamental da análise sintática."
  },

  {
    id: "LP-004",
    topic: "LP - Ortografia",
    text: "Complete a frase com a palavra adequada: 'O gerente vai _______ a reunião às 14h.'",
    instruction: "Assinale a alternativa que completa corretamente a frase:",
    alternatives: [
      { letter: "A", text: "assistir" },
      { letter: "B", text: "asisitir" },
      { letter: "C", text: "acistir" },
      { letter: "D", text: "asistir" },
      { letter: "E", text: "ascistir" }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        'Assistir' está grafado corretamente. No sentido de 'estar presente', o verbo assistir é transitivo indireto e exige a preposição 'a'.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. A grafia correta é 'assistir', com dois 's' e sem outras consoantes desnecessárias.
      `
    },
    comment: "Esta questão de nível fácil testa conhecimentos básicos de ortografia. A alternativa A é correta porque 'assistir' segue a grafia padrão do português, sendo um verbo de uso frequente no ambiente corporativo."
  },

  {
    id: "LP-005",
    topic: "LP - Pontuação",
    text: "Analise a pontuação da frase: 'Prezado cliente, sua conta foi aprovada.'",
    instruction: "A vírgula empregada na frase tem a função de:",
    alternatives: [
      { letter: "A", text: "separar orações coordenadas" },
      { letter: "B", text: "isolar o vocativo" },
      { letter: "C", text: "separar adjuntos adverbiais" },
      { letter: "D", text: "indicar elipse verbal" },
      { letter: "E", text: "separar o aposto" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A vírgula isola o vocativo 'Prezado cliente', que é o termo usado para chamamento ou interpelação do interlocutor.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. 'Prezado cliente' é um vocativo, termo que se refere ao interlocutor e deve ser isolado por vírgula.
      `
    },
    comment: "Esta questão de nível fácil aborda o uso da vírgula para isolar vocativo. A alternativa B é correta porque 'Prezado cliente' representa um chamamento direto ao interlocutor, uso muito comum na comunicação empresarial."
  },

  // QUESTÕES MÉDIO/DIFÍCIL (LP-006 a LP-025)
  {
    id: "LP-006",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A transformação digital no setor bancário não representa apenas a modernização de processos, mas uma mudança paradigmática na relação entre instituições financeiras e clientes. Esta revolução transcende a mera digitalização de serviços, configurando-se como uma reconfiguração ontológica do conceito tradicional de intermediação financeira.",
    instruction: "Depreende-se do texto que:",
    alternatives: [
      { letter: "A", text: "A digitalização de serviços é sinônimo de transformação digital." },
      { letter: "B", text: "A modernização de processos é o único aspecto relevante da transformação digital." },
      { letter: "C", text: "A transformação digital implica uma mudança fundamental na natureza da intermediação financeira." },
      { letter: "D", text: "As instituições financeiras resistem às mudanças paradigmáticas." },
      { letter: "E", text: "A relação entre bancos e clientes permanece inalterada na era digital." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O texto afirma que a transformação digital configura-se como uma "reconfiguração ontológica do conceito tradicional de intermediação financeira", indicando mudança fundamental na natureza desta atividade.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O texto estabelece que a transformação digital vai além da digitalização, representando uma reconfiguração ontológica (fundamental) da intermediação financeira.
      `
    },
    comment: "Esta questão de nível médio avalia a capacidade de interpretação de texto com vocabulário técnico e conceitos abstratos. A alternativa C é correta porque identifica corretamente que o autor caracteriza a transformação digital como uma mudança ontológica (essencial) da intermediação financeira, não apenas uma modernização superficial."
  },

  {
    id: "LP-007",
    topic: "LP - Sintaxe",
    text: "Embora a tecnologia tenha revolucionado o atendimento bancário, a necessidade de relacionamento humano permanece fundamental para a construção de confiança entre instituição e cliente.",
    instruction: "A oração 'Embora a tecnologia tenha revolucionado o atendimento bancário' classifica-se como:",
    alternatives: [
      { letter: "A", text: "subordinada adverbial concessiva" },
      { letter: "B", text: "subordinada adverbial causal" },
      { letter: "C", text: "coordenada adversativa" },
      { letter: "D", text: "subordinada adjetiva restritiva" },
      { letter: "E", text: "subordinada substantiva objetiva direta" }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A oração é subordinada adverbial concessiva, iniciada pela conjunção 'embora', que expressa uma concessão, admitindo um fato que se opõe à ideia principal.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. A conjunção 'embora' introduz uma oração subordinada adverbial concessiva, que expressa uma concessão à ideia principal.
      `
    },
    comment: "Esta questão de nível médio testa o conhecimento sobre classificação de orações subordinadas. A alternativa A é correta porque 'embora' é uma conjunção subordinativa concessiva típica, que introduz uma ideia contrária à principal, mas que não a impede."
  },

  {
    id: "LP-008",
    topic: "LP - Semântica e Estilística",
    text: "O gerente, homem de poucas palavras, decidiu pela estratégia mais audaciosa.",
    instruction: "A expressão 'homem de poucas palavras' constitui:",
    alternatives: [
      { letter: "A", text: "uma metáfora" },
      { letter: "B", text: "uma metonímia" },
      { letter: "C", text: "um eufemismo" },
      { letter: "D", text: "uma hipérbole" },
      { letter: "E", text: "um pleonasmo" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A expressão 'homem de poucas palavras' é uma metonímia, figura que substitui 'palavras' (meio de comunicação) por 'comunicação' (ato comunicativo), caracterizando pessoa reservada.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. Trata-se de metonímia porque há substituição de 'palavras' (meio) pelo ato de comunicar-se pouco (fim), caracterizando pessoa lacônica.
      `
    },
    comment: "Esta questão de nível médio aborda figuras de linguagem. A alternativa B é correta porque há uma relação metonímica entre 'palavras' (instrumento de comunicação) e o comportamento comunicativo reservado, típica substituição do meio pelo resultado."
  },

  {
    id: "LP-009",
    topic: "LP - Concordância Verbal",
    text: "Analise a frase: 'Fazem dois anos que o banco implementou o novo sistema de segurança.'",
    instruction: "Quanto à concordância verbal, a frase apresentada está:",
    alternatives: [
      { letter: "A", text: "correta, pois o verbo 'fazer' concorda com 'dois anos'" },
      { letter: "B", text: "incorreta, pois o verbo 'fazer' deveria estar no singular" },
      { letter: "C", text: "correta, seguindo a concordância facultativa" },
      { letter: "D", text: "incorreta, pois falta a preposição 'de'" },
      { letter: "E", text: "correta, pois se trata de sujeito composto" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A frase está incorreta. O verbo 'fazer' indicando tempo transcorrido é impessoal e deve permanecer no singular: 'Faz dois anos que o banco implementou...'.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. O verbo 'fazer' no sentido temporal é impessoal e deve ficar no singular, independentemente do numeral que o acompanha.
      `
    },
    comment: "Esta questão de nível médio testa conhecimento sobre verbos impessoais. A alternativa B é correta porque o verbo 'fazer', quando indica tempo transcorrido, é impessoal e deve permanecer sempre no singular, sendo uma regra específica da concordância verbal."
  },

  {
    id: "LP-010",
    topic: "LP - Crase",
    text: "O diretor referiu-se __ política de investimentos adotada __ partir de janeiro.",
    instruction: "Assinale a alternativa que preenche corretamente as lacunas:",
    alternatives: [
      { letter: "A", text: "à - a" },
      { letter: "B", text: "a - à" },
      { letter: "C", text: "à - à" },
      { letter: "D", text: "a - a" },
      { letter: "E", text: "á - a" }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        Ambas as lacunas exigem crase: 'referiu-se à política' (verbo transitivo indireto + artigo feminino) e 'a partir' (locução prepositiva feminina).
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. 'Referir-se' exige preposição 'a' + artigo 'a' (à política), e 'a partir' é locução prepositiva que exige crase.
      `
    },
    comment: "Esta questão de nível médio aborda o uso da crase em dois contextos: verbo transitivo indireto e locução prepositiva. A alternativa C é correta porque ambos os casos exigem a fusão da preposição 'a' com o artigo feminino 'a', resultando em crase."
  },

  {
    id: "LP-011",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A democratização do acesso aos serviços financeiros, embora represente um avanço inequívoco na inclusão social, paradoxalmente pode gerar vulnerabilidades antes inexistentes. A facilidade de contratação de produtos bancários, se não acompanhada de educação financeira adequada, pode transformar oportunidades em armadilhas para consumidores desavisados.",
    instruction: "O texto estabelece uma relação paradoxal porque:",
    alternatives: [
      { letter: "A", text: "a democratização financeira sempre gera vulnerabilidades" },
      { letter: "B", text: "a inclusão social é incompatível com a educação financeira" },
      { letter: "C", text: "um avanço positivo pode simultaneamente criar novos riscos" },
      { letter: "D", text: "os consumidores são naturalmente vulneráveis aos serviços bancários" },
      { letter: "E", text: "a contratação de produtos bancários deve ser restrita" }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C identifica corretamente o paradoxo: a democratização é um 'avanço inequívoco' (positivo) que 'paradoxalmente pode gerar vulnerabilidades' (criar riscos).
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O paradoxo reside no fato de que um avanço positivo (democratização) pode simultaneamente criar novos problemas (vulnerabilidades).
      `
    },
    comment: "Esta questão de nível difícil avalia a capacidade de compreender relações paradoxais no texto. A alternativa C é correta porque identifica que o paradoxo consiste na coexistência de aspectos positivos (avanço na inclusão) e negativos (criação de vulnerabilidades) do mesmo fenômeno."
  },

  {
    id: "LP-012",
    topic: "LP - Regência Verbal",
    text: "Analise as frases: I. 'O cliente assistiu a reunião.' II. 'O funcionário procedeu a análise dos documentos.' III. 'A gerente aspirava ao cargo de diretora.'",
    instruction: "Quanto à regência verbal, estão corretas:",
    alternatives: [
      { letter: "A", text: "apenas I" },
      { letter: "B", text: "apenas II" },
      { letter: "C", text: "apenas III" },
      { letter: "D", text: "apenas I e III" },
      { letter: "E", text: "I, II e III" }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        Apenas III está correta. I deveria ser 'assistiu à reunião' (assistir a = estar presente); II deveria ser 'procedeu à análise' (proceder a exige preposição); III está correta (aspirar a = desejar).
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. Apenas a frase III respeita a regência: 'aspirar ao cargo' (aspirar a = desejar). As demais precisam de preposição contraída com artigo.
      `
    },
    comment: "Esta questão de nível difícil testa conhecimento específico sobre regência de verbos frequentes no ambiente bancário. A alternativa C é correta porque apenas 'aspirava ao cargo' está correta, enquanto as outras frases necessitam da preposição contraída com artigo (à)."
  },

  {
    id: "LP-013",
    topic: "LP - Análise Sintática",
    text: "Confiante de que a proposta seria aceita, o gerente apresentou os resultados aos investidores.",
    instruction: "A expressão 'de que a proposta seria aceita' funciona como:",
    alternatives: [
      { letter: "A", text: "adjunto adnominal" },
      { letter: "B", text: "complemento nominal" },
      { letter: "C", text: "objeto direto" },
      { letter: "D", text: "predicativo do sujeito" },
      { letter: "E", text: "aposto" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A expressão é complemento nominal de 'confiante'. Adjetivos que expressam sentimento, crença ou estado psicológico exigem complemento nominal para completar seu sentido.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. O adjetivo 'confiante' exige complemento nominal para completar seu sentido, introduzido pela preposição 'de'.
      `
    },
    comment: "Esta questão de nível difícil aborda a diferença entre adjunto adnominal e complemento nominal. A alternativa B é correta porque adjetivos como 'confiante' possuem transitividade e exigem complemento nominal para completar seu sentido, não apenas modificá-lo."
  },

  {
    id: "LP-014",
    topic: "LP - Período Composto",
    text: "Quando o sistema bancário se moderniza, os clientes se beneficiam; contudo, é necessário que haja treinamento adequado para que todos possam usufruir dessas inovações.",
    instruction: "O período apresenta:",
    alternatives: [
      { letter: "A", text: "quatro orações, sendo duas subordinadas adverbiais" },
      { letter: "B", text: "três orações, sendo uma subordinada substantiva" },
      { letter: "C", text: "cinco orações, sendo três subordinadas" },
      { letter: "D", text: "quatro orações, sendo uma coordenada e duas subordinadas" },
      { letter: "E", text: "seis orações, sendo quatro subordinadas" }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        O período tem cinco orações: 1)'Quando o sistema bancário se moderniza' (sub. adv. temporal), 2)'os clientes se beneficiam' (principal), 3)'é necessário' (coordenada), 4)'que haja treinamento adequado' (sub. subst. subjetiva), 5)'para que todos possam usufruir dessas inovações' (sub. adv. final).
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O período possui cinco orações, com três subordinadas: uma temporal, uma substantiva subjetiva e uma adverbial final.
      `
    },
    comment: "Esta questão de nível difícil exige análise completa de período composto complexo. A alternativa C é correta porque o período contém cinco orações interligadas por diferentes tipos de subordinação e coordenação, demonstrando estrutura sintática elaborada."
  },

  {
    id: "LP-015",
    topic: "LP - Colocação Pronominal",
    text: "Analise as frases: I. 'Nunca se falou tanto em educação financeira.' II. 'Os clientes nos procuraram ontem.' III. 'Dir-lhe-ei a verdade sobre o investimento.'",
    instruction: "Quanto à colocação pronominal, estão adequadas:",
    alternatives: [
      { letter: "A", text: "apenas I" },
      { letter: "B", text: "apenas I e II" },
      { letter: "C", text: "apenas II e III" },
      { letter: "D", text: "apenas I e III" },
      { letter: "E", text: "I, II e III" }
    ],
    correctAnswer: "E",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        Todas estão corretas: I - próclise obrigatória após advérbio de negação; II - próclise facultativa após sujeito; III - ênclise obrigatória em início de oração com futuro simples.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>E</strong>. Todas as frases seguem as regras de colocação: próclise após 'nunca', próclise facultativa após sujeito, e ênclise em início de oração no futuro.
      `
    },
    comment: "Esta questão de nível difícil testa conhecimento sobre colocação pronominal em diferentes contextos. A alternativa E é correta porque cada frase exemplifica uma regra específica: próclise obrigatória (I), facultativa (II) e ênclise obrigatória (III)."
  },

  {
    id: "LP-016",
    topic: "LP - Compreensão e Interpretação de Texto",
    text: "A disrupção tecnológica no setor bancário não se caracteriza apenas pela substituição de processos analógicos por digitais, mas pela emergência de novos paradigmas que questionam a própria essência da intermediação financeira tradicional. Neste contexto, a resiliência institucional torna-se mais crucial que a mera adaptação tecnológica.",
    instruction: "Infere-se do texto que:",
    alternatives: [
      { letter: "A", text: "a tecnologia digital é suficiente para garantir a competitividade bancária" },
      { letter: "B", text: "a disrupção tecnológica resume-se à digitalização de processos" },
      { letter: "C", text: "a capacidade de resistir e se adaptar às mudanças supera a simples modernização tecnológica" },
      { letter: "D", text: "a intermediação financeira tradicional permanece inalterada" },
      { letter: "E", text: "os paradigmas atuais são incompatíveis com a inovação tecnológica" }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O texto afirma que 'a resiliência institucional torna-se mais crucial que a mera adaptação tecnológica', indicando que a capacidade de resistir e adaptar-se é superior à simples modernização.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O autor enfatiza que a resiliência (capacidade de adaptação) é mais importante que apenas adaptar-se tecnologicamente.
      `
    },
    comment: "Esta questão de nível difícil avalia inferência textual com vocabulário técnico especializado. A alternativa C é correta porque identifica a hierarquia estabelecida pelo autor entre resiliência institucional (conceito mais amplo) e adaptação tecnológica (aspecto específico)."
  },

  {
    id: "LP-017",
    topic: "LP - Vozes Verbais",
    text: "A reunião foi presidida pelo diretor financeiro.",
    instruction: "Convertendo a frase para a voz ativa, obtém-se:",
    alternatives: [
      { letter: "A", text: "O diretor financeiro presidiu a reunião." },
      { letter: "B", text: "O diretor financeiro presidia a reunião." },
      { letter: "C", text: "O diretor financeiro vai presidir a reunião." },
      { letter: "D", text: "O diretor financeiro tem presidido a reunião." },
      { letter: "E", text: "O diretor financeiro estava presidindo a reunião." }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A conversão correta mantém o tempo verbal: 'foi presidida' (pretérito perfeito passivo) torna-se 'presidiu' (pretérito perfeito ativo).
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. A transformação de voz passiva para ativa deve manter o tempo verbal original (pretérito perfeito).
      `
    },
    comment: "Esta questão de nível médio testa conhecimento sobre transformação de vozes verbais. A alternativa A é correta porque mantém a correspondência temporal: pretérito perfeito passivo ('foi presidida') converte-se em pretérito perfeito ativo ('presidiu')."
  },

  {
    id: "LP-018",
    topic: "LP - Figuras de Linguagem",
    text: "O tempo é dinheiro no mundo dos negócios, e cada minuto perdido representa uma oportunidade que escapa pelos dedos como areia.",
    instruction: "As figuras de linguagem presentes no texto são:",
    alternatives: [
      { letter: "A", text: "metáfora e hipérbole" },
      { letter: "B", text: "metáfora e comparação" },
      { letter: "C", text: "metonímia e metáfora" },
      { letter: "D", text: "personificação e símile" },
      { letter: "E", text: "comparação e aliteração" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        'O tempo é dinheiro' é uma metáfora (identificação direta) e 'como areia' estabelece uma comparação explícita (símile) com a conjunção comparativa 'como'.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. Há metáfora em 'tempo é dinheiro' e comparação explícita em 'como areia'.
      `
    },
    comment: "Esta questão de nível médio identifica figuras de linguagem em contexto empresarial. A alternativa B é correta porque reconhece a metáfora ('tempo é dinheiro') e a comparação explícita ('como areia'), duas figuras distintas com estruturas específicas."
  },

  {
    id: "LP-019",
    topic: "LP - Concordância Nominal",
    text: "Foram apresentadas à diretoria duas propostas bastante inovadora para modernização dos serviços.",
    instruction: "A frase apresenta erro de concordância. A forma correta seria:",
    alternatives: [
      { letter: "A", text: "duas propostas bastante inovadoras" },
      { letter: "B", text: "duas propostas bastantes inovadora" },
      { letter: "C", text: "duas propostas bastantes inovadoras" },
      { letter: "D", text: "duas proposta bastante inovadoras" },
      { letter: "E", text: "duas propostas bastante inovadora" }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        'Bastante' é advérbio (invariável) modificando o adjetivo 'inovadoras', que deve concordar com 'propostas' (feminino plural).
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. 'Bastante' permanece invariável como advérbio, e 'inovadoras' concorda com 'propostas'.
      `
    },
    comment: "Esta questão de nível médio aborda concordância nominal com particularidades do advérbio 'bastante'. A alternativa A é correta porque 'bastante' como advérbio é invariável, e o adjetivo 'inovadoras' deve concordar com o substantivo feminino plural 'propostas'."
  },

  {
    id: "LP-020",
    topic: "LP - Análise Textual",
    text: "O atendimento bancário de excelência transcende a mera execução de procedimentos técnicos, configurando-se como um processo dialógico que pressupõe empatia, competência comunicativa e capacidade de antecipação das necessidades do cliente.",
    instruction: "O conectivo 'que' em 'processo dialógico que pressupõe' introduz:",
    alternatives: [
      { letter: "A", text: "oração subordinada substantiva completiva nominal" },
      { letter: "B", text: "oração subordinada adjetiva restritiva" },
      { letter: "C", text: "oração subordinada adjetiva explicativa" },
      { letter: "D", text: "oração subordinada adverbial consecutiva" },
      { letter: "E", text: "oração coordenada explicativa" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        O pronome relativo 'que' introduz oração subordinada adjetiva restritiva, especificando que tipo de processo dialógico está sendo caracterizado.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. O pronome relativo 'que' introduz oração adjetiva restritiva que restringe o conceito de 'processo dialógico'.
      `
    },
    comment: "Esta questão de nível difícil testa análise sintática de oração adjetiva em contexto complexo. A alternativa B é correta porque o 'que' funciona como pronome relativo restringindo o conceito de 'processo dialógico', especificando suas características essenciais."
  },

  {
    id: "LP-021",
    topic: "LP - Semântica",
    text: "A liquidez do investimento é um fator determinante para o perfil conservador, enquanto a rentabilidade atrai investidores mais arrojados.",
    instruction: "No contexto financeiro do texto, 'liquidez' refere-se à:",
    alternatives: [
      { letter: "A", text: "quantidade de dinheiro disponível" },
      { letter: "B", text: "facilidade de conversão em dinheiro" },
      { letter: "C", text: "segurança do investimento" },
      { letter: "D", text: "valor total do investimento" },
      { letter: "E", text: "tempo de duração do investimento" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        No contexto financeiro, 'liquidez' refere-se à facilidade e rapidez com que um ativo pode ser convertido em dinheiro sem perda significativa de valor.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. Liquidez, em finanças, significa a facilidade de transformar um investimento em dinheiro rapidamente.
      `
    },
    comment: "Esta questão de nível médio avalia conhecimento de terminologia financeira específica. A alternativa B é correta porque 'liquidez' é um conceito técnico que designa a capacidade de um ativo ser rapidamente convertido em moeda corrente, conhecimento essencial para funcionários bancários."
  },

  {
    id: "LP-022",
    topic: "LP - Pontuação Avançada",
    text: "Os investidores — preocupados com a volatilidade do mercado — buscaram alternativas mais seguras; porém, a rentabilidade permaneceu baixa.",
    instruction: "Sobre a pontuação empregada, é correto afirmar que:",
    alternatives: [
      { letter: "A", text: "os travessões poderiam ser substituídos por vírgulas sem alteração de sentido" },
      { letter: "B", text: "o ponto e vírgula deveria ser substituído por vírgula" },
      { letter: "C", text: "os travessões são obrigatórios antes de adjetivos" },
      { letter: "D", text: "a conjunção 'porém' deveria vir entre vírgulas" },
      { letter: "E", text: "o ponto e vírgula é inadequado antes de conjunção adversativa" }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        Os travessões isolam um comentário explicativo ('preocupados com a volatilidade do mercado') e podem ser substituídos por vírgulas sem prejuízo ao sentido.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. Os travessões exercem função similar às vírgulas para isolar comentário explicativo, sendo intercambiáveis neste contexto.
      `
    },
    comment: "Esta questão de nível difícil aborda pontuação expressiva e suas possibilidades de substituição. A alternativa A é correta porque travessões e vírgulas podem exercer função similar para isolar comentários explicativos, embora os travessões confiram maior destaque à informação."
  },

  {
    id: "LP-023",
    topic: "LP - Interpretação Avançada",
    text: "A sustentabilidade financeira de uma instituição bancária não se esgota em indicadores quantitativos; perpassa, necessariamente, pela construção de relações duradouras com stakeholders, pela responsabilidade socioambiental e pela aderência a princípios éticos que transcendem a lógica puramente mercadológica.",
    instruction: "Segundo o texto, a sustentabilidade financeira bancária:",
    alternatives: [
      { letter: "A", text: "depende exclusivamente de indicadores quantitativos" },
      { letter: "B", text: "é incompatível com a lógica mercadológica" },
      { letter: "C", text: "exige uma abordagem multidimensional que vai além de métricas numéricas" },
      { letter: "D", text: "prescinde de relacionamentos com stakeholders" },
      { letter: "E", text: "pode ser mensurada apenas por critérios éticos" }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O texto afirma que a sustentabilidade 'não se esgota em indicadores quantitativos' e 'perpassa' por múltiplos aspectos (relacionamentos, responsabilidade socioambiental, princípios éticos).
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. O autor enfatiza que a sustentabilidade vai além de números, envolvendo aspectos relacionais, ambientais e éticos.
      `
    },
    comment: "Esta questão de nível difícil avalia interpretação de texto argumentativo complexo sobre gestão bancária moderna. A alternativa C é correta porque identifica que o autor defende uma visão holística da sustentabilidade, que integra múltiplas dimensões além dos aspectos puramente financeiros."
  },

  {
    id: "LP-024",
    topic: "LP - Estilística Avançada",
    text: "Perante a incerteza econômica, o banco adotou uma postura cautelosa, priorizando a preservação do capital sobre a busca por rentabilidade imediata.",
    instruction: "O efeito estilístico da construção 'preservação do capital sobre a busca por rentabilidade' é:",
    alternatives: [
      { letter: "A", text: "criar um paralelismo sintático que equilibra as opções estratégicas" },
      { letter: "B", text: "estabelecer uma gradação ascendente de importância" },
      { letter: "C", text: "gerar uma antítese entre conceitos opostos" },
      { letter: "D", text: "produzir uma tautologia conceitual" },
      { letter: "E", text: "construir uma metáfora financeira" }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A construção cria paralelismo sintático: 'preservação do capital' // 'busca por rentabilidade', estruturas nominais equivalentes que equilibram as duas opções estratégicas.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. As estruturas paralelas 'preservação do X' e 'busca por Y' criam equilíbrio sintático que destaca a escolha estratégica.
      `
    },
    comment: "Esta questão de nível difícil analisa recursos estilísticos em texto técnico-administrativo. A alternativa A é correta porque o paralelismo sintático entre as duas estruturas nominais cria um efeito de balanceamento que enfatiza a natureza da escolha estratégica entre duas opções igualmente válidas."
  },

  {
    id: "LP-025",
    topic: "LP - Análise Discursiva",
    text: "Conquanto a digitalização dos serviços bancários tenha democratizado o acesso, impõe-se a reflexão sobre os efeitos colaterais dessa revolução: a exclusão digital pode paradoxalmente amplificar desigualdades preexistentes, transformando avanço tecnológico em retrocesso social para segmentos vulneráveis da população.",
    instruction: "A estratégia argumentativa predominante no texto é:",
    alternatives: [
      { letter: "A", text: "apresentação de dados estatísticos para comprovar uma tese" },
      { letter: "B", text: "contraposição dialética entre aspectos positivos e negativos de um fenômeno" },
      { letter: "C", text: "exemplificação através de casos concretos" },
      { letter: "D", text: "apelo emocional para sensibilizar o leitor" },
      { letter: "E", text: "citação de autoridades para legitimar o argumento" }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        O texto emprega contraposição dialética: reconhece o aspecto positivo da digitalização ('democratizado o acesso') mas contrapõe efeitos negativos ('exclusão digital', 'amplificar desigualdades'), criando tensão argumentativa.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. O autor utiliza estratégia dialética, contrapondo benefícios e riscos da digitalização bancária.
      `
    },
    comment: "Esta questão de nível difícil avalia análise do discurso argumentativo e suas estratégias retóricas. A alternativa B é correta porque o texto estrutura-se através de movimento dialético: tese (digitalização democratiza), antítese (pode excluir) e síntese implícita (necessidade de reflexão crítica), estratégia típica do discurso acadêmico-científico."
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
                    <div class="alternative alternative-${alt.letter.toLowerCase()}">
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
    selectedAlt.style.border = '2px solid #8B4CBB';
  }

  questionState.selectedAnswer = letter;

  const answerBox = document.getElementById(`answerBox-${questionIndex}`);
  const answerText = document.getElementById(`answerText-${questionIndex}`);

  if (questionState.selectedAnswer) {
    answerText.textContent = `Alternativa selecionada: ${letter}`;
    answerBox.style.borderColor = '#8B4CBB';
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