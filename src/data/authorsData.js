/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import { SITE_CONFIG } from '../config/siteConfig';

export const AUTHORS = [
  {
    slug: 'arun-sharma',
    name: 'Dr. Arun Sharma',
    role: 'Chief Technology Officer & Principal AI Architect',
    bio: 'Dr. Arun Sharma leads enterprise architecture and artificial intelligence research at GemSphere Technologies. With over 18 years of experience in distributed systems, high-throughput financial ledgers, and autonomous agent orchestration, he specializes in building resilient, single-tenant private cloud solutions for global Fortune 500 enterprises.',
    expertise: ['Domain-Driven Design (DDD)', 'Distributed Ledger Architecture', 'Private RAG Pipelines', 'Enterprise Microservices'],
    socialLinks: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github
    ],
    avatar: '/og-image.jpg'
  },
  {
    slug: 'sophia-chen',
    name: 'Sophia Chen',
    role: 'VP of Enterprise Solutions Architecture',
    bio: 'Sophia Chen oversees commercial product engineering and omnichannel retail systems at GemSphere. Formerly leading engineering pods at tier-1 retail technology firms, she focuses on high-availability offline-first POS synchronization, inventory telemetry, and global ERP modernization.',
    expertise: ['Omnichannel Retail POS', 'Event-Driven Systems', 'ERP Data Migration', 'Cloud Infrastructure Optimization'],
    socialLinks: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter
    ],
    avatar: '/og-image.jpg'
  },
  {
    slug: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Principal Cloud & Security Architect',
    bio: 'Marcus Vance is the head of infrastructure security and zero-trust engineering at GemSphere Technologies. He is responsible for enforcing SOC 2 Type II, HIPAA, and ISO 27001 readiness frameworks, dedicated tenant isolation models, and automated CI/CD security telemetry.',
    expertise: ['Zero-Trust Architecture', 'SOC 2 & HIPAA Compliance Readiness', 'Kubernetes & Multi-Cloud', 'Database Encryption'],
    socialLinks: [
      SITE_CONFIG.social.linkedin
    ],
    avatar: '/og-image.jpg'
  },
  {
    slug: 'priya-nair',
    name: 'Priya Nair',
    role: 'Director of Machine Learning & Knowledge Systems',
    bio: 'Priya Nair directs the Generative Engine Optimization (GEO) and enterprise AI solutions team at GemSphere. She specializes in fine-tuning proprietary domain LLMs, Model Context Protocol (MCP) server design, and semantic search retrieval over multi-terabyte corporate knowledge graphs.',
    expertise: ['Generative Engine Optimization (GEO)', 'Vector Databases', 'Semantic Search', 'Agentic Workflow Automation'],
    socialLinks: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github
    ],
    avatar: '/og-image.jpg'
  }
];

export const AUTHORS_MAP = AUTHORS.reduce((acc, author) => {
  acc[author.slug] = author;
  return acc;
}, {});
