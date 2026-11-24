/**
 * Blog posts. Content is stored as typed blocks so pages stay fully static
 * and need no markdown tooling. Each post renders at /blog/<slug>.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  updated?: string;
  category: "Industrial Software" | "Edge AI" | "XR & Spatial";
  /** Derived from word count at ~220 wpm. */
  readingMinutes: number;
  /** Service slug this post relates to, for cross-linking. */
  service: string;
  tags: string[];
  body: Block[];
};

type PostInput = Omit<Post, "readingMinutes">;

const RAW_POSTS: PostInput[] = [
  {
    slug: "edge-ai-vs-cloud-ai-for-quality-control",
    title: "Edge AI vs Cloud AI for Manufacturing Quality Control",
    description:
      "When should a visual inspection model run on the line and when in the cloud? A practical comparison of latency, bandwidth, cost, data control, and maintenance.",
    date: "2026-11-24",
    category: "Edge AI",
    service: "edge-ai",
    tags: ["edge AI", "computer vision", "quality control", "manufacturing"],
    body: [
      { type: "p", text: "Automated visual inspection is one of the most practical uses of machine learning in manufacturing. A camera watches every part, a model decides whether it is good, and a reject mechanism removes the bad ones. The first architectural question on almost every project is where that model should run: on hardware next to the line, or on servers in the cloud." },
      { type: "p", text: "Both are valid. The right answer depends on a handful of constraints that are easy to measure before any code is written. This article walks through them in the order we usually assess them." },
      { type: "h2", text: "1. How fast does the decision need to be?" },
      { type: "p", text: "Start with the physical timeline. If parts move past the camera at 2 metres per second and the reject gate is 40 centimetres downstream, the system has 200 milliseconds from image capture to actuation. That budget has to cover exposure, image transfer, preprocessing, inference, and the signal to the PLC." },
      { type: "p", text: "A cloud round trip on a good connection might take 50 to 150 milliseconds before inference even starts, and that number is not stable. Network jitter, congestion during shift changes, and TLS handshakes after reconnects all add variance. For inline rejection, variance matters more than the average: a single slow response lets a defective part through." },
      { type: "callout", title: "Rule of thumb", text: "If the decision drives a physical action on the line within a second, run inference at the edge. If the decision feeds a report, a dashboard, or a later manual step, the cloud is an option." },
      { type: "h2", text: "2. How much data does the camera produce?" },
      { type: "p", text: "A single 5 megapixel camera at 30 frames per second produces hundreds of megabytes of raw image data per second. Compression helps, but inspection models are often sensitive to compression artifacts on small defects such as hairline cracks or fine scratches. Streaming full-resolution images from several cameras to the cloud quickly becomes an expensive bandwidth and storage problem." },
      { type: "p", text: "Edge inference turns this around. Images are processed locally and only the results travel: a pass or fail flag, a defect class, a bounding box, and perhaps a cropped image of each rejected part for review. That is a few kilobytes per part instead of megabytes." },
      { type: "h2", text: "3. What happens when the network goes down?" },
      { type: "p", text: "Plant networks are rarely as reliable as office networks. Switches get unplugged during maintenance, wireless links suffer interference from welding and motors, and internet uplinks fail. A cloud-dependent inspection system has to answer an uncomfortable question: when it cannot reach the model, does the line stop, or do parts pass uninspected?" },
      { type: "p", text: "An edge system keeps inspecting through an outage. Results are buffered locally and synced when the connection returns, so traceability is preserved without putting production at risk." },
      { type: "h2", text: "4. Who is allowed to see the images?" },
      { type: "p", text: "Product images can reveal proprietary designs, supplier details, and process know-how. Some customers, especially in defence, automotive, and pharmaceuticals, contractually restrict where production data may be stored. Running inference on site keeps raw images inside the facility by default and makes compliance discussions much simpler." },
      { type: "h2", text: "5. Where the cloud still helps" },
      { type: "p", text: "Edge inference does not mean the cloud has no role. The best architectures we see use each for what it does well:" },
      { type: "ul", items: [
        "Training and retraining models on GPU capacity that would sit idle on site most of the time.",
        "Storing a curated sample of images, especially rejects and borderline cases, for audits and future training.",
        "Comparing defect rates across lines, shifts, and plants.",
        "Managing model versions and pushing approved updates to a fleet of edge devices.",
      ] },
      { type: "p", text: "In this hybrid pattern the line never waits for the cloud, and the cloud never needs every frame." },
      { type: "h2", text: "6. Total cost of ownership" },
      { type: "p", text: "Edge hardware is an upfront cost: an industrial PC or embedded module per station, plus enclosures and cooling suited to the environment. Cloud inference is an ongoing cost that scales with image volume and runs for the life of the line. For continuous high-throughput inspection the edge is usually cheaper over a few years. For low-volume, intermittent, or offline review tasks, cloud inference can be more economical because nothing sits idle." },
      { type: "p", text: "Maintenance is the hidden cost on both sides. Edge devices need remote monitoring, secure updates, and a plan for hardware replacement. Cloud services need connectivity monitoring and cost controls. Budget for whichever you choose." },
      { type: "h2", text: "A decision checklist" },
      { type: "ol", items: [
        "Measure the time between image capture and the latest moment a decision is still useful.",
        "Estimate the data volume per camera per shift at the resolution the model needs.",
        "Ask what the line should do if the network is unavailable for an hour.",
        "Confirm any customer or regulatory restrictions on where images can be stored.",
        "Compare a three to five year cost for both options, including support.",
      ] },
      { type: "p", text: "If most answers point to tight latency, high volume, unreliable networks, or restricted data, run inference at the edge and use the cloud for training and fleet management. That combination covers the large majority of inline quality control projects we see." },
    ],
  },
  {
    slug: "modernizing-legacy-scada-without-downtime",
    title: "How to Modernize a Legacy SCADA System Without Stopping Production",
    description:
      "A step-by-step approach to modernizing aging SCADA and HMI systems: inventory, read-only mirroring, the strangler pattern, security, and safe cutover.",
    date: "2026-11-24",
    category: "Industrial Software",
    service: "industrial-software",
    tags: ["SCADA", "legacy modernization", "OPC UA", "industrial software"],
    body: [
      { type: "p", text: "Many plants run on SCADA systems that were installed fifteen or twenty years ago. They still work, which is exactly the problem. Replacing them feels risky, the original integrator may no longer exist, the operating system is out of support, and every month the gap between what the system can do and what the business needs gets wider." },
      { type: "p", text: "A full rip-and-replace project is rarely the right answer. It needs a long shutdown, a perfect understanding of how the old system behaves, and a lot of faith. The approach below lets you modernize in small, reversible steps while production keeps running." },
      { type: "h2", text: "Step 1: Build an honest inventory" },
      { type: "p", text: "Before changing anything, document what exists. In older systems this information is often scattered across project files, operator knowledge, and controller programs that have been edited many times." },
      { type: "ul", items: [
        "Controllers: make, model, firmware version, and communication protocols for every PLC and RTU.",
        "Tags: the full tag list with addresses, data types, scaling, and which screens and alarms use each one.",
        "Logic outside the PLC: scripts, calculations, and sequences running in the SCADA server itself. These are the most commonly missed items.",
        "Interfaces: historians, reports, database exports, and anything else that reads from or writes to the system.",
        "Network: VLANs, firewalls, remote access paths, and which devices can reach which.",
      ] },
      { type: "callout", title: "Watch for hidden logic", text: "SCADA scripts often implement interlocks, recipe handling, or shift calculations that nobody remembers. If a new system misses them, the first sign is usually a production problem. Read every script before planning the migration." },
      { type: "h2", text: "Step 2: Mirror the data, read only" },
      { type: "p", text: "The safest first move is to read data without writing anything. Depending on what the old system supports, this might be an OPC DA or OPC UA connection, direct reads from the PLCs through a protocol gateway, or queries against the historian database." },
      { type: "p", text: "Publish that data into a modern, well structured layer. A common pattern is an MQTT broker using a consistent topic structure, often called a unified namespace, combined with a time-series database. From this point new dashboards, reports, and integrations can be built against the mirror instead of the legacy system." },
      { type: "p", text: "Nothing about production has changed, yet the business already gets something useful: live data that was previously locked inside the control room." },
      { type: "h2", text: "Step 3: Strangle the old system one function at a time" },
      { type: "p", text: "Software engineers call this the strangler pattern. Instead of replacing the whole system at once, you replace one function, prove it works, and move on. Good early candidates are functions that are read only or low risk:" },
      { type: "ol", items: [
        "Reporting and shift summaries.",
        "Trend displays and historian queries.",
        "Alarm notifications by email or messaging.",
        "Overview screens for supervisors and management.",
      ] },
      { type: "p", text: "Operator control screens and anything that writes setpoints come last, once the new platform has run alongside the old one long enough to earn trust." },
      { type: "h2", text: "Step 4: Run in parallel and compare" },
      { type: "p", text: "For each migrated function, run old and new side by side and compare outputs automatically. Totals, counts, alarm timestamps, and calculated values should match. Differences usually reveal undocumented scaling, rounding, or timing behaviour in the old system that needs to be reproduced or deliberately changed." },
      { type: "h2", text: "Step 5: Design security in, not on" },
      { type: "p", text: "Legacy SCADA was often designed for an isolated network that is no longer isolated. Modernization is the right moment to fix that. Follow the zone and conduit model from IEC 62443: keep control networks segmented, make data flow outward through a controlled demilitarized zone, avoid inbound connections from the business network to controllers, and replace shared accounts with named users and role-based access." },
      { type: "h2", text: "Step 6: Plan the control cutover carefully" },
      { type: "p", text: "When it is finally time to move operator control, plan it like a maintenance shutdown, even if the change itself is small:" },
      { type: "ul", items: [
        "Schedule it inside an existing planned maintenance window.",
        "Prepare and test a written rollback procedure that restores the old system in minutes.",
        "Train operators on the new screens before the cutover, using the parallel system.",
        "Have engineers on site for the first shifts after the switch.",
      ] },
      { type: "h2", text: "What you end up with" },
      { type: "p", text: "At the end of this process the plant has a modern, supported platform, a clean data layer that other systems can use, and better security. More importantly, there was never a day when production depended on a big-bang switchover going perfectly. Each step was small enough to undo." },
    ],
  },
  {
    slug: "predictive-maintenance-where-to-start",
    title: "Predictive Maintenance: Where to Start When You Have Little Data",
    description:
      "A practical guide to starting predictive maintenance: choosing the right assets, sensors, and baselines, and why anomaly detection comes before failure prediction.",
    date: "2026-11-24",
    category: "Edge AI",
    service: "edge-ai",
    tags: ["predictive maintenance", "condition monitoring", "anomaly detection", "vibration analysis"],
    body: [
      { type: "p", text: "Predictive maintenance promises to fix equipment just before it fails: no wasted preventive work, no surprise breakdowns. The common obstacle is data. Most plants do not have years of labelled failure history for each machine, and a model cannot learn to predict a failure it has never seen." },
      { type: "p", text: "The good news is that you do not need failure data to get value. You need to know what normal looks like. This article describes the path we recommend for teams starting from little or no historical data." },
      { type: "h2", text: "Pick assets where failure really hurts" },
      { type: "p", text: "Do not start by instrumenting everything. Choose a small number of assets using three questions:" },
      { type: "ul", items: [
        "Does a failure stop production or create a safety risk?",
        "Is there no spare or redundant unit that can take over quickly?",
        "Does the asset have a failure mode that develops gradually, such as bearing wear, imbalance, misalignment, or fouling?",
      ] },
      { type: "p", text: "Rotating equipment, including motors, pumps, fans, compressors, and gearboxes, is the usual starting point because its degradation shows up clearly in vibration and temperature long before failure." },
      { type: "h2", text: "Choose sensors for the failure mode" },
      { type: "p", text: "Each failure mode leaves a different signature. Match the sensor to what you want to detect:" },
      { type: "ul", items: [
        "Vibration (accelerometers): bearing defects, imbalance, misalignment, looseness.",
        "Motor current: electrical faults, load changes, some mechanical problems, without touching the machine.",
        "Temperature: lubrication problems, overload, cooling failures.",
        "Acoustic and ultrasound: leaks, early bearing wear, cavitation in pumps.",
        "Process signals such as pressure, flow, and speed, which are often already available in the PLC.",
      ] },
      { type: "callout", title: "Check the PLC first", text: "Before buying new sensors, look at what the control system already measures. Motor current, speeds, pressures, and temperatures are frequently available as tags and cost nothing to collect." },
      { type: "h2", text: "Learn normal, then detect abnormal" },
      { type: "p", text: "With a few weeks of data from a healthy machine, you can build a baseline of normal behaviour across its operating states. Anomaly detection models then flag when the machine drifts away from that baseline. Useful techniques range from simple statistical limits on vibration features, through clustering of operating states, to autoencoders that learn to reconstruct normal signals and score how badly they reconstruct new ones." },
      { type: "p", text: "Operating context matters. A pump running at full speed vibrates differently from one at half speed. Models should account for load, speed, and product changes, or they will raise alarms every time production changes." },
      { type: "h2", text: "Put a person in the loop" },
      { type: "p", text: "Early on, every alert should go to a maintenance engineer who inspects the machine and records what they found. Those records are the beginning of the labelled history you did not have. Over time they let you tune thresholds, suppress nuisance alerts, and recognise specific failure modes by their signatures." },
      { type: "h2", text: "Where edge computing fits" },
      { type: "p", text: "Vibration analysis needs high sample rates, often thousands of samples per second per channel. Sending all of that raw data to a central server is expensive and unnecessary. An edge device can compute features such as RMS, peak values, and frequency spectra locally, run the anomaly model, and send only features and alerts upstream. It also keeps monitoring when the network is down." },
      { type: "h2", text: "From anomaly detection to prediction" },
      { type: "p", text: "Remaining useful life estimates become realistic once you have observed several degradation cycles and recorded what happened at the end of each. For most teams that takes months to a few years, depending on how often failures occur. Starting with anomaly detection means you get value on day one while building the data that prediction needs." },
      { type: "h2", text: "A realistic first project" },
      { type: "ol", items: [
        "Select three to five critical rotating assets.",
        "Install vibration and temperature sensors and connect existing PLC tags.",
        "Collect a few weeks of baseline data across normal operating conditions.",
        "Deploy anomaly detection on an edge gateway with alerts to maintenance.",
        "Record every alert outcome and review thresholds monthly.",
      ] },
      { type: "p", text: "This is small enough to deliver quickly, cheap enough to justify, and it creates the foundation for more advanced models later." },
    ],
  },
  {
    slug: "scoping-a-digital-twin",
    title: "Scoping a Digital Twin That Actually Pays Off",
    description:
      "Digital twin projects often fail by trying to model everything. How to scope a twin around one decision, choose the right fidelity, and connect it to live data.",
    date: "2026-11-24",
    category: "XR & Spatial",
    service: "xr-spatial-computing",
    tags: ["digital twin", "spatial computing", "simulation", "industrial XR"],
    body: [
      { type: "p", text: "The term digital twin covers everything from a 3D model with a few live numbers attached to a physics simulation of an entire plant. That range is part of why so many projects stall. Teams set out to build a complete virtual copy of the facility, spend months on modelling, and end up with an impressive visual that nobody uses every day." },
      { type: "p", text: "A twin that pays off is scoped around a decision, not around the asset." },
      { type: "h2", text: "Start with the decision" },
      { type: "p", text: "Ask who will use the twin, how often, and what they will decide with it. Some examples that lead to very different twins:" },
      { type: "ul", items: [
        "A control room operator needs to see where an alarm is, what is around it, and which crew is closest.",
        "A planning engineer wants to test whether a new line layout creates congestion before moving equipment.",
        "A maintenance lead wants to see the condition of every pump on a site and plan the next shutdown.",
        "A trainer needs a safe environment to rehearse an isolation procedure.",
      ] },
      { type: "p", text: "Each of these needs different data, different fidelity, and a different interface. Trying to serve all of them in one first release is how projects lose focus." },
      { type: "h2", text: "Choose the right level of fidelity" },
      { type: "p", text: "It helps to think of three levels and pick the lowest one that supports the decision:" },
      { type: "h3", text: "Descriptive twin" },
      { type: "p", text: "A spatial model linked to live data. It shows the current state of assets in context. This is often enough for monitoring, navigation, and maintenance planning." },
      { type: "h3", text: "Diagnostic twin" },
      { type: "p", text: "Adds history and analytics, such as trends, anomaly scores, and alarm history, so users can understand why something happened." },
      { type: "h3", text: "Predictive or simulation twin" },
      { type: "p", text: "Adds models that simulate behaviour: material flow, thermal response, or the effect of a layout change. This is the most valuable and the most expensive level, and it only makes sense when a specific what-if question justifies it." },
      { type: "h2", text: "Geometry: use what you have" },
      { type: "p", text: "Highly detailed 3D models are expensive to make and slow to render. For most operational twins, simplified geometry is better. CAD data can be decimated, buildings can be captured with laser scanning or photogrammetry, and many assets can be represented by simple shapes with the right labels. Spend detail where the user needs it, such as an equipment panel they interact with, and keep the rest light." },
      { type: "h2", text: "Data: the twin is only as good as its feed" },
      { type: "p", text: "A twin that shows stale or wrong data loses trust immediately. Before building visuals, make sure there is a reliable data layer behind it: tags mapped to physical assets with consistent naming, timestamps that are trustworthy, and a clear indicator when a value is old or a sensor is offline. If the plant does not have this layer yet, building it is often the most valuable part of the project, and it benefits every other system too." },
      { type: "callout", title: "Map assets, not tags", text: "Organise data around physical assets and their hierarchy, such as site, area, line, machine, and component, instead of raw PLC tag names. Open standards like the Asset Administration Shell or a well designed unified namespace make this easier to maintain." },
      { type: "h2", text: "Pick the interface for the context" },
      { type: "p", text: "Not every twin needs a headset. Control rooms usually work best with a large screen and a web interface. Field crews benefit from a tablet or AR view that overlays data on the real equipment. VR is ideal for training and design reviews where people need to feel the space. Choose the device for the job, and use open formats such as glTF and USD so the same model can serve more than one interface later." },
      { type: "h2", text: "A scoping template" },
      { type: "ol", items: [
        "Name the primary user and the decision they will make with the twin.",
        "List the data needed for that decision and confirm it exists and is reliable.",
        "Choose the lowest fidelity level that supports the decision.",
        "Define the area or assets in scope for the first release.",
        "Pick the interface that fits where the user works.",
        "Agree how you will measure whether the twin is used and useful.",
      ] },
      { type: "p", text: "A well scoped first release can be delivered in weeks rather than months. Once people use it every day, extending it to new areas and new decisions is straightforward." },
    ],
  },
  {
    slug: "quantizing-models-for-industrial-edge-hardware",
    title: "Quantizing Neural Networks for Industrial Edge Hardware",
    description:
      "How to shrink vision and sensor models for Jetson, Intel, and ARM edge devices with INT8 quantization, pruning, and compilation, without losing accuracy where it matters.",
    date: "2026-11-24",
    category: "Edge AI",
    service: "edge-ai",
    tags: ["quantization", "model optimization", "TensorRT", "OpenVINO", "edge AI"],
    body: [
      { type: "p", text: "A model that runs comfortably on a training GPU can be far too slow or too large for the hardware that fits in an industrial enclosure. Edge devices have limited memory, limited power, and often no active cooling. Getting a model to run at line speed on them is an engineering task in its own right, and quantization is usually the biggest lever." },
      { type: "h2", text: "What quantization does" },
      { type: "p", text: "Neural networks are normally trained with 32-bit floating point weights and activations. Quantization represents them with fewer bits, most commonly 8-bit integers (INT8) or 16-bit floats (FP16). An INT8 model is roughly a quarter of the size of its FP32 version and can run several times faster on hardware with integer acceleration, which includes NVIDIA Tensor Cores, Intel CPUs with VNNI instructions, and most dedicated NPUs." },
      { type: "p", text: "The cost is precision. Each weight and activation is mapped to a limited set of values, which introduces small errors. For most well trained models the effect on accuracy is small, but it is never zero, and in inspection tasks a small drop in recall on a rare defect can matter a lot." },
      { type: "h2", text: "Start with FP16" },
      { type: "p", text: "On GPUs and many accelerators, FP16 is close to a free win. It halves memory use, speeds up inference, and almost never changes accuracy in a measurable way. Try it first and measure. If it meets your latency target, you may not need INT8 at all." },
      { type: "h2", text: "Post-training quantization" },
      { type: "p", text: "Post-training quantization (PTQ) converts a trained model to INT8 without retraining. It needs a calibration dataset, a few hundred representative images or sensor windows, which the toolkit runs through the model to find the range of values each layer produces." },
      { type: "callout", title: "Calibration data matters", text: "Use calibration data from the real line, covering all lighting conditions, product variants, and defect types. Calibrating only on clean, good parts is a common reason INT8 models miss defects in production." },
      { type: "p", text: "Toolkits such as TensorRT, OpenVINO, ONNX Runtime, and TFLite all support PTQ. Try both per-tensor and per-channel quantization where available; per-channel usually preserves accuracy better for convolutional layers." },
      { type: "h2", text: "Quantization-aware training" },
      { type: "p", text: "If PTQ costs too much accuracy, quantization-aware training (QAT) simulates INT8 rounding during a short fine-tuning run, so the network learns to tolerate it. QAT takes more effort but usually recovers most of the lost accuracy. It is worth the effort when the target hardware only supports INT8 or when the latency budget leaves no room for FP16." },
      { type: "h2", text: "Find the sensitive layers" },
      { type: "p", text: "Not every layer reacts to quantization in the same way. The first and last layers, attention layers, and layers with unusual activation distributions are often the most sensitive. Most toolkits let you keep selected layers in FP16 while quantizing the rest. A layer-by-layer sensitivity analysis, quantizing one layer at a time and measuring the accuracy change, quickly shows which ones to protect." },
      { type: "h2", text: "Other optimizations" },
      { type: "ul", items: [
        "Architecture choice: an efficient backbone designed for mobile or edge use often beats a heavily compressed large model.",
        "Input resolution: lowering resolution has a large effect on speed. Crop to the region of interest instead of shrinking the whole frame.",
        "Pruning: removing redundant channels reduces compute, but needs fine-tuning and does not always speed up inference on every runtime.",
        "Knowledge distillation: train a small model to imitate a large one, keeping much of the accuracy at a fraction of the cost.",
        "Compilation: let the vendor compiler fuse layers and pick kernels for the specific device.",
      ] },
      { type: "h2", text: "Measure what matters" },
      { type: "p", text: "Overall accuracy can hide important changes. For inspection tasks, measure recall per defect class, especially for rare and small defects, and the false reject rate on good parts. For latency, measure the full pipeline on the target device under sustained load, including image capture, preprocessing, and post-processing. Watch for thermal throttling: a device that hits its target for one minute may slow down after an hour inside a hot enclosure." },
      { type: "h2", text: "A practical workflow" },
      { type: "ol", items: [
        "Export the trained model to ONNX and confirm outputs match the original.",
        "Benchmark FP32 and FP16 on the target device with the full pipeline.",
        "Apply INT8 PTQ with calibration data from the real line.",
        "Compare per-class metrics against FP32 on a held-out test set.",
        "If accuracy drops too far, keep sensitive layers in FP16 or move to QAT.",
        "Run a long soak test in the real enclosure to check thermal behaviour.",
      ] },
      { type: "p", text: "Treat the optimized model as a new model with its own validation, not as a compressed copy of the old one. That mindset prevents most of the surprises we see when models move from the lab to the line." },
    ],
  },
  {
    slug: "ar-work-instructions-for-maintenance",
    title: "Designing AR Work Instructions for Maintenance Teams",
    description:
      "How to make AR work instructions useful on the shop floor: picking the procedure, device, and anchoring, and designing for gloves, noise, and time pressure.",
    date: "2026-11-24",
    category: "XR & Spatial",
    service: "xr-spatial-computing",
    tags: ["augmented reality", "work instructions", "maintenance", "training"],
    body: [
      { type: "p", text: "Augmented reality work instructions put guidance directly on the equipment: arrows on the bolt to loosen, a highlight on the valve to close, a torque value next to the fastener. Done well, they shorten training and reduce errors on complex or infrequent tasks. Done badly, they become a headset that sits in a cupboard." },
      { type: "p", text: "The difference is rarely the technology. It is how well the instructions fit the job, the environment, and the people doing it." },
      { type: "h2", text: "Choose the right first procedure" },
      { type: "p", text: "AR earns its place on tasks that are complex, infrequent, or high consequence. Good candidates share several of these traits:" },
      { type: "ul", items: [
        "Many steps where order matters, such as a changeover or a component replacement.",
        "Performed rarely, so people forget details between occurrences.",
        "Errors are expensive: rework, damaged equipment, or safety risk.",
        "Currently documented in a long manual that nobody reads at the machine.",
      ] },
      { type: "p", text: "Simple daily tasks that operators already know well are poor candidates. The overhead of putting on a device outweighs the benefit." },
      { type: "h2", text: "Pick the device for the environment" },
      { type: "p", text: "Head-mounted displays keep both hands free, which matters when a task needs tools in both hands. They can be uncomfortable for long shifts, may conflict with required safety gear, and need careful hygiene when shared. Tablets and phones are familiar, robust, cheap to replace, and often good enough when the user can put the device down between steps. Many successful deployments start on tablets and move to headsets only for the tasks that clearly need hands-free use." },
      { type: "h2", text: "Anchoring: how content stays in place" },
      { type: "p", text: "Instructions must line up with the real equipment. There are three common approaches:" },
      { type: "ul", items: [
        "Marker-based: a printed marker on the machine gives a reliable reference point. Simple and robust, but markers can get dirty or removed.",
        "Model-based tracking: the system recognises the shape of the equipment from its 3D model. No markers, but it needs good geometry and works best on distinctive objects.",
        "Spatial anchors: the device maps the room and remembers where content was placed. Flexible, but can drift in large or changing environments.",
      ] },
      { type: "p", text: "In industrial settings, a combination often works best: a marker or model to locate the machine, then local tracking for the steps around it." },
      { type: "h2", text: "Design for the shop floor, not the demo room" },
      { type: "p", text: "Conditions on the floor are very different from an office. Design for them from the start:" },
      { type: "ul", items: [
        "Gloves: large touch targets, voice commands, or physical buttons. Small gestures fail with thick gloves.",
        "Noise: voice commands need noise-robust recognition and a fallback input method.",
        "Lighting: bright sunlight and dim corners both affect tracking and visibility. Test in both.",
        "Attention: show one step at a time with short text. Technicians glance at instructions; they do not read paragraphs.",
        "Safety: never block the view of moving machinery, and keep overlays away from the user's walking path.",
      ] },
      { type: "callout", title: "Test with the people who do the work", text: "Run early prototypes with experienced technicians and with new hires. Experienced staff will spot wrong or missing steps; new staff will show where the instructions are unclear." },
      { type: "h2", text: "Capture data for traceability" },
      { type: "p", text: "Digital instructions can record what was done: which steps were completed, when, by whom, and with photo evidence at critical points. For regulated industries this replaces paper checklists. For everyone, it reveals which steps take longest or get repeated, which shows where the procedure or the equipment design could improve." },
      { type: "h2", text: "Plan for authoring at scale" },
      { type: "p", text: "The first procedure is usually built by developers. The tenth should not be. If AR is going to scale, subject matter experts need a simple way to create and update instructions themselves: capture steps on the device, add text, photos, and highlights, and publish after review. Plan for this tooling early, or every new procedure becomes a software project." },
      { type: "h2", text: "Measure the result" },
      { type: "p", text: "Before rollout, measure how long the procedure takes and how often errors or rework occur. Measure again after technicians have used AR instructions for a few weeks. These numbers are what justify extending AR to the next set of procedures." },
    ],
  },
];

export function wordCount(blocks: Block[]) {
  return blocks
    .flatMap((b) => ("items" in b ? b.items : []).concat("text" in b ? [b.text] : [], "title" in b ? [b.title] : []))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export const POSTS: Post[] = RAW_POSTS.map((p) => ({
  ...p,
  readingMinutes: Math.max(1, Math.ceil(wordCount(p.body) / 220)),
}));

/** Posts sorted newest first (array order breaks ties). */
export function getAllPosts() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostsForService(serviceSlug: string) {
  return getAllPosts().filter((p) => p.service === serviceSlug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
