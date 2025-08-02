import { Question, Explanation, Alternative } from "@/types";

export const questions: Question[] = [
  {
    id: "CB-001",
    topic: "Instituições Financeiras",
    text: "As Sociedades de Crédito, Financiamento e Investimento, conhecidas como financeiras, são instituições que oferecem crédito e financiamentos para aquisição de bens e serviços, sendo supervisionadas pelo Banco Central do Brasil.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre as Sociedades de Crédito, Financiamento e Investimento:",
    alternatives: [
      { letter: "A", text: "Podem captar recursos mediante abertura de contas correntes." },
      { letter: "B", text: "Têm como principal função financiar aquisição de bens e capital de giro." },
      { letter: "C", text: "São supervisionadas pela Comissão de Valores Mobiliários (CVM)." },
      { letter: "D", text: "Não estão autorizadas a emitir Recibos de Depósito Bancário (RDB)." },
      { letter: "E", text: "São instituições públicas obrigatoriamente constituídas como cooperativas." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. As Sociedades de Crédito, Financiamento e Investimento têm como objetivo principal oferecer crédito e financiamentos para aquisição de bens, serviços e capital de giro, conforme sua função no sistema financeiro.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é errada, pois essas instituições não podem abrir contas correntes; C é falsa, pois a supervisão é do Banco Central, não da CVM; D é incorreta, pois elas podem emitir RDB; e E é errada, pois não são públicas nem cooperativas por obrigatoriedade.
      `
    },
    comment: "Esta questão avalia o entendimento das funções das financeiras, um tema recorrente em concursos bancários."
  },
  {
    id: "CB-002",
    topic: "Política Monetária",
    text: "O Conselho de Política Monetária (COPOM), órgão do Banco Central do Brasil, define a meta da taxa Selic, que influencia a política monetária e a economia do país.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o COPOM:",
    alternatives: [
      { letter: "A", text: "Define a política fiscal em conjunto com o Ministério da Economia." },
      { letter: "B", text: "Estabelece a meta da taxa Selic, afetando a política monetária." },
      { letter: "C", text: "Reúne-se semanalmente para ajustar a taxa de juros." },
      { letter: "D", text: "Não tem autonomia para definir a taxa Selic sem aprovação presidencial." },
      { letter: "E", text: "É responsável pela emissão direta de títulos públicos." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O COPOM define a meta da taxa Selic, um instrumento essencial da política monetária, influenciando a economia.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é errada, pois o COPOM trata de política monetária, não fiscal; C é falsa, pois as reuniões ocorrem a cada 45 dias; D é incorreta, pois o COPOM tem autonomia; e E é falsa, pois o Banco Central não emite títulos diretamente.
      `
    },
    comment: "Esta questão testa o papel do COPOM na política monetária, um tópico comum em provas bancárias."
  },
  {
    id: "CB-003",
    topic: "Regulamentações",
    text: "A Circular 3.978/2020 do Banco Central estabelece normas para prevenir a lavagem de dinheiro, vedando a contratação de terceiros para a análise de operações suspeitas no exterior.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a Circular 3.978/2020:",
    alternatives: [
      { letter: "A", text: "Permite a terceirização da análise de operações suspeitas no Brasil." },
      { letter: "B", text: "Proíbe a contratação de terceiros para análise de operações suspeitas no exterior." },
      { letter: "C", text: "Não menciona regras sobre terceirização." },
      { letter: "D", text: "Autoriza a terceirização apenas para instituições públicas." },
      { letter: "E", text: "É facultativa para bancos comerciais." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A Circular 3.978/2020 veda a contratação de terceiros para a análise de operações suspeitas no exterior, conforme o texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois a vedação é específica ao exterior; C é errada, pois há menção à terceirização; D é incorreta, pois não há exceção para públicas; e E é falsa, pois a norma é obrigatória.
      `
    },
    comment: "Questões sobre regulamentações como a Circular 3.978/2020 são frequentes, testando normas específicas do setor."
  },
  {
    id: "CB-004",
    topic: "Operações Bancárias",
    text: "Os depósitos de poupança são remunerados com base na Taxa Referencial (TR) e uma taxa adicional que varia conforme a meta da taxa Selic, sendo garantidos pelo Fundo Garantidor de Créditos (FGC).",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre os depósitos de poupança:",
    alternatives: [
      { letter: "A", text: "A remuneração é fixa e independe da taxa Selic." },
      { letter: "B", text: "Quando a Selic supera 8,5% ao ano, a taxa adicional é de 0,5% ao mês." },
      { letter: "C", text: "A Taxa Referencial (TR) é o único fator de remuneração." },
      { letter: "D", text: "Não possuem cobertura do Fundo Garantidor de Créditos (FGC)." },
      { letter: "E", text: "A remuneração sempre excede a taxa Selic." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. Quando a meta da Selic é superior a 8,5% ao ano, a remuneração adicional da poupança é de 0,5% ao mês, além da TR.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois a remuneração varia; C é errada, pois há dois componentes; D é incorreta, pois há garantia do FGC; e E é falsa, pois não há garantia de superioridade à Selic.
      `
    },
    comment: "Esta questão aborda as operações de poupança, um tema clássico em concursos, exigindo conhecimento sobre remuneração."
  },
  {
    id: "CB-005",
    topic: "Produtos e Serviços Bancários",
    text: "O cartão de crédito pode ser básico, para pagamentos simples, ou diferenciado, com benefícios como programas de fidelidade, sendo sua versão básica de concessão obrigatória pelas instituições financeiras.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o cartão de crédito:",
    alternatives: [
      { letter: "A", text: "O cartão básico não permite compras parceladas." },
      { letter: "B", text: "Cartões diferenciados oferecem apenas benefícios de viagem." },
      { letter: "C", text: "A emissão do cartão básico é obrigatória para instituições financeiras." },
      { letter: "D", text: "Não podem ser associados a programas de fidelidade." },
      { letter: "E", text: "O uso do cartão básico é isento de qualquer custo." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. A concessão do cartão básico é obrigatória pelas instituições financeiras, conforme regulamentação.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. A alternativa A é falsa, pois permite parcelamento; B é errada, pois os benefícios variam; D é incorreta, pois há programas de fidelidade; e E é falsa, pois pode haver custos como anuidade.
      `
    },
    comment: "Esta questão avalia produtos bancários, como o cartão de crédito, com ênfase em regulamentação."
  },
  {
    id: "CB-006",
    topic: "Instituições Financeiras",
    text: "Os bancos múltiplos são instituições financeiras que podem operar com diversas carteiras, como comercial, de investimento e crédito imobiliário, desde que autorizadas pelo Banco Central.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre os bancos múltiplos:",
    alternatives: [
      { letter: "A", text: "Devem operar com pelo menos duas carteiras, uma das quais comercial ou de investimento." },
      { letter: "B", text: "Não podem oferecer serviços de crédito imobiliário." },
      { letter: "C", text: "São proibidos de captar depósitos à vista." },
      { letter: "D", text: "Operam exclusivamente com carteiras de investimento." },
      { letter: "E", text: "Não estão sujeitos à supervisão do Banco Central." }
    ],
    correctAnswer: "A",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa A está correta. Os bancos múltiplos devem operar com pelo menos duas carteiras, sendo uma delas comercial ou de investimento.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>A</strong>. A alternativa B é falsa, pois podem oferecer crédito imobiliário; C é errada, pois podem captar depósitos à vista; D é incorreta, pois operam com diversas carteiras; e E é falsa, pois são supervisionados pelo Banco Central.
      `
    },
    comment: "Esta questão testa as características dos bancos múltiplos, um tipo versátil de instituição financeira."
  },
  {
    id: "CB-007",
    topic: "Política Monetária",
    text: "A base monetária, ou dinheiro de alta potência, é composta pelo papel-moeda em circulação e pelas reservas bancárias mantidas no Banco Central.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a base monetária:",
    alternatives: [
      { letter: "A", text: "Inclui os depósitos à vista nos bancos comerciais." },
      { letter: "B", text: "É composta pelo papel-moeda em circulação e pelas reservas bancárias." },
      { letter: "C", text: "Não é controlada pelo Banco Central." },
      { letter: "D", text: "Corresponde ao total de meios de pagamento na economia." },
      { letter: "E", text: "É sinônimo de oferta monetária." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A base monetária é composta pelo papel-moeda em circulação e pelas reservas bancárias, como descrito no texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois depósitos à vista são parte dos meios de pagamento; C é errada, pois o Banco Central a controla; D é incorreta, pois os meios de pagamento são mais amplos; e E é falsa, pois a oferta monetária é maior.
      `
    },
    comment: "Esta questão aborda a base monetária, um conceito essencial em política monetária."
  },
  {
    id: "CB-008",
    topic: "Regulamentações",
    text: "A Lei 9.613/98, que trata da lavagem de dinheiro, impõe obrigações às instituições financeiras, incluindo a comunicação de operações suspeitas ao Conselho de Controle de Atividades Financeiras (Coaf).",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a Lei 9.613/98:",
    alternatives: [
      { letter: "A", text: "Dispensa os bancos de comunicar operações suspeitas ao Coaf." },
      { letter: "B", text: "Exige que as instituições financeiras reportem operações suspeitas ao Coaf." },
      { letter: "C", text: "Aplica-se apenas a bancos comerciais." },
      { letter: "D", text: "Proíbe a terceirização de qualquer atividade relacionada ao combate à lavagem de dinheiro." },
      { letter: "E", text: "Não prevê sanções por descumprimento." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A Lei 9.613/98 exige que as instituições financeiras comuniquem operações suspeitas ao Coaf.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois a comunicação é obrigatória; C é errada, pois abrange várias instituições; D é incorreta, pois não há proibição geral; e E é falsa, pois há sanções.
      `
    },
    comment: "Esta questão aborda a legislação de lavagem de dinheiro, um tema crítico no setor bancário."
  },
  {
    id: "CB-009",
    topic: "Operações Bancárias",
    text: "O Sistema Especial de Liquidação e Custódia (SELIC) é administrado pelo Banco Central e destina-se à custódia e liquidação de títulos públicos federais.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o SELIC:",
    alternatives: [
      { letter: "A", text: "É utilizado apenas para operações com títulos privados." },
      { letter: "B", text: "Serve para custódia e liquidação de títulos públicos federais." },
      { letter: "C", text: "Não permite a liquidação de operações com títulos." },
      { letter: "D", text: "É administrado pela Comissão de Valores Mobiliários (CVM)." },
      { letter: "E", text: "É exclusivo para bancos comerciais." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O SELIC é destinado à custódia e liquidação de títulos públicos federais, conforme o texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois trata de títulos públicos; C é errada, pois permite liquidação; D é incorreta, pois é administrado pelo Banco Central; e E é falsa, pois não é exclusivo.
      `
    },
    comment: "Esta questão testa o conhecimento sobre o SELIC, essencial para o mercado de títulos públicos."
  },
  {
    id: "CB-010",
    topic: "Produtos e Serviços Bancários",
    text: "O consórcio é uma modalidade de compra baseada na união de pessoas em grupos, com o objetivo de adquirir bens ou serviços mediante autofinanciamento.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o consórcio:",
    alternatives: [
      { letter: "A", text: "É uma forma de empréstimo bancário." },
      { letter: "B", text: "Baseia-se no autofinanciamento de grupos de pessoas." },
      { letter: "C", text: "Não permite a aquisição de bens duráveis." },
      { letter: "D", text: "É regulado exclusivamente pelo Código de Defesa do Consumidor." },
      { letter: "E", text: "Não envolve a formação de grupos de participantes." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O consórcio é baseado no autofinanciamento de grupos para adquirir bens ou serviços.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois não é um empréstimo; C é errada, pois permite bens duráveis; D é incorreta, pois é regulado pelo Banco Central; e E é falsa, pois envolve grupos.
      `
    },
    comment: "Esta questão testa o entendimento sobre o consórcio, um produto comum no Brasil."
  },
  {
    id: "CB-011",
    topic: "Instituições Financeiras",
    text: "As cooperativas de crédito são instituições financeiras formadas por associados, com o objetivo de oferecer serviços financeiros a seus membros e promover o desenvolvimento local.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre as cooperativas de crédito:",
    alternatives: [
      { letter: "A", text: "São instituições com fins lucrativos." },
      { letter: "B", text: "Oferecem serviços financeiros apenas a não-associados." },
      { letter: "C", text: "Promovem o desenvolvimento local e regional." },
      { letter: "D", text: "Não estão sujeitas à supervisão do Banco Central." },
      { letter: "E", text: "Podem captar depósitos à vista apenas de grandes empresas." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. As cooperativas de crédito promovem o desenvolvimento local e regional, como descrito no texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. A alternativa A é falsa, pois são sem fins lucrativos; B é errada, pois atendem associados; D é incorreta, pois são supervisionadas pelo Banco Central; e E é falsa, pois captam de associados.
      `
    },
    comment: "Esta questão aborda as cooperativas de crédito, uma alternativa às instituições tradicionais."
  },
  {
    id: "CB-012",
    topic: "Política Monetária",
    text: "A política monetária expansionista visa aumentar a oferta de moeda na economia, geralmente reduzindo a taxa de juros para estimular o consumo e o investimento.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a política monetária expansionista:",
    alternatives: [
      { letter: "A", text: "Busca reduzir a oferta de moeda para controlar a inflação." },
      { letter: "B", text: "Geralmente envolve o aumento da taxa de juros." },
      { letter: "C", text: "Visa estimular o consumo e o investimento." },
      { letter: "D", text: "É implementada através da venda de títulos públicos." },
      { letter: "E", text: "Não afeta a liquidez do sistema financeiro." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. A política monetária expansionista visa estimular o consumo e o investimento, conforme o texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. A alternativa A é falsa, pois aumenta a oferta de moeda; B é errada, pois reduz os juros; D é incorreta, pois a venda contrai a moeda; e E é falsa, pois afeta a liquidez.
      `
    },
    comment: "Esta questão testa o entendimento sobre políticas monetárias e seus efeitos."
  },
  {
    id: "CB-013",
    topic: "Regulamentações",
    text: "A Resolução CMN 4.595/2017 exige que as instituições financeiras implementem políticas de responsabilidade socioambiental.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a Resolução CMN 4.595/2017:",
    alternatives: [
      { letter: "A", text: "Não se aplica a bancos comerciais." },
      { letter: "B", text: "Exige políticas de responsabilidade socioambiental." },
      { letter: "C", text: "É facultativa para instituições financeiras." },
      { letter: "D", text: "Foca apenas em questões ambientais." },
      { letter: "E", text: "Foi revogada em 2020." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A Resolução CMN 4.595/2017 exige políticas de responsabilidade socioambiental das instituições financeiras.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois se aplica a bancos comerciais; C é errada, pois é obrigatória; D é incorreta, pois abrange aspectos sociais; e E é falsa, pois segue em vigor.
      `
    },
    comment: "Esta questão reflete a crescente importância da sustentabilidade no setor bancário."
  },
  {
    id: "CB-014",
    topic: "Operações Bancárias",
    text: "O crédito rotativo é uma modalidade de crédito associada ao cartão de crédito, permitindo o financiamento de parte da fatura com juros.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o crédito rotativo:",
    alternatives: [
      { letter: "A", text: "É uma forma de crédito sem cobrança de juros." },
      { letter: "B", text: "Permite financiar parte da fatura do cartão de crédito." },
      { letter: "C", text: "Não está associado ao cartão de crédito." },
      { letter: "D", text: "Tem taxa de juros fixa e baixa." },
      { letter: "E", text: "É proibido por lei no Brasil." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O crédito rotativo permite financiar parte da fatura do cartão de crédito com juros, como descrito.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois há juros; C é errada, pois está associado ao cartão; D é incorreta, pois os juros são altos; e E é falsa, pois é permitido.
      `
    },
    comment: "Esta questão aborda o crédito rotativo, uma operação comum mas arriscada devido aos juros altos."
  },
  {
    id: "CB-015",
    topic: "Produtos e Serviços Bancários",
    text: "O cheque especial é uma linha de crédito pré-aprovada vinculada à conta corrente, permitindo saques ou pagamentos mesmo sem saldo disponível.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o cheque especial:",
    alternatives: [
      { letter: "A", text: "É uma modalidade de crédito sem cobrança de juros." },
      { letter: "B", text: "Permite saques ou pagamentos mesmo sem saldo na conta corrente." },
      { letter: "C", text: "Não está vinculado à conta corrente do cliente." },
      { letter: "D", text: "Tem limite de crédito ilimitado." },
      { letter: "E", text: "É uma forma de poupança com rendimentos." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O cheque especial permite saques ou pagamentos sem saldo, como descrito no texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois há juros; C é errada, pois é vinculado à conta; D é incorreta, pois o limite é definido; e E é falsa, pois não é poupança.
      `
    },
    comment: "Esta questão aborda o cheque especial, um produto que exige atenção devido aos custos associados."
  },
  {
    id: "CB-016",
    topic: "Instituições Financeiras",
    text: "Os Bancos de Desenvolvimento são instituições públicas não federais que financiam investimentos para promover o desenvolvimento regional.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre os Bancos de Desenvolvimento:",
    alternatives: [
      { letter: "A", text: "São instituições privadas com fins lucrativos." },
      { letter: "B", text: "Têm atuação limitada a uma região específica." },
      { letter: "C", text: "Podem captar depósitos à vista do público." },
      { letter: "D", text: "São supervisionados pela Comissão de Valores Mobiliários (CVM)." },
      { letter: "E", text: "Não podem conceder financiamentos a longo prazo." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. Os Bancos de Desenvolvimento têm atuação regional, promovendo o desenvolvimento local.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois são públicos; C é errada, pois não captam depósitos à vista; D é incorreta, pois são supervisionados pelo Banco Central; e E é falsa, pois financiam a longo prazo.
      `
    },
    comment: "Esta questão destaca o papel dos Bancos de Desenvolvimento no desenvolvimento regional."
  },
  {
    id: "CB-017",
    topic: "Política Monetária",
    text: "O recolhimento compulsório é uma ferramenta de política monetária que obriga os bancos a manter uma parcela de seus depósitos no Banco Central.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o recolhimento compulsório:",
    alternatives: [
      { letter: "A", text: "É uma taxa de juros aplicada aos empréstimos bancários." },
      { letter: "B", text: "Obriga os bancos a manter parte dos depósitos no Banco Central." },
      { letter: "C", text: "Não afeta a liquidez do sistema financeiro." },
      { letter: "D", text: "É uma operação voluntária dos bancos." },
      { letter: "E", text: "É utilizado apenas em economias em desenvolvimento." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O recolhimento compulsório obriga os bancos a manter uma parcela dos depósitos no Banco Central.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois não é uma taxa de juros; C é errada, pois afeta a liquidez; D é incorreta, pois é obrigatório; e E é falsa, pois é usado globalmente.
      `
    },
    comment: "Esta questão testa o entendimento sobre o recolhimento compulsório, uma ferramenta de controle monetário."
  },
  {
    id: "CB-018",
    topic: "Regulamentações",
    text: "A Lei Geral de Proteção de Dados (LGPD) estabelece regras para o tratamento de dados pessoais por instituições, incluindo bancos, visando proteger a privacidade.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a LGPD:",
    alternatives: [
      { letter: "A", text: "Não se aplica a instituições financeiras." },
      { letter: "B", text: "Estabelece regras para o tratamento de dados pessoais." },
      { letter: "C", text: "Permite o compartilhamento irrestrito de dados entre bancos." },
      { letter: "D", text: "É uma lei opcional para o setor bancário." },
      { letter: "E", text: "Não prevê sanções por descumprimento." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A LGPD estabelece regras para o tratamento de dados pessoais, aplicáveis a bancos.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois se aplica a bancos; C é errada, pois restringe o compartilhamento; D é incorreta, pois é obrigatória; e E é falsa, pois prevê sanções.
      `
    },
    comment: "Esta questão aborda a LGPD, essencial para a proteção de dados no setor bancário."
  },
  {
    id: "CB-019",
    topic: "Operações Bancárias",
    text: "A compensação bancária é o processo de liquidação de obrigações entre bancos, como cheques e transferências.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a compensação bancária:",
    alternatives: [
      { letter: "A", text: "É exclusiva para transações internacionais." },
      { letter: "B", text: "Liquida obrigações entre bancos, como cheques." },
      { letter: "C", text: "Não envolve a liquidação de cheques." },
      { letter: "D", text: "É realizada apenas pelo Banco Central." },
      { letter: "E", text: "Não afeta a liquidez dos bancos." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A compensação bancária liquida obrigações entre bancos, incluindo cheques.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois é nacional; C é errada, pois envolve cheques; D é incorreta, pois ocorre entre bancos; e E é falsa, pois afeta a liquidez.
      `
    },
    comment: "Esta questão aborda a compensação bancária, essencial para o sistema financeiro."
  },
  {
    id: "CB-020",
    topic: "Produtos e Serviços Bancários",
    text: "O Pix é um sistema de pagamentos instantâneos lançado pelo Banco Central, permitindo transferências em tempo real, 24 horas por dia.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o Pix:",
    alternatives: [
      { letter: "A", text: "Funciona apenas em dias úteis." },
      { letter: "B", text: "Permite transferências instantâneas 24 horas por dia." },
      { letter: "C", text: "É exclusivo para pagamentos internacionais." },
      { letter: "D", text: "Não foi desenvolvido pelo Banco Central." },
      { letter: "E", text: "Exige taxas elevadas para todas as transações." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O Pix permite transferências instantâneas 24 horas por dia, conforme o texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois funciona todos os dias; C é errada, pois é nacional; D é incorreta, pois foi criado pelo Banco Central; e E é falsa, pois muitas transações são gratuitas.
      `
    },
    comment: "Esta questão aborda o Pix, uma inovação no sistema de pagamentos brasileiro."
  },
  {
    id: "CB-021",
    topic: "Instituições Financeiras",
    text: "As fintechs são empresas que utilizam tecnologia para oferecer serviços financeiros inovadores, muitas vezes desafiando os modelos tradicionais de bancos.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre as fintechs:",
    alternatives: [
      { letter: "A", text: "São instituições financeiras tradicionais." },
      { letter: "B", text: "Utilizam tecnologia para inovar em serviços financeiros." },
      { letter: "C", text: "Não estão sujeitas a regulamentações." },
      { letter: "D", text: "Operam exclusivamente com moedas digitais." },
      { letter: "E", text: "Não podem oferecer crédito aos clientes." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. As fintechs utilizam tecnologia para inovar em serviços financeiros, como descrito.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois são inovadoras; C é errada, pois são reguladas; D é incorreta, pois não se limitam a moedas digitais; e E é falsa, pois podem oferecer crédito.
      `
    },
    comment: "Esta questão aborda as fintechs, um segmento em crescimento no setor financeiro."
  },
  {
    id: "CB-022",
    topic: "Política Monetária",
    text: "A inflação é o aumento persistente dos preços, e o Banco Central utiliza a política monetária para controlá-la, como o ajuste da taxa de juros.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a inflação:",
    alternatives: [
      { letter: "A", text: "É controlada exclusivamente pelo governo federal." },
      { letter: "B", text: "O Banco Central utiliza a política monetária para combatê-la." },
      { letter: "C", text: "Não afeta o poder de compra da moeda." },
      { letter: "D", text: "É medida pelo índice de preços ao produtor." },
      { letter: "E", text: "Sempre resulta em deflação." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. O Banco Central usa a política monetária para controlar a inflação, como descrito.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois o Banco Central é responsável; C é errada, pois reduz o poder de compra; D é incorreta, pois usa índices como o IPCA; e E é falsa, pois é o oposto de deflação.
      `
    },
    comment: "Esta questão testa o controle da inflação, um tema central em política monetária."
  },
  {
    id: "CB-023",
    topic: "Regulamentações",
    text: "A Resolução CMN 4.935/2021 regula as Sociedades de Crédito Direto (SCD) e as Sociedades de Empréstimo entre Pessoas (SEP), tipos de fintechs.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a Resolução CMN 4.935/2021:",
    alternatives: [
      { letter: "A", text: "Regulamenta apenas as Sociedades de Crédito Direto (SCD)." },
      { letter: "B", text: "Regula SCD e Sociedades de Empréstimo entre Pessoas (SEP)." },
      { letter: "C", text: "Não se aplica a fintechs." },
      { letter: "D", text: "Proíbe a operação de SEP no Brasil." },
      { letter: "E", text: "É uma norma opcional." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. A Resolução CMN 4.935/2021 regula tanto SCD quanto SEP, como descrito.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois abrange SEP; C é errada, pois aplica-se a fintechs; D é incorreta, pois permite SEP; e E é falsa, pois é obrigatória.
      `
    },
    comment: "Esta questão aborda a regulamentação de fintechs, refletindo a modernização do setor."
  },
  {
    id: "CB-024",
    topic: "Operações Bancárias",
    text: "A alienação fiduciária é uma garantia em que o devedor transfere a posse de um bem ao credor até a quitação da dívida.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre a alienação fiduciária:",
    alternatives: [
      { letter: "A", text: "O credor torna-se proprietário definitivo do bem." },
      { letter: "B", text: "O devedor transfere a posse do bem ao credor até quitar a dívida." },
      { letter: "C", text: "Não é utilizada em operações de crédito bancário." },
      { letter: "D", text: "O bem não pode ser recuperado após a quitação." },
      { letter: "E", text: "É uma operação isenta de garantias." }
    ],
    correctAnswer: "B",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa B está correta. Na alienação fiduciária, o devedor transfere a posse ao credor até quitar a dívida.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>B</strong>. A alternativa A é falsa, pois a posse é temporária; C é errada, pois é comum em crédito; D é incorreta, pois o bem é devolvido; e E é falsa, pois é uma garantia.
      `
    },
    comment: "Esta questão aborda a alienação fiduciária, uma garantia comum em financiamentos."
  },
  {
    id: "CB-025",
    topic: "Produtos e Serviços Bancários",
    text: "O seguro de vida é um produto financeiro que garante indenização aos beneficiários em caso de falecimento do segurado, podendo incluir coberturas adicionais.",
    instruction: "Com base no texto acima, assinale a alternativa correta sobre o seguro de vida:",
    alternatives: [
      { letter: "A", text: "É exclusivo de seguradoras, não de bancos." },
      { letter: "B", text: "Garante indenização apenas em caso de invalidez." },
      { letter: "C", text: "Pode incluir coberturas adicionais além do falecimento." },
      { letter: "D", text: "Não pode ser comercializado por instituições financeiras." },
      { letter: "E", text: "É obrigatório para todos os clientes bancários." }
    ],
    correctAnswer: "C",
    explanation: {
      correct: `
        <strong>✓ Resposta correta!</strong><br>
        A alternativa C está correta. O seguro de vida pode incluir coberturas adicionais, como descrito no texto.
      `,
      incorrect: `
        <strong>✗ Resposta incorreta.</strong><br>
        A resposta correta é a alternativa <strong>C</strong>. A alternativa A é falsa, pois bancos podem oferecer; B é errada, pois cobre falecimento; D é incorreta, pois bancos comercializam; e E é falsa, pois não é obrigatório.
      `
    },
    comment: "Esta questão aborda o seguro de vida, um produto importante para proteção financeira."
  }
];