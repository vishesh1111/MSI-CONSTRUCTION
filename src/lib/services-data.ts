export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  content: string[];
  features: string[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  image: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    h1: 'Luxury Residential Construction in Delhi NCR',
    metaTitle: 'Residential Construction Services | MSI Construction',
    metaDescription: 'Expert residential construction services in Delhi NCR. Over 30 years of experience delivering luxury homes, villas, and modern residential complexes.',
    heroDescription: 'Building dream homes with unmatched precision and luxury in the heart of Delhi NCR.',
    content: [
      'At MSI Construction, we believe that your home is an extension of your legacy. Our residential construction services are designed to bring your vision to life, crafting luxurious living spaces that stand the test of time. With a meticulous approach to structural integrity and architectural finesse, we manage every phase of the project from the ground up.',
      'With over 30 years of extensive experience and a portfolio boasting over 1000+ completed projects across 42+ cities, our team of seasoned engineers and designers ensures flawless execution. Our deep understanding of the Delhi NCR market allows us to navigate local regulations effortlessly while incorporating designs that suit the region\'s distinct lifestyle and climate.',
      'We cater to discerning clients seeking bespoke villas, high-end apartments, and sprawling estates. Through our partnerships with prestigious brands like JW Marriott, Taj Vivanta, and ITC Grand Chola in the commercial sphere, we bring the same level of opulence and meticulous quality control to our residential projects, guaranteeing an unparalleled living experience.'
    ],
    features: [
      'Custom architectural design and space planning',
      'High-grade, sustainable building materials',
      'Smart home integration and automation',
      'End-to-end project management with transparent timelines',
      'Rigorous quality checks and post-construction support'
    ],
    faqs: [
      { q: 'How long does a luxury residential project typically take?', a: 'Depending on the scale and complexity, a custom luxury home in Delhi NCR generally takes 12 to 18 months from groundbreaking to handover.' },
      { q: 'Do you assist with obtaining building permits?', a: 'Yes, our team handles all local regulatory approvals and permits required by municipal authorities in Delhi NCR.' },
      { q: 'Can I integrate sustainable solutions into my new home?', a: 'Absolutely. We specialize in green building practices, including solar integration, rainwater harvesting, and energy-efficient HVAC systems.' },
      { q: 'What is your process for maintaining quality control?', a: 'We implement multi-tiered quality assurance protocols led by experienced site engineers, ensuring materials and workmanship exceed industry standards.' },
      { q: 'Do you offer warranty on your construction projects?', a: 'Yes, we provide comprehensive warranties covering structural integrity and core installations for a specified period post-handover.' }
    ],
    relatedServices: ['interior-design', 'home-renovation', 'turnkey-projects'],
    image: '/GPT/Residential/Exterior/modern-residential-exterior-architecture.png'
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    h1: 'Premier Commercial Construction Services',
    metaTitle: 'Commercial Construction Company Delhi NCR | MSI Construction',
    metaDescription: 'Leading commercial construction company. Delivering premium corporate offices, retail spaces, and hospitality projects with 30+ years of expertise.',
    heroDescription: 'Engineered for success, our commercial spaces combine aesthetic brilliance with functional efficiency.',
    content: [
      'MSI Construction is at the forefront of commercial development in the Delhi NCR region, delivering state-of-the-art office buildings, retail centers, and hospitality venues. We understand that a commercial space is a reflection of a brand\'s identity and a critical asset for operational success. Our approach integrates innovative architectural designs with robust engineering to create environments that inspire productivity and attract clientele.',
      'Our legacy is built on executing complex, large-scale projects flawlessly. Having successfully delivered 1000+ projects across 42+ cities over our 30-year history, our expertise is unparalleled. We bring the discipline and high standards required by top-tier hospitality clients—such as JW Marriott, Taj Vivanta, and ITC Grand Chola—to every commercial endeavor we undertake.',
      'Targeting corporate enterprises, developers, and premium retail brands, our commercial construction division is equipped to handle stringent timelines and complex logistical challenges. We utilize advanced construction methodologies and premium materials, ensuring every facility we build is resilient, energy-efficient, and aligned with modern corporate requirements.'
    ],
    features: [
      'Turnkey commercial development solutions',
      'Adherence to global safety and structural standards',
      'Energy-efficient building envelopes and MEP systems',
      'Advanced scheduling for timely project delivery',
      'Expertise in high-rise and mixed-use developments'
    ],
    faqs: [
      { q: 'What types of commercial properties do you build?', a: 'We specialize in corporate headquarters, premium retail malls, hospitality establishments, and mixed-use commercial complexes.' },
      { q: 'How do you ensure minimal disruption in busy urban areas?', a: 'We employ advanced logistical planning and noise-mitigation strategies to ensure our construction activities comply with local regulations and minimize neighborhood impact.' },
      { q: 'Do you handle the interior fit-outs as well?', a: 'Yes, we offer comprehensive turnkey solutions that include both structural construction and customized interior fit-outs.' },
      { q: 'Can you build LEED-certified commercial buildings?', a: 'Yes, our engineering team is well-versed in sustainable construction practices necessary to achieve LEED and other green building certifications.' },
      { q: 'How do you manage project budgets for large commercial builds?', a: 'We provide detailed cost estimations upfront and utilize rigorous project management software to track expenses, ensuring projects stay within budgetary parameters.' }
    ],
    relatedServices: ['commercial-interior-design', 'turnkey-projects', 'architecture-and-planning'],
    image: '/GPT/Commercial/commercial-office-construction.png'
  },
  {
    slug: 'industrial-construction',
    title: 'Industrial Construction',
    h1: 'Advanced Industrial Construction Solutions',
    metaTitle: 'Industrial Construction Services | MSI Construction',
    metaDescription: 'Robust and scalable industrial construction solutions across India. Specializing in heavy manufacturing facilities and specialized complexes.',
    heroDescription: 'Building resilient infrastructures designed to power the next generation of industry.',
    content: [
      'In the fast-evolving industrial landscape, reliable infrastructure is the backbone of operational efficiency. MSI Construction delivers robust industrial construction services tailored to the heavy manufacturing and processing sectors. Our facilities are engineered to endure heavy loads, extreme operational conditions, and continuous usage, providing a safe and efficient environment for your workforce and machinery.',
      'Our footprint extends beyond Delhi NCR, encompassing projects across 42+ cities over the last three decades. With a deep understanding of industrial workflows, we construct facilities that optimize spatial utilization and integrate seamlessly with complex heavy machinery. This vast experience of over 1000 projects guarantees a streamlined construction process, from site preparation to final commissioning.',
      'We serve manufacturing conglomerates, logistics giants, and specialized industrial operators. Recognizing the critical nature of industrial timelines, our project management teams prioritize rapid deployment without compromising on the stringent safety and structural standards that define our brand.'
    ],
    features: [
      'Heavy-duty flooring and structural frameworks',
      'Integration of specialized industrial utility systems',
      'Compliance with industrial safety and environmental regulations',
      'Scalable designs to accommodate future expansion',
      'Rapid construction techniques using pre-engineered building (PEB) systems'
    ],
    faqs: [
      { q: 'What specific industrial sectors do you serve?', a: 'We serve a wide range of sectors including automotive, pharmaceuticals, heavy manufacturing, and FMCG processing plants.' },
      { q: 'Are your industrial buildings designed for expansion?', a: 'Yes, our architectural designs incorporate modularity, allowing for seamless structural expansions as your operational needs grow.' },
      { q: 'How do you handle specialized machinery foundations?', a: 'Our structural engineers design custom machine foundations tailored to the specific load and vibration requirements of your heavy equipment.' },
      { q: 'Do you construct Pre-Engineered Buildings (PEBs)?', a: 'Yes, PEBs are a core part of our industrial offerings, providing rapid construction timelines and excellent structural durability.' },
      { q: 'What safety standards do you adhere to during construction?', a: 'We strictly comply with national safety codes and international best practices, ensuring zero-harm environments on all our sites.' }
    ],
    relatedServices: ['warehouse-construction', 'factory-construction', 'turnkey-projects'],
    image: '/img/residential-exterior-construction.jpg'
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    h1: 'Bespoke Interior Design Services',
    metaTitle: 'Luxury Interior Design Services Delhi NCR | MSI Construction',
    metaDescription: 'Transform your spaces with MSI Construction\'s premium interior design services. Expert residential and commercial interior solutions.',
    heroDescription: 'Crafting immersive environments that perfectly balance aesthetic elegance and practical functionality.',
    content: [
      'MSI Construction offers premier interior design services that transform ordinary spaces into extraordinary environments. We approach interior design as a deeply personal journey, tailoring every texture, color, and fixture to reflect the unique personality and lifestyle of our clients. Whether it is a contemporary urban apartment or a sprawling classic estate, our designs elevate the everyday living experience.',
      'Drawing on over 30 years of industry leadership and exposure to world-class hospitality projects like JW Marriott and Taj Vivanta, our design team brings a sophisticated, global perspective to the Delhi NCR market. We leverage our network of premium suppliers and master artisans to source the finest materials, ensuring impeccable finishes and unmatched luxury in every corner of your home.',
      'Our target audience includes homeowners, luxury real estate developers, and individuals who demand excellence and exclusivity. By combining our architectural prowess with our refined design sensibilities, we offer a cohesive approach that guarantees the interior seamlessly complements the structural architecture.'
    ],
    features: [
      'Personalized concept development and 3D visualization',
      'Sourcing of exclusive, high-end materials and furnishings',
      'Custom cabinetry and bespoke furniture design',
      'Advanced lighting design and acoustic treatments',
      'Seamless coordination between design and execution teams'
    ],
    faqs: [
      { q: 'Do you only design spaces constructed by MSI?', a: 'No, we provide standalone interior design services for existing properties as well as for new constructions built by other contractors.' },
      { q: 'How long does the interior design process take?', a: 'Design conceptualization usually takes 4-6 weeks, with execution varying from 3 to 6 months depending on the project scope.' },
      { q: 'Can you work with my existing furniture?', a: 'Yes, we can skillfully integrate your cherished pieces into a new, cohesive design scheme.' },
      { q: 'What is included in your interior design package?', a: 'Our turnkey packages include concept design, 3D renderings, material selection, procurement, and complete on-site execution.' },
      { q: 'Do you provide smart home automation in your designs?', a: 'Yes, integrating seamless smart home technology is a key feature of our modern luxury interior designs.' }
    ],
    relatedServices: ['luxury-interior-design', 'office-interior-design', 'residential-construction'],
    image: '/GPT/Residential/Living Room/luxury-courtyard-interior-design.png'
  },
  {
    slug: 'renovation-and-remodeling',
    title: 'Renovation & Remodeling',
    h1: 'Expert Renovation & Remodeling Services',
    metaTitle: 'Home & Commercial Renovation Services | MSI Construction',
    metaDescription: 'Breathe new life into your property with our comprehensive renovation and remodeling services in Delhi NCR. Upgrading spaces with modern luxury.',
    heroDescription: 'Revitalize your existing spaces with cutting-edge design and superior craftsmanship.',
    content: [
      'Renovating an existing property requires a delicate balance of preserving structural integrity while infusing modern aesthetics and functionality. MSI Construction specializes in comprehensive renovation and remodeling services for both residential and commercial properties. We transform outdated structures into contemporary masterpieces, enhancing both their market value and usability.',
      'With a legacy spanning 30+ years and over 1000 projects completed, our expertise allows us to anticipate hidden challenges commonly found in renovation projects. Our experience in the diverse architectural landscape of Delhi NCR ensures that we approach every remodel with technical precision. We seamlessly integrate new plumbing, electrical, and HVAC systems into older frameworks without compromising the building’s safety.',
      'Our remodeling services cater to property owners looking to upgrade their living standards, as well as businesses seeking a brand refresh. We apply the same rigorous quality control and luxury standards demanded by our hospitality clients, such as ITC Grand Chola, to ensure your remodeled space feels entirely brand new and unequivocally premium.'
    ],
    features: [
      'Comprehensive structural assessment and retrofitting',
      'Modernization of MEP (Mechanical, Electrical, Plumbing) systems',
      'Space reconfiguration and open-floor plan conversions',
      'Upgraded energy efficiency and insulation',
      'High-end surface finishes and architectural detailing'
    ],
    faqs: [
      { q: 'Is it more cost-effective to renovate or rebuild?', a: 'This depends on the structural condition. We conduct a thorough assessment to advise you on the most financially sound and structurally safe approach.' },
      { q: 'Do I need to move out during a major home renovation?', a: 'For extensive structural or whole-house remodels, vacating the premises is usually recommended for safety and speed of execution.' },
      { q: 'Can you add extensions to an existing building?', a: 'Yes, we specialize in seamless lateral and vertical extensions, ensuring the new structure perfectly matches the existing aesthetic.' },
      { q: 'How do you handle unexpected structural issues?', a: 'Our 30 years of experience equips us to quickly adapt. We keep a contingency budget and maintain transparent communication with clients if unforeseen issues arise.' },
      { q: 'Do you manage the disposal of demolition debris?', a: 'Absolutely. We handle all site clearance and ensure debris is disposed of responsibly according to local environmental regulations.' }
    ],
    relatedServices: ['home-renovation', 'interior-design', 'residential-construction'],
    image: '/img/construction-project-feature.jpg'
  },
  {
    slug: 'turnkey-projects',
    title: 'Turnkey Projects',
    h1: 'End-to-End Turnkey Construction',
    metaTitle: 'Turnkey Construction Contractors in Delhi NCR | MSI',
    metaDescription: 'From concept to handover, MSI Construction provides seamless turnkey project solutions. Single-point accountability for luxury builds.',
    heroDescription: 'Experience stress-free construction with our comprehensive concept-to-completion turnkey solutions.',
    content: [
      'MSI Construction’s Turnkey Project services offer the ultimate convenience for clients seeking a hassle-free building experience. By acting as the single point of contact, we take full responsibility for every aspect of the project—from initial architectural planning and securing approvals to structural construction and final interior styling. You share your vision, and we hand you the keys to a completed masterpiece.',
      'Our turnkey model is built on an expansive foundation of 30+ years of operational excellence across 42+ cities. Managing over 1000 projects has honed our ability to synchronize diverse teams of architects, engineers, and artisans flawlessly. This unified approach eliminates the communication gaps and delays often experienced when coordinating multiple independent contractors in the Delhi NCR region.',
      'Tailored for busy professionals, corporate entities, and NRIs, our turnkey solutions ensure strict adherence to timelines and budgets. The rigorous quality standards we employ for giants like Taj Vivanta and JW Marriott are embedded into every phase of our turnkey projects, delivering an end product that radiates unparalleled luxury and durability.'
    ],
    features: [
      'Single-source accountability and centralized project management',
      'Integrated design, engineering, and construction workflows',
      'Transparent budget tracking and value engineering',
      'Comprehensive interior fit-outs and furnishing',
      'Streamlined handover process with complete documentation'
    ],
    faqs: [
      { q: 'What exactly does a turnkey project include?', a: 'It includes everything from architectural design, structural engineering, obtaining permits, construction, MEP installations, and full interior furnishing.' },
      { q: 'How does a turnkey approach save money?', a: 'By centralizing procurement and eliminating overlapping contractor fees, a turnkey approach optimizes resource allocation and reduces cost overruns.' },
      { q: 'Will I have input in the design during a turnkey project?', a: 'Absolutely. While we manage the execution, every design decision, material choice, and aesthetic detail is approved by you before implementation.' },
      { q: 'Are turnkey projects completed faster than traditional methods?', a: 'Yes, overlapping the design and construction phases and eliminating contractor handoffs significantly accelerates the project timeline.' },
      { q: 'How do you provide updates during the project?', a: 'We provide dedicated project managers who share regular progress reports, site photographs, and updated timelines via our digital tracking systems.' }
    ],
    relatedServices: ['architecture-and-planning', 'residential-construction', 'commercial-construction'],
    image: '/GPT/Residential/Exterior/modern-residential-exterior-architecture.png'
  },
  {
    slug: 'architecture-and-planning',
    title: 'Architecture & Planning',
    h1: 'Visionary Architecture & Master Planning',
    metaTitle: 'Architectural & Planning Services | MSI Construction',
    metaDescription: 'Award-winning architecture and planning services. Creating innovative, sustainable, and functional designs for residential and commercial spaces.',
    heroDescription: 'Transforming ambitious visions into meticulously planned architectural realities.',
    content: [
      'At the core of every iconic structure lies exceptional architecture and strategic planning. MSI Construction’s Architecture & Planning division is dedicated to conceptualizing spaces that are not only visually stunning but profoundly functional and sustainable. We explore the intricate relationship between the built environment, the natural landscape, and human interaction to create holistic architectural solutions.',
      'Our architectural expertise is backed by a 30-year legacy and an extensive portfolio of 1000+ completed projects across 42+ cities. We possess a deep understanding of the regulatory landscape and urban dynamics of Delhi NCR. Our planners and architects collaborate closely to optimize site potential, ensuring compliance while pushing the boundaries of modern design.',
      'We partner with ambitious developers, luxury homeowners, and corporate leaders. Drawing inspiration from our elite hospitality projects like ITC Grand Chola, our architectural designs blend grand aesthetics with efficient spatial flow. From initial feasibility studies to detailed construction blueprints, we lay the groundwork for enduring architectural landmarks.'
    ],
    features: [
      'Comprehensive site analysis and feasibility studies',
      'Master planning and urban design integration',
      'Sustainable and climate-responsive architectural design',
      'Advanced 3D modeling and BIM (Building Information Modeling)',
      'Regulatory compliance and permit acquisition'
    ],
    faqs: [
      { q: 'Do you provide architectural services independent of construction?', a: 'Yes, we offer standalone architectural and master planning consulting for clients who may choose to execute the build separately.' },
      { q: 'What is BIM and do you use it?', a: 'BIM (Building Information Modeling) is a digital representation of physical and functional characteristics of a facility. We use it extensively for precise planning and clash detection.' },
      { q: 'How do you incorporate sustainability into your designs?', a: 'We focus on passive cooling techniques, maximizing natural light, specifying sustainable materials, and integrating renewable energy systems into the core architecture.' },
      { q: 'Can you assist with land zoning and regulatory approvals in Delhi NCR?', a: 'Yes, our planning team is highly experienced in navigating the local municipal codes and streamlining the approval process.' },
      { q: 'How long does the architectural design phase take?', a: 'Depending on the project scope, initial conceptualization to final structural blueprints can take anywhere from 2 to 6 months.' }
    ],
    relatedServices: ['turnkey-projects', 'commercial-construction', 'residential-construction'],
    image: '/img/residential-exterior-construction.jpg'
  },
  {
    slug: 'warehouse-construction',
    title: 'Warehouse Construction',
    h1: 'State-of-the-Art Warehouse Construction',
    metaTitle: 'Warehouse Construction Contractors | MSI Construction',
    metaDescription: 'Specialized warehouse and logistics facility construction. Delivering high-capacity, durable, and optimized storage solutions across India.',
    heroDescription: 'Building high-performance logistics hubs optimized for capacity, speed, and durability.',
    content: [
      'Modern logistics demands warehouses that are more than just storage spaces; they must be highly efficient, technologically integrated hubs. MSI Construction delivers state-of-the-art warehouse construction services tailored to the needs of the fast-paced supply chain sector. We design and build facilities that maximize vertical storage, accommodate heavy vehicular traffic, and integrate advanced inventory management infrastructures.',
      'Our expansive reach across 42+ cities over the past 30 years positions us as a leader in industrial and logistical infrastructure. Having delivered over 1000 commercial and industrial projects, we understand the critical importance of flat, high-load-bearing floors and expansive clear spans. We utilize Pre-Engineered Building (PEB) technology to ensure rapid project delivery without sacrificing structural integrity.',
      'Targeting e-commerce giants, 3PL providers, and large-scale distributors, our warehouses are built for resilience and scalability. We ensure that every facility complies with the strictest safety and fire-retardant standards, providing a secure environment for your valuable inventory and a safe workplace for your personnel.'
    ],
    features: [
      'High-tolerance, heavy-duty industrial flooring (FM2/FM3 standard)',
      'Wide clear-span structural designs for unobstructed movement',
      'Advanced docking and material handling integration',
      'Optimized thermal insulation and ventilation systems',
      'Rapid deployment utilizing PEB (Pre-Engineered Building) structures'
    ],
    faqs: [
      { q: 'What flooring standards do you use for warehouses?', a: 'We typically utilize FM2 or FM3 standard high-tolerance, laser-screeded concrete flooring to support heavy racking and material handling equipment.' },
      { q: 'Can you build temperature-controlled warehouses (Cold Storage)?', a: 'Yes, we have specialized expertise in constructing highly insulated cold storage facilities with integrated refrigeration MEP systems.' },
      { q: 'How quickly can a standard warehouse be constructed?', a: 'By leveraging PEB technology, a standard mid-sized warehouse can often be erected and commissioned within 4 to 6 months.' },
      { q: 'Do you include office spaces within the warehouse build?', a: 'Absolutely, we integrate mezzanine offices, staff amenities, and control rooms seamlessly within the main warehouse envelope.' },
      { q: 'Are your warehouses designed for future expansion?', a: 'Yes, our modular PEB designs allow for straightforward lateral expansion as your logistical needs grow.' }
    ],
    relatedServices: ['industrial-construction', 'factory-construction', 'commercial-construction'],
    image: '/img/construction-project-feature.jpg'
  },
  {
    slug: 'factory-construction',
    title: 'Factory Construction',
    h1: 'Advanced Factory & Manufacturing Facilities',
    metaTitle: 'Factory Construction Services | MSI Construction',
    metaDescription: 'Expert factory construction contractors delivering optimized manufacturing facilities. 30+ years experience in heavy industrial builds.',
    heroDescription: 'Engineering resilient manufacturing environments built for operational excellence and scale.',
    content: [
      'Constructing a manufacturing facility requires a profound understanding of industrial processes and heavy engineering. MSI Construction specializes in building advanced factories customized to the specific production workflows of our clients. We focus on creating environments that enhance operational efficiency, ensure worker safety, and house complex machinery securely.',
      'With over 30 years of experience and a strong presence in 42+ cities, we have successfully delivered numerous heavy industrial projects among our 1000+ completed portfolio. Our engineering teams work closely with plant managers to ensure that structural layouts perfectly align with assembly lines. From robust machine foundations to specialized industrial ventilation, every detail is meticulously planned.',
      'Our services cater to automotive, pharmaceutical, FMCG, and heavy engineering sectors. We understand that time-to-market is critical for manufacturers; hence, we employ aggressive project management techniques and advanced construction technologies to ensure your factory is operational on schedule and built to withstand decades of rigorous use.'
    ],
    features: [
      'Customized heavy machinery foundations and vibration isolation',
      'Specialized industrial MEP and high-capacity electrical systems',
      'Integration of overhead cranes and material handling structures',
      'Compliance with stringent environmental and industrial safety norms',
      'Efficient spatial planning for optimized assembly line flow'
    ],
    faqs: [
      { q: 'Do you design the factory layout as well?', a: 'We collaborate with your industrial engineers to translate your process flow into an optimized structural and architectural layout.' },
      { q: 'How do you handle hazardous materials in factory construction?', a: 'We design specific containment zones, specialized ventilation, and use chemically resistant materials in compliance with environmental safety regulations.' },
      { q: 'Can you install overhead cranes?', a: 'Yes, our structural designs account for the dynamic loads of overhead gantry cranes, and we manage their complete structural integration.' },
      { q: 'What is your experience with pharmaceutical factory builds?', a: 'We have extensive experience constructing cleanrooms and adhering to the strict hygienic and HVAC standards required for pharmaceutical manufacturing.' },
      { q: 'How do you ensure power reliability in the facility design?', a: 'We integrate robust, redundant electrical infrastructures, including high-capacity substations and backup generator frameworks.' }
    ],
    relatedServices: ['industrial-construction', 'warehouse-construction', 'architecture-and-planning'],
    image: '/img/residential-exterior-construction.jpg'
  },
  {
    slug: 'office-interior-design',
    title: 'Office Interior Design',
    h1: 'Corporate Office Interior Design',
    metaTitle: 'Office Interior Designers in Delhi NCR | MSI',
    metaDescription: 'Transform your workspace with our corporate office interior design services. Fostering productivity and brand identity through innovative design.',
    heroDescription: 'Designing inspiring corporate workspaces that drive productivity, collaboration, and brand pride.',
    content: [
      'The modern office is a strategic asset that influences employee productivity, well-being, and corporate culture. MSI Construction’s office interior design services focus on creating dynamic workspaces that reflect your brand’s ethos while fostering a collaborative environment. We blend ergonomic design with striking aesthetics to build offices where teams thrive and clients are impressed.',
      'Leveraging our extensive background spanning 30+ years and over 1000 projects, we bring unparalleled execution capabilities to the corporate sector of Delhi NCR. Our experience with elite hospitality brands like JW Marriott informs our approach to corporate lobbies, executive suites, and collaborative zones, ensuring every space exudes professionalism and premium quality.',
      'Our clientele includes multinational corporations, tech startups, and financial institutions looking to elevate their workspace. We understand the evolving nature of work and design agile environments featuring open-plan areas, private focus pods, and advanced technological integration, ensuring your office is future-proof and aligned with global standards.'
    ],
    features: [
      'Ergonomic workspace planning and agile office layouts',
      'Integration of advanced IT and AV infrastructure',
      'Acoustic management for open-plan environments',
      'Branded environment design reflecting corporate identity',
      'Sustainable and wellness-focused interior solutions'
    ],
    faqs: [
      { q: 'How do you design for a hybrid work model?', a: 'We incorporate flexible workstations, collaborative tech-enabled meeting rooms, and hot-desking setups to perfectly accommodate hybrid teams.' },
      { q: 'Can you manage the interior fit-out while the office is operational?', a: 'Yes, we offer phased execution plans and off-hours work schedules to minimize disruption to your ongoing business operations.' },
      { q: 'What steps do you take to ensure good acoustics?', a: 'We utilize acoustic ceiling baffles, sound-absorbing wall panels, and strategic layout planning to minimize noise pollution in open offices.' },
      { q: 'Do you supply office furniture?', a: 'Yes, as part of our turnkey service, we procure and install premium ergonomic furniture tailored to your design scheme.' },
      { q: 'How do you incorporate our company branding into the design?', a: 'We integrate your brand colors, ethos, and logos through subtle architectural details, custom signage, and thematic artwork throughout the space.' }
    ],
    relatedServices: ['commercial-interior-design', 'commercial-construction', 'interior-design'],
    image: '/GPT/Commercial/commercial-office-construction.png'
  },
  {
    slug: 'home-renovation',
    title: 'Home Renovation',
    h1: 'Luxury Home Renovation Services',
    metaTitle: 'Home Renovation Services Delhi NCR | MSI Construction',
    metaDescription: 'Upgrade your living space with our premium home renovation services. Specializing in luxury villas, apartments, and complete home makeovers.',
    heroDescription: 'Reimagine your home with our bespoke renovation services, blending modern luxury with timeless comfort.',
    content: [
      'Your home should evolve with your lifestyle. MSI Construction offers luxury home renovation services designed to upgrade, expand, and modernize your living spaces. Whether it involves a complete gut renovation of an older property, expanding your footprint, or modernizing key areas like kitchens and bathrooms, we bring unparalleled craftsmanship to every project.',
      'Our deep roots in Delhi NCR and 30+ years of industry experience mean we understand the nuances of local architecture and structural integrity. Having completed over 1000 projects across 42+ cities, our teams are adept at navigating the complexities of residential remodeling, ensuring safe, clean, and efficient execution while you transition to your new space.',
      'We cater to discerning homeowners who seek to elevate their residences to the luxury standards of premium hotels. Drawing on our experience with brands like Taj Vivanta, we source exceptional materials, implement state-of-the-art smart home technologies, and deliver flawless finishes that transform your house into an exquisite modern sanctuary.'
    ],
    features: [
      'Complete whole-house remodeling and structural alterations',
      'High-end kitchen and luxury bathroom transformations',
      'Seamless room additions and vertical extensions',
      'Upgrading plumbing, electrical, and HVAC infrastructure',
      'Custom millwork, flooring, and bespoke lighting design'
    ],
    faqs: [
      { q: 'How do we start the home renovation process?', a: 'It begins with a detailed on-site consultation and structural assessment, followed by collaborative design and budgeting phases.' },
      { q: 'Will a renovation increase my property value?', a: 'Yes, strategic luxury renovations, especially updating kitchens, bathrooms, and increasing square footage, significantly boost market value.' },
      { q: 'Can you match the new construction to my home’s existing style?', a: 'Absolutely. Our architects are skilled at ensuring seamless visual and structural transitions between old and new sections.' },
      { q: 'How long does a typical luxury home renovation take?', a: 'Depending on the scope, partial renovations take 2-4 months, while complete gut renovations may take 6-9 months.' },
      { q: 'Do you provide warranties on renovation work?', a: 'Yes, we provide standard warranties on our workmanship and honor manufacturer warranties on all installed fixtures and systems.' }
    ],
    relatedServices: ['renovation-and-remodeling', 'interior-design', 'residential-construction'],
    image: '/GPT/Residential/Living Room/luxury-courtyard-interior-design.png'
  },
  {
    slug: 'commercial-interior-design',
    title: 'Commercial Interior Design',
    h1: 'Premium Commercial Interior Design',
    metaTitle: 'Commercial Interior Designers | MSI Construction',
    metaDescription: 'Elevate your business environment with expert commercial interior design. Tailored solutions for retail, hospitality, and corporate spaces.',
    heroDescription: 'Crafting captivating commercial environments that engage customers and elevate your brand presence.',
    content: [
      'A compelling commercial interior is vital for attracting customers and establishing a strong brand presence. MSI Construction delivers premium commercial interior design services tailored for retail outlets, hospitality venues, and specialized corporate environments. We create immersive spaces that not only look spectacular but are engineered to optimize customer flow and operational efficiency.',
      'With an illustrious 30-year history and over 1000 projects completed across 42+ cities, our expertise is unmatched in the Delhi NCR market. We leverage our profound experience in constructing luxury hospitality spaces for clients like ITC Grand Chola and JW Marriott to bring a high level of sophistication and durability to your commercial interiors.',
      'Our target audience encompasses premium retail brands, boutique hotels, and upscale dining establishments. We understand that commercial spaces endure high foot traffic; therefore, our designs marry breathtaking aesthetics with highly durable, commercial-grade materials, ensuring your space remains pristine and captivating for years to come.'
    ],
    features: [
      'Strategic space planning for optimal customer flow',
      'Custom retail displays and experiential design elements',
      'Commercial-grade, high-durability material sourcing',
      'Specialized lighting to enhance product visibility and ambiance',
      'Comprehensive brand integration within the physical space'
    ],
    faqs: [
      { q: 'Do you design for the hospitality sector (restaurants/hotels)?', a: 'Yes, hospitality design is one of our core strengths, having worked closely with top-tier hotel brands across the country.' },
      { q: 'How do you ensure materials can withstand heavy commercial use?', a: 'We specifically source commercial-grade fabrics, high-abrasion flooring, and durable surface finishes designed for high traffic.' },
      { q: 'Can you assist with obtaining necessary commercial permits?', a: 'Yes, our team ensures that all designs comply with local fire, safety, and accessibility codes, and we assist in permit acquisition.' },
      { q: 'How crucial is lighting in commercial interior design?', a: 'Lighting is paramount. We use advanced lighting design to highlight merchandise, set the mood, and guide customer movement through the space.' },
      { q: 'What is the typical timeline for a retail fit-out?', a: 'A standard premium retail fit-out can typically be completed in 8 to 12 weeks, depending on the complexity of bespoke elements.' }
    ],
    relatedServices: ['office-interior-design', 'commercial-construction', 'interior-design'],
    image: '/GPT/Commercial/commercial-office-construction.png'
  },
  {
    slug: 'luxury-interior-design',
    title: 'Luxury Interior Design',
    h1: 'Exclusive Luxury Interior Design',
    metaTitle: 'Luxury Interior Designers in Delhi NCR | MSI',
    metaDescription: 'Bespoke luxury interior design for ultra-premium residences and estates. Experience unparalleled elegance with MSI Construction.',
    heroDescription: 'Curating spaces of extraordinary elegance and exclusivity for the most discerning clients.',
    content: [
      'Luxury is defined by exclusivity, impeccable craftsmanship, and an acute attention to detail. MSI Construction’s Luxury Interior Design division caters strictly to high-net-worth individuals, creating bespoke living environments that are true works of art. From opulent classical themes to sleek ultra-modern aesthetics, we curate spaces that reflect the pinnacle of sophisticated living.',
      'Our heritage of 30+ years and over 1000 successful projects across 42+ cities has granted us access to a global network of elite artisans, rare material suppliers, and custom furniture craftsmen. Operating prominently in the elite enclaves of Delhi NCR, we bring the grandeur of five-star hospitality—akin to our work with Taj Vivanta—directly into your private residence.',
      'Every element of our luxury design is custom-tailored. We integrate rare marbles, exotic woods, bespoke crystal lighting, and advanced discreet smart home technologies. The result is a residence that offers an unparalleled sensory experience, perfectly balancing majestic aesthetics with ultimate private comfort.'
    ],
    features: [
      'Sourcing of rare, globally imported materials and stones',
      'Bespoke, handcrafted furniture and custom millwork',
      'Curated art selection and styling services',
      'Discreet integration of ultra-premium smart home automation',
      'White-glove project management and installation services'
    ],
    faqs: [
      { q: 'What sets your luxury interior design apart from standard design?', a: 'It is characterized by extreme personalization, the use of rare and exclusive materials, bespoke craftsmanship, and an uncompromising attention to detail.' },
      { q: 'Can you source exclusive international brands and antiques?', a: 'Yes, we have established relationships with elite global design houses and can procure exclusive pieces, art, and antiques.' },
      { q: 'How do you ensure privacy and security during the project?', a: 'We employ strict non-disclosure agreements, vetted execution teams, and discreet project management to guarantee absolute privacy.' },
      { q: 'Do you offer custom lighting design?', a: 'Absolutely. We collaborate with master lighting designers to create bespoke chandeliers and sophisticated, layered ambient lighting schemes.' },
      { q: 'Is a dedicated project manager assigned to my home?', a: 'Yes, a senior project director will provide concierge-level service, overseeing every meticulous detail of your luxury build.' }
    ],
    relatedServices: ['interior-design', 'residential-construction', 'turnkey-projects'],
    image: '/GPT/Residential/Bedroom/luxury-bedroom-interior-design.png'
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
