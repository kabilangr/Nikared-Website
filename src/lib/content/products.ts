/**
 * Products built and run by Nika Red. Rendered at /products and
 * /products/<slug>, and summarized on the home page.
 *
 * Facts here mirror each product's own site. When pricing or platforms
 * change there, update this file too.
 */

export type Product = {
  slug: string;
  name: string;
  /** Native-script name shown beside the wordmark. */
  nativeName: string;
  meaning: string;
  url: string;
  category: string;
  tagline: string;
  /** Meta description (aim for 140 to 160 characters). */
  description: string;
  summary: string;
  intro: string[];
  audience: string[];
  features: { icon: string; title: string; body: string }[];
  engineering: { title: string; body: string }[];
  /** Technologies used to build the product. */
  stack: string[];
  platforms: { label: string; status: "Live" | "Coming soon"; href?: string }[];
  pricing: string;
  logo: string;
  logoAlt: string;
  /** Rounded app icon (true) or full-bleed square mark (false). */
  hero: { src: string; alt: string; width: number; height: number; kind: "phone" | "illustration" };
  gallery: { src: string; alt: string; width: number; height: number }[];
  accent: string;
  schema: {
    applicationCategory: string;
    operatingSystem: string;
    offers: { price?: string; lowPrice?: string; priceCurrency: string };
  };
};

export const PRODUCTS: Product[] = [
  {
    slug: "valam",
    name: "Valam",
    nativeName: "வளம்",
    meaning: "Tamil for prosperity",
    url: "https://valam.io/",
    category: "Personal finance app",
    tagline: "Private by design. Your money, understood.",
    description:
      "Valam is a private personal finance app with an on-device AI money coach. Track spending, cards, loans, EMIs, and goals while your data stays on your phone.",
    summary:
      "A personal finance app that keeps your financial life in an encrypted vault on your phone, with an AI coach named Mathi that runs on the device.",
    intro: [
      "Most money apps work by uploading your transactions to their servers. Valam takes the opposite approach. Accounts, spending, cards, loans, and goals live in an encrypted vault on your phone, and the intelligence that categorizes transactions and answers questions runs on the device as well.",
      "It is built for how Indian households actually manage money: rupees, EMIs, credit card statement cycles, UPI, chit funds, and money lent to friends and family. Mathi, the built-in coach, can answer questions, log expenses, set reminders, and help plan a debt payoff, without your data leaving the phone.",
    ],
    audience: [
      "People starting their first salary and building habits",
      "Households managing shared bills, EMIs, and savings goals",
      "Freelancers and anyone with irregular income",
      "Anyone working to pay off credit cards or loans",
    ],
    features: [
      { icon: "account_balance_wallet", title: "Accounts and spending", body: "Every account in one place, with categories that learn from your corrections and duplicate detection before anything is saved." },
      { icon: "credit_card", title: "Credit cards", body: "Limits, statement dates, interest, and due-date reminders so nothing slips past a billing cycle." },
      { icon: "trending_down", title: "Loans and EMIs", body: "Payoff plans using the avalanche or snowball method, with a clear view of what each loan really costs." },
      { icon: "psychology", title: "Mathi, the AI coach", body: "Ask, log, remind, and plan in plain language. Mathi runs on the device and works with your own data." },
      { icon: "savings", title: "Goals and wealth", body: "Savings goals, net worth with history, investments, and chit funds tracked together." },
      { icon: "group", title: "Friends and family", body: "Track IOUs and money you hold for others, with group splits on Valam Plus." },
      { icon: "notifications_active", title: "One calendar, smart alerts", body: "Bills, EMIs, and statement dates on one calendar, with detectors that flag unusual activity." },
      { icon: "upload_file", title: "Easy import", body: "Bring in bank statements as CSV, OFX, or QFX files, with presets for major Indian banks." },
    ],
    engineering: [
      { title: "A hardware-protected vault", body: "A random 256-bit master key is sealed by the iPhone Secure Enclave or Android Keystore and released only after Face ID, fingerprint, or the phone PIN. The database, attachments, and chat history are encrypted, and keys are wiped whenever the app locks." },
      { title: "A language model on the phone", body: "Mathi runs a compact, fine-tuned language model on the device. A topic guard keeps it to money, and every number it says is checked against the finance engine before it is shown." },
      { title: "No backend by default", body: "No account, no analytics, and no server holding your data. Network access is limited to model downloads and opt-in Plus features, and the build fails if any other code tries to connect." },
      { title: "A tested finance engine", body: "Loans, cards, goals, forecasting, and 31 problem detectors run in a pure Dart engine, covered by more than 2,600 automated tests, including prompt-injection attacks against the coach." },
      { title: "Encrypted backups", body: "Backups are sealed with a key derived from your password using Argon2id, so a backup file is useless without it. Plus users can sync encrypted copies through their own cloud storage." },
      { title: "Native where it matters", body: "One Flutter codebase for Android and iPhone, with Kotlin and Swift for hardware key storage, biometrics, and home screen widgets." },
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Swift", "Encrypted SQLite", "libsodium", "On-device LLM (LiteRT)", "Riverpod", "Firebase (Plus only)"],
    platforms: [
      { label: "Android (Google Play)", status: "Live", href: "https://play.google.com/store/apps/details?id=app.valam.finance" },
      { label: "iPhone (App Store)", status: "Coming soon" },
    ],
    pricing: "Free to start with no sign-up. Valam Plus adds unlimited Mathi conversations, encrypted sync, and shared groups.",
    logo: "/products/valam-logo.png",
    logoAlt: "Valam app icon",
    hero: { src: "/products/valam-home.jpg", alt: "Valam home screen showing net worth, assets, and liabilities", width: 414, height: 900, kind: "phone" },
    gallery: [
      { src: "/products/valam-plan.jpg", alt: "Valam plan screen", width: 414, height: 900 },
      { src: "/products/valam-loans.jpg", alt: "Valam loans and EMI screen", width: 414, height: 900 },
    ],
    accent: "#22c55e",
    schema: {
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android",
      offers: { price: "0", priceCurrency: "INR" },
    },
  },
  {
    slug: "viduthi",
    name: "Viduthi",
    nativeName: "விடுதி",
    meaning: "Tamil for hostel",
    url: "https://viduthi.in/",
    category: "Hostel and PG platform",
    tagline: "Find a hostel you can trust. Run it without the paperwork.",
    description:
      "Viduthi lists verified hostels and PGs with live free beds and prices, and gives owners software for bed boards, resident KYC, rent collection, and electricity split.",
    summary:
      "A two-sided platform: verified hostel and PG listings with live free beds for residents, and the management software owners use to run them.",
    intro: [
      "Finding a hostel or PG in India usually means phone calls, outdated listings, and surprises about deposits. Running one usually means paper registers, rent reminders over the phone, and arguments about the electricity bill. Viduthi addresses both sides.",
      "Residents search verified hostels by city, budget, sharing, and facilities, see free beds live, and know the rent and deposit upfront. Owners get a live bed board, resident KYC, invoices and payment links, a fair electricity split, and privacy tools built for India's DPDP Act. Viduthi charges hostels, not residents.",
    ],
    audience: [
      "Students and working professionals looking for a hostel or PG",
      "Hostel and PG owners who want to stop running the desk on paper",
      "Co-living operators managing several properties",
    ],
    features: [
      { icon: "verified", title: "Verified listings", body: "Owners apply with their hostel documents and every hostel is approved by the Viduthi team before it is listed, with rent and deposit shown upfront." },
      { icon: "bed", title: "Free beds, live", body: "Availability comes straight from the owner's bed board, so what residents see is what is actually free." },
      { icon: "dashboard", title: "Live bed board", body: "Owners see every room and bed at a glance and register walk-ins in minutes." },
      { icon: "badge", title: "KYC that holds up", body: "Phone-verified sign-in and resident ID collection, with a clear record for every stay." },
      { icon: "payments", title: "Rent without chasing", body: "Invoices, payment links by SMS, receipts, and a daily cash report. Residents pay by UPI, card, or net banking." },
      { icon: "electric_bolt", title: "Fair electricity split", body: "Shared electricity costs divided by the days each resident actually stayed." },
      { icon: "shield_lock", title: "Privacy built in", body: "Consent, data requests, and breach notices designed for the Digital Personal Data Protection Act, 2023." },
      { icon: "receipt_long", title: "Records that move with you", body: "Residents keep their receipts and deposit history when they move to another hostel." },
    ],
    engineering: [
      { title: "One source of truth", body: "The public listing, the resident app, and the owner desk all read from the same bed board, so availability never drifts." },
      { title: "Isolated data for every hostel", body: "Owners apply with their hostel's documents and the Viduthi team approves each one. Every approved hostel then runs on its own isolated data." },
      { title: "Payments that reconcile", body: "Razorpay payment links with webhook handling and idempotent recording, alongside cash and UPI at the desk, all landing in one daily cash report." },
      { title: "A billing engine you can trust", body: "Proration, partial months, and electricity split by days stayed, tested down to rounding, row locks, and concurrent payments." },
      { title: "Privacy by design", body: "Phone-verified resident KYC, documents in private storage behind short-lived links, per-hostel retention and purge, and crash and usage reports only after a resident opts in." },
      { title: "Serverless on AWS", body: "A TypeScript API on AWS Lambda with Aurora Serverless PostgreSQL, so costs follow usage while the platform grows city by city." },
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "AWS Lambda", "Aurora Serverless", "Amazon S3", "Firebase Phone Auth", "Razorpay", "Flutter"],
    platforms: [
      { label: "Search on viduthi.in", status: "Live", href: "https://viduthi.in/" },
      { label: "Owner software (web)", status: "Live", href: "https://app.viduthi.in/" },
      { label: "Resident app (Android and iOS)", status: "Coming soon" },
    ],
    pricing: "Free for residents. Owner plans are billed monthly by bed count, with the first 14 days free.",
    logo: "/products/viduthi-icon.svg",
    logoAlt: "Viduthi app icon",
    hero: { src: "/products/viduthi-hero.svg", alt: "Illustration of residents outside a verified hostel", width: 800, height: 600, kind: "illustration" },
    gallery: [
      { src: "/products/viduthi-owner.svg", alt: "Illustration of a hostel owner using the Viduthi bed board", width: 800, height: 600 },
    ],
    accent: "#e8601c",
    schema: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { lowPrice: "499", priceCurrency: "INR" },
    },
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
