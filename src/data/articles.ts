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

// No articles yet. Add entries here; each gets a page at /articles/<slug>.
export const articles: Article[] = [];
