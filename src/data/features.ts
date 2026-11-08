export interface Feature {
  id: string;
  icon: string; // a key of ICONS in components/Icon.astro
  title: string;
  short: string;
  summary: string;
  points: string[];
}

/** What Wappclaw does for a team, in plain words. Home cards + the Features page. */
export const features: Feature[] = [
  {
    id: 'assistant',
    short: 'Team assistant',
    icon: 'chat',
    title: 'An assistant your whole team can use',
    summary:
      'A familiar chat where anyone can ask for help, hand over a job and come back to the result — no training needed.',
    points: [
      'Ask questions, share files and get finished work back, not just answers.',
      'Work keeps going in the background — close the tab and pick it up later.',
      'Every conversation keeps its own files, history and context.',
      'See what the assistant did and why, step by step.',
    ],
  },
  {
    id: 'connected',
    short: 'Your tools',
    icon: 'puzzle',
    title: 'Connected to the tools you already use',
    summary:
      'Plug the assistant into your existing systems so it can look things up and get things done where your work lives.',
    points: [
      'Connect business tools, cloud services and code in a few clicks.',
      'Add new skills from a marketplace as your needs grow.',
      'Credentials stay locked away — the assistant uses tools without seeing passwords.',
      'Give specialist helpers access to sensitive tools without opening them to everyone.',
    ],
  },
  {
    id: 'knowledge',
    short: 'Your knowledge',
    icon: 'book',
    title: 'Grounded in your knowledge',
    summary:
      'Teach the assistant your handbook, policies and products, so its answers sound like your company — not the internet.',
    points: [
      'Organise documents into knowledge sets the assistant can draw on.',
      'Keep them up to date in one place; every conversation sees the latest version.',
      'Undo any change, with a full history of who changed what.',
      'Load only what a conversation needs, so answers stay focused.',
    ],
  },
  {
    id: 'workflows',
    short: 'Workflows',
    icon: 'flow',
    title: 'Repeatable workflows',
    summary:
      'Turn the jobs you do every week into one-click workflows that run the same way every time — or on a schedule.',
    points: [
      'Chain steps together: research, draft, review, publish.',
      'Add approval points so a person signs off before anything important happens.',
      'Run them on demand from the chat, or automatically on a schedule.',
      'Fix a step and re-run from there, without starting over.',
    ],
  },
  {
    id: 'apps',
    short: 'Mini-apps',
    icon: 'apps',
    title: 'Mini-apps for everyday tasks',
    summary:
      'Small, purpose-built apps — trackers, forms, dashboards — that live right next to the chat and work with the assistant.',
    points: [
      'The assistant can design a mini-app for you; you try it before it goes live.',
      'Each app keeps its own data, safely separated from the rest.',
      'Decide who can use each app.',
      'Apps and workflows work together, so results land where people look.',
    ],
  },
  {
    id: 'control',
    short: 'Privacy & control',
    icon: 'shield',
    title: 'Private, secure and in your control',
    summary:
      'Wappclaw runs on your own servers, so conversations, files and settings are stored with you — and administrators decide exactly what the assistant can do.',
    points: [
      'Self-hosted: everything is stored on your servers; only what a task needs is sent to the AI model you choose.',
      'Sign in with your company accounts, with roles for who can do what.',
      'One admin console for everything the assistant can see and do.',
      'Copy a proven setup to another team or office in minutes.',
    ],
  },
];
