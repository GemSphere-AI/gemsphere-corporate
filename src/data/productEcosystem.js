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
    ScanLine, Printer, BadgeCheck, Banknote
} from 'lucide-react';

export const PRODUCT_ECOSYSTEM = {
    categories: [
        {
            id: 'commerce',
            name: 'Commerce & Retail',
            description: 'End-to-end commerce platform powering omnichannel retail at global scale.',
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
            description: 'Intelligent supply chain orchestration from procurement to last-mile delivery.',
            icon: Truck,
            color: '#6366f1',
            modules: [
                { name: 'Strategic Sourcing', icon: FileSearch, desc: 'Intelligent procurement & sourcing' },
                { name: 'Supply Chain Management', icon: Truck, desc: 'End-to-end supply chain visibility' },
                { name: 'Warehouse Management', icon: Warehouse, desc: 'Smart warehouse operations' },
                { name: 'Transportation Management', icon: Ship, desc: 'Route optimization & logistics' },
                { name: 'Demand Planning', icon: TrendingUp, desc: 'AI-powered demand forecasting' },
                { name: 'Fulfillment Platform', icon: PackageCheck, desc: 'Multi-channel fulfillment engine' },
            ]
        },
        {
            id: 'finance',
            name: 'Finance & Accounting',
            description: 'Enterprise financial operations platform with automated reconciliation and compliance.',
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
            ]
        },
        {
            id: 'operations',
            name: 'Operations & Marketing',
            description: 'Unified business operations suite for enterprise workflow automation and marketing.',
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
            ]
        },
        {
            id: 'ai-analytics',
            name: 'AI & Analytics',
            description: 'Enterprise-grade AI capabilities and deep business analytics platform.',
            icon: Brain,
            color: '#8b5cf6',
            modules: [
                { name: 'Business Analytics', icon: LineChart, desc: 'Advanced data analytics & BI' },
                { name: 'AI Chatbots', icon: Bot, desc: 'Intelligent conversational agents' },
                { name: 'Conversational AI', icon: MessageCircle, desc: 'Natural language understanding' },
                { name: 'Recommendation Engine', icon: Sparkles, desc: 'Personalization at scale' },
                { name: 'Predictive Analytics', icon: TrendingUp, desc: 'Forward-looking intelligence' },
                { name: 'AI Knowledge Systems', icon: BookOpen, desc: 'Enterprise knowledge graphs' },
            ]
        },
        {
            id: 'platform',
            name: 'Platform Services',
            description: 'Core foundational services powering the entire enterprise ecosystem.',
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
        totalModules: '40+',
        tagline: '40+ Enterprise Modules. One Unified Digital Ecosystem.',
        description: 'A modular, composable platform architecture where every module works independently and integrates seamlessly — giving enterprises the freedom to adopt at their own pace.',
    },

    testimonials: [],

    industries: [
        { name: 'Retail & Commerce', icon: ShoppingCart, slug: 'retail', stat: 'Omnichannel' },
        { name: 'Healthcare', icon: Heart, slug: 'healthcare', stat: 'HIPAA Compliant' },
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
