/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 */

// 27 Enterprise SaaS Products
export const PRODUCTS_MAP = {
  'crm-software': { name: 'CRM Software', desc: 'Enterprise Customer Relationship Management and sales pipeline automation.', competitors: ['Salesforce', 'HubSpot', 'Zoho CRM'] },
  'restaurant-pos': { name: 'Restaurant POS', desc: 'High-speed tableside ordering, kitchen display queues, and split-billing POS.', competitors: ['Toast POS', 'Clover', 'Lightspeed'] },
  'hotel-management-software': { name: 'Hotel Management Software', desc: 'Unified PMS integrations, room reservations, and guest intake portals.', competitors: ['Cloudbeds', 'Mews', 'Opera PMS'] },
  'booking-software': { name: 'Booking Software', desc: 'Bespoke appointment schedulers and room reservation calendars.', competitors: ['Calendly', 'Mindbody', 'Acuity'] },
  'reservation-software': { name: 'Reservation Software', desc: 'Table seating planners and real-time reservation checkouts.', competitors: ['OpenTable', 'Resy', 'SevenRooms'] },
  'iam-platform': { name: 'IAM Platform', desc: 'Single Sign-On (SSO), Role-Based Access Control, and multi-factor authorization.', competitors: ['Okta', 'Auth0', 'Ping Identity'] },
  'identity-management': { name: 'Identity Management Software', desc: 'Enterprise identity security and cryptographically-secure token vaults.', competitors: ['Okta', 'SailPoint', 'Microsoft Entra ID'] },
  'assessment-platform': { name: 'Assessment Platform', desc: 'Secure online assessment creation, candidate proctoring, and scoring analytics.', competitors: ['TestGorilla', 'Mercer Mettl', 'HackerRank'] },
  'online-examination-software': { name: 'Online Examination Software', desc: 'AI-proctored examination delivery for universities and institutions.', competitors: ['ProctorU', 'ExamSoft', 'Talview'] },
  'supply-chain-management': { name: 'Supply Chain Management', desc: 'End-to-end cargo transit telemetry, risk diagnostics, and procurement.', competitors: ['SAP SCM', 'Oracle SCM', 'Blue Yonder'] },
  'erp': { name: 'ERP Software', desc: 'Unified resource utilization dashboards, departments auditing, and cost trackers.', competitors: ['NetSuite', 'SAP ERP', 'Workday'] },
  'hrms': { name: 'HRMS Software', desc: 'UK/US compliant employee payroll engines, performance benchmarks, and benefits portal.', competitors: ['BambooHR', 'Rippling', 'Workday HR'] },
  'inventory-management': { name: 'Inventory Management', desc: 'Real-time multi-location inventory syncing and automated purchase orders.', competitors: ['Cin7', 'Fishbowl', 'TradeGecko'] },
  'warehouse-management': { name: 'Warehouse Management', desc: 'Bin mapping, barcode pick-pack routing, and ASN receipt logs.', competitors: ['Manhattan Associates', 'Korber', 'SAP WMS'] },
  'procurement-management': { name: 'Procurement Management', desc: 'Automated RFP dispatches, contract repositories, and vendor scorecard profiles.', competitors: ['Coupa', 'Gep', 'Ariba'] },
  'visitor-management': { name: 'Visitor Management System', desc: 'Contactless reception sign-ins, badge printing, and host alerts.', competitors: ['Envoy', 'The Lobby', 'Proxyclick'] },
  'helpdesk': { name: 'Helpdesk Software', desc: 'Multi-channel customer support ticket routing and automated SLA warnings.', competitors: ['Zendesk', 'Freshdesk', 'Jira Service Management'] },
  'ai-chatbot': { name: 'AI Chatbot Platform', desc: 'Conversational LLM agents with secure single-tenant boundaries.', competitors: ['Intercom', 'Drift', 'Ada'] },
  'collaboration-platform': { name: 'Collaboration Platform', desc: 'Secure real-time messaging, document sync, and task board organizers.', competitors: ['Slack', 'Microsoft Teams', 'Asana'] },
  'email-platform': { name: 'Email Platform', desc: 'High-throughput transactional email relays and marketing campaign dispatches.', competitors: ['SendGrid', 'Mailchimp', 'Klaviyo'] },
  'learning-management-system': { name: 'Learning Management System', desc: 'Interactive online course builders, student dashboards, and SCORM reports.', competitors: ['Moodle', 'Canvas LMS', 'Docebo'] },
  'franchise-management': { name: 'Franchise Management Software', desc: 'Multi-property POS centralizers and royalty fee ledgers.', competitors: ['FranConnect', 'Franchisesoft'] },
  'retail-management': { name: 'Retail Management Software', desc: 'Omnichannel retail operations, store-to-warehouse stock transfers, and checkout desks.', competitors: ['Shopify Plus', 'Lightspeed Retail', 'Oracle Retail'] },
  'billing-software': { name: 'Billing Software', desc: 'Enterprise automated billing, invoicing, and tax engine integrations.', competitors: ['Tally', 'Vyapaar', 'Zoho Books'] },
  'invoice-software': { name: 'Invoice Software', desc: 'Secure programmatically-generated invoices, batch dispatch, and client checkout ledgers.', competitors: ['Tally', 'Vyapaar', 'Zoho Invoice'] },
  'accounting-software': { name: 'Accounting Software', desc: 'Double-entry general ledgers, tax audits, and GAAP/IFRS compliance tools.', competitors: ['Tally', 'Zoho Books', 'QuickBooks'] },
  'healthcare-management': { name: 'Healthcare Management Software', desc: 'HIPAA-ready patient record files, clinic scheduling, and lab reports.', competitors: ['Epic Systems', 'Cerner', 'Athenahealth'] },
  'project-management': { name: 'Project Management Software', desc: 'Milestone tracking, timesheets, resource allocation, and Gantt charts.', competitors: ['Monday.com', 'ClickUp', 'Asana'] },
  'asset-management': { name: 'Asset Management System', desc: 'Hardware depreciation trackers, barcode labels, and check-out logs.', competitors: ['Asset Panda', 'Snipe-IT', 'UpKeep'] },
  'fleet-management': { name: 'Fleet Management System', desc: 'Geospatial vehicle tracking, fuel audits, and driver dispatch logs.', competitors: ['Samsara', 'Geotab', 'Verizon Connect'] }
};

// 15 Primary Industries
export const INDUSTRIES_MAP = {
  'healthcare': { name: 'Healthcare', compliance: 'HIPAA-Ready Architecture, secure EHR isolation' },
  'hospitality': { name: 'Hospitality', compliance: 'PCI DSS Aligned guest billing, PMS API integrations' },
  'retail': { name: 'Retail', compliance: 'E-commerce sync, local VAT/GST tax rules' },
  'logistics': { name: 'Logistics', compliance: 'Transit telemetry logs, warehouse audit trails' },
  'finance': { name: 'Banking & Financial Services', compliance: 'SOC2 Type II alignment, tokenized audit journals' },
  'manufacturing': { name: 'Manufacturing', compliance: 'Industrial PLC logs, ERP sync' },
  'education': { name: 'Education & Universities', compliance: 'FERPA guidelines, secure exam logs' },
  'government': { name: 'Government Organizations', compliance: 'FedRAMP design controls, strict data privacy' },
  'insurance': { name: 'Insurance Agencies', compliance: 'Secure policy databases, claims history' },
  'real-estate': { name: 'Real Estate', compliance: 'Property registers, escrow compliance logs' },
  'professional-services': { name: 'Professional Services', compliance: 'SLA contracts, secure timesheet logs' },
  'travel': { name: 'Travel & Tourism', compliance: 'Booking ledgers, local compliance' },
  'telecommunications': { name: 'Telecommunications', compliance: 'High-volume api logging, secure IAM limits' },
  'construction': { name: 'Construction & Contracting', compliance: 'Subcontractor ledgers, budget limits' },
  'wholesale': { name: 'Wholesale & Distribution', compliance: 'B2B billing, bulk catalog matrices' }
};

// 20 Target Countries
export const COUNTRIES_MAP = {
  'usa': { name: 'United States', currency: 'USD', symbol: '$', compliance: 'HIPAA & SOC2' },
  'canada': { name: 'Canada', currency: 'CAD', symbol: 'C$', compliance: 'PIPEDA' },
  'united-kingdom': { name: 'United Kingdom', currency: 'GBP', symbol: '£', compliance: 'HMRC & UK GDPR' },
  'ireland': { name: 'Ireland', currency: 'EUR', symbol: '€', compliance: 'EU GDPR' },
  'australia': { name: 'Australia', currency: 'AUD', symbol: 'A$', compliance: 'Privacy Act 1988' },
  'new-zealand': { name: 'New Zealand', currency: 'NZD', symbol: 'NZ$', compliance: 'NZ Privacy Principles' },
  'germany': { name: 'Germany', currency: 'EUR', symbol: '€', compliance: 'BDSG & EU GDPR' },
  'france': { name: 'France', currency: 'EUR', symbol: '€', compliance: 'CNIL & EU GDPR' },
  'netherlands': { name: 'Netherlands', currency: 'EUR', symbol: '€', compliance: 'EU GDPR' },
  'switzerland': { name: 'Switzerland', currency: 'CHF', symbol: 'CHF', compliance: 'FADP' },
  'belgium': { name: 'Belgium', currency: 'EUR', symbol: '€', compliance: 'EU GDPR' },
  'uae': { name: 'United Arab Emirates', currency: 'AED', symbol: 'AED', compliance: 'UAE Data Protection Law' },
  'saudi-arabia': { name: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', compliance: 'SDAIA Regulations' },
  'qatar': { name: 'Qatar', currency: 'QAR', symbol: 'QAR', compliance: 'PDPPL' },
  'kuwait': { name: 'Kuwait', currency: 'KWD', symbol: 'KWD', compliance: 'CITRA Regulation' },
  'bahrain': { name: 'Bahrain', currency: 'BHD', symbol: 'BHD', compliance: 'PDPL' },
  'oman': { name: 'Oman', currency: 'OMR', symbol: 'OMR', compliance: 'MTCIT Regulations' },
  'singapore': { name: 'Singapore', currency: 'SGD', symbol: 'S$', compliance: 'PDPA' },
  'malaysia': { name: 'Malaysia', currency: 'MYR', symbol: 'RM', compliance: 'PDPA 2010' },
  'india': { name: 'India', currency: 'INR', symbol: '₹', compliance: 'DPDP Act 2023' }
};

// 15 Enterprise Services
export const SERVICES_MAP = {
  'custom-software-development': { name: 'Custom Software Development', desc: 'Bespoke software systems engineered to your business specifications.' },
  'enterprise-application-development': { name: 'Enterprise Application Development', desc: 'Scalable mission-critical applications built with composable backend modules.' },
  'saas-development': { name: 'SaaS Development', desc: 'Multi-tenant SaaS products designed with SSO and subscription billing.' },
  'product-engineering': { name: 'Product Engineering', desc: 'End-to-end software lifecycle design, coding, testing, and scaling.' },
  'microservices-development': { name: 'Microservices Development', desc: 'Decoupling monoliths into highly-resilient microservice clusters.' },
  'cloud-consulting': { name: 'Cloud Consulting', desc: 'Multi-cloud strategy design, infrastructure auditing, and budget planning.' },
  'cloud-migration': { name: 'Cloud Migration', desc: 'Zero-downtime transfers of legacy workloads to AWS, Azure, and Google Cloud.' },
  'api-development': { name: 'API Development', desc: 'Robust REST and GraphQL API gateways with rate limits and logging.' },
  'api-integration': { name: 'API Integration', desc: 'Synchronizing disparate SaaS, CRM, and ERP systems.' },
  'devops-consulting': { name: 'DevOps Consulting', desc: 'Continuous integration (CI/CD), infrastructure as code (IaC), and live telemetry.' },
  'ai-consulting': { name: 'AI Consulting', desc: 'Enterprise generative AI workshops and model fine-tuning roadmaps.' },
  'managed-services': { name: 'Managed IT Services', desc: '24/7 server monitoring, proactive security updates, and threat patches.' },
  'application-modernization': { name: 'Application Modernization', desc: 'Refactoring outdated codebases into performant web applications.' },
  'performance-optimization': { name: 'Performance Optimization', desc: 'System speed auditing, query caching, and scale benchmarks.' },
  'architecture-consulting': { name: 'Architecture Consulting', desc: 'Advising on system blueprints, database configurations, and SSO security.' }
};

// Competitor Battlecards Mappings (Focused on Customization, Composable Architecture, and Integrations - No Price)
export const COMPETITORS_MAP = {
  'salesforce': { name: 'Salesforce', product: 'crm-software', diffs: ['Complex customization requiring certifications', 'Multi-tenant database privacy risks', 'Vendor lock-in constraints'] },
  'hubspot': { name: 'HubSpot', product: 'crm-software', diffs: ['Rigid custom data schemas', 'Expensive contact tier limitations', 'Standardized templates'] },
  'toast': { name: 'Toast', product: 'restaurant-pos', diffs: ['Strict hardware dependencies', 'High merchant processing margins', 'Locked guest portals'] },
  'clover': { name: 'Clover', product: 'restaurant-pos', diffs: ['Restricted custom printer triggers', 'Standardized reporting dashboard', 'Merchant API limits'] },
  'lightspeed': { name: 'Lightspeed', product: 'restaurant-pos', diffs: ['Complex multi-store syncing setups', 'Limited custom kitchen display rules'] },
  'cloudbeds': { name: 'Cloudbeds', product: 'hotel-management-software', diffs: ['Locked Property Management System API', 'Limited custom splits for group reservations'] },
  'mews': { name: 'Mews', product: 'hotel-management-software', diffs: ['High customization developer fees', 'Rigid billing integrations'] },
  'opera': { name: 'Opera PMS', product: 'hotel-management-software', diffs: ['Legacy desktop-client hardware dependencies', 'Monolithic software architecture'] },
  'okta': { name: 'Okta', product: 'iam-platform', diffs: ['Per-user subscription fee tiers', 'Shared cloud tenant vulnerability risk'] },
  'auth0': { name: 'Auth0', product: 'iam-platform', diffs: ['High MAU usage fee increments', 'Limited local offline token signature logs'] },
  'netsuite': { name: 'NetSuite', product: 'erp', diffs: ['Extremely long implementation cycles', 'Monolithic database schema limits'] },
  'workday': { name: 'Workday', product: 'erp', diffs: ['Rigid financial & HR ledger schemas', 'Custom API gateway limits'] },
  'bamboohr': { name: 'BambooHR', product: 'hrms', diffs: ['Standardized employee onboarding cards', 'Limited custom workflow automation rules'] },
  'rippling': { name: 'Rippling', product: 'hrms', diffs: ['Rigid MDM device lockups', 'High user subscription costs'] },
  'zendesk': { name: 'Zendesk', product: 'helpdesk', diffs: ['Expensive agent seating tiers', 'Rigid ticket SLA triggers'] },
  'intercom': { name: 'Intercom', product: 'ai-chatbot', diffs: ['High per-conversation pricing model', 'Shared client model training risks'] },
  'samsara': { name: 'Samsara', product: 'fleet-management', diffs: ['Proprietary GPS tracker hardware lock-in', 'Limited multi-system API webhooks'] },
  'shopify': { name: 'Shopify Plus', product: 'retail-management', diffs: ['Strict transaction commission fees', 'Limited offline POS database structures', 'Locked guest checkouts'] },
  'tally': { name: 'Tally', product: 'accounting-software', diffs: ['Legacy offline desktop architecture limits', 'No native cloud multi-tenant synchronization', 'Rigid accounting-first billing formats'] },
  'vyapaar': { name: 'Vyapaar', product: 'billing-software', diffs: ['Limited multi-store warehouse scaling', 'No custom programmatic API extensions', 'Basic offline-first synchronization delays'] },
  'zoho-pos': { name: 'Zoho POS', product: 'retail-management', diffs: ['Strict ecosystem dependency constraints', 'Limited local offline transaction database storage', 'Rigid invoice and layout templates'] },
  'sap-retail': { name: 'SAP Retail', product: 'retail-management', diffs: ['Extremely complex implementation and consultancy cycles', 'High licensing fees for minor modifications', 'Heavy monolithic legacy dependencies'] },
  'oracle-retail': { name: 'Oracle Retail', product: 'retail-management', diffs: ['Slow deployment cycles across multiple nodes', 'Expensive database locking limitations', 'Non-customizable reporting schemas'] }
};

// Slug Parsing Engine
export function parseCompositeSlug(slug) {
  let product = null;
  let industry = null;
  let country = null;
  let service = null;
  let competitor = null;
  let isMarket = false;

  // Check if it matches a competitor comparison directly
  if (slug.startsWith('gemsphere-vs-')) {
    const compKey = slug.replace('gemsphere-vs-', '');
    if (COMPETITORS_MAP[compKey]) {
      return { type: 'comparison', competitor: compKey, product: COMPETITORS_MAP[compKey].product };
    }
  }

  // Check if it matches a core product directly
  if (PRODUCTS_MAP[slug]) {
    return { type: 'product-core', product: slug };
  }
  
  // Check if it matches a core service directly
  if (SERVICES_MAP[slug]) {
    return { type: 'service-core', service: slug };
  }

  // Parse composite pattern
  // Pattern A: [product]-for-[industry]
  if (slug.includes('-for-') && !slug.includes('-in-') && !slug.includes('-market')) {
    const parts = slug.split('-for-');
    const pCandidate = parts[0];
    const iCandidate = parts[1];
    if (PRODUCTS_MAP[pCandidate] && INDUSTRIES_MAP[iCandidate]) {
      return { type: 'product-industry', product: pCandidate, industry: iCandidate };
    }
    if (SERVICES_MAP[pCandidate] && INDUSTRIES_MAP[iCandidate]) {
      return { type: 'service-industry', service: pCandidate, industry: iCandidate };
    }
  }

  // Pattern B: [product]-in-[country] or [service]-in-[country]
  if (slug.includes('-in-') && !slug.includes('-for-')) {
    const parts = slug.split('-in-');
    const pCandidate = parts[0];
    const cCandidate = parts[1];
    if (PRODUCTS_MAP[pCandidate] && COUNTRIES_MAP[cCandidate]) {
      return { type: 'product-country', product: pCandidate, country: cCandidate };
    }
    if (SERVICES_MAP[pCandidate] && COUNTRIES_MAP[cCandidate]) {
      return { type: 'service-country', service: pCandidate, country: cCandidate };
    }
  }

  // Pattern C: [product]-for-[country]-market
  if (slug.includes('-for-') && slug.endsWith('-market')) {
    const cleanStr = slug.replace('-market', '');
    const parts = cleanStr.split('-for-');
    const pCandidate = parts[0];
    const cCandidate = parts[1];
    if (PRODUCTS_MAP[pCandidate] && COUNTRIES_MAP[cCandidate]) {
      return { type: 'product-country', product: pCandidate, country: cCandidate, isMarket: true };
    }
  }

  return { type: 'unknown' };
}

// Generate all combinations for sitemaps and Static Params
export function generateCompositeSlugs(type = 'products') {
  const params = [];
  const pKeys = Object.keys(PRODUCTS_MAP);
  const iKeys = Object.keys(INDUSTRIES_MAP);
  const cKeys = Object.keys(COUNTRIES_MAP);
  const sKeys = Object.keys(SERVICES_MAP);
  const compKeys = Object.keys(COMPETITORS_MAP);

  if (type === 'products') {
    // 1. Core Products (27)
    pKeys.forEach(p => params.push(p));
    // 2. Products for Industry (27 * 15 = 405)
    pKeys.forEach(p => {
      iKeys.forEach(i => params.push(`${p}-for-${i}`));
    });
    // 3. Products in Country (27 * 20 = 540)
    pKeys.forEach(p => {
      cKeys.forEach(c => {
        params.push(`${p}-in-${c}`);
        params.push(`${p}-for-${c}-market`); // market variation (540)
      });
    });
  } else if (type === 'services') {
    // 1. Core Services (15)
    sKeys.forEach(s => params.push(s));
    // 2. Services for Industry (15 * 15 = 225)
    sKeys.forEach(s => {
      iKeys.forEach(i => params.push(`${s}-for-${i}`));
    });
    // 3. Services in Country (15 * 20 = 300)
    sKeys.forEach(s => {
      cKeys.forEach(c => params.push(`${s}-in-${c}`));
    });
  } else if (type === 'comparisons') {
    // 1. Competitor Comparisons (17)
    compKeys.forEach(comp => {
      params.push(`gemsphere-vs-${comp}`);
    });
  }

  return params;
}

// Custom Copywriter Engine
export function getSEOContent(slug) {
  const parsing = parseCompositeSlug(slug);
  let title = 'Enterprise Software Solutions';
  let desc = 'GemSphere Technologies develops, customizes, and deploys scalable enterprise platforms.';
  let h1 = 'Enterprise Software & SaaS Solutions';
  let primaryKeyword = 'enterprise software';
  let secondaryKeywords = [];
  let targetAudience = 'CTAs, CIOs, IT Directors, Enterprise Buyers';
  let faqs = [];
  let relatedLinks = [];

  const mainCompetitors = (productKey) => {
    return PRODUCTS_MAP[productKey]?.competitors.join(', ') || 'legacy platforms';
  };

  if (parsing.type === 'comparison') {
    const comp = COMPETITORS_MAP[parsing.competitor];
    const p = PRODUCTS_MAP[parsing.product];
    title = `GemSphere vs ${comp.name} | Custom ${p.name} Alternative`;
    desc = `Compare GemSphere vs ${comp.name}. Explore the benefits of composable API-first architecture, dedicated tenant isolation, and custom workflows.`;
    h1 = `GemSphere vs ${comp.name}`;
    primaryKeyword = `gemsphere vs ${comp.name.toLowerCase()}`;
    secondaryKeywords = [`${comp.name.toLowerCase()} alternative`, `custom ${p.name.toLowerCase()} alternative`, `${p.name.toLowerCase()} comparison`];
    faqs = [
      {
        q: `Why choose GemSphere instead of ${comp.name}?`,
        a: `Unlike ${comp.name}, which requires complex, standard layouts and locks your team into rigid databases, GemSphere provides dedicated code customization, single-tenant data isolation, and bespoke API workflows tailored to your specific business requirements.`
      },
      {
        q: `Can you assist with migration from ${comp.name}?`,
        a: `Yes. We provide complete data extraction, database schema mappings, and migration support to transition your operations from ${comp.name} to your custom GemSphere cluster with near-zero downtime.`
      }
    ];
  }

  else if (parsing.type === 'product-core') {
    const p = PRODUCTS_MAP[parsing.product];
    title = `${p.name} | Enterprise SaaS Platform | GemSphere`;
    desc = `${p.desc} Custom workflows, flexible configurations, and API-first SaaS database architecture.`;
    h1 = `GemSphere ${p.name}`;
    primaryKeyword = p.name.toLowerCase();
    secondaryKeywords = [`custom ${primaryKeyword}`, `enterprise ${primaryKeyword}`, `white-label ${primaryKeyword}`];
    faqs = [
      { q: `Is the GemSphere ${p.name} customizable?`, a: `Yes, GemSphere is built to be customized. We modify database schemas, implement bespoke business rules, and build unique dashboard views tailored to your exact workflows.` },
      { q: `Can we integrate ${p.name} with our current databases?`, a: `Absolutely. GemSphere is designed with an API-first architecture, allowing secure REST and GraphQL integrations with legacy ERPs, CRMs, and custom frameworks.` }
    ];
  } 
  
  else if (parsing.type === 'product-industry') {
    const p = PRODUCTS_MAP[parsing.product];
    const ind = INDUSTRIES_MAP[parsing.industry];
    title = `${p.name} for ${ind.name} | Custom Business Software`;
    desc = `Optimize your ${ind.name.toLowerCase()} operations with GemSphere ${p.name}. Enforce ${ind.compliance}. Custom workflows and full integration support.`;
    h1 = `${p.name} Built for ${ind.name}`;
    primaryKeyword = `${p.name.toLowerCase()} for ${parsing.industry}`;
    secondaryKeywords = [`${primaryKeyword} software`, `custom ${p.name.toLowerCase()} for ${parsing.industry}`, `${ind.name.toLowerCase()} management software`];
    faqs = [
      { q: `How does GemSphere align with ${ind.name} compliance rules?`, a: `Our systems are built with custom data-isolation layers supporting ${ind.compliance}, ensuring your data remains secure and auditable.` },
      { q: `Can we add custom workflows for ${ind.name}?`, a: `Yes. We provide bespoke development services to map our core ${p.name} module directly into your specific ${ind.name.toLowerCase()} operational steps.` }
    ];
  } 
  
  else if (parsing.type === 'product-country') {
    const p = PRODUCTS_MAP[parsing.product];
    const c = COUNTRIES_MAP[parsing.country];
    const currencyStr = `${c.symbol} (${c.currency})`;
    title = `${p.name} Platform in ${c.name} | Custom Software`;
    desc = `Deploy enterprise-grade ${p.name} in ${c.name}. Fully localized tax billing, ${c.compliance} security parameters, and currency setups.`;
    h1 = `${p.name} for the ${c.name} Market`;
    primaryKeyword = `${p.name.toLowerCase()} in ${c.name.toLowerCase()}`;
    secondaryKeywords = [`${p.name.toLowerCase()} software ${c.name.toLowerCase()}`, `${c.name.toLowerCase()} localized ${p.name.toLowerCase()}`];
    faqs = [
      { q: `Does the platform support localized currency and taxation in ${c.name}?`, a: `Yes. GemSphere supports multi-currency settlements in ${currencyStr} and localized tax matrices matching the legal framework of ${c.name}.` },
      { q: `How is compliance managed in ${c.name}?`, a: `We configure all storage nodes and audit logs to align with ${c.compliance} guidelines applicable in ${c.name}.` }
    ];
  }

  else if (parsing.type === 'service-core') {
    const s = SERVICES_MAP[parsing.service];
    title = `${s.name} | Enterprise Engineering Services`;
    desc = `${s.desc} Scale your platforms, automate deployments, and modernise software architectures with GemSphere solutions.`;
    h1 = s.name;
    primaryKeyword = s.name.toLowerCase();
    secondaryKeywords = [`enterprise ${primaryKeyword}`, `custom ${primaryKeyword}`, `outsource ${primaryKeyword}`];
    faqs = [
      { q: `What is GemSphere's methodology for ${s.name}?`, a: `We utilize strict Domain-Driven Design (DDD), automated CI/CD configurations, and containerized deployments to deliver performant, modular systems.` },
      { q: `Do we get full ownership of code?`, a: `Yes, GemSphere provides full code delivery, proprietary licensing setup, and complete architectural handovers upon project sign-off.` }
    ];
  }

  else if (parsing.type === 'service-industry') {
    const s = SERVICES_MAP[parsing.service];
    const ind = INDUSTRIES_MAP[parsing.industry];
    title = `${s.name} for ${ind.name} Niche | GemSphere`;
    desc = `Accelerate digital transformation in ${ind.name.toLowerCase()} with custom ${s.name} services. Aligned with ${ind.compliance}.`;
    h1 = `${s.name} for ${ind.name}`;
    primaryKeyword = `${s.name.toLowerCase()} for ${parsing.industry}`;
    faqs = [
      { q: `Have you executed ${s.name} in the ${ind.name} sector before?`, a: `Yes. We have engineered secure portals and compliance trackers matching the strict operational standards of ${ind.name}.` }
    ];
  }

  else if (parsing.type === 'service-country') {
    const s = SERVICES_MAP[parsing.service];
    const c = COUNTRIES_MAP[parsing.country];
    title = `${s.name} Services in ${c.name} | GemSphere`;
    desc = `Outsource custom ${s.name.toLowerCase()} in ${c.name}. Professional local engineers, localized delivery teams, and compliance with ${c.compliance}.`;
    h1 = `${s.name} in ${c.name}`;
    primaryKeyword = `${s.name.toLowerCase()} in ${c.name.toLowerCase()}`;
    faqs = [
      { q: `Do you have local teams in ${c.name}?`, a: `Yes. We provide remote Solutions Architects and dedicated development squads aligned with the business hours and requirements of clients in ${c.name}.` }
    ];
  }

  return {
    title,
    description: desc,
    h1,
    primaryKeyword,
    secondaryKeywords,
    targetAudience,
    faqs
  };
}
