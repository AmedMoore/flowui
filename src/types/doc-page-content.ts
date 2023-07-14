export type DocPageTocItem = {
  label: string;
  slug: string;
  level: number;
};

export type DocPageContent = {
  meta: {
    title?: string;
    description?: string;
  };
  toc: DocPageTocItem[];
  content: string;
};
