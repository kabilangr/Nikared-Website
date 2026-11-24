/**
 * Service detail content. Each entry renders a page at /services/<slug> and
 * feeds the Services hub, the sitemap, and Service JSON-LD.
 */

export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  number: string;
  icon: string;
  name: string;
  /** Short name used in nav, cards, and breadcrumbs. */
  shortName: string;
  /** Meta description (aim for 140 to 160 characters). */
  description: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  audience: string;
  problems: { title: string; body: string }[];
  deliverables: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  stack: string[];
  faqs: Faq[];
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "industrial-software",
    number: "01",
    icon: "terminal",
    name: "Industrial Software Engineering",
    shortName: "Engineering Foundry",
    description:
      "Custom MES, ERP, and SCADA integration software from Nika Red. We connect PLCs, sensors, and edge gateways to modern enterprise systems without stopping production.",
    headline: "Industrial software built to",
    headlineAccent: "outlast the roadmap",
    intro:
      "Most plants run on a patchwork: a SCADA system installed fifteen years ago, a handful of PLC brands, spreadsheets that bridge production and planning, and an ERP that only sees what someone types into it. The Engineering Foundry builds the software layer that ties this together. We design custom MES, ERP, and SCADA integrations that understand the physical layer and connect it to the enterprise, so decisions are made on live data instead of yesterday's reports.",
    audience:
      "For manufacturers and industrial operators who need software that speaks the language of the factory floor and can be introduced without stopping production.",
    problems: [
      {
        title: "Data trapped on the shop floor",
        body: "Machine states, cycle counts, and alarms live inside PLCs and HMIs that the business systems cannot read. Planning runs on manual entry and end-of-shift reports.",
      },
      {
        title: "Legacy systems nobody can touch",
        body: "The SCADA or historian works, but the vendor is gone, the protocols are proprietary, and every change risks an outage. Teams build workarounds instead of improvements.",
      },
      {
        title: "Integrations that break under load",
        body: "Point-to-point scripts and polling jobs fall over when a line speeds up, a gateway reboots, or the network drops for ten minutes.",
      },
    ],
    deliverables: [
      {
        title: "Custom MES and ERP integration",
        body: "Production orders, material consumption, quality results, and downtime reasons flow between the floor and the enterprise without retyping.",
      },
      {
        title: "Protocol bridges and hardware APIs",
        body: "Clean, versioned APIs in front of OPC UA, Modbus, MQTT, Profinet, and vendor-specific protocols, so new applications never talk to a PLC directly.",
      },
      {
        title: "Legacy SCADA modernization",
        body: "We run new interfaces alongside the existing system, mirror its data, and migrate function by function, keeping a rollback path at every step.",
      },
      {
        title: "Real-time operations dashboards",
        body: "OEE, throughput, and alarm views built on a proper time-series pipeline, designed with the operators and supervisors who will use them every shift.",
      },
    ],
    approach: [
      {
        title: "Map the physical layer",
        body: "We walk the line, inventory controllers, protocols, tags, and network segments, and document what data exists before deciding what to build.",
      },
      {
        title: "Shadow before switching",
        body: "New components run in read-only mode next to the existing system until their outputs match. Nothing writes to a controller until it has earned trust.",
      },
      {
        title: "Store and forward by default",
        body: "Edge services buffer locally and sync when the network returns, so a dropped connection costs latency, never data.",
      },
      {
        title: "Hand over a system you can run",
        body: "Source code, deployment scripts, runbooks, and training for your team. No license keys or hosted dependencies that tie you to us.",
      },
    ],
    stack: ["OPC UA", "Modbus TCP", "MQTT / Sparkplug B", "Node-RED", "TimescaleDB", "InfluxDB", "PostgreSQL", "Go", "TypeScript", "Python", "Docker", "Kubernetes (K3s)"],
    faqs: [
      {
        question: "Can you integrate with our existing SCADA without replacing it?",
        answer:
          "Yes. Most projects start by reading from the existing SCADA or historian through OPC UA, a database connector, or a protocol gateway. The current system keeps running exactly as it does today while new applications are built on top of the mirrored data.",
      },
      {
        question: "Will integration work require a production shutdown?",
        answer:
          "Rarely. Read-only connections can usually be added during normal operation. Any change that touches control logic is planned for an existing maintenance window, with a tested rollback.",
      },
      {
        question: "Which ERP and MES platforms do you work with?",
        answer:
          "We integrate with SAP, Microsoft Dynamics, Oracle, Odoo, and custom systems through their standard APIs or database interfaces. Where an off-the-shelf MES does not fit the process, we build a focused custom one.",
      },
    ],
    keywords: ["MES integration", "SCADA modernization", "ERP integration for manufacturing", "OPC UA integration", "industrial software development"],
  },
  {
    slug: "edge-ai",
    number: "02",
    icon: "psychology",
    name: "Edge AI and Machine Learning",
    shortName: "Edge AI & ML",
    description:
      "Edge AI from Nika Red: on-device computer vision for quality control, predictive maintenance, and sensor fusion that keeps working when the network does not.",
    headline: "Neural architectures for the",
    headlineAccent: "edge, not the cloud",
    intro:
      "A defect camera that waits for a cloud round trip misses the part. A vibration model that needs a stable uplink stops protecting the motor the moment Wi-Fi drops. We build machine learning systems that run where the data is produced: on industrial PCs, smart cameras, and gateways next to the machine. The result is decisions in milliseconds, operational data that stays inside the plant, and AI that keeps working when connectivity does not.",
    audience:
      "For manufacturers and infrastructure operators who need AI that runs reliably on site, often with limited connectivity and strict data control requirements.",
    problems: [
      {
        title: "Manual inspection does not scale",
        body: "Visual inspection is slow, inconsistent across shifts, and the first thing to suffer when the line speeds up.",
      },
      {
        title: "Failures arrive without warning",
        body: "Bearings, pumps, and gearboxes degrade for weeks before they fail, but nobody is watching the signals that show it.",
      },
      {
        title: "Pilots that never reach production",
        body: "A model that works in a notebook still needs data pipelines, hardware, monitoring, and retraining before it can run on a real line.",
      },
    ],
    deliverables: [
      {
        title: "Computer vision for quality control",
        body: "Defect detection, dimensional checks, label and print verification, and assembly validation running at line speed on edge hardware.",
      },
      {
        title: "Predictive maintenance models",
        body: "Anomaly detection and remaining-useful-life estimates from vibration, current, temperature, and acoustic signals.",
      },
      {
        title: "Sensor fusion",
        body: "Models that combine camera, acoustic, and telemetry streams to reach decisions that no single sensor can support on its own.",
      },
      {
        title: "Model optimization for embedded hardware",
        body: "Quantization, pruning, and compilation for NVIDIA Jetson, Intel, ARM, and NPU targets, validated against accuracy on your own data.",
      },
    ],
    approach: [
      {
        title: "Start from the decision",
        body: "We define what the model must decide, how fast, and what a wrong answer costs, before collecting a single image.",
      },
      {
        title: "Build the dataset on site",
        body: "We capture data under real lighting, vibration, and product variation, and label it with your quality team so the ground truth matches how parts are judged today.",
      },
      {
        title: "Deploy with a human in the loop",
        body: "Models first run in advisory mode next to existing inspection. Automation is switched on only after measured agreement.",
      },
      {
        title: "Monitor and retrain",
        body: "Drift monitoring, image sampling, and a retraining pipeline your team can run when products, suppliers, or lighting change.",
      },
    ],
    stack: ["PyTorch", "ONNX Runtime", "TensorRT", "OpenVINO", "TFLite", "NVIDIA Jetson", "Intel Core / Movidius", "GStreamer", "OpenCV", "MLflow", "Python", "C++"],
    faqs: [
      {
        question: "How much data do we need to start a computer vision project?",
        answer:
          "It depends on how varied the defects are. Many inspection tasks can start with a few hundred labeled examples per defect class, combined with a larger set of good parts. We assess this during discovery by capturing a sample set on your line.",
      },
      {
        question: "What hardware does edge AI run on?",
        answer:
          "Typical targets are NVIDIA Jetson modules, industrial PCs with Intel CPUs or GPUs, and smart cameras with built-in accelerators. We choose hardware after we know the model size, required frame rate, and environmental constraints.",
      },
      {
        question: "Does our data leave the plant?",
        answer:
          "Inference runs on site, so production data does not need to leave the facility. Where training happens and which samples are shared is agreed with you up front.",
      },
    ],
    keywords: ["edge AI", "computer vision quality control", "predictive maintenance", "on-device machine learning", "industrial AI"],
  },
  {
    slug: "xr-spatial-computing",
    number: "03",
    icon: "view_in_ar",
    name: "XR and Spatial Computing",
    shortName: "XR & Spatial",
    description:
      "Industrial XR from Nika Red: digital twins, AR maintenance guidance, and immersive training on Meta Quest, Apple Vision Pro, HoloLens, and mobile AR.",
    headline: "Spatial computing for environments",
    headlineAccent: "that can't afford mistakes",
    intro:
      "Complex equipment is hard to learn from a PDF and expensive to learn on the real thing. We build extended reality systems that put the right information where the work happens: step-by-step overlays on the machine, digital twins that mirror live plant data, and simulations where technicians can practice procedures that are too risky or too rare to train on in person.",
    audience:
      "For heavy industry, logistics, and energy companies who need to train, guide, or monitor people working in complex physical environments.",
    problems: [
      {
        title: "Expertise that walks out the door",
        body: "Senior technicians retire, and the knowledge of how to service a specific machine leaves with them.",
      },
      {
        title: "Training on live equipment",
        body: "New staff learn on production assets, which costs uptime and puts people near hazards before they are ready.",
      },
      {
        title: "Data without spatial context",
        body: "Dashboards show that a sensor is out of range but not where it is, what is next to it, or how to reach it.",
      },
    ],
    deliverables: [
      {
        title: "AR work instructions",
        body: "Step-by-step maintenance, assembly, and inspection guidance anchored to the physical equipment, with checklists and photo capture for traceability.",
      },
      {
        title: "Digital twins",
        body: "3D models of lines, sites, or assets connected to live telemetry for monitoring, layout planning, and what-if simulation.",
      },
      {
        title: "Immersive training simulations",
        body: "VR scenarios for hazardous, rare, or expensive procedures, with scoring and progress tracking for supervisors.",
      },
      {
        title: "Remote expert assistance",
        body: "Field technicians share their view with an off-site expert, who can annotate the scene in real time.",
      },
    ],
    approach: [
      {
        title: "Pick one procedure",
        body: "We start with a single high-value task, such as a changeover or a recurring repair, and measure how long it takes and where errors happen today.",
      },
      {
        title: "Capture the real environment",
        body: "CAD data, photogrammetry, or laser scans of the actual equipment, so overlays line up with what the technician sees.",
      },
      {
        title: "Test on the floor",
        body: "Prototypes are tested with gloves, noise, poor lighting, and real time pressure. Interfaces are redesigned until they work in those conditions.",
      },
      {
        title: "Scale with content tools",
        body: "Once one procedure works, we give your team the tooling to author the next ones without writing code.",
      },
    ],
    stack: ["Unity", "Unreal Engine", "OpenXR", "Meta Quest", "Apple Vision Pro", "Microsoft HoloLens 2", "ARKit", "ARCore", "WebXR", "glTF / USD"],
    faqs: [
      {
        question: "Which headsets and devices do you support?",
        answer:
          "We build for Meta Quest, Apple Vision Pro, mobile AR on iOS and Android, and existing Microsoft HoloLens 2 fleets. For many field tasks a rugged tablet is the most practical choice, and we recommend hardware based on the environment and the task.",
      },
      {
        question: "Do we need 3D models of our equipment?",
        answer:
          "CAD data helps but is not required. We can create models from photogrammetry or laser scans of the actual equipment.",
      },
      {
        question: "Can a digital twin use our existing sensor data?",
        answer:
          "Yes. Digital twins connect to the same historians, MQTT brokers, or OPC UA servers your current dashboards use, often through the integration layer our Engineering Foundry builds.",
      },
    ],
    keywords: ["industrial XR", "digital twin development", "AR maintenance", "VR training simulation", "spatial computing"],
  },
  {
    slug: "product-engineering",
    number: "04",
    icon: "rocket_launch",
    name: "Product Engineering",
    shortName: "Product Engineering",
    description:
      "Nika Red designs and builds mobile apps, SaaS platforms, and on-device AI products from idea to launch, the same way we build and run our own products.",
    headline: "Products we would",
    headlineAccent: "run ourselves",
    intro:
      "We do not only build for clients. We design, ship, and operate our own products: Valam, a private personal finance app with an on-device AI coach, and Viduthi, a hostel discovery and management platform. That experience shapes how we build for others. We know what it takes to go from a first prototype to an app in the store, a payment flow that reconciles, and a support queue that stays small.",
    audience:
      "For founders, product teams, and businesses that want a focused team to take a mobile or web product from idea to launch and beyond.",
    problems: [
      {
        title: "Ideas stuck at prototype",
        body: "A clickable mockup or a proof of concept exists, but nobody has turned it into something customers can download, pay for, and rely on.",
      },
      {
        title: "Privacy as an afterthought",
        body: "Personal and financial data ends up on servers by default, creating risk and compliance work that a different architecture would avoid.",
      },
      {
        title: "Too many vendors",
        body: "Design, mobile, backend, and AI are split across agencies that do not talk to each other, and nobody owns the whole product.",
      },
    ],
    deliverables: [
      {
        title: "Mobile apps",
        body: "Native-quality Android and iOS apps, from first release to store listing, with offline support where it matters.",
      },
      {
        title: "SaaS platforms",
        body: "Multi-tenant web applications with roles, billing, payments, and reporting, built to be operated by a small team.",
      },
      {
        title: "On-device and applied AI",
        body: "Assistants, categorization, and detection that run on the phone, including fine-tuned language models, with cloud models used only where they add real value and the user opts in.",
      },
      {
        title: "Privacy and compliance by design",
        body: "Local-first data, encryption, consent flows, and data-request handling designed for India's DPDP Act from the start.",
      },
    ],
    approach: [
      {
        title: "Define the smallest useful product",
        body: "We agree on the one job the first release must do well, and cut everything that does not serve it.",
      },
      {
        title: "Design with real users",
        body: "Prototypes are tested with the people who will use the product, in their language and on their devices.",
      },
      {
        title: "Ship early, then iterate",
        body: "A working release reaches real users quickly, with analytics and feedback loops that respect privacy.",
      },
      {
        title: "Operate and hand over",
        body: "We run launch, monitoring, and support with you, then hand over code, infrastructure, and documentation you own.",
      },
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Swift", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Encrypted SQLite", "On-device LLMs", "Firebase", "AWS Lambda", "Razorpay", "RevenueCat"],
    faqs: [
      {
        question: "Have you launched products of your own?",
        answer:
          "Yes. We build and run Valam, a private personal finance app available on Android, and Viduthi, a platform for finding and managing hostels and PGs in India. Both are on our Products page.",
      },
      {
        question: "Do you build for both Android and iOS?",
        answer:
          "Yes. We usually build with Flutter, one codebase for both platforms, and write native Kotlin and Swift where the platform demands it, such as hardware-backed key storage, biometrics, and home screen widgets.",
      },
      {
        question: "Can you work with an existing app or codebase?",
        answer:
          "Yes. Many engagements start with a review of an existing product, followed by a plan to stabilize it before adding features.",
      },
    ],
    keywords: ["product engineering", "mobile app development", "SaaS development", "on-device AI apps", "app development Chennai"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
