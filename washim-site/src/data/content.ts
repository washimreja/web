/** All page copy lives here so sections stay presentational. */

export const heroCards = [
  {
    tag: 'Build',
    title: 'Turn a rough idea into a working first version.',
    note: 'Decisions get made on something real, not a slide.',
    tint: 'bg-mint-tint',
    pos: 'lg:left-[4%] lg:top-[6%] lg:-rotate-1',
  },
  {
    tag: 'Automate',
    title: 'Wire models into the tools your work already lives in.',
    note: 'Fewer tabs, fewer copy-paste steps.',
    tint: 'bg-amber-tint',
    pos: 'lg:left-[30%] lg:top-[36%] lg:rotate-2',
  },
  {
    tag: 'Ship',
    title: 'Hand over software that is tested, documented and yours.',
    note: 'Source, notes and limits included.',
    tint: 'bg-signal-tint',
    pos: 'lg:left-[10%] lg:top-[66%] lg:rotate-1',
  },
]

export const focusAreas = [
  { icon: 'bot', label: 'Focus', value: 'AI agents and LLM systems' },
  { icon: 'layout', label: 'Focus', value: 'Full-stack product engineering' },
  { icon: 'workflow', label: 'Focus', value: 'Automation and developer tooling' },
]

export const capabilityPrinciples = [
  'Agents, not chat widgets.',
  'Retrieval, not guesswork.',
  'Evaluation, not vibes.',
  'Guardrails, not hope.',
]

export const capabilities = [
  {
    key: 'agents',
    tag: 'Agents',
    title: 'Agents that act.',
    blurb: 'Models that call tools and finish a task, not just describe it.',
    detail: [
      'Tool calling with typed inputs and outputs',
      'Multi-step plans that can pause and resume',
      'Clear hand-off to a person when unsure',
    ],
    tint: 'bg-mint-tint',
    tagColor: 'text-mint',
    span: 'col-span-6 sm:col-span-3 lg:col-span-7',
    tall: true,
  },
  {
    key: 'retrieval',
    tag: 'Retrieval',
    title: 'Answers with sources.',
    blurb: 'Search over your own documents, with the citation attached.',
    detail: [
      'Ingestion and chunking tuned to the content',
      'Hybrid keyword and vector search',
      'Every answer links back to where it came from',
    ],
    tint: 'bg-sky-tint',
    tagColor: 'text-sky',
    span: 'col-span-6 sm:col-span-3 lg:col-span-5',
    tall: true,
  },
  {
    key: 'automation',
    tag: 'Automation',
    title: 'Workflows that run.',
    blurb: 'Repetitive steps turned into a reliable pipeline.',
    detail: [
      'Triggers from email, chat, forms or a schedule',
      'Retries, queues and failure alerts',
      'A run log you can actually read',
    ],
    tint: 'bg-amber-tint',
    tagColor: 'text-amber',
    span: 'col-span-6 sm:col-span-3',
    tall: false,
  },
  {
    key: 'interfaces',
    tag: 'Interfaces',
    title: 'Products people use.',
    blurb: 'Fast, accessible front ends around the intelligence.',
    detail: [
      'React and TypeScript interfaces',
      'Streaming responses and optimistic UI',
      'Responsive and keyboard friendly by default',
    ],
    tint: 'bg-coral-tint',
    tagColor: 'text-coral',
    span: 'col-span-6 sm:col-span-3',
    tall: false,
  },
  {
    key: 'evaluation',
    tag: 'Evaluation',
    title: 'Measured output.',
    blurb: 'Test sets and scoring, so quality is a number.',
    detail: [
      'Golden examples from real requests',
      'Regression checks before each release',
      'Cost and latency tracked next to quality',
    ],
    tint: 'bg-signal-tint',
    tagColor: 'text-signal',
    span: 'col-span-6 sm:col-span-3',
    tall: false,
  },
  {
    key: 'restraint',
    tag: 'Restraint',
    title: 'Knowing when to stop.',
    blurb: 'Sometimes the right design is a rule, not a model.',
    detail: [
      'Plain code where plain code is enough',
      'Approval steps before irreversible actions',
      'Limits written down, not discovered later',
    ],
    tint: 'bg-ink text-surface',
    tagColor: 'text-lime',
    span: 'col-span-6 sm:col-span-3',
    tall: false,
  },
]

export const useCases = [
  {
    tag: 'Prototype / validate',
    quote: 'I need to know if this idea works before I spend months on it.',
    body: 'I build a narrow, working first version around the riskiest assumption, so you can test it with real inputs.',
    outcome: 'You get a prototype to try, not a deck to read.',
    tint: 'bg-mint-tint',
  },
  {
    tag: 'Automate / integrate',
    quote: 'We repeat the same ten steps every single day.',
    body: 'I map the steps, keep the judgment calls with a person, and turn the rest into a pipeline with logs and alerts.',
    outcome: 'The routine runs itself. The decisions stay yours.',
    tint: 'bg-amber-tint',
  },
  {
    tag: 'Knowledge / retrieval',
    quote: 'The answer is somewhere in our docs. Nobody can find it.',
    body: 'I index the documents you already have and put a search-and-answer layer on top that always shows its sources.',
    outcome: 'Questions get answers you can check.',
    tint: 'bg-sky-tint',
  },
  {
    tag: 'Product / ship',
    quote: 'The demo works. Now it has to survive real users.',
    body: 'I add the unglamorous parts: auth, error handling, evaluation, monitoring and a deploy you can repeat.',
    outcome: 'A demo becomes software you can rely on.',
    tint: 'bg-signal-tint',
  },
]

export const trustRules = [
  'Least privilege first. Every tool and key gets only the access it needs.',
  'Secrets never reach the model. Credentials stay outside the prompt.',
  'A person approves anything irreversible: sending, paying, deleting.',
  'Every action is logged, so you can see what happened and why.',
]

export const trustPair = {
  avoid: '“The agent has full access so it can be helpful.”',
  prefer: '“The agent drafts the email. You press send.”',
}

export type MemoryScope = 'Projects' | 'Preferences' | 'Stack'

export const memoryFacts: { id: number; fact: string; source: string; scope: MemoryScope; chips: string[] }[] = [
  {
    id: 1,
    fact: 'Prefers TypeScript for new services.',
    source: 'Noticed while scaffolding an API project.',
    scope: 'Stack',
    chips: ['Visible to you', 'Editable'],
  },
  {
    id: 2,
    fact: 'Is preparing a product launch this quarter.',
    source: 'Came up while planning a release checklist.',
    scope: 'Projects',
    chips: ['Expires after launch', 'Not shared'],
  },
  {
    id: 3,
    fact: 'Wants summaries as short bullet points.',
    source: 'Stated directly in a conversation.',
    scope: 'Preferences',
    chips: ['Stated, not inferred', 'Removable'],
  },
  {
    id: 4,
    fact: 'Uses PostgreSQL for the main database.',
    source: 'Mentioned while debugging a migration.',
    scope: 'Stack',
    chips: ['Visible to you', 'Scoped to work'],
  },
  {
    id: 5,
    fact: 'Reviews pull requests in the morning.',
    source: 'Noticed across several scheduling requests.',
    scope: 'Preferences',
    chips: ['Inferred', 'Removable'],
  },
]

export const systemStages = [
  {
    key: 'signal',
    tag: 'Signal',
    title: 'Intent arrives in plain language.',
    body: 'A message, a file or an event. A router works out what kind of request it is before anything runs.',
    nodes: [0, 1],
  },
  {
    key: 'reason',
    tag: 'Reason',
    title: 'A model plans with context.',
    body: 'Relevant memory and documents are retrieved, then the model proposes the next step instead of guessing.',
    nodes: [1, 2],
  },
  {
    key: 'act',
    tag: 'Act',
    title: 'Tools run inside limits.',
    body: 'Actions go through typed tools. Risky ones wait for approval, and every result is logged.',
    nodes: [3, 4, 5],
  },
]

export const systemNodes = [
  { icon: 'message', label: 'Input', sub: 'chat, file, event' },
  { icon: 'branch', label: 'Router', sub: 'classify intent' },
  { icon: 'database', label: 'Context', sub: 'memory + retrieval' },
  { icon: 'wrench', label: 'Tools', sub: 'typed actions' },
  { icon: 'shield', label: 'Review', sub: 'approve + log' },
  { icon: 'check', label: 'Outcome', sub: 'done or handed off' },
]

export const stance = {
  quote: 'Small, working and honest beats big and vague.',
  points: [
    { title: 'A model is not always the answer.', body: 'If a rule or a query does the job, that is what I build.' },
    { title: 'A demo is not a product.', body: 'I plan for errors, cost and maintenance from the first week.' },
    { title: 'A limit is not a failure.', body: 'What the system will not do is written down next to what it will.' },
  ],
}

export const services = [
  { title: 'AI agents and assistants', body: 'Task-focused agents with tools, memory and a clear hand-off to people.' },
  { title: 'Retrieval and knowledge search', body: 'Question answering over your documents, with sources on every answer.' },
  { title: 'Workflow automation', body: 'Pipelines that connect the apps you use, with retries and readable logs.' },
  { title: 'Full-stack web applications', body: 'React front ends and typed back ends, designed, built and deployed.' },
  { title: 'APIs and integrations', body: 'Clean, documented endpoints and connections to third-party services.' },
  { title: 'LLM evaluation and testing', body: 'Test sets, scoring and regression checks so changes are safe to ship.' },
  { title: 'Developer tooling', body: 'CLIs, scripts and internal tools that remove friction from a team’s day.' },
  { title: 'Prototypes and MVPs', body: 'A focused first version to test an idea before committing to the full build.' },
]

export const guides = [
  {
    title: 'How to scope a first AI feature',
    summary: 'Pick one task, define done, and decide what the model must never do.',
    steps: [
      'Choose a single, frequent task with a clear input and output. Avoid “an assistant for everything”.',
      'Write ten real examples of the input and the answer you would accept. This becomes your first test set.',
      'List the actions that need a person to approve, such as sending, paying or deleting.',
      'Build the thinnest version that handles those ten examples, then measure it before adding scope.',
    ],
  },
  {
    title: 'How to give an agent tools safely',
    summary: 'Typed tools, narrow permissions and an approval step for anything irreversible.',
    steps: [
      'Expose small, specific tools (“create draft”, “read invoice”) rather than one general one.',
      'Validate every tool input in code. Never trust the model to stay inside the rules.',
      'Keep credentials in the tool layer so they never appear in a prompt or a response.',
      'Mark tools as read, write or irreversible, and require confirmation for the last group.',
      'Log each call with its input, result and who approved it.',
    ],
  },
  {
    title: 'How to make retrieval answers checkable',
    summary: 'Good chunks, hybrid search, and a citation on every claim.',
    steps: [
      'Split documents along their natural structure, such as headings and sections, not fixed character counts.',
      'Combine keyword and vector search. Each catches cases the other misses.',
      'Pass only the top few passages to the model and ask it to answer from them alone.',
      'Return the source passage with each answer, and say “not found” when nothing relevant comes back.',
    ],
  },
  {
    title: 'How to evaluate an LLM feature before launch',
    summary: 'A small golden set and a repeatable score beat a hundred spot checks.',
    steps: [
      'Collect 30 to 50 real requests that cover normal, tricky and out-of-scope cases.',
      'Decide how each is scored: exact match, a rubric, or a short human review.',
      'Run the full set on every prompt or model change, and track the score over time.',
      'Record cost and latency next to quality, so trade-offs are visible.',
    ],
  },
  {
    title: 'How to design memory users can trust',
    summary: 'Store dull facts, show them plainly, and let people delete them.',
    steps: [
      'Save short, factual statements, not raw conversation history.',
      'Record where each fact came from and whether it was stated or inferred.',
      'Give every fact a scope and an expiry, so old context does not leak into new work.',
      'Provide a plain page where the person can read, edit and remove what is stored.',
    ],
  },
]

export const faqs = [
  {
    q: 'What kind of work do you take on?',
    a: 'AI agents, retrieval systems, workflow automation and the full-stack software around them. The best fit is a specific problem with a clear owner, where a working first version would settle open questions.',
  },
  {
    q: 'Do you work alone or with a team?',
    a: 'I work independently and can also work alongside an existing team: taking a defined piece of the system, or helping engineers add AI features to a product they already run.',
  },
  {
    q: 'How does a project usually start?',
    a: 'With a short written brief: the problem, who has it, and what done looks like. From that I propose a scope, the main risks and a first milestone that produces something you can try.',
  },
  {
    q: 'How do you handle private data?',
    a: 'Access is limited to what the task needs, credentials are kept out of prompts, and anything irreversible waits for a person to approve it. Which model providers see which data is agreed before any is sent.',
  },
  {
    q: 'What do I receive at the end?',
    a: 'The source code, setup and deployment notes, the evaluation set used to test it, and a plain list of what the system does and does not do.',
  },
  {
    q: 'Where are you based?',
    a: 'In India, working remotely.',
  },
]
