/**
 * Industry pages at /industries/<slug>. Each links to the relevant services
 * and blog posts for internal linking.
 *
 * Keep claims honest: "measures" are what a project should track, not results
 * we claim to have achieved, and no client names or invented case studies.
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
  /** Systems, protocols, and standards a project here typically touches. */
  systems: string[];
  /** A realistic, small first engagement. */
  firstProject: { title: string; summary: string; steps: string[] };
  /** What a project should measure before and after, to prove it worked. */
  measures: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  /** Blog post slugs, most relevant first. */
  posts: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    icon: "factory",
    name: "Manufacturing",
    description:
      "Industrial software, edge AI, XR, and shop-floor apps for manufacturers: PLC and MES integration, inline visual inspection, condition monitoring, and AR work instructions.",
    headline: "Software for the",
    headlineAccent: "factory floor",
    intro:
      "Discrete and process manufacturers run on thin margins and tight schedules. Every unplanned stop, every defect that escapes to a customer, and every hour spent re-typing production data into spreadsheets comes straight out of output. We build systems that connect the line to the business, catch problems while they are still cheap to fix, and help new operators become productive sooner. We start from the machines and data you already have, and we change things one reversible step at a time.",
    challenges: [
      { title: "Unplanned downtime", body: "Bearings, motors, and pumps that fail without warning, even though vibration, temperature, or current data would have shown the problem developing weeks earlier." },
      { title: "Inconsistent inspection", body: "Manual visual checks that vary by shift and by inspector, and that cannot keep up when line speed increases." },
      { title: "Data trapped at the machine", body: "Counts, states, and quality results that never reach planning, costing, or quality systems without someone copying them by hand." },
      { title: "Knowledge walking out the door", body: "Experienced technicians retiring faster than new staff can learn changeovers and repairs that happen only a few times a year." },
    ],
    useCases: [
      { title: "Live OEE and downtime tracking", body: "Machine states read directly from PLCs, with operators tagging downtime reasons on a shop-floor tablet, so losses are measured instead of estimated.", service: "industrial-software" },
      { title: "Inline defect detection", body: "Cameras and edge inference that flag surface defects, missing components, or misprints at line speed and signal the reject gate within the cycle time.", service: "edge-ai" },
      { title: "Condition monitoring", body: "Anomaly detection on motors, pumps, and spindles that learns normal behaviour and warns maintenance before a breakdown, starting with little historical data.", service: "edge-ai" },
      { title: "AR changeover guidance", body: "Step-by-step overlays on the machine that walk operators through changeovers and rare maintenance tasks, with a record of each completed step.", service: "xr-spatial-computing" },
      { title: "Shop-floor and supervisor apps", body: "Mobile and web apps for downtime logging, quality checklists, and shift handover that keep working offline and sync when the network returns.", service: "product-engineering" },
    ],
    services: ["industrial-software", "edge-ai", "xr-spatial-computing", "product-engineering"],
    systems: ["OPC UA", "Modbus TCP", "MQTT / Sparkplug B", "Existing SCADA and historians", "MES and ERP APIs", "Industrial cameras", "NVIDIA Jetson and Intel edge PCs", "Tablets and rugged Android devices"],
    firstProject: {
      title: "One line, one number that everyone trusts",
      summary:
        "Most manufacturing engagements start with a single line and a single question, usually why it loses time. The goal is a result the plant can see within weeks, built on a data layer the next project can reuse.",
      steps: [
        "Walk the line with production and maintenance to agree the question and the machines involved.",
        "Connect read-only to the PLCs or SCADA, so nothing about production changes.",
        "Publish clean machine states and counts into a structured data layer.",
        "Give supervisors a live view of availability, performance, and downtime reasons.",
        "Review the data with the team after a few weeks and choose the next problem to tackle.",
      ],
    },
    measures: [
      { title: "Availability and OEE", body: "Measured from machine states, not from end-of-shift reports, so the baseline is honest." },
      { title: "Escaped defects", body: "Defects found at the customer or the next process, compared with those caught inline." },
      { title: "False reject rate", body: "Good parts rejected by inspection, which costs money just as surely as missed defects." },
      { title: "Mean time to repair", body: "How long a stop lasts from first alarm to running again, and how much of it is diagnosis." },
    ],
    faqs: [
      { question: "Do we need to replace our PLCs or SCADA to work with you?", answer: "No. We connect to what is already there, usually read-only at first, over OPC UA, Modbus, or the historian. Replacement only makes sense when the existing system is unsupported or blocking something specific, and even then we plan it in stages." },
      { question: "Can inspection models run without a network connection?", answer: "Yes. For inline inspection we run inference on an edge computer next to the line, so decisions are fast and keep working when the network drops. The cloud, if used at all, handles training and fleet updates." },
      { question: "We have almost no failure history. Is predictive maintenance realistic?", answer: "Yes, if you start with anomaly detection. A few weeks of data from healthy machines is enough to learn normal behaviour and flag drift. Failure prediction comes later, as recorded alerts and repairs build the history it needs." },
    ],
    posts: ["edge-ai-vs-cloud-ai-for-quality-control", "predictive-maintenance-where-to-start", "modernizing-legacy-scada-without-downtime", "ar-work-instructions-for-maintenance"],
  },
  {
    slug: "logistics",
    icon: "local_shipping",
    name: "Logistics and Supply Chain",
    description:
      "Software for warehouses and distribution: conveyor and sorter integration with the WMS, computer vision at the dock, warehouse digital twins, and apps for pickers and drivers.",
    headline: "Visibility for",
    headlineAccent: "goods in motion",
    intro:
      "Warehouses and distribution networks generate a constant stream of physical events: pallets received, parcels scanned, vehicles docked, picks completed. Much of it is captured by equipment that does not talk to the systems planning the work, so supervisors find out about a jam or a mis-ship after it has already cost them. We connect conveyors, scanners, and vehicles to warehouse and transport systems, add vision where manual checks slow the flow, and give people on the floor tools that fit how they actually work.",
    challenges: [
      { title: "Blind spots between systems", body: "Conveyor controllers, sorters, scanners, and the WMS each see part of the flow, and nobody sees all of it in one place." },
      { title: "Damage and mis-picks", body: "Errors discovered by the customer instead of at the dock, where they would have cost a fraction to fix." },
      { title: "Peak season pressure", body: "Temporary staff who need to be productive within days, on processes that took permanent staff weeks to learn." },
      { title: "Layouts decided by instinct", body: "Slotting and layout changes made without a model of how goods actually move, then discovered to create congestion." },
    ],
    useCases: [
      { title: "Equipment to WMS integration", body: "Conveyor, sorter, and AGV events fed into the warehouse system in real time, with a single view of where every load is.", service: "industrial-software" },
      { title: "Vision at the dock", body: "Automatic pallet counting, label reading, and damage capture at receiving and dispatch, with photo evidence attached to each shipment.", service: "edge-ai" },
      { title: "Warehouse digital twin", body: "A 3D model of the site driven by live data, used to test layout and slotting changes before a single rack is moved.", service: "xr-spatial-computing" },
      { title: "AR picking and onboarding", body: "Guided picking and training overlays that shorten ramp-up for seasonal staff and reduce errors on unfamiliar locations.", service: "xr-spatial-computing" },
      { title: "Floor and driver apps", body: "Offline-capable apps for receiving, cycle counts, proof of delivery, and exception reporting, connected to the systems you already run.", service: "product-engineering" },
    ],
    services: ["industrial-software", "edge-ai", "xr-spatial-computing", "product-engineering"],
    systems: ["WMS and TMS APIs", "Conveyor and sorter PLCs", "Barcode and label scanners", "MQTT event streams", "Dock and overhead cameras", "Android handhelds", "Floor plans and CAD", "Spreadsheets the team relies on today"],
    firstProject: {
      title: "Close one blind spot end to end",
      summary:
        "A good first project follows one flow, such as inbound receiving or outbound dispatch, from the first scan to the system of record, and removes the manual step that causes the most errors.",
      steps: [
        "Map the flow on the floor with the people who run it, including the workarounds.",
        "Identify where events are lost or re-keyed between equipment and the WMS.",
        "Connect the equipment and publish events into a shared data layer.",
        "Add vision or an app at the step where errors originate, if one is needed.",
        "Compare error rates and dwell times with the baseline after a few weeks.",
      ],
    },
    measures: [
      { title: "Order accuracy", body: "Mis-picks and mis-ships per thousand orders, measured at the dock and from customer claims." },
      { title: "Dock-to-stock time", body: "How long inbound goods take from arrival to being available for picking." },
      { title: "Damage claims", body: "Claims raised by customers, and how many have photo evidence from dispatch." },
      { title: "Ramp-up time", body: "How many shifts a new picker needs to reach the team's normal rate and accuracy." },
    ],
    faqs: [
      { question: "Will this work with our existing WMS?", answer: "Usually, yes. Most warehouse and transport systems expose APIs or file-based interfaces. We integrate with what you run rather than asking you to change it, and we document every interface we build." },
      { question: "Do cameras at the dock store images of our staff?", answer: "They do not need to. Systems can be designed to keep only the images that matter, such as labels and damaged goods, process them on site, and blur or discard people. We agree a retention policy with you before anything is installed." },
      { question: "Is a digital twin worth it for a single warehouse?", answer: "It can be, if it is scoped around a specific decision such as a re-slotting or layout change. A lightweight twin built from your floor plan and live data costs far less than moving racks twice." },
    ],
    posts: ["scoping-a-digital-twin", "edge-ai-vs-cloud-ai-for-quality-control", "ar-work-instructions-for-maintenance", "modernizing-legacy-scada-without-downtime"],
  },
  {
    slug: "energy-infrastructure",
    icon: "bolt",
    name: "Energy and Infrastructure",
    description:
      "Remote monitoring, edge AI, and digital twins for energy and infrastructure: SCADA modernization, telemetry over weak links, anomaly detection, and XR training for field crews.",
    headline: "Reliable software for",
    headlineAccent: "critical assets",
    intro:
      "Substations, pipelines, solar and wind sites, water networks, and transport infrastructure are spread across large areas, often connected over cellular or satellite links, and expected to run for decades. Operators need software that keeps working when the link drops, that separates real faults from noise, and that is secure enough to sit near control systems. We build monitoring and decision tools for exactly those conditions, and training tools for the field crews who keep the assets running.",
    challenges: [
      { title: "Remote, distributed assets", body: "Sites that are expensive to visit and connected over links that drop out exactly when conditions are worst." },
      { title: "Aging control systems", body: "SCADA and RTU fleets that are decades old, hard to extend, and were designed for networks that were never meant to be connected." },
      { title: "Alarm fatigue", body: "Thousands of sensor tags generating alarms that operators have learned to ignore, so the real fault gets lost." },
      { title: "High-risk field work", body: "Switching, isolation, and emergency procedures that are dangerous to get wrong and rarely practised for real." },
    ],
    useCases: [
      { title: "Remote asset monitoring", body: "Edge gateways that buffer, compress, and forward sensor data over unreliable links, and never lose readings during an outage.", service: "industrial-software" },
      { title: "Anomaly detection on telemetry", body: "Models that combine several sensors to surface real faults and cut nuisance alarms, running on site or centrally.", service: "edge-ai" },
      { title: "Asset digital twins", body: "Spatial models of plants and networks linked to live readings, for monitoring, maintenance planning, and incident review.", service: "xr-spatial-computing" },
      { title: "VR safety training", body: "Immersive rehearsal of switching, isolation, and emergency procedures, so crews practise the rare tasks before they matter.", service: "xr-spatial-computing" },
      { title: "Field crew apps", body: "Inspection, permit, and work order apps that work offline at remote sites and sync with photos and readings when back in coverage.", service: "product-engineering" },
    ],
    services: ["industrial-software", "edge-ai", "xr-spatial-computing", "product-engineering"],
    systems: ["Modbus TCP and RTU", "OPC UA", "MQTT over cellular and satellite", "Existing SCADA and historians", "IEC 62443 zones and conduits", "GIS and asset registers", "Industrial edge gateways", "VR headsets and tablets"],
    firstProject: {
      title: "Monitor a handful of sites properly",
      summary:
        "Rather than instrumenting a whole network, start with a few representative sites and prove that data arrives reliably, alarms mean something, and the system is secure enough for operations to accept.",
      steps: [
        "Choose a small set of sites that represent your typical connectivity and equipment.",
        "Install or reuse edge gateways with local buffering and secure outbound-only connections.",
        "Bring telemetry into a central store with clear signals for stale or missing data.",
        "Review existing alarms with operators and replace the noisiest with combined, smarter rules.",
        "Run for a season, then decide on wider rollout with real data on coverage and value.",
      ],
    },
    measures: [
      { title: "Data completeness", body: "The share of expected readings that actually arrive, including after link outages." },
      { title: "Alarm quality", body: "Alarms per operator per shift, and how many led to real action." },
      { title: "Site visits avoided", body: "Trips that remote diagnosis made unnecessary, or made shorter because the crew knew what to bring." },
      { title: "Training readiness", body: "How confidently and accurately crews perform rare procedures in rehearsal before doing them live." },
    ],
    faqs: [
      { question: "How do you handle security near control systems?", answer: "We follow the zone and conduit model from IEC 62443: control networks stay segmented, data flows outward through a controlled boundary, there are no inbound connections to controllers, and every user has a named account with the least access they need." },
      { question: "What happens to data when a site loses connectivity?", answer: "Edge gateways store readings locally and forward them in order when the link returns, so history has no gaps. Central dashboards show clearly which sites are stale rather than displaying old values as current." },
      { question: "Is VR training realistic for field crews?", answer: "For procedures that are rare, dangerous, or expensive to rehearse on real equipment, yes. We keep sessions short, build them from your actual procedures, and test them with experienced crew before rollout." },
    ],
    posts: ["modernizing-legacy-scada-without-downtime", "scoping-a-digital-twin", "predictive-maintenance-where-to-start", "quantizing-models-for-industrial-edge-hardware"],
  },
  {
    slug: "heavy-machinery",
    icon: "precision_manufacturing",
    name: "Heavy Machinery and OEMs",
    description:
      "Embedded intelligence and service tools for equipment makers: on-machine edge AI, connected fleet platforms, customer and dealer apps, and AR service guidance for technicians.",
    headline: "Intelligence built",
    headlineAccent: "into the equipment",
    intro:
      "Equipment makers are increasingly judged on uptime and service, not only on the machine they ship. Customers expect to see how their fleet is performing, dealers want to know what is wrong before they send a technician, and engineering wants to know how machines are really used. We help OEMs add that intelligence to their products: edge computing on the machine, connected platforms and apps for customers and dealers, and service tools that help technicians fix the problem on the first visit.",
    challenges: [
      { title: "Service cost and response time", body: "Technicians travelling to remote sites without knowing what is wrong or which parts to bring." },
      { title: "Little field data", body: "Almost no feedback on how machines are actually used, loaded, and maintained once they leave the factory." },
      { title: "Harsh operating conditions", body: "Dust, vibration, heat, and no network coverage on many job sites, for years at a time." },
      { title: "Complex products", body: "Service procedures that are hard to document, harder to remember, and different for every model and variant." },
    ],
    useCases: [
      { title: "Connected machine platform", body: "Telemetry from the machine controller to a fleet portal for customers, dealers, and engineering, with data stored on the machine when out of coverage.", service: "industrial-software" },
      { title: "On-machine diagnostics", body: "Edge models that detect developing faults and recommend action without a network connection, sized to run on the machine's own hardware.", service: "edge-ai" },
      { title: "AR service manuals", body: "Interactive procedures anchored to the machine for dealer and field technicians, authored by your service engineers rather than developers.", service: "xr-spatial-computing" },
      { title: "Remote expert support", body: "Live video with spatial annotation so factory engineers can guide a repair anywhere in the world.", service: "xr-spatial-computing" },
      { title: "Customer and dealer apps", body: "Branded mobile apps for fleet status, service requests, and parts ordering, built and maintained as a product rather than a one-off project.", service: "product-engineering" },
    ],
    services: ["edge-ai", "industrial-software", "product-engineering", "xr-spatial-computing"],
    systems: ["Machine controllers and CAN bus gateways", "MQTT telemetry", "Embedded Linux and Android", "NVIDIA Jetson and ARM edge modules", "Dealer and ERP systems", "CAD models for AR", "Flutter mobile apps", "OTA update pipelines"],
    firstProject: {
      title: "A connected pilot fleet",
      summary:
        "Start with a small number of machines in real customer hands. The aim is to learn what data is worth collecting and what customers and dealers actually use, before committing to a platform across the product line.",
      steps: [
        "Agree the questions engineering, service, and customers most want answered.",
        "Fit or reuse a gateway that reads controller data and buffers it through coverage gaps.",
        "Stand up a simple fleet view for the internal team and one or two dealers.",
        "Add one diagnostic or service feature that saves a technician visit.",
        "Use the pilot data to plan the production platform and its costs.",
      ],
    },
    measures: [
      { title: "First-time fix rate", body: "Service visits that resolve the problem without a second trip." },
      { title: "Time to diagnose", body: "How long it takes from a customer's call to knowing what is wrong." },
      { title: "Connected fleet coverage", body: "The share of machines reporting regularly, and how fresh their data is." },
      { title: "App adoption", body: "How many customers and dealers use the portal or app each week, not just how many installed it." },
    ],
    faqs: [
      { question: "Can diagnostics run on the machine without connectivity?", answer: "Yes. Models are optimized to run on the machine's own compute, so faults are detected and shown to the operator even on sites with no coverage. Results sync to the fleet platform when a connection is available." },
      { question: "Who owns the platform and the data?", answer: "You do. We build on infrastructure in your accounts, hand over the code and documentation, and design the system so your own team or another partner can run and extend it." },
      { question: "Can our service engineers create AR procedures themselves?", answer: "That is the goal. The first procedures are built with you, and we plan authoring tools early so service engineers can capture and update procedures without a developer each time." },
    ],
    posts: ["quantizing-models-for-industrial-edge-hardware", "ar-work-instructions-for-maintenance", "predictive-maintenance-where-to-start", "on-device-llm-in-a-private-finance-app"],
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
