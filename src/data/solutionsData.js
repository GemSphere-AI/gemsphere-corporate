/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

export const SOLUTIONS_MAP = {
  'enterprise-digital-transformation': {
    slug: 'enterprise-digital-transformation',
    title: 'Enterprise Digital Transformation Solutions | GemSphere',
    headline: 'De-Risk and Accelerate Enterprise Digital Transformation',
    subtitle: 'Decouple brittle legacy monoliths into composable, resilient microservices with strict Domain-Driven Design (DDD) and automated CI/CD.',
    badge: 'Enterprise Modernization',
    challenge: 'Enterprises struggle with decades of technical debt, escalating vendor lock-in licensing costs, sluggish quarterly release cycles, and fragmented data silos that stifle innovation.',
    architecture: 'GemSphere engineers custom digital backbones utilizing clean bounded contexts, event-driven message brokers, and modular microservice clusters that allow phased migration with zero business downtime.',
    outcomes: [
      '3x increase in enterprise deployment velocity with zero-downtime canary pipelines',
      '40-60% reduction in infrastructure overhead by eliminating redundant third-party SaaS seats',
      'Unified enterprise telemetry and cryptographically locked compliance audit journals'
    ],
    modules: [
      { name: 'Workflow Automation', desc: 'Event-driven condition-action triggers connecting legacy ERP and cloud APIs.' },
      { name: 'Composable ERP Core', desc: 'Deploy tailored operational modules without monolithic suite bloat.' },
      { name: 'API Gateway & IAM', desc: 'Unified OAuth 2.0 / OIDC security gateway with automated rate limiting.' },
      { name: 'Document Intelligence', desc: 'AES-256 encrypted repository with automated semantic metadata indexing.' }
    ],
    faqs: [
      {
        q: 'How does GemSphere ensure zero downtime during legacy system modernization?',
        a: 'We implement the Strangler Fig pattern, routing transactional traffic progressively through our API Gateway while synchronizing databases asynchronously until the new microservices achieve 100% parity.'
      },
      {
        q: 'Do we own the codebase after modernization?',
        a: 'Yes. Unlike proprietary enterprise SaaS suites, GemSphere provides full code ownership, single-tenant private cloud deployments, and zero per-seat licensing penalties.'
      }
    ]
  },

  'omnichannel-retail-infrastructure': {
    slug: 'omnichannel-retail-infrastructure',
    title: 'Omnichannel Retail Infrastructure Solutions | GemSphere',
    headline: 'Unified Omnichannel Commerce & Offline-First POS Infrastructure',
    subtitle: 'Seamlessly unite in-store checkout, multi-warehouse inventory telemetry, headless storefronts, and automated tax compliance on a single database boundary.',
    badge: 'Retail Engineering',
    challenge: 'Retailers face revenue loss from checkout terminal latency, network outages stalling point-of-sale lanes, mismatched online vs in-store inventory balances, and aggressive transaction commission fees.',
    architecture: 'GemSphere Smart POS utilizes an offline-first SQLite cache with peer-to-peer lane synchronization, syncing automatically with cloud inventory and order management systems upon connectivity restoration.',
    outcomes: [
      'Sub-800ms barcode scan-to-receipt checkout throughput across multi-lane retail chains',
      'Real-time inventory synchronization preventing stockouts and over-selling across physical and digital stores',
      'Zero transaction commissions: keep 100% of merchant processing margins'
    ],
    modules: [
      { name: 'Smart Retail POS', desc: 'High-throughput offline-first checkout with thermal printing and split-tender.' },
      { name: 'Global Inventory Sync', desc: 'Multi-warehouse bin tracking, automated PO replenishment, and stock transfers.' },
      { name: 'Catalog & PIM', desc: 'Centralized product information management with automated variant matrices.' },
      { name: 'Tax & Compliance Engine', desc: 'Real-time localized GST, VAT, and sales tax calculation and e-invoice generation.' }
    ],
    faqs: [
      {
        q: 'Can the POS system operate during complete internet blackouts?',
        a: 'Yes. GemSphere POS stations store active catalog, customer, and pricing data in local encrypted SQLite databases, processing transactions locally and syncing queued ledgers immediately when network connectivity resumes.'
      },
      {
        q: 'Does GemSphere support native Android POS terminals?',
        a: 'Yes. Our mobile client is natively built for Android hardware and distributed via the Google Play Store.'
      }
    ]
  },

  'private-cloud-migration': {
    slug: 'private-cloud-migration',
    title: 'Private Cloud Migration & Single-Tenant Architecture | GemSphere',
    headline: 'Eliminate Multi-Tenant Risks with Dedicated Private Cloud Architecture',
    subtitle: 'Deploy mission-critical CRM, ERP, and billing backends inside dedicated single-tenant VPCs with customized data schemas and full sovereign control.',
    badge: 'Sovereign Infrastructure',
    challenge: 'Public multi-tenant SaaS platforms expose sensitive enterprise data to neighbor noisy-tenant risks, enforce rigid unalterable database schemas, and impose punitive per-user pricing tiers.',
    architecture: 'GemSphere provisions isolated, containerized environments on your choice of AWS, Google Cloud, Microsoft Azure, or on-premise hardware, ensuring strict logical and physical data isolation.',
    outcomes: [
      '100% dedicated database isolation with customized table triggers and stored procedures',
      'Full compliance with EU GDPR, German BDSG, and sovereign data residency laws',
      'Predictable fixed-cost infrastructure without scaling seat penalties'
    ],
    modules: [
      { name: 'Dedicated CRM Platform', desc: 'Bespoke sales pipeline schemas with dedicated database isolation.' },
      { name: 'General Ledger & Billing', desc: 'Multi-entity double-entry ledger with automated regulatory reporting.' },
      { name: 'Audit & Compliance Engine', desc: 'Cryptographically locked transaction journals and access monitoring.' },
      { name: 'IAM Single Sign-On', desc: 'Enterprise Okta, Azure AD, and SAML 2.0 / OIDC integrations.' }
    ],
    faqs: [
      {
        q: 'What cloud providers are supported for private single-tenant deployment?',
        a: 'We support automated deployment to AWS, Microsoft Azure, Google Cloud, sovereign regional cloud providers, or dedicated bare-metal infrastructure.'
      },
      {
        q: 'How does private cloud deployment benefit enterprise compliance?',
        a: 'Dedicated isolation guarantees that your company data is never co-mingled with third-party tenants, simplifying SOC 2 Type II, HIPAA, and ISO 27001 audit certifications.'
      }
    ]
  },

  'intelligent-business-automation': {
    slug: 'intelligent-business-automation',
    title: 'Intelligent Business Automation & AI Agents | GemSphere',
    headline: 'Autonomous Enterprise AI Agents & Private RAG Pipelines',
    subtitle: 'Automate complex cross-functional business workflows, document verification, and customer intelligence with domain-fine-tuned AI models.',
    badge: 'Enterprise AI & Automation',
    challenge: 'Knowledge workers spend thousands of hours manually reviewing contracts, cross-referencing invoice discrepancies, routing customer inquiries, and querying fragmented internal databases.',
    architecture: 'GemSphere deploys Model Context Protocol (MCP) servers, private vector knowledge retrieval pipelines, and multi-step reasoning agents that execute structured business actions safely.',
    outcomes: [
      '80% reduction in manual document processing and invoice reconciliation cycles',
      'Sub-second semantic search retrieval over multi-terabyte internal knowledge bases',
      'Zero public data retention: AI prompts and enterprise IP remain strictly within corporate firewalls'
    ],
    modules: [
      { name: 'Autonomous AI Agents', desc: 'Agentic workflows that trigger API calls, database updates, and approvals.' },
      { name: 'Private RAG Pipelines', desc: 'High-accuracy vector search over internal technical and commercial documents.' },
      { name: 'Conversational NLP Chatbots', desc: 'Multi-lingual customer and employee support with human-in-the-loop escalation.' },
      { name: 'Predictive Intelligence', desc: 'Demand forecasting and customer churn risk modeling algorithms.' }
    ],
    faqs: [
      {
        q: 'Is enterprise company data used to train public AI models?',
        a: 'No. GemSphere implements zero-data-retention APIs and deploys private open-weight models inside your own VPC, ensuring zero data leakage.'
      },
      {
        q: 'Can GemSphere AI agents execute actions in external ERP or accounting software?',
        a: 'Yes. Agents connect securely via authenticated REST and GraphQL API gateways to trigger orders, update inventory, or generate invoices autonomously.'
      }
    ]
  }
};

export const SOLUTIONS_LIST = Object.values(SOLUTIONS_MAP);
