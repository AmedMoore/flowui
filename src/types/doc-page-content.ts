export type DocPageTocItem = {
  label: string;
  slug: string;
  level: number;
  children: DocPageTocItem[];
};

export type DocPageContent = {
  meta: {
    title?: string;
    description?: string;
  };
  toc: DocPageTocItem[];
  content: string;
};
