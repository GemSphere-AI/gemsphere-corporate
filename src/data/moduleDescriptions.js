/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

export const RICH_MODULES_DATA = {
    // Commerce & Retail
    'pos-system': {
        title: "GemSphere Smart POS",
        subtitle: "Fast checkout and mall-wide cash desk management with integrated <a href=\"/products/booking\" class=\"text-brand-cyan hover:underline font-semibold\">Reservations</a>",
        features: [
            "Offline Checkout Support with Local Cache Sync",
            "Thermal Printers & Cash Drawer System Drivers",
            "Barcode & QR Code Scanning SKU Registry",
            "Multi-Tender Payments & Cashier Session Management",
            "Interactive Digital Receipts & Mall Audits",
            "Loyalty Points Redemption at Checkout Desk"
        ]
    },
    'tax-and-compliance': {
        title: "Omnichannel Tax & Compliance Engine",
        subtitle: "Global tax calculations, localized rules, and automated audit logs",
        features: [
            "Real-time Local & National Tax Calculation",
            "Automated Multi-Jurisdiction Rate Adjustments",
            "System-wide Audit Trails & Transaction Logs",
            "Local Invoice Formatting & Compliance Sign-offs",
            "Digital Archival & Secure Compliance Storage",
            "Instant Tax Summary Reports & Visualizations"
        ]
    },
    'receipt-and-printing': {
        title: "Receipt & Printing Orchestrator",
        subtitle: "Multi-device thermal print routing and e-receipt systems",
        features: [
            "Thermal/ESC-POS Native Printer Driver Support",
            "Dynamic E-Receipt Generation (SMS & Email)",
            "Custom receipt layouts with brand logo assets",
            "Automatic printing triggers upon transaction close",
            "Split-printing workflows for kitchen/cash desks",
            "Digital audit logs for all printed receipts"
        ]
    },
    'loyalty-and-rewards': {
        title: "Ecosystem Loyalty & Rewards Hub",
        subtitle: "Interactive point networks, loyalty tiers, and referral workflows",
        features: [
            "Custom Points-ledger & Earnings Rules Engine",
            "Dynamic Loyalty Tiers with Benefits Mapping",
            "Integrated Referral & Coupon Tracking",
            "Instant Points Redemption at POS and Web Checkout",
            "Customer Behavior Profiles & Retention Metrics",
            "API triggers for targeted discount offerings"
        ]
    },
    'catalog-management': {
        title: "Intelligent Catalog Management Hub",
        subtitle: "Centralized Product Information Management (PIM) with variant structures",
        features: [
            "Variant & Attribute Mapping Matrix (Sizes, Colors, Weights)",
            "Dynamic Price Lists and Category Orchestration",
            "Bulk Imports via Excel, CSV, or External Feeds",
            "Multi-Storefront Catalog Routing Rules",
            "Digital Media Attachment & SEO Alt-Tag Management",
            "Real-time catalog sync to mobile POS and e-commerce"
        ]
    },
    'inventory-management': {
        title: "Real-Time Inventory Management",
        subtitle: "Multi-location inventory tracking, stock adjustments, and auto-orders",
        features: [
            "Real-time Stock Count across Warehouses & Retails",
            "Automated Low-Stock Alerts & Auto-PO Drafting",
            "Batch & Expiry Date Registry Tracking",
            "Warehouse Bin and Rack Coordinate Mapping",
            "Inbound/Outbound Inventory Adjustments Logs",
            "Barcode-driven stock auditing and counting"
        ]
    },
    'order-management': {
        title: "Omnichannel Order Management System",
        subtitle: "Unified order lifecycle tracking from checkout to fulfillment",
        features: [
            "Unified Order Intake from Web, Mobile, and POS",
            "Dynamic Order Routing to nearest Warehouse node",
            "Automated Status Updates & Tracking Link Dispatches",
            "Interactive Refund, Returns, and Exchange pipelines",
            "Integrated split-shipping and partial fulfillment",
            "Historical Order Analytics and KPI Dashboards"
        ]
    },
    'promotion-engine': {
        title: "Dynamic Promotion & Coupon Engine",
        subtitle: "AI-driven discounts, promo codes, and multi-tier campaigns",
        features: [
            "Flexible Promo Code Rules (BOGO, Percentages, Flat)",
            "Customer Segment Targeting & Exclusion Rules",
            "Dynamic Cart Calculation discount triggers",
            "Automatic coupon validation and expiry controls",
            "Campaign attribution and conversion reports",
            "Instant discount sync with online cart and retail POS"
        ]
    },
    'payment-processing': {
        title: "Unified Payment Processing Layer",
        subtitle: "Secure multi-gateway payment integrations and cashier settlements",
        features: [
            "Secure integrations with Stripe, PayPal, Adyen, and local providers",
            "Split-Tender Payment Options (Cash, Card, Points)",
            "PCI DSS Aligned Tokenization & Access Controls",
            "Automated End-of-Day cash drawer reconciliations",
            "Real-time payout tracking and processing reports",
            "Instant dispute and refund webhook triggers"
        ]
    },
    'barcode-and-scanning': {
        title: "Barcode Registry & Scanning Service",
        subtitle: "High-speed product barcode scanning and SKU registries",
        features: [
            "Universal SKU/UPC/EAN Barcode Registry",
            "High-speed USB/Bluetooth barcode scanner integrations",
            "Dynamic QR Code generation for payments & orders",
            "Barcode label layout design and print outputs",
            "Mobile camera scanning API for employee workflows",
            "Instant lookup logs for zero checkout delays"
        ]
    },
    'e-commerce-platform': {
        title: "GemSphere Headless E-commerce",
        subtitle: "High-performance storefront APIs and checkout engines",
        features: [
            "Headless Storefront APIs for custom Web & Mobile Apps",
            "Real-time Inventory Sync across Locations",
            "Dynamic Promotion & Discount Orchestration Engine",
            "Multi-Currency & Localized Tax Compliance",
            "Unified Checkout & Cart Operations",
            "Automated Sourcing & Purchase Order Management"
        ]
    },
    'marketplace-platform': {
        title: "Multi-Vendor Marketplace Platform",
        subtitle: "Vendor onboarding, catalog routing, and automated split-payments",
        features: [
            "Secure vendor onboarding and self-service portals",
            "Multi-vendor Catalog Routing and review workflows",
            "Automated split-payment settlement structures",
            "Vendor commission rate configuration matrices",
            "Consolidated checkout with multi-origin deliveries",
            "Vendor performance analytics and rating engines"
        ]
    },
    'booking': {
        title: "GemSphere Booking & Reservations",
        subtitle: "Enterprise room reservations, restaurant table planners, and appointment booking apps integrated with our <a href=\"/products/pos-system\" class=\"text-brand-cyan hover:underline font-semibold\">Smart POS</a>",
        features: [
            "Real-time Table Planners & Interactive Floor Maps",
            "Multi-Room Reservation Calendars & Dynamic Booking",
            "Automated Guest Intake Forms & Profile Management",
            "SMS & Email Booking Confirmation & Reminder Triggers",
            "Front-of-House POS & Split-Billing Integrations",
            "Historical Booking Analytics & Occupancy Forecasting"
        ]
    },

    // Supply Chain
    'strategic-sourcing': {
        title: "Strategic Sourcing & Procurement",
        subtitle: "Vendor matrices, purchase requisitions, and RFP management",
        features: [
            "Vendor scorecard profiles and pricing indexes",
            "Automated RFP (Request for Proposal) dispatches",
            "Digital Purchase Requisitions & Approval Workflows",
            "Contract repository with automated renewal alerts",
            "Procurement spending analysis and category tracking",
            "Vendor Lead-time and delivery reliability analytics"
        ]
    },
    'supply-chain-management': {
        title: "Supply Chain Orchestrator",
        subtitle: "End-to-end supply chain visibility and risk diagnostics",
        features: [
            "Real-time transit telemetry and shipping node logs",
            "Predictive delay diagnostics & alternative routing",
            "Unified supply chain planning & demand sync",
            "Cross-border customs and documentation checks",
            "Consolidated shipping container tracking maps",
            "Operational KPI reporting for supply networks"
        ]
    },
    'warehouse-management': {
        title: "Smart Warehouse Management (WMS)",
        subtitle: "Bin mapping, barcode pick-pack workflows, and stock control",
        features: [
            "Detailed Warehouse Bin & Rack layout configuration",
            "Optimized Picking & Packing routing algorithms",
            "Inbound ASN (Advanced Shipping Notice) registries",
            "Barcode-driven receiving, put-away, and transfers",
            "Stock adjustments with full audit accountability",
            "Real-time warehouse capacity & load monitors"
        ]
    },
    'transportation-management': {
        title: "Transportation & Last-Mile Logistics",
        subtitle: "Route optimization, driver mobile app hooks, and dispatch planning",
        features: [
            "AI-driven route planning and traffic adjustments",
            "Fleet load balancing and resource allocations",
            "Driver mobile tracking and status updates",
            "Customer delivery windows and SMS notifications",
            "Digital Proof of Delivery (e-signatures & photos)",
            "Fuel consumption and mileage cost calculations"
        ]
    },
    'demand-planning': {
        title: "AI-Powered Demand Planning",
        subtitle: "Predictive inventory forecasting and seasonal trend analysis",
        features: [
            "Predictive demand forecasting ML models",
            "Historical sales data ingest and seasonal patterns",
            "Lead-time calculations for replenishment planning",
            "Scenario simulation tools for inventory safety stock",
            "Consolidated purchase plan recommendations",
            "Forecast accuracy tracking and variance alerts"
        ]
    },
    'fulfillment-platform': {
        title: "Omnichannel Fulfillment Engine",
        subtitle: "Bespoke pack, ship, and local delivery orchestration",
        features: [
            "Automated fulfillment routing based on coordinates",
            "Splitting orders into multi-origin shipping containers",
            "Bespoke packing slip & label print generation",
            "Local delivery courier integrations (FedEx, UPS, DHL)",
            "Return shipping label auto-generation workflows",
            "Consolidated shipping cost calculations"
        ]
    },

    // Finance & Accounting
    'accounting-engine': {
        title: "Double-Entry Accounting Engine",
        subtitle: "Journal registries, accounts charts, and automated posting",
        features: [
            "Double-Entry ledger registry for all events",
            "Customizable Chart of Accounts (COA) templates",
            "Automated Journal Entry postings from POS & Billing",
            "Strict period closing controls and locks",
            "Bank feed transaction imports and matching",
            "Multinational currency conversions and postings"
        ]
    },
    'general-ledger': {
        title: "Centralized General Ledger (GL)",
        subtitle: "Multi-entity trial balances, consolidations, and financial logs",
        features: [
            "Real-time Consolidated Trial Balances",
            "Multi-Entity/Subsidiary ledger synchronization",
            "Detailed Transaction audit logs and search history",
            "Intercompany transaction posting and eliminations",
            "Historical ledger records archive (compliance ready)",
            "Automated balance sheet & income statement engines"
        ]
    },
    'billing-platform': {
        title: "GemSphere Billing Engine",
        subtitle: "Flexible billing orchestration and subscription engines",
        features: [
            "Dynamic Subscription Lifecycle Manager",
            "Multi-Gateway Payment Integration & Reconciliations",
            "Automated Invoicing & E-receipt Dispatches",
            "Usage-Based / Metered Billing Schemes",
            "Dunning Management & Failed Payment Recoveries",
            "Strict Financial Auditing & GL Sync"
        ]
    },
    'subscription-billing': {
        title: "Subscription Billing Hub",
        subtitle: "Recurring billing plans, meter definitions, and dunning workflows",
        features: [
            "Flexible pricing configurations (flat, tiered, volume)",
            "Automated recurring invoice dispatch schedules",
            "Dunning retry rules and grace period policies",
            "Customer portal for plan changes and card updates",
            "MRR, ARR, and Churn analysis metrics",
            "Coupon and prorated pricing billing hooks"
        ]
    },
    'payment-gateway': {
        title: "Enterprise Payment Gateway Integration",
        subtitle: "Multi-network card processing, tokenization, and settlement reconciliation",
        features: [
            "Unified payments API for global credit/debit networks",
            "Compliance aligned secure token vaults (PCI Aligned)",
            "Automated transaction settlement reporting",
            "Instant chargeback webhook event handlers",
            "Fraud detection risk scoring integrations",
            "Dynamic split-settlements for marketplace nodes"
        ]
    },
    'tax-management': {
        title: "Tax Management Engine",
        subtitle: "Automated tax filings, digital certificates, and rate configurations",
        features: [
            "Country and state-level tax rate matrix registry",
            "Tax-exempt certificate uploading and validation",
            "Automated filing export records for tax portals",
            "Digital tax audit reporting and compliance checks",
            "Localized tax invoice text generation",
            "Vat, Sales Tax, and GST calculation nodes"
        ]
    },
    'financial-reporting': {
        title: "Financial Analytics & Reporting Hub",
        subtitle: "P&L statements, balance sheets, and real-time cash flow dashboards",
        features: [
            "Automated P&L (Profit & Loss) report builder",
            "Real-time cash flow tracking logs",
            "Interactive balance sheet visualizations",
            "Custom variance reporting tools (Actual vs Budget)",
            "Regulatory financial report export formats",
            "Stakeholder access dashboard setups"
        ]
    },

    // Operations & Marketing
    'crm-platform': {
        title: "GemSphere CRM",
        subtitle: "Sales intelligence and pipeline automation for global teams",
        features: [
            "AI-Powered Lead Scoring & Routing",
            "Interactive Sales Pipelines & Deal Stages",
            "Omnichannel Email & SMS Outreach Campaigns",
            "Unified 360° Customer Profile Matrix",
            "Advanced Activity Timelines & Reminders",
            "Real-time Revenue & Performance Analytics"
        ]
    },
    'customer-management': {
        title: "Customer Registry Hub",
        subtitle: "360-degree customer records, segments, and purchase histories",
        features: [
            "Consolidated Customer Directory across POS & Web",
            "Purchase history timeline & product affinity metrics",
            "Dynamic Customer Segmentation Rules Engine",
            "Contact info verification & privacy opt-out registry",
            "Customer lifetime value (CLV) estimations",
            "Support ticket history and loyalty status links"
        ]
    },
    'lead-management': {
        title: "Sales Lead Manager",
        subtitle: "Lead ingest pipelines, scoring models, and agent assignment rules",
        features: [
            "Multi-channel lead ingestion (web forms, emails, ads)",
            "AI-driven lead qualification and scoring model",
            "Round-robin agent assignment workflow rules",
            "Lead contact history & action recommendation logs",
            "Conversion pipeline progress visualizations",
            "Lead source marketing ROI reports"
        ]
    },
    'marketing-automation': {
        title: "Marketing Campaign Orchestrator",
        subtitle: "Automated email/SMS workflows, drip campaigns, and telemetry",
        features: [
            "Visual email template editor with preview",
            "Drip campaign automation flow builder",
            "SMS campaign routing & link-click logging",
            "A/B testing for email headlines and calls",
            "Spam rating check and delivery verification",
            "Campaign conversion analytics dashboards"
        ]
    },
    'erp-system': {
        title: "Ecosystem ERP Core",
        subtitle: "Centralized business resource dashboards and API gateways",
        features: [
            "Consolidated resource utilization telemetry",
            "Department-level budgeting & expense approvals",
            "Internal workflows and task assignment tracking",
            "API core integrations linking POS, Supply Chain, & CRM",
            "Audit logging for administrative changes",
            "Enterprise metrics dashboard and reporting"
        ]
    },
    'workflow-automation': {
        title: "Dynamic Workflow Engine",
        subtitle: "Custom business triggers, actions, and API webhooks",
        features: [
            "Visual condition-action workflow model builder",
            "Multi-system webhook triggers and payloads",
            "Automated system notification alerts (Email/Slack)",
            "Delayed execution schedules & reminder triggers",
            "Task assignment updates and record changes",
            "Detailed audit logs for all workflow fires"
        ]
    },
    'document-management': {
        title: "Secure Document Management",
        subtitle: "Cloud storage, version controls, and access authorization",
        features: [
            "Encrypted document storage with AES-256 at rest",
            "Version history logs and restore functionality",
            "Granular share permissions (Internal vs Public)",
            "Bulk document uploads and folder hierarchies",
            "OCR (Optical Character Recognition) text searches",
            "Digital contract e-signature approvals"
        ]
    },

    // AI & Analytics
    'business-analytics': {
        title: "Ecosystem Business Analytics",
        subtitle: "Real-time SQL/NoSQL charting, reports, and BI tool integrations",
        features: [
            "Interactive drag-and-drop dashboard builder",
            "Real-time database query caching and charts",
            "Automated weekly email report dispatches",
            "Google BigQuery / Snowflake sync integrations",
            "Custom calculation fields and metrics",
            "Granular stakeholder report access controls"
        ]
    },
    'ai-chatbots': {
        title: "AI Customer Agent Engines",
        subtitle: "Conversational agents, intent recognition, and support escalations",
        features: [
            "Customer intent mapping & response databases",
            "Integration with WhatsApp, Messenger, and Web widgets",
            "Automated ticket creation and escalation routing",
            "Multi-language translation and response capability",
            "Customer sentiment analysis feedback logging",
            "Chat history review and training interfaces"
        ]
    },
    'conversational-ai': {
        title: "Natural Language Processing (NLP) Services",
        subtitle: "Text tokenization, sentiment models, and entity extractors",
        features: [
            "Entity extraction (names, products, dates) from chats",
            "Sentiment classification analysis models",
            "Automated text summarization generators",
            "Language identification and translation nodes",
            "API-first integration for customer feedback text",
            "Model training dashboard with custom labeling"
        ]
    },
    'recommendation-engine': {
        title: "Ecosystem Recommendation Engine",
        subtitle: "AI product recommendation carousels, pricing models, and segment offers",
        features: [
            "User behavior and purchase affinity analytics",
            "Next-best-product selection ML algorithms",
            "API response endpoints for e-commerce checkouts",
            "A/B testing metrics for recommendation carousels",
            "Dynamic pricing rules engine sync integration",
            "Offline batch model retraining routines"
        ]
    },
    'predictive-analytics': {
        title: "Predictive Analytics & Forecasting Hub",
        subtitle: "Forecasting revenue curves, stock levels, and customer churn",
        features: [
            "Time-series ML forecasting models (revenue, orders)",
            "Customer churn probability scoring logs",
            "Anomaly detection indicators in financial files",
            "What-if simulation tools for budget planning",
            "Custom prediction alert triggers (SMS/Email)",
            "Prediction variance reports (Actual vs Predicted)"
        ]
    },
    'ai-knowledge-systems': {
        title: "AI Knowledge Graphs & Search",
        subtitle: "Vector embeddings, document semantic searches, and internal knowledge graphs",
        features: [
            "Semantic vector database integrations",
            "Document parsing and chunk indexing pipelines",
            "Natural language question-answering engines",
            "Enterprise knowledge node graphing controls",
            "Zero-data-retention AI inference pipelines",
            "Instant results indexing for uploaded manuals"
        ]
    },

    // Platform Services
    'api-gateway': {
        title: "Enterprise API Gateway",
        subtitle: "API routing registries, rate limiters, and telemetry dashboard",
        features: [
            "Unified routing registry for all microservices",
            "Token-based client rate limit configurations",
            "JWT/OAuth security validation checkpoints",
            "Real-time API response time tracking dashboards",
            "Detailed trace logs for debugging connection drops",
            "Dynamic payload schema verification nodes"
        ]
    },
    'identity-and-access': {
        title: "Identity & Access Management (IAM)",
        subtitle: "Single Sign-On (SSO), RBAC permissions, and MFA gateways",
        features: [
            "Single Sign-On (SSO) OAuth/OIDC support",
            "Multi-Factor Authentication (MFA) enforcement rules",
            "Granular Role-Based Access Control (RBAC) scopes",
            "Active Directory and LDAP integrations",
            "Session expiration policies and logs",
            "Audit trail logs for administrative user adjustments"
        ]
    },
    'audit-and-compliance': {
        title: "Compliance & Audit Logging Core",
        subtitle: "Tamper-evident system activity journals and policy compliance reporting",
        features: [
            "Cryptographically chained audit logs",
            "Administrative and database change tracking",
            "Compliance reporting logs (aligned to GDPR, HIPAA, PCI)",
            "Real-time event streaming integrations",
            "Historical audit archive (GDPR compliance ready)",
            "Failed login attempt logs and security warnings"
        ]
    },
    'global-search': {
        title: "Global Enterprise Search Hub",
        subtitle: "Full-text indexing, multi-tenant index isolation, and fast search APIs",
        features: [
            "Full-text search indexing across products & orders",
            "Multi-tenant search index data separation",
            "Fuzzy matching & auto-complete API endpoints",
            "Search query analysis and analytics logs",
            "High-concurrency cluster search nodes",
            "Dynamic filtering and facet extraction service"
        ]
    },
    'notification-engine': {
        title: "Notification & Messaging Hub",
        subtitle: "Push notification routing, email dispatchers, and SMS gateways",
        features: [
            "Unified API for SMS, Push notifications, and Email",
            "Notification template configurations with brand variables",
            "Intelligent message queueing and routing rules",
            "Failed dispatch retry rules and failover routing",
            "Unsubscribe registry checks (GDPR opt-out ready)",
            "Real-time message delivery analytics reports"
        ]
    },
    'media-management': {
        title: "Digital Asset Management (DAM)",
        subtitle: "Cloud storage directories, media compression, and CDN distributions",
        features: [
            "Encrypted image/video cloud storage nodes",
            "Dynamic image resizing and file compression",
            "Global CDN (Content Delivery Network) integrations",
            "Bulk media upload and folder categorization",
            "Granular permission access scopes for media assets",
            "Alt-text and SEO media label configuration"
        ]
    },
    'location-services': {
        title: "Geospatial & Mapping Hub",
        subtitle: "Store locators, delivery zones coordinate mapping, and postcode search APIs",
        features: [
            "Geospatial coordinate boundary mapping APIs",
            "Store/Warehouse locator lookup services",
            "Delivery zone polygon calculations",
            "Postal code and address normalization engines",
            "Real-time vehicle coordinate tracking logs",
            "Distance matrix calculations for routing"
        ]
    }
};

// Auto-generate structured FAQ pages for Generative Engine Optimization (GEO) for all modules
Object.keys(RICH_MODULES_DATA).forEach(key => {
    if (!RICH_MODULES_DATA[key].faqs) {
        const title = RICH_MODULES_DATA[key].title;
        RICH_MODULES_DATA[key].faqs = [
            {
                q: `How does GemSphere ${title} scale for large enterprises?`,
                a: `GemSphere ${title} leverages our multi-tenant distributed database and cloud-native microservices architecture to process millions of concurrent transactions with near-zero latency and high availability.`
            },
            {
                q: `Is the ${title} module GDPR and HIPAA ready?`,
                a: `Yes, all GemSphere modules, including ${title}, are built with strict single-tenant logical data isolation, comprehensive cryptographically-signed audit logs, and granular role-based access control aligned with HIPAA and GDPR data protection design guidelines.`
            }
        ];
    }
});
