export const HERO =
  "https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/0c4e4ca0-1573-4e86-838e-858237b53200/public";

export const SITE = {
  name: "ErrorFound",
  domain: "errorfound.net",
  url: "https://errorfound.net",
  email: "erg@errorfound.net",
  phone: "",
  city: "Phoenix, Arizona",
} as const;

export const CATEGORIES = [
  { id: "brandable", label: "Brandable" },
  { id: "tech", label: "Technology" },
  { id: "security", label: "Security" },
  { id: "health", label: "Health" },
  { id: "geo", label: "Geography" },
  { id: "ai", label: "AI" },
  { id: "short", label: "Short" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type DomainListing = {
  name: string;
  price: number | null;
  category: CategoryId;
  featured: boolean;
  tagline: string;
  summary: string;
  uses: string[];
  keywords: string[];
};

export const LISTINGS: DomainListing[] = [
  {
    name: "errorfound.net",
    price: null,
    category: "brandable",
    featured: true,
    tagline: "The flagship name. Precise, technical, and immediately understood.",
    summary:
      "errorfound.net is a premium .net for a company that finds what breaks — observability, incident response, QA, or developer tools. It is short enough to say out loud, specific enough to rank, and free of the trademark collisions that sink generic ‘error’ brands.",
    uses: [
      "Incident response or SRE platform",
      "Developer tools and debugging products",
      "Security research or bug-bounty brand",
    ],
    keywords: ["error", "found", "debug", "incident", "brandable", "premium"],
  },
  {
    name: "rootcause.ai",
    price: 18500,
    category: "ai",
    featured: true,
    tagline: "An AI-native name for the team that explains the outage.",
    summary:
      "rootcause.ai pairs a phrase operators already use with the .ai extension buyers expect in 2026. It fits postmortem tools, diagnostic copilots, and reliability products that need to sound established on day one.",
    uses: ["AI diagnostics", "Postmortem software", "Reliability copilots"],
    keywords: ["root cause", "ai", "sre", "premium", "investment"],
  },
  {
    name: "nullstate.com",
    price: 9900,
    category: "brandable",
    featured: true,
    tagline: "A clean .com with engineering slang built in.",
    summary:
      "nullstate.com reads like a product, not a keyword pile. It works for infrastructure software, a studio, or a holding brand that wants a .com without paying seven figures for a dictionary word.",
    uses: ["Developer platform", "Studio or holding company", "Infrastructure brand"],
    keywords: ["null", "state", "com", "brandable", "premium"],
  },
  {
    name: "incidentbay.com",
    price: 7200,
    category: "security",
    featured: true,
    tagline: "Where incidents come ashore and get handled.",
    summary:
      "incidentbay.com is a concrete place-name for security operations, on-call, and status communication. Buyers in security and business niches recognize the word ‘incident’ before they finish reading the URL.",
    uses: ["SOC platform", "Status and comms", "Managed detection"],
    keywords: ["incident", "security", "soc", "business"],
  },
  {
    name: "offerwire.com",
    price: 8800,
    category: "brandable",
    featured: true,
    tagline: "A transaction name that already sounds like a close.",
    summary:
      "offerwire.com is built for marketplaces, brokerage, and deal flow. Two familiar words, one .com, no hyphens. It can carry a domain brokerage, a B2B offer desk, or a payments-adjacent product.",
    uses: ["Domain brokerage", "Deal marketplace", "B2B offers"],
    keywords: ["offer", "wire", "marketplace", "broker"],
  },
  {
    name: "chainaudit.io",
    price: 7700,
    category: "ai",
    featured: true,
    tagline: "Audit language, infrastructure extension.",
    summary:
      "chainaudit.io suits security reviews, smart-contract work, or supply-chain verification. The .io keeps it in the technical buyer’s vocabulary without locking the brand to a single chain.",
    uses: ["Security audits", "Supply-chain proof", "Compliance software"],
    keywords: ["audit", "chain", "security", "crypto"],
  },
  {
    name: "clinicstack.com",
    price: 6800,
    category: "health",
    featured: false,
    tagline: "A stack name clinics can put on a slide.",
    summary:
      "clinicstack.com is a straightforward healthcare operations name: scheduling, facilities, EHR-adjacent tools, or a multi-site clinic group. It says what it is, which is what patients and buyers both prefer.",
    uses: ["Clinic operations software", "Multi-site health group", "Health IT"],
    keywords: ["clinic", "health", "stack", "ehr"],
  },
  {
    name: "stacksignal.io",
    price: 6200,
    category: "tech",
    featured: false,
    tagline: "Telemetry, without the tongue-twister.",
    summary:
      "stacksignal.io is an observability name that still sounds like a company. Useful for monitoring, alerting, and platform engineering products that need a .io and a verb-free brand.",
    uses: ["Monitoring", "Alerting", "Platform engineering"],
    keywords: ["stack", "signal", "observability", "tech"],
  },
  {
    name: "faultpath.com",
    price: 8500,
    category: "tech",
    featured: true,
    tagline: "The path from symptom to the line that failed.",
    summary:
      "faultpath.com is a premium technology .com for debugging, tracing, and QA. It is easy to spell after hearing it once — the test that kills most invented names.",
    uses: ["Tracing tools", "QA platforms", "Developer education"],
    keywords: ["fault", "path", "debug", "tech", "premium"],
  },
  {
    name: "tracewell.io",
    price: 5500,
    category: "tech",
    featured: false,
    tagline: "Tracing, with a proper name instead of a feature list.",
    summary:
      "tracewell.io feels like a firm. It fits distributed tracing, logging, or a consultancy that lives inside other people’s production systems.",
    uses: ["Distributed tracing", "SRE consultancy", "Logging product"],
    keywords: ["trace", "observability", "tech"],
  },
  {
    name: "patchwright.com",
    price: 5400,
    category: "brandable",
    featured: false,
    tagline: "A craft name for people who ship the fix.",
    summary:
      "patchwright.com borrows ‘wright’ — a maker — and bolts it to the patch. Strong for a devtools studio, a maintenance product, or a security fix service.",
    uses: ["Devtools studio", "Patch management", "Security fixes"],
    keywords: ["patch", "brandable", "devtools"],
  },
  {
    name: "chartlane.com",
    price: 5100,
    category: "health",
    featured: false,
    tagline: "Clinical, calm, and obviously a .com.",
    summary:
      "chartlane.com works for health records navigation, care coordination, or analytics that sit beside the chart. It avoids clinical jargon that patients cannot pronounce.",
    uses: ["Care coordination", "Chart analytics", "Health software"],
    keywords: ["chart", "health", "clinic"],
  },
  {
    name: "debuglane.com",
    price: 4800,
    category: "tech",
    featured: false,
    tagline: "A lane for the work that happens after the page goes red.",
    summary:
      "debuglane.com is a clear technology name for debugging tools, education, or a support product. Dictionary-clear, hyphen-free, and priced under a typical seed-stage rename.",
    uses: ["Debugging product", "Developer education", "Support tooling"],
    keywords: ["debug", "tech", "developer"],
  },
  {
    name: "ledgerfault.com",
    price: 4400,
    category: "security",
    featured: false,
    tagline: "When the books and the systems disagree.",
    summary:
      "ledgerfault.com bridges finance and engineering. It fits reconciliation software, audit logs, or fintech reliability — a niche where exact names still trade quietly.",
    uses: ["Fintech reliability", "Reconciliation", "Audit logs"],
    keywords: ["ledger", "fault", "fintech", "security"],
  },
  {
    name: "uptimearc.com",
    price: 4200,
    category: "tech",
    featured: false,
    tagline: "Uptime, drawn as an arc instead of a percentage.",
    summary:
      "uptimearc.com is a status and reliability name. It can front a monitoring product, an MSP, or a public status brand without sounding like a coupon site.",
    uses: ["Status pages", "MSP brand", "Reliability marketing"],
    keywords: ["uptime", "reliability", "tech"],
  },
  {
    name: "opsly.net",
    price: 4100,
    category: "short",
    featured: false,
    tagline: "Five letters. Operations, said quickly.",
    summary:
      "opsly.net is a short brandable for operators — facilities, IT, or clinical ops. Five characters, one syllable cluster, easy on a badge or a truck.",
    uses: ["Operations software", "Facilities brand", "IT services"],
    keywords: ["ops", "short", "brandable"],
  },
  {
    name: "logharbor.com",
    price: 3900,
    category: "security",
    featured: false,
    tagline: "A harbor for the logs you are required to keep.",
    summary:
      "logharbor.com is literal in the best way: storage, SIEM-adjacent search, or compliance retention. Buyers searching security names understand it with no deck.",
    uses: ["Log management", "Compliance retention", "SIEM front-end"],
    keywords: ["log", "security", "compliance"],
  },
  {
    name: "brightpatch.com",
    price: 3600,
    category: "brandable",
    featured: false,
    tagline: "Optimistic, specific, and still about the fix.",
    summary:
      "brightpatch.com is a friendlier brandable for maintenance, updates, or a studio that ships improvements. It stays out of the red-alert aesthetic on purpose.",
    uses: ["Update product", "Studio", "Customer success tools"],
    keywords: ["patch", "brandable", "software"],
  },
  {
    name: "northsignal.com",
    price: 3100,
    category: "geo",
    featured: false,
    tagline: "A directional name for alerts that matter.",
    summary:
      "northsignal.com can anchor a regional technology firm or an alerting product. Geography-adjacent without being pinned to one city — useful if the company moves.",
    uses: ["Regional MSP", "Alerting product", "Field services"],
    keywords: ["signal", "geo", "regional"],
  },
  {
    name: "clearfault.com",
    price: 2900,
    category: "brandable",
    featured: false,
    tagline: "Say the outcome, not the outage.",
    summary:
      "clearfault.com is a resolution name: the fault gets cleared. It fits support software, a services firm, or a reliability brand that wants to sound finished, not frantic.",
    uses: ["Support software", "Reliability services", "NOC brand"],
    keywords: ["fault", "clear", "brandable"],
  },
  {
    name: "phoenixrack.com",
    price: 2800,
    category: "geo",
    featured: false,
    tagline: "A Valley name for metal, power, and servers.",
    summary:
      "phoenixrack.com is a geographic infrastructure name — colocation, facilities, or edge hardware with a Phoenix anchor. Concrete nouns outperform abstract coinages in local search.",
    uses: ["Colocation", "Facilities", "Edge hardware"],
    keywords: ["phoenix", "rack", "geo", "datacenter"],
  },
  {
    name: "vexlog.com",
    price: 2600,
    category: "short",
    featured: false,
    tagline: "Six letters for a log product that wants to sound sharp.",
    summary:
      "vexlog.com is a short technology brand: logging, error intake, or a developer CLI. Compact enough for a prompt, distinct enough to trademark-search cleanly.",
    uses: ["Logging product", "CLI tool", "Error intake"],
    keywords: ["log", "short", "developer"],
  },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  minutes: number;
  kicker: string;
  blocks: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "how-premium-domains-are-priced",
    title: "How premium domain names are actually priced",
    description:
      "A practical valuation guide for buyers comparing .com, .net, .io, and .ai names — comparable sales, length, and what not to overpay for.",
    date: "2026-09-12",
    minutes: 7,
    kicker: "Valuation",
    blocks: [
      {
        paragraphs: [
          "A premium domain is not priced like a hosting plan. It is priced like a one-of-one asset: there is no second errorfound.net, and the seller does not restock. That is why marketplaces publish an asking price or take offers instead of a shopping-cart discount.",
          "Serious buyers underwrite four things before they talk price: the extension, the length of the name to the left of the dot, whether a human can spell it after hearing it once, and whether the words already mean something in the buyer’s industry.",
        ],
      },
      {
        heading: "What moves the number",
        list: [
          "Extension. A clean .com still clears more than the same words on .net or .io. .ai carries a premium only when the product is actually AI.",
          "Length. Under eight characters in the second-level name is a different market from a three-word phrase.",
          "Commercial intent. ‘Incident’, ‘clinic’, ‘audit’, and ‘offer’ attract buyers with budgets. Empty invented syllables do not.",
          "Collision risk. If a famous product already owns the words, you are buying a rename problem.",
        ],
      },
      {
        heading: "How to make an offer without wasting a month",
        paragraphs: [
          "Open with a number you can fund, not a number you hope starts a debate. Say what the name is for. Ask for escrow, not a wire to a personal account. A complete transfer is registrar push or auth-code, then the buyer confirms control, then escrow releases funds.",
          "On this site, names with a published price can be opened at that figure. errorfound.net is offered without a public bin — send a number and a use case to erg@errorfound.net and the agent replies directly.",
        ],
      },
    ],
  },
  {
    slug: "what-makes-a-name-worth-buying",
    title: "What makes a brandable domain worth buying",
    description:
      "Length, spelling, extension, and commercial meaning — the checks we use before a name goes into the ErrorFound portfolio.",
    date: "2026-09-19",
    minutes: 6,
    kicker: "Buying",
    blocks: [
      {
        paragraphs: [
          "Most domain portfolios are junk drawers with a logo. A name earns a place here only if a buyer in technology, security, health, or a real city could put it on a contract without explaining the pun.",
          "Brandable does not mean random. nullstate.com is brandable because engineers already say ‘null’ and ‘state’. A pile of consonants with a .com is just hard to radio.",
        ],
      },
      {
        heading: "The checks",
        list: [
          "Say it. If the listener asks you to spell it, the support inbox will too.",
          "Type it. One word or two real words. No hyphens, no doubled letters that look like a typo.",
          "Search it. The exact phrase should not be a household product in another industry.",
          "Extend it. The TLD should match the buyer. Geography names can live on .com. Infrastructure names can live on .io. The flagship here is a .net on purpose.",
        ],
      },
      {
        heading: "Portfolio, not a dump",
        paragraphs: [
          "Filter the marketplace by category, extension, length, and price. Every name on the grid is a single registration — when it transfers, it leaves the list. That is the only scarcity claim on this site, and it is true of every domain on earth.",
        ],
      },
    ],
  },
  {
    slug: "escrow-transfer-checklist",
    title: "The escrow transfer checklist buyers should insist on",
    description:
      "How a domain sale should move: written price, escrow, auth code or push, and confirmation before funds release. No countdown clocks.",
    date: "2026-09-26",
    minutes: 5,
    kicker: "Transfers",
    blocks: [
      {
        paragraphs: [
          "A domain sale is a transfer of a registration, not a download. The safe order is boring: agree the price in writing, open escrow, start the transfer, buyer confirms the name resolves in their registrar account, escrow pays the seller.",
          "ErrorFound does not take the purchase wire. Use a licensed escrow service both sides can log into. If someone asks you to pay a ‘holding agent’ by gift card, wire, or crypto with no escrow login, stop.",
        ],
      },
      {
        heading: "Before you fund escrow",
        list: [
          "Confirm the seller controls the name (a small DNS change you specify is the usual proof).",
          "Confirm the name is unlocked and not inside the 60-day transfer lock after a recent transfer.",
          "Write down who pays the escrow fee. Split is normal.",
          "Decide push versus auth-code. A push inside the same registrar is faster. An auth-code transfer is universal.",
        ],
      },
      {
        heading: "After the name moves",
        paragraphs: [
          "Turn on registrar lock, replace DNS only when you mean to, and keep the old email on the contact record until the new one is verified. The website, the brand, and the domain are three different things — buy the name first, point it second.",
          "Questions on a specific listing go to erg@errorfound.net. Include the domain, your offer, and whether you want a push or an auth-code transfer.",
        ],
      },
    ],
  },
];

export function slugFor(name: string) {
  return name.replace(/\./g, "-");
}

export function sldOf(name: string) {
  return name.split(".")[0] ?? name;
}

export function tldOf(name: string) {
  return name.slice(name.indexOf(".") + 1);
}

export function lengthBand(name: string): "short" | "medium" | "long" {
  const n = sldOf(name).length;
  if (n <= 7) return "short";
  if (n <= 11) return "medium";
  return "long";
}

export function categoryLabel(id: string) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export function getListing(slug: string) {
  return LISTINGS.find((d) => slugFor(d.name) === slug);
}

export function money(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function priceLabel(amount: number | null) {
  return amount == null ? "Make offer" : money(amount);
}

export type Filters = {
  q?: string;
  category?: string;
  tld?: string;
  max?: number;
  len?: string;
};

export function applyFilters(list: DomainListing[], filters: Filters) {
  const q = (filters.q ?? "").trim().toLowerCase();
  return list.filter((d) => {
    if (filters.category && d.category !== filters.category) return false;
    if (filters.tld && tldOf(d.name) !== filters.tld) return false;
    if (filters.len && lengthBand(d.name) !== filters.len) return false;
    if (filters.max != null && (d.price == null || d.price > filters.max)) return false;
    if (!q) return true;
    const hay = [d.name, d.tagline, d.summary, d.category, ...d.keywords, ...d.uses]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function similarTo(name: string) {
  const current = LISTINGS.find((d) => d.name === name);
  if (!current) return [];
  return LISTINGS.filter((d) => d.name !== name && d.category === current.category).slice(0, 3);
}

export const TLDS = Array.from(new Set(LISTINGS.map((d) => tldOf(d.name)))).sort();
