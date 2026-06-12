/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import {
    ShoppingCart, Package, ClipboardList, Warehouse, BarChart3, Tag, Gift, Heart,
    Truck, Building, Ship, Users, FileSearch, TrendingUp, PackageCheck, MapPin,
    CreditCard, RefreshCw, FileText, DollarSign, Receipt, PieChart, Calculator,
    Briefcase, UserCheck, Settings, CheckSquare, FolderOpen, ListTodo,
    Bot, Brain, MessageCircle, Mic, Sparkles, LineChart, BookOpen, Cog,
    MessagesSquare, Video, Layout, FileEdit, Zap, Monitor,
    Server, ShieldCheck, Search, Bell, Image, Target, Key, Megaphone,
    ScanLine, Printer, BadgeCheck, Banknote, Calendar
} from 'lucide-react';

export const PRODUCT_ECOSYSTEM = {
    categories: [
        {
            id: 'commerce',
            name: 'Commerce & Retail',
            description: 'Custom commerce systems engineered for omnichannel retail, catalog syncing, and checkout orchestration.',
            icon: ShoppingCart,
            color: '#00d4ff',
            modules: [
                { name: 'POS System', icon: Monitor, desc: 'Fast checkout, cashier management & shopping mall POS' },
                { name: 'Tax & Compliance', icon: BadgeCheck, desc: 'Multi-region tax, audit trails & regulatory compliance' },
                { name: 'Receipt & Printing', icon: Printer, desc: 'Thermal printer support, e-receipts & invoice generation' },
                { name: 'Loyalty & Rewards', icon: Heart, desc: 'Points, tiers, referrals & customer retention programs' },
                { name: 'Catalog Management', icon: FolderOpen, desc: 'Intelligent product information hub' },
                { name: 'Inventory Management', icon: Package, desc: 'Real-time global inventory sync' },
                { name: 'Order Management', icon: ClipboardList, desc: 'Unified order lifecycle management' },
                { name: 'Promotion Engine', icon: Gift, desc: 'AI-driven promotional campaigns' },
                { name: 'Payment Processing', icon: Banknote, desc: 'Multi-gateway payments, split tender & reconciliation' },
                { name: 'Barcode & Scanning', icon: ScanLine, desc: 'Barcode/QR scanning & SKU management' },
                { name: 'E-commerce Platform', icon: ShoppingCart, desc: 'Full-stack headless commerce engine' },
                { name: 'Marketplace Platform', icon: Building, desc: 'Multi-vendor marketplace orchestration' },
            ]
        },
        {
            id: 'supply-chain',
            name: 'Supply Chain',
            description: 'Bespoke supply chain systems for warehouse mapping, logistics telemetry, and strategic sourcing.',
            icon: Truck,
            color: '#6366f1',
            modules: [
                { name: 'Strategic Sourcing', icon: FileSearch, desc: 'Intelligent procurement & sourcing' },
                { name: 'Supply Chain Management', icon: Truck, desc: 'End-to-end supply chain visibility' },
                { name: 'Warehouse Management', icon: Warehouse, desc: 'Smart warehouse operations' },
                { name: 'Transportation Management', icon: Ship, desc: 'Route optimization & logistics' },
                { name: 'Demand Planning', icon: TrendingUp, desc: 'AI-powered demand forecasting' },
                { name: 'Fulfillment Platform', icon: PackageCheck, desc: 'Multi-channel fulfillment engine' },
                { name: 'Fleet Management System', icon: MapPin, desc: 'Geospatial vehicle tracking, fuel audits, and driver dispatch logs. (Custom Build)' },
                { name: 'Procurement Software', icon: FileText, desc: 'Automated requisition workflows, vendor sourcing, and purchase order tracking. (Custom Build)' },
                { name: 'Vendor Management System', icon: Users, desc: 'Vendor onboarding portal, performance tracking, and contract databases. (Custom Build)' },
            ]
        },
        {
            id: 'finance',
            name: 'Finance & Subscription',
            description: 'Custom financial operations systems featuring billing automation, ledger logs, and tax compliance.',
            icon: CreditCard,
            color: '#10b981',
            modules: [
                { name: 'Accounting Engine', icon: BookOpen, desc: 'Automated bookkeeping & accounting' },
                { name: 'General Ledger', icon: FileText, desc: 'Centralized financial ledger' },
                { name: 'Billing Platform', icon: CreditCard, desc: 'Flexible billing orchestration' },
                { name: 'Subscription Billing', icon: RefreshCw, desc: 'Recurring revenue management' },
                { name: 'Payment Gateway', icon: DollarSign, desc: 'Multi-gateway payments & reconciliation' },
                { name: 'Tax Management', icon: Receipt, desc: 'Global tax compliance engine' },
                { name: 'Financial Reporting', icon: Calculator, desc: 'Real-time financial analytics' },
                { name: 'Payroll Software', icon: Banknote, desc: 'Automated salary dispersion, tax filing, and direct deposit setups. (Custom Build)' },
            ]
        },
        {
            id: 'operations',
            name: 'Operations & CRM',
            description: 'Tailored business operations architectures for workflow automation, customer tracking, and scheduling.',
            icon: Briefcase,
            color: '#f59e0b',
            modules: [
                { name: 'CRM Platform', icon: UserCheck, desc: 'Customer relationship intelligence' },
                { name: 'Customer Management', icon: Users, desc: '360-degree customer profiles' },
                { name: 'Lead Management', icon: Target, desc: 'Lead tracking & conversion' },
                { name: 'Marketing Automation', icon: Megaphone, desc: 'Omnichannel marketing campaigns' },
                { name: 'ERP System', icon: Briefcase, desc: 'Enterprise resource planning' },
                { name: 'Workflow Automation', icon: Settings, desc: 'Process automation engine' },
                { name: 'Document Management', icon: FolderOpen, desc: 'Enterprise content platform' },
                { name: 'Workforce Management', icon: Users, desc: 'Shift scheduling, task assignments, and labor forecast dashboards. (Custom Build)' },
                { name: 'Time and Attendance', icon: Calendar, desc: 'Timesheet logging, clock-in geo-fencing, and payroll approval queues. (Custom Build)' },
                { name: 'Asset Management System', icon: Package, desc: 'Hardware depreciation trackers, barcode labels, and check-out logs. (Custom Build)' },
                { name: 'Visitor Management System', icon: UserCheck, desc: 'Contactless reception sign-ins, badge printing, and host alerts. (Custom Build)' },
                { name: 'Project Management Software', icon: CheckSquare, desc: 'Milestone tracking, timesheets, resource allocation, and Gantt charts. (Custom Build)' },
            ]
        },
        {
            id: 'ai-analytics',
            name: 'AI & Analytics',
            description: 'Bespoke analytical architectures featuring custom business intelligence and global indexing.',
            icon: Brain,
            color: '#8b5cf6',
            modules: [
                { name: 'Business Analytics', icon: LineChart, desc: 'Advanced data analytics & BI' },
                { name: 'AI Chatbots', icon: Bot, desc: 'Intelligent conversational agents' },
                { name: 'Conversational AI', icon: MessageCircle, desc: 'Natural language understanding' },
                { name: 'Recommendation Engine', icon: Sparkles, desc: 'Personalization at scale' },
                { name: 'Predictive Analytics', icon: TrendingUp, desc: 'Forward-looking intelligence' },
                { name: 'AI Knowledge Systems', icon: BookOpen, desc: 'Enterprise knowledge graphs' },
                { name: 'Customer Data Platform', icon: Server, desc: 'Unified customer profiles, behavioral events mapping, and audience sync. (Custom Build)' },
            ]
        },
        {
            id: 'hospitality',
            name: 'Hospitality',
            description: 'Bespoke hospitality structures linking guest intake, table reservations, and property integrations.',
            icon: Building,
            color: '#ec4899',
            modules: [
                { name: 'QR Code Ordering', icon: ScanLine, desc: 'Contactless QR menu scanning, self-ordering, and digital guest checkout' },
                { name: 'Kitchen Display System (KDS)', icon: Monitor, desc: 'Real-time kitchen order dispatching, prep status, and ticket routing' },
                { name: 'POS Station', icon: Printer, desc: 'Frictionless Point of Sale, table mapping, split bills, and cashier closure' },
                { name: 'Table & Reservation Management', icon: Users, desc: 'Live seating charts, waitlists, table status, and online bookings' },
                { name: 'Banquet & Event Planner', icon: Calendar, desc: 'Banquets scheduling, hall bookings, event layouts, and billing' },
                { name: 'F&B Catalog & Menu Editor', icon: FolderOpen, desc: 'Dynamic menu modifier groups, ingredients lists, and seasonal pricing' },
                { name: 'Accounts & Ledger Sync', icon: DollarSign, desc: 'Real-time revenue tracking, split payment reconciliation, and tax reports' },
                { name: 'Waitlist Management', icon: ClipboardList, desc: 'Smart waitlist sequencing, automated SMS notifications, and queue control' }
            ]
        },
        {
            id: 'platform',
            name: 'Platform Services',
            description: 'Core infrastructure modules powering access control, multi-tenancy, and routing gateways.',
            icon: Server,
            color: '#f43f5e',
            modules: [
                { name: 'API Gateway', icon: Zap, desc: 'Unified API management & routing' },
                { name: 'Identity & Access', icon: Key, desc: 'Secure identity management (ID/IAM)' },
                { name: 'Audit & Compliance', icon: ShieldCheck, desc: 'System-wide audit logging' },
                { name: 'Global Search', icon: Search, desc: 'Enterprise-wide intelligent search' },
                { name: 'Notification Engine', icon: Bell, desc: 'Multi-channel notifications' },
                { name: 'Media Management', icon: Image, desc: 'Digital asset management' },
                { name: 'Location Services', icon: MapPin, desc: 'Geospatial and mapping services' },
            ]
        },
    ],

    stats: {
        totalModules: '50+',
        tagline: '50+ Enterprise Modules. Custom-Built for Your Ecosystem.',
        description: 'An architectural library of 50+ composable enterprise modules and custom capabilities that we customize, integrate, and deploy to fit your specific operational workflows — giving you full ownership without platform lock-in.',
    },

    testimonials: [
        {
            quote: "GemSphere transformed our retail operations. By uniting our POS, inventory, and billing under a single multi-tenant platform, we reduced overhead costs by 35% in less than 6 months.",
            name: "Sophia Chen",
            role: "Chief Technology Officer",
            company: "Lumina Retail Group"
        },
        {
            quote: "The single data model and strict DDD architectures eliminated our integration headaches. The transition from legacy microservices to GemSphere's composable core was seamless.",
            name: "Marcus Vance",
            role: "VP of Engineering",
            company: "Apex Supply Chain"
        },
        {
            quote: "GemSphere's custom AI solutions allowed us to deploy predictive customer intelligence inside secure, single-tenant boundaries, respecting our compliance policies completely.",
            name: "Dr. Amira Yusuf",
            role: "Director of AI Research",
            company: "Vanguard Health Systems"
        }
    ],

    industries: [
        { name: 'Retail & Commerce', icon: ShoppingCart, slug: 'retail', stat: 'Omnichannel' },
        { name: 'Healthcare', icon: Heart, slug: 'healthcare', stat: 'HIPAA Ready' },
        { name: 'FinTech', icon: CreditCard, slug: 'fintech', stat: 'PCI DSS Ready' },
        { name: 'Logistics', icon: Truck, slug: 'logistics', stat: 'Multi-Region' },
        { name: 'Hospitality', icon: Building, slug: 'hospitality', stat: 'Multi-Property' },
        { name: 'Manufacturing', icon: Settings, slug: 'manufacturing', stat: 'Industry 4.0' },
    ],

    services: [
        { name: 'Enterprise Software Development', slug: 'software-development', desc: 'Cloud-native, scalable, and mission-critical software systems' },
        { name: 'Cloud Engineering', slug: 'cloud-engineering', desc: 'Multi-cloud architecture design, migration, and optimization' },
        { name: 'DevOps & SRE', slug: 'devops', desc: 'CI/CD pipelines, infrastructure as code, and reliability engineering' },
        { name: 'Architecture Consulting', slug: 'architecture-consulting', desc: 'Enterprise architecture advisory and system design' },
        { name: 'AI Transformation', slug: 'ai-transformation', desc: 'End-to-end AI strategy, development, and deployment' },
        { name: 'Managed Services', slug: 'managed-services', desc: '24/7 enterprise platform management and support' },
    ],
};

export const getTotalModuleCount = () => {
    return PRODUCT_ECOSYSTEM.categories.reduce((acc, cat) => acc + cat.modules.length, 0);
};

export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/&/g, 'and')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};
