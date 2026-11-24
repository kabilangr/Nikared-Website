/**
 * Industry pages at /industries/<slug>. Each links to the relevant services
 * and blog posts for internal linking.
 */

export type Industry = {
  slug: string;
  icon: string;
  name: string;
  description: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  challenges: { title: string; body: string }[];
  useCases: { title: string; body: string; service: string }[];
  /** Service slugs, in order of relevance. */
  services: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    icon: "factory",
    name: "Manufacturing",
    description:
      "Industrial software, edge AI, and XR for manufacturers: MES and SCADA integration, vision-based quality control, predictive maintenance, and AR work instructions.",
    headline: "Software for the",
    headlineAccent: "factory floor",
    intro:
      "Discrete and process manufacturers run on thin margins and tight schedules. Every unplanned stop, every escaped defect, and every hour spent reconciling spreadsheets comes straight out of output. We build systems that connect the line to the business, catch problems while they can still be fixed cheaply, and help new operators get up to speed faster.",
    challenges: [
      { title: "Unplanned downtime", body: "Equipment failures that could have been predicted from vibration, temperature, or current data." },
      { title: "Inconsistent inspection", body: "Manual visual checks that vary by shift and struggle at higher line speeds." },
      { title: "Disconnected systems", body: "Production data that never reaches planning, costing, or quality systems without manual entry." },
      { title: "Skills gaps", body: "Experienced technicians retiring faster than new ones can be trained on complex equipment." },
    ],
    useCases: [
      { title: "Live OEE and downtime tracking", body: "Machine states pulled directly from PLCs, with operators tagging downtime reasons on a shop-floor tablet.", service: "industrial-software" },
      { title: "Inline defect detection", body: "Cameras and edge inference that flag surface defects, missing components, or misprints at line speed.", service: "edge-ai" },
      { title: "Condition monitoring", body: "Anomaly detection on motors, pumps, and spindles that warns maintenance before a breakdown.", service: "edge-ai" },
      { title: "AR changeover guidance", body: "Step-by-step overlays that walk operators through changeovers and reduce setup errors.", service: "xr-spatial-computing" },
    ],
    services: ["industrial-software", "edge-ai", "xr-spatial-computing"],
  },
  {
    slug: "logistics",
    icon: "local_shipping",
    name: "Logistics and Supply Chain",
    description:
      "Software for logistics and warehousing: WMS and equipment integration, computer vision for parcel and pallet handling, route optimization, and spatial computing.",
    headline: "Visibility for",
    headlineAccent: "goods in motion",
    intro:
      "Warehouses and distribution networks generate huge volumes of physical events: pallets received, parcels scanned, vehicles docked, picks completed. Most of it is captured by equipment that does not talk to the systems planning the work. We connect conveyors, scanners, and vehicles to warehouse and transport systems, and add vision and spatial tools where manual checks slow the flow.",
    challenges: [
      { title: "Blind spots between systems", body: "Conveyor controllers, sorters, and WMS each see part of the flow, and nobody sees all of it." },
      { title: "Damage and mis-picks", body: "Errors discovered at the customer instead of at the dock." },
      { title: "Peak season pressure", body: "Temporary staff who need to be productive within days, not weeks." },
      { title: "Inefficient layouts", body: "Slotting and layout decisions made without a model of how goods actually move." },
    ],
    useCases: [
      { title: "Equipment to WMS integration", body: "Conveyor, sorter, and AGV events fed into the warehouse system in real time.", service: "industrial-software" },
      { title: "Vision at the dock", body: "Automatic pallet counting, label reading, and damage detection at receiving and dispatch.", service: "edge-ai" },
      { title: "Warehouse digital twin", body: "A 3D model of the site driven by live data, used to test layout and slotting changes before moving racks.", service: "xr-spatial-computing" },
      { title: "AR picking and onboarding", body: "Guided picking and training overlays that shorten ramp-up for seasonal staff.", service: "xr-spatial-computing" },
    ],
    services: ["industrial-software", "edge-ai", "xr-spatial-computing"],
  },
  {
    slug: "energy-infrastructure",
    icon: "bolt",
    name: "Energy and Infrastructure",
    description:
      "Digital twins, remote monitoring, and edge AI for energy and infrastructure: sensor data fusion, SCADA modernization, and XR training for field crews.",
    headline: "Reliable software for",
    headlineAccent: "critical assets",
    intro:
      "Substations, pipelines, solar and wind sites, water networks, and transport infrastructure are spread across large areas, often with weak connectivity, and expected to run for decades. We build monitoring and decision tools that work at the edge, survive network outages, and give operators and field crews a clear picture of the assets they are responsible for.",
    challenges: [
      { title: "Remote, distributed assets", body: "Sites that are expensive to visit and connected over cellular or satellite links." },
      { title: "Aging control systems", body: "SCADA and RTU fleets that are decades old and difficult to extend securely." },
      { title: "Too much data, too little insight", body: "Thousands of sensor tags with alarms that operators have learned to ignore." },
      { title: "High-risk field work", body: "Procedures that are dangerous to get wrong and rarely practiced." },
    ],
    useCases: [
      { title: "Remote asset monitoring", body: "Edge gateways that buffer, compress, and forward sensor data over unreliable links.", service: "industrial-software" },
      { title: "Anomaly detection on telemetry", body: "Models that combine multiple sensors to surface real faults and cut nuisance alarms.", service: "edge-ai" },
      { title: "Asset digital twins", body: "Spatial models of plants and networks linked to live readings for monitoring and planning.", service: "xr-spatial-computing" },
      { title: "VR safety training", body: "Immersive rehearsal of switching, isolation, and emergency procedures.", service: "xr-spatial-computing" },
    ],
    services: ["xr-spatial-computing", "edge-ai", "industrial-software"],
  },
  {
    slug: "heavy-machinery",
    icon: "precision_manufacturing",
    name: "Heavy Machinery and OEMs",
    description:
      "Embedded intelligence for heavy machinery OEMs: on-machine edge AI, connected equipment platforms, and AR service tools for dealers and field technicians.",
    headline: "Intelligence built",
    headlineAccent: "into the equipment",
    intro:
      "Equipment makers are increasingly judged on uptime and service, not only on the machine they ship. We help OEMs add intelligence directly to their products: edge computing on the machine, connected platforms that give customers and dealers visibility, and service tools that help technicians fix problems on the first visit.",
    challenges: [
      { title: "Service cost and response time", body: "Technicians travelling to sites without knowing what is wrong." },
      { title: "Limited field data", body: "Little feedback on how machines are actually used once they leave the factory." },
      { title: "Harsh operating conditions", body: "Dust, vibration, heat, and no network coverage on many job sites." },
      { title: "Complex products", body: "Service procedures that are hard to document and harder to remember." },
    ],
    useCases: [
      { title: "Connected machine platform", body: "Telemetry from the machine controller to a fleet portal for customers, dealers, and engineering.", service: "industrial-software" },
      { title: "On-machine diagnostics", body: "Edge models that detect developing faults and recommend action without a network connection.", service: "edge-ai" },
      { title: "AR service manuals", body: "Interactive procedures anchored to the machine for dealer and field technicians.", service: "xr-spatial-computing" },
      { title: "Remote expert support", body: "Live video with spatial annotation so factory engineers can guide repairs anywhere.", service: "xr-spatial-computing" },
    ],
    services: ["edge-ai", "industrial-software", "xr-spatial-computing"],
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
