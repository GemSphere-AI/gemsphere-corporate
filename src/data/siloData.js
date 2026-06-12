/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
export const SILO_DATA = {
    service: {
        'ai-solutions': {
            title: 'Custom AI & Machine Learning Solutions',
            subtitle: 'Harness the power of predictive analytics and automated decision engines.',
            description: 'GemSphere Technologies provides enterprise-grade AI development services designed to automate complex workflows and drive predictive insights using custom <a href="/products/predictive-analytics" class="text-brand-cyan hover:underline font-semibold">Predictive Analytics</a> models.',
            features: [
                'Predictive Analytics & Forecasting',
                'Natural Language Processing (NLP)',
                'Computer Vision & Image Recognition',
                'Custom Generative AI Models'
            ],
            keywords: 'AI development company, custom AI products, predictive analytics',
            faqs: [
                {
                    q: "What AI models does GemSphere support?",
                    a: "We support proprietary LLMs, custom vision networks, and open-source models (such as LLaMA and Mistral) fine-tuned on specialized dataset pipelines."
                },
                {
                    q: "How is data privacy handled for enterprise AI?",
                    a: "All AI inferences are performed inside single-tenant secure boundaries with zero data-retention options to public models, maintaining absolute enterprise confidentiality."
                }
            ]
        },
        'software-development': {
            title: 'Enterprise Software Engineering',
            subtitle: 'Cloud-native, scalable microservices architectures.',
            description: 'Our engineering teams build highly performant, microservices-based platforms with 99.9% uptime. We follow strict Domain-Driven Design (DDD) principles, containerized deployments, and clean code practices to guarantee your systems scale seamlessly. All integrations communicate via our secure <a href="/products/api-gateway" class="text-brand-cyan hover:underline font-semibold">API Gateway</a>.',
            features: [
                'DDD & Microservices Architecture Design',
                'High-Performance Backend Engineering',
                'Cloud-Native Container Orchestration',
                'API Gateway & Secure Routing Setups'
            ],
            keywords: 'custom software development, enterprise software, microservices, DDD',
            faqs: [
                {
                    q: "Do you use Domain-Driven Design?",
                    a: "Yes, we follow strict Domain-Driven Design (DDD) principles to build bounded contexts, ensuring clean separations between services like order management and billing."
                },
                {
                    q: "What is your target uptime SLA?",
                    a: "We architect microservices-based platforms targeting 99.9% uptime with automated load balancing and cloud-native auto-scaling configurations."
                }
            ]
        },
        'saas-products': {
            title: 'SaaS Product Development',
            subtitle: 'Engineering multitenant ecosystems for global product launches.',
            description: 'We specialize in building multi-product SaaS platforms with unified identity, shared services, and elastic scalability. We build and integrate custom <a href="/products/subscription-billing" class="text-brand-cyan hover:underline font-semibold">Subscription Billing</a> engines to support flexible monetization schemas.',
            features: [
                'Multi-tenant Architecture',
                'Subscription & Billing Engines',
                'Unified User Identity (SSO)',
                'SaaS Growth Analytics'
            ],
            keywords: 'SaaS product development, enterprise SaaS solutions',
            faqs: [
                {
                    q: "How does tenant isolation work?",
                    a: "Our multi-tenant architecture implements logical schema separation or physical database isolation depending on tenant tier and security needs."
                },
                {
                    q: "Are billing metrics automated?",
                    a: "Yes, our integrated billing engines track subscription cycles, metered usage, and prorations out of the box."
                }
            ]
        },
        'crm-solutions': {
            title: 'Custom CRM & ERP Platforms',
            subtitle: 'Workflow optimization and centralized business intelligence.',
            description: 'GemSphere builds specialized CRM and ERP systems that integrate seamlessly with your existing operations to drive growth and operational efficiency using our robust <a href="/products/crm-platform" class="text-brand-cyan hover:underline font-semibold">CRM Platform</a>.',
            features: [
                'Sales Pipeline Automation',
                'Inventory & Supply Chain Management',
                'Customer Relationship Analytics',
                'Third-party API Integrations'
            ],
            keywords: 'CRM development company, ERP solutions, business automation',
            faqs: [
                {
                    q: "Can the CRM integrate with external ERPs?",
                    a: "Absolutely. We construct robust REST and GraphQL API gateways that synchronize sales pipeline events with legacy databases and inventory records."
                },
                {
                    q: "Is automated lead routing supported?",
                    a: "Yes, you can configure custom assignment matrices, scoring algorithms, and round-robin dispatch rules."
                }
            ]
        },
        'cloud-engineering': {
            title: 'Cloud Architecture & Multi-Cloud Engineering',
            subtitle: 'Elastic infrastructure design, cost optimization, and migration.',
            description: 'Leverage the full scale of AWS, Google Cloud, and Azure. We design zero-downtime database clusters, automatic load-balancing nodes, and multi-region failovers to ensure your apps remain online. Configure geo-optimized nodes using <a href="/products/location-services" class="text-brand-cyan hover:underline font-semibold">Location Services</a> APIs.',
            features: [
                'Multi-Region High Availability Clusters',
                'Database Replication & Near-Zero Latency',
                'Automated Infrastructure Auto-Scaling',
                'Cloud Cost Audit & Allocation Analysis'
            ],
            keywords: 'cloud engineering, multi-cloud architecture, AWS, GCP, cloud migration',
            faqs: [
                {
                    q: "Which cloud providers do you support?",
                    a: "We design and optimize architectures for AWS, Google Cloud Platform (GCP), and Microsoft Azure, including multi-cloud hybrid setups."
                },
                {
                    q: "How do you handle disaster recovery?",
                    a: "We set up automated cross-region database replication, near-zero latency failovers, and regular snapshot backups to guarantee business continuity."
                }
            ]
        },
        'devops': {
            title: 'DevOps & Site Reliability Engineering',
            subtitle: 'Continuous integration, delivery pipelines, and live telemetry.',
            description: 'Accelerate your product release cycle with automated CI/CD pipelines, Infrastructure-as-Code (IaC), and comprehensive logging. We enforce continuous health checks, automated rollbacks, and threat intelligence alerts using our <a href="/products/workflow-automation" class="text-brand-cyan hover:underline font-semibold">Workflow Automation</a> tools.',
            features: [
                'CI/CD Pipeline Automation (GitHub/GitLab)',
                'Infrastructure as Code (Terraform/Ansible)',
                'Real-Time Logging & SIEM Dashboards',
                'Automated Health Monitoring & Alerts'
            ],
            keywords: 'DevOps services, CI/CD pipeline automation, site reliability engineering, Terraform',
            faqs: [
                {
                    q: "Do you provide Infrastructure as Code?",
                    a: "Yes, we define all cloud architectures using Terraform or Ansible to ensure repeatable, audited, and secure environment provisions."
                },
                {
                    q: "How are CI/CD pipelines managed?",
                    a: "We automate test, build, and deploy processes through GitHub Actions, GitLab CI, or custom SRE runner engines with zero-downtime rollouts."
                }
            ]
        },
        'architecture-consulting': {
            title: 'Enterprise Architecture Advisory',
            subtitle: 'Technical due diligence, system refactoring, and roadmap planning.',
            description: 'Work with seasoned solutions architects to audit your current tech stack, design migration pathways, and draft high-performance roadmaps. We specialize in decoupling monolithic architectures into agile, composable services with full <a href="/products/identity-and-access" class="text-brand-cyan hover:underline font-semibold">Identity & Access Management (IAM)</a>.',
            features: [
                'Monolith to Microservices Decoupling',
                'Security & Cryptographic Audit Trails',
                'Technical Due Diligence & Tech Stack Selection',
                'System Load Testing & Performance Benchmarks'
            ],
            keywords: 'architecture consulting, IT due diligence, system refactoring, monolith decoupling',
            faqs: [
                {
                    q: "How do you handle monolithic decomposition?",
                    a: "We utilize the strangler pattern to incrementally migrate database schemas and domain business logic into decoupled microservices."
                },
                {
                    q: "Do you conduct security code audits?",
                    a: "Yes, we conduct comprehensive security and cryptographic audits, checking for potential vulnerability patterns and compliance leaks."
                }
            ]
        },
        'ai-transformation': {
            title: 'Enterprise AI & Machine Learning Transformation',
            subtitle: 'Harness predictive intelligence and neural decision networks.',
            description: 'Move beyond basic chatbot widgets. We design and train custom machine learning models on your proprietary datasets, deploying them inside single-tenant secure boundaries using our <a href="/products/ai-knowledge-systems" class="text-brand-cyan hover:underline font-semibold">AI Knowledge Graphs & Search</a> models.',
            features: [
                'Custom Machine Learning Model Training',
                'Predictive Data Analytics & Event Forecasting',
                'Natural Language Processing (NLP) Pipelines',
                'Secure Agentic LLM Deployments'
            ],
            keywords: 'AI transformation, enterprise AI solutions, custom ML models, LLM deployment',
            faqs: [
                {
                    q: "Can we run models in a private VPC?",
                    a: "Yes, we deploy generative AI workloads inside single-tenant VPC boundaries using secure endpoints, completely isolated from external traffic."
                },
                {
                    q: "What datasets can we train on?",
                    a: "You can train and fine-tune models using secure ingestion of unstructured text, enterprise databases, customer logs, and historical transactions."
                }
            ]
        },
        'managed-services': {
            title: '24/7 Platform Operations & Managed Support',
            subtitle: 'Proactive maintenance, security patching, and incident management.',
            description: 'Ensure your business never sleeps. Our dedicated support team monitors your servers 24/7/365, performing active security updates, hardware optimization, and instant threat response actions. Track incidents via our custom <a href="/products/notification-engine" class="text-brand-cyan hover:underline font-semibold">Notification Hub</a>.',
            features: [
                '24/7/365 Proactive Threat & Node Monitoring',
                'Automated Security Patch Deployments',
                'Database Backup & Rapid Disaster Recovery',
                'SLA-Driven Incident Response & Reports'
            ],
            keywords: 'managed IT services, 24/7 support, infrastructure monitoring, disaster recovery',
            faqs: [
                {
                    q: "What is the response time for incident support?",
                    a: "Our SLA-driven managed support provides 24/7/365 node monitoring with guaranteed responses under 15 minutes for critical incidents."
                },
                {
                    q: "How are security patches rolled out?",
                    a: "Security patches and OS upgrades are applied during custom maintenance windows to ensure zero impact on production workloads."
                }
            ]
        }
    },
    industry: {
        'retail': {
            title: 'E-commerce & Smart Retail Solutions',
            subtitle: 'Omnichannel commerce platforms powering global retail ecosystems.',
            description: 'GemSphere Technologies provides full-stack retail and e-commerce platforms designed for the global market. We build and integrate custom solutions that seamlessly synchronize physical brick-and-mortar storefronts with digital commerce engines in real-time using our <a href="/products/pos-system" class="text-brand-cyan hover:underline font-semibold">Smart POS System</a> architecture, enabling cashier-less checkouts, multi-location inventory syncing, and automated sourcing.',
            features: [
                'Omnichannel Retail Engines',
                'AI-Driven Personalization & Recommendations',
                'Real-time Multi-location Inventory Sync',
                'Localized Payment & Tax Compliance Engines'
            ],
            keywords: 'smart retail solutions, omnichannel e-commerce platform, POS integration',
            faqs: [
                {
                    q: "How does offline checkout work?",
                    a: "Our Smart POS utilizes browser cache database syncing, allowing transactions to process offline and sync immediately when network access is restored."
                },
                {
                    q: "Is real-time inventory synchronization guaranteed?",
                    a: "Yes, any purchase made online or at a physical checkout desk updates stock records across all warehouses and stores instantly."
                }
            ]
        },
        'ecommerce': {
            title: 'E-commerce Engineering',
            subtitle: 'Scalable retail platforms for the global market.',
            description: 'Building high-performance e-commerce ecosystems that handle millions of transactions with AI-driven personalization and automated <a href="/products/inventory-management" class="text-brand-cyan hover:underline font-semibold">Inventory Management</a>.',
            features: [
                'Omnichannel Retail Engines',
                'AI Recommendation Systems',
                'Automated Inventory Management',
                'Localized Payment Gateway Integration'
            ],
            keywords: 'ecommerce engineering, retail platform, global ecommerce',
            faqs: [
                {
                    q: "Do you support headless commerce?",
                    a: "Yes, our headless storefront APIs connect easily to custom React, Next.js, or mobile applications for complete design freedom."
                },
                {
                    q: "What payment options are integrated?",
                    a: "We support global checkout gateways, including Stripe, PayPal, Apple Pay, and dynamic split-tender points systems."
                }
            ]
        },
        'healthcare': {
            title: 'AI-Powered Healthcare Platforms',
            subtitle: 'Secure, clinical-grade digital transformation for healthcare providers.',
            description: 'Deploy advanced AI systems to optimize clinical workflows, improve patient outcomes, and manage sensitive health data. Our systems are built with data security and access controls aligned with HIPAA design standards and GDPR data protection rules. Secure patient portals are linked with <a href="/products/audit-and-compliance" class="text-brand-cyan hover:underline font-semibold">Compliance & Audit Logging Core</a>.',
            features: [
                'AI-Driven Clinical Diagnostics & Analytics',
                'HIPAA-Ready Patient Management Portals',
                'Medical Data Isolation & Secure Warehousing',
                'Interactive Telehealth & Remote Care Systems'
            ],
            keywords: 'healthcare IT solutions, AI diagnostics, HIPAA ready healthcare, secure patient portal',
            faqs: [
                {
                    q: "Is GemSphere HIPAA compliant?",
                    a: "GemSphere is built on HIPAA-Ready Architecture, enforcing advanced data encryption, role-based access control, and complete audit logging aligned with clinical standards."
                },
                {
                    q: "How is health data isolated?",
                    a: "We implement physical database isolation and cryptographic access keys for all electronic health records (EHR) to prevent cross-tenant exposure."
                }
            ]
        },
        'fintech': {
            title: 'Secure FinTech & Billing Ecosystems',
            subtitle: 'Scalable financial software engines and high-volume transaction processing.',
            description: 'GemSphere delivers enterprise financial platforms with automated reconciliation, payment gateways, and global tax compliance. Built to meet PCI DSS design principles, our billing and general ledger engines manage recurring revenue and subscription lifecycles with absolute transparency using the <a href="/products/billing-platform" class="text-brand-cyan hover:underline font-semibold">Billing Engine</a>.',
            features: [
                'Dynamic Subscription & Lifecycle Billing',
                'PCI DSS Aligned Multi-Gateway Integrations',
                'Automated Financial Reconciliation Engines',
                'Localized Tax Compliance & Audit Logging'
            ],
            keywords: 'fintech development services, secure billing system, PCI DSS ready fintech',
            faqs: [
                {
                    q: "Are the billing engines PCI DSS aligned?",
                    a: "Yes, our credit card processing routes tokenized customer data via secured vaults in alignment with PCI DSS requirements."
                },
                {
                    q: "Do you support automated revenue reconciliation?",
                    a: "Yes, our double-entry ledger posting tracks transaction settlements, adjusting general ledgers and balances automatically."
                }
            ]
        },
        'logistics': {
            title: 'Smart Logistics & Fleet Orchestration',
            subtitle: 'End-to-end supply chain visibility and route optimization.',
            description: 'Transform your supply chain with intelligent fleet routing, real-time cargo tracking, and warehouse automation. GemSphere connects strategic sourcing, warehouse inventory control, and last-mile delivery into a single cohesive dashboard powered by <a href="/products/warehouse-management" class="text-brand-cyan hover:underline font-semibold">Warehouse Management (WMS)</a>.',
            features: [
                'AI Route Optimization & Delivery Planning',
                'Real-Time Warehouse & Bin Tracking',
                'Strategic Sourcing & Automated Procurement',
                'Last-Mile Fulfillment & Smart Dispatching'
            ],
            keywords: 'logistics software solutions, supply chain management system, fleet routing',
            faqs: [
                {
                    q: "How does AI route optimization function?",
                    a: "Our dispatch engine calculates the most efficient delivery routes using traffic congestion databases and fleet load constraints."
                },
                {
                    q: "Is warehouse bin mapping supported?",
                    a: "Yes, you can configure physical bin, rack, and shelf coordinate mapping for high-speed picking and packing workflows."
                }
            ]
        },
        'hospitality': {
            title: 'Connected Hospitality & Dining Systems',
            subtitle: 'Guest experience, contactless ordering, and kitchen orchestration.',
            description: 'Modernize guest services, dining halls, and event spaces with contactless QR ordering, real-time table seating planners, and cloud-based Kitchen Display Systems (KDS). GemSphere links Front-of-House guest services with Back-of-House operations using our <a href="/products/booking" class="text-brand-cyan hover:underline font-semibold">Booking & Reservations System</a>.',
            features: [
                'Tableside QR Ordering & Digital Catalogs',
                'Kitchen Display System (KDS) Queue Planners',
                'Multi-Property Seat & Booking Centralizers',
                'Front-of-House POS & Split-Billing Integrations'
            ],
            keywords: 'hospitality software, QR restaurant ordering, KDS scheduling, restaurant POS',
            faqs: [
                {
                    q: "Can customers order tableside via QR?",
                    a: "Yes, guests scan dynamic table QR codes to view the digital catalog, select items, and process splits and checkout directly."
                },
                {
                    q: "How are kitchen queues managed?",
                    a: "Orders flow from the POS or tableside QR scanners directly to the Kitchen Display System (KDS) for priority staging."
                }
            ]
        },
        'hospitality_silo': {
            title: 'Connected Hospitality & Dining Systems',
            subtitle: 'Guest experience, contactless ordering, and kitchen orchestration.',
            description: 'Modernize guest services, dining halls, and event spaces with contactless QR ordering, real-time table seating planners, and cloud-based Kitchen Display Systems (KDS). GemSphere links Front-of-House guest services with Back-of-House operations using our <a href="/products/booking" class="text-brand-cyan hover:underline font-semibold">Booking & Reservations System</a>.',
            features: [
                'Tableside QR Ordering & Digital Catalogs',
                'Kitchen Display System (KDS) Queue Planners',
                'Multi-Property Seat & Booking Centralizers',
                'Front-of-House POS & Split-Billing Integrations'
            ],
            keywords: 'hospitality software, QR restaurant ordering, KDS scheduling, restaurant POS',
            faqs: [
                {
                    q: "Can customers order tableside via QR?",
                    a: "Yes, guests scan dynamic table QR codes to view the digital catalog, select items, and process splits and checkout directly."
                },
                {
                    q: "How are kitchen queues managed?",
                    a: "Orders flow from the POS or tableside QR scanners directly to the Kitchen Display System (KDS) for priority staging."
                }
            ]
        },
        'manufacturing': {
            title: 'Industrial IoT & Smart Manufacturing',
            subtitle: 'Predictive maintenance, inventory logistics, and Industry 4.0 automation.',
            description: 'Bring digital intelligence to your factory floor. Monitor machine health, forecast demand, and automate inventory replenishments with machine learning models that integrate directly with hardware APIs and ERP backends using the <a href="/products/erp-system" class="text-brand-cyan hover:underline font-semibold">Ecosystem ERP Core</a>.',
            features: [
                'Predictive Machine Maintenance Alerts',
                'Industrial IoT API Telemetry & Logging',
                'Automated Material Replenishment Systems',
                'AI-Powered Production Line Scheduling'
            ],
            keywords: 'Industry 4.0 solutions, predictive maintenance machine learning, smart manufacturing',
            faqs: [
                {
                    q: "How is IoT telemetry processed?",
                    a: "We hook into industrial PLCs and sensor APIs, streaming machine metrics to real-time SRE logging dashboards."
                },
                {
                    q: "Can the system automate material ordering?",
                    a: "Yes, low stock levels on the factory floor trigger automated Purchase Requisitions within the sourcing context."
                }
            ]
        }
    },
    product: {
        'retail-pos': {
            title: 'Omni-Retail Custom Integration',
            subtitle: 'Bespoke POS and E-commerce integration architecture.',
            description: 'We design and build custom retail systems that synchronize physical stores with digital storefronts in real-time.',
            features: ['Live Inventory Sync', 'Mobile POS', 'Omnichannel Orders']
        },
        'hospitality-suite': {
            title: 'Hospitality Custom Orchestration',
            subtitle: 'Tailored dining and reservation management systems.',
            description: 'Bespoke digital-first hospitality systems engineered for restaurants, hotels, and event spaces.',
            features: ['Table Management', 'QR Ordering', 'Kitchen Display System']
        },
        'growth-crm': {
            title: 'CRM & Sales Custom Engineering',
            subtitle: 'Sales automation engineered for high-growth teams.',
            description: 'Custom CRM platforms with tailored integrations, AI-driven lead scoring, and automated follow-up workflows.',
            features: ['Pipeline Tracking', 'Lead Scoring', 'Automated Marketing']
        }
    },
    case_study: {
        'global-retail-chain': {
            title: 'Global Retail Expansion',
            subtitle: 'Scaling to 500+ stores across EMEA.',
            description: 'How a leading retail giant used GemSphere to centralize operations and reduce inventory leakage by 30%.',
            features: ['30% Less Leakage', '99% Inventory Accuracy', '2.5x Faster Checkouts']
        },
        'smart-restaurant-network': {
            title: 'The Digital Dining Revolution',
            subtitle: 'Digitizing 50+ upscale restaurants.',
            description: 'Transforming the guest experience through contactless ordering and intelligent kitchen orchestration.',
            features: ['40% Faster Turnovers', '20% Higher Average Bill', 'Zero Paper Waste']
        }
    }
};
