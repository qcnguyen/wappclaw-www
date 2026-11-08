// One place for everything the pages say about where the site and product live.
// Change the domain here (and in public/robots.txt + public/CNAME) when it is decided.
export const SITE_URL = 'https://wappclaw.com';

export const site = {
  name: 'Wappclaw',
  tagline: 'An AI teammate that gets real work done — on your terms.',
  description:
    'Wappclaw gives your team an AI assistant that does real work — connected to your tools and knowledge, running on your own servers, with you in control.',
  keywords:
    'AI assistant for teams, AI agent platform, workflow automation, private AI, self-hosted AI, business automation',
  // Where every "Get started" button goes: the install guide.
  getStartedUrl: '/get-started',
  // Where a license key is bought.
  portalUrl: 'https://portal.wappclaw.com',
  installCommand: 'curl -fsSL https://raw.githubusercontent.com/qcnguyen/wappclaw-dist/main/install.sh | bash',
  themeColor: '#ffffff',
} as const;
