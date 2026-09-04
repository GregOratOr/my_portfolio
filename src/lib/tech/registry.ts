import type { AccentToken } from "@/lib/theme/accents";

/**
 * The technology library: metadata only.
 *
 * Icons are static files under `public/icons/tech/<slug>.svg`, so none of this
 * ships SVG markup to the browser. `mono` marks icons drawn with
 * `fill="currentColor"` -- those get tinted with the accent, brand-coloured
 * icons are rendered as-is.
 */

export const TECH_CATEGORIES = [
  "language",
  "ml",
  "web",
  "data",
  "tooling",
  "platform",
  "graphics",
] as const;

export type TechCategory = (typeof TECH_CATEGORIES)[number];

export const TECH_CATEGORY_LABELS: Record<TechCategory, string> = {
  language: "Languages",
  ml: "Machine Learning",
  web: "Web",
  data: "Databases",
  tooling: "Tooling & DevOps",
  platform: "Platforms",
  graphics: "Graphics & Simulation",
};

export interface TechMeta {
  label: string;
  /** Filename stem under public/icons/tech/. */
  slug: string;
  accent: AccentToken;
  category: TechCategory;
  /** Icon is single-colour and should inherit the accent. */
  mono?: boolean;
}

export const TECH_REGISTRY = {
  PYTHON: { label: "Python 3", slug: "python", accent: "yellow", category: "language" },
  CPP: { label: "C++", slug: "cpp", accent: "blue", category: "language" },
  CSHARP: { label: "C#", slug: "csharp", accent: "purple", category: "language" },
  JAVA: { label: "Java", slug: "java", accent: "red", category: "language" },
  JAVASCRIPT: { label: "JavaScript", slug: "javascript", accent: "yellow", category: "language" },
  RUST: { label: "Rust", slug: "rust", accent: "orange", category: "language" },
  CUDA: { label: "CUDA", slug: "cuda", accent: "lime", category: "language" },

  PYTORCH: { label: "PyTorch", slug: "pytorch", accent: "orange", category: "ml" },
  TENSORFLOW: { label: "TensorFlow", slug: "tensorflow", accent: "amber", category: "ml" },
  OPENCV: { label: "OpenCV", slug: "concept", accent: "green", category: "ml", mono: true },
  DL: { label: "Deep Learning", slug: "concept", accent: "fuchsia", category: "ml", mono: true },
  RL: {
    label: "Reinforcement Learning",
    slug: "concept",
    accent: "violet",
    category: "ml",
    mono: true,
  },
  COMPUTERVISION: {
    label: "Computer Vision",
    slug: "concept",
    accent: "pink",
    category: "ml",
    mono: true,
  },
  MULTIAGENTSYS: {
    label: "Multiagent Systems",
    slug: "concept",
    accent: "indigo",
    category: "ml",
    mono: true,
  },

  NEXTJS: { label: "Next.js", slug: "nextjs", accent: "neutral", category: "web", mono: true },
  REACT: { label: "React", slug: "react", accent: "cyan", category: "web" },
  STREAMLIT: { label: "Streamlit", slug: "streamlit", accent: "rose", category: "web" },

  POSTGRESQL: { label: "PostgreSQL", slug: "postgresql", accent: "blue", category: "data" },
  MYSQL: { label: "MySQL", slug: "mysql", accent: "blue", category: "data" },
  MSSQL: { label: "Microsoft SQL Server", slug: "mssql", accent: "red", category: "data" },

  DOCKER: { label: "Docker", slug: "docker", accent: "sky", category: "tooling" },
  GIT: { label: "Git", slug: "git", accent: "orange", category: "tooling" },
  GITHUB: { label: "GitHub", slug: "github", accent: "neutral", category: "tooling", mono: true },
  N8N: { label: "n8n", slug: "n8n", accent: "red", category: "tooling" },
  LATEX: { label: "LaTeX", slug: "latex", accent: "emerald", category: "tooling", mono: true },
  ANACONDA: { label: "Anaconda", slug: "anaconda", accent: "green", category: "tooling" },
  JUPYTERLAB: { label: "JupyterLab", slug: "jupyterlab", accent: "orange", category: "tooling" },

  LINUX: { label: "Linux", slug: "linux", accent: "yellow", category: "platform" },
  UBUNTU: { label: "Ubuntu", slug: "ubuntu", accent: "orange", category: "platform" },

  UNITY: { label: "Unity", slug: "unity", accent: "neutral", category: "graphics", mono: true },
  UNREALENGINE4: {
    label: "Unreal Engine 4",
    slug: "unrealengine4",
    accent: "neutral",
    category: "graphics",
    mono: true,
  },
  MAYA: { label: "Autodesk Maya", slug: "maya", accent: "teal", category: "graphics" },
  SIMULATION: {
    label: "Simulation",
    slug: "concept",
    accent: "neutral",
    category: "graphics",
    mono: true,
  },
} as const satisfies Record<string, TechMeta>;

export type TechId = keyof typeof TECH_REGISTRY;

export const TECH_IDS = Object.keys(TECH_REGISTRY) as TechId[];

export function getTech(id: TechId): TechMeta {
  return TECH_REGISTRY[id];
}

export function techIconPath(id: TechId): string {
  return `/icons/tech/${TECH_REGISTRY[id].slug}.svg`;
}

/** Groups ids by category, preserving registry order and skipping empty groups. */
export function groupTechByCategory(
  ids: readonly TechId[],
): { category: TechCategory; label: string; ids: TechId[] }[] {
  return TECH_CATEGORIES.map((category) => ({
    category,
    label: TECH_CATEGORY_LABELS[category],
    ids: ids.filter((id) => TECH_REGISTRY[id].category === category),
  })).filter((group) => group.ids.length > 0);
}
