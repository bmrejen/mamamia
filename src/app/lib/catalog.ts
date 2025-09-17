export const CATALOG_KEYS = {
  STARTER: 'starter',
  LEARNING: 'learning',
  MASTER: 'master',
} as const;
export type CatalogKey = typeof CATALOG_KEYS[keyof typeof CATALOG_KEYS];

export type CatalogEntry = {
  name: string;
  price: number; // USD
  cards: string;
  description: string;
  key: CatalogKey;
  features: string[];
};

export const catalog: Record<CatalogKey, CatalogEntry> = {
  [CATALOG_KEYS.STARTER]: {
    key: CATALOG_KEYS.STARTER,
    price: 0.99,
    name: 'Starter Deck',
    cards: '250 Cards',
    description: 'Perfect for beginners! Essential English vocabulary with colorful illustrations.',
    features: [
        "250 high-quality flashcards",
        "Basic English vocabulary",
        "Colorful illustrations",
        "Pronunciation guides",
        "Durable cardstock",
        "Free shipping",
    ]
  },
  [CATALOG_KEYS.LEARNING]: {
    key: CATALOG_KEYS.LEARNING,
    price: 39.99,
    name: 'Learning Deck',
    cards: '500 Cards',
    description: 'Our most popular choice! Comprehensive vocabulary covering everyday English.',
    features: [
        "500 high-quality flashcards",
        "Comprehensive vocabulary",
        "Everyday English phrases",
        "Engaging visuals",
        "Durable cardstock",
        "Free shipping",
        "Bonus: Learning guide",
    ]
  },
  [CATALOG_KEYS.MASTER]: {
    key: CATALOG_KEYS.MASTER,
    price: 59.99,
    name: 'Master Deck',
    cards: '1000 Cards',
    description: 'Complete English learning system! Advanced vocabulary, grammar, and conversation starters.',
    features: [
        "1000 high-quality flashcards",
        "Advanced vocabulary",
        "Grammar concepts",
        "Conversation starters",
        "Durable cardstock",
        "Free shipping",
        "Bonus: Learning guide",
        "Bonus: Progress tracker",
    ]
  },
};

export const publicCatalog: Readonly<Record<CatalogKey, Readonly<CatalogEntry>>> = catalog;


