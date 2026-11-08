export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  /** Trusted HTML, written here by hand. */
  content: string;
  author: string;
  date: string; // YYYY-MM-DD
  tags: string[];
}

// Each entry gets a page at /articles/<slug>.
export const articles: Article[] = [
  {
    slug: 'run-wappclaw-in-a-docker-sandbox',
    title: 'Try Wappclaw in an isolated Ubuntu sandbox',
    excerpt:
      'No spare Ubuntu server? Run Wappclaw inside a Docker Sandbox (sbx): an isolated Linux environment on your Mac, Windows or Linux machine. Four steps, and you can try it before buying a license.',
    author: 'Wappclaw team',
    date: '2026-11-08',
    tags: ['How-to', 'Install', 'Sandbox'],
    content: `
<p>
  Wappclaw installs on Ubuntu. No Ubuntu server to spare? You can try it on your own Mac, Windows or Linux
  machine inside a <a href="https://docs.docker.com/ai/sandboxes/">Docker Sandbox</a>: a small, isolated Linux
  environment that keeps Wappclaw apart from the rest of your computer. When you're done, one command removes it.
</p>

<div class="note">
  <p><strong>Just trying it out?</strong> Wappclaw runs without a license, so you can try it right away
  and buy a key later.</p>
</div>

<h2>1. Install Docker Sandboxes</h2>
<p>
  Follow Docker's <a href="https://docs.docker.com/ai/sandboxes/get-started/">Get started guide</a>
  (it also lists the system requirements). In short:
</p>
<div class="term term-host"><div class="term-label">On your computer</div><pre><code># macOS
brew trust docker/tap
brew install docker/tap/sbx

# Windows
winget install -h Docker.sbx

# Ubuntu
curl -fsSL https://get.docker.com | sudo REPO_ONLY=1 sh
sudo apt install docker-sbx</code></pre></div>
<p>Then sign in with your Docker account:</p>
<div class="term term-host"><div class="term-label">On your computer</div><pre><code>sbx login</code></pre></div>

<h2>2. Start a sandbox</h2>
<div class="term term-host"><div class="term-label">On your computer</div><pre><code>mkdir wappclaw && cd wappclaw
sbx run --publish 5173:5173 --name wappclaw shell</code></pre></div>
<p>
  This opens a shell inside a new sandbox and makes Wappclaw's port 5173 available on your machine.
  From here on, commands marked <strong>Inside the sandbox</strong> go in this shell.
  If sbx asks you to choose a network policy, pick <strong>Balanced</strong>.
</p>

<h2>3. Install Wappclaw inside the sandbox</h2>
<p>Install Node.js 22 and a few tools, then run the usual installer:</p>
<div class="term term-sandbox"><div class="term-label">Inside the sandbox</div><pre><code>sudo apt-get update
sudo apt-get install -y git lsof curl util-linux
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

curl -fsSL https://raw.githubusercontent.com/qcnguyen/wappclaw-dist/main/install.sh | bash
export PATH="$HOME/.local/bin:$PATH"
wapp start</code></pre></div>
<p>If sbx asks whether to allow a download, allow it.</p>

<h2>4. Open Wappclaw</h2>
<p>
  On your computer, open <a href="http://localhost:5173/">http://localhost:5173/</a> for the chat and
  <a href="http://localhost:5173/admin/">http://localhost:5173/admin/</a> for the admin app.
</p>

<h2>Stop, come back, or remove it</h2>
<div class="term term-host"><div class="term-label">On your computer</div><pre><code>sbx stop wappclaw          # stop the sandbox
sbx run --name wappclaw    # come back later
sbx rm wappclaw            # delete the sandbox and everything in it</code></pre></div>
<p>
  When you come back, run <code>wapp start</code> inside the sandbox again. Stopping keeps everything you
  installed; only <code>sbx rm</code> deletes it.
</p>

<h2>Learn more</h2>
<ul>
  <li><a href="https://docs.docker.com/ai/sandboxes/">Docker Sandboxes overview</a></li>
  <li><a href="https://docs.docker.com/ai/sandboxes/get-started/">Get started</a> and
    <a href="https://docs.docker.com/ai/sandboxes/install/">install requirements</a></li>
  <li><a href="https://docs.docker.com/ai/sandboxes/usage/">Using sandboxes</a> (ports, stopping, removing)</li>
</ul>

<p>
  Ready for a real deployment? Follow the <a href="/get-started">install guide</a> on an Ubuntu server.
</p>
`,
  },
];
