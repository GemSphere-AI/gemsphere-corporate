/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";
import React, { useState, useMemo } from 'react';
import LocalizedLink from '../components/LocalizedLink';
import { BLOG_POSTS } from '../data/blogData';
import { ArrowRight, Calendar, Search, Mail, Sparkles, Check } from 'lucide-react';

const CATEGORIES = [
    'All',
    'AI & Retail',
    'Engineering',
    'Business Intelligence',
    'Supply Chain',
    'Security',
    'Hospitality',
    'Digital Transformation'
];

const BlogList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(6);
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    // Filter posts based on category and search query
    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 post.content.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    // Separate featured post (the latest one) from the grid
    const featuredPost = useMemo(() => {
        if (filteredPosts.length === 0) return null;
        // The first matching post is the featured one if no category is selected,
        // or just the first match in general.
        return filteredPosts[0];
    }, [filteredPosts]);

    const gridPosts = useMemo(() => {
        if (filteredPosts.length === 0) return [];
        // Skip the featured post in the grid to avoid duplication
        return filteredPosts.slice(1, 1 + visibleCount);
    }, [filteredPosts, visibleCount]);

    const hasMore = filteredPosts.length > gridPosts.length + (featuredPost ? 1 : 0);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        try {
            const existing = JSON.parse(localStorage.getItem('gemsphere-email-leads') || '[]');
            existing.push({ email, source: 'blog-sidebar-subscribe', timestamp: new Date().toISOString() });
            localStorage.setItem('gemsphere-email-leads', JSON.stringify(existing));
        } catch {}
        setSubscribed(true);
        setEmail('');
    };

    return (
        <main className="container mx-auto px-6 py-20 max-w-7xl">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest mb-4">
                    <Sparkles size={12} /> Expert Insights
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-text-primary font-display">
                    The GemSphere Blog
                </h1>
                <p className="text-lg md:text-xl text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                    Thought leadership, engineering best practices, and SaaS growth strategies for global enterprise leaders.
                </p>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Content (Left) */}
                <div className="lg:col-span-8 space-y-12">
                    {/* Featured Post Card */}
                    {featuredPost && (
                        <div className="relative rounded-[32px] overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-brand-indigo/20 to-brand-violet/20 rounded-[32px]" />
                            <div className="relative m-[1.5px] bg-brand-card rounded-[30px] p-6 md:p-10 border border-brand-border/60 hover:border-brand-cyan/30 transition-all duration-300">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-3">
                                        <span className="px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-wider">
                                            Featured · {featuredPost.category}
                                        </span>
                                        <time 
                                            dateTime={new Date(featuredPost.date).toISOString().split('T')[0]} 
                                            className="flex items-center gap-1 text-[10px] text-text-muted font-bold uppercase tracking-wider"
                                        >
                                            <Calendar size={12} /> {featuredPost.date}
                                        </time>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-2xl md:text-4xl font-black text-text-primary group-hover:text-brand-cyan transition-colors leading-tight font-display">
                                            <LocalizedLink href={`/blog/${featuredPost.id}`}>
                                                {featuredPost.title}
                                            </LocalizedLink>
                                        </h2>
                                        <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                                            {featuredPost.excerpt}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-brand-border">
                                        <LocalizedLink 
                                            href={`/blog/${featuredPost.id}`}
                                            className="inline-flex items-center gap-2 text-sm font-black text-brand-cyan hover:text-pure-white transition-colors"
                                        >
                                            Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </LocalizedLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Blog Posts Grid */}
                    {gridPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {gridPosts.map((post) => (
                                <article key={post.id} className="flex">
                                    <LocalizedLink 
                                        href={`/blog/${post.id}`}
                                        className="glass-card flex flex-col group hover:-translate-y-2 transition-all duration-300 overflow-hidden w-full border border-brand-border/60 hover:border-brand-cyan/30"
                                    >
                                        <div className="p-8 flex-grow">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-2 py-0.5 rounded bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo dark:text-brand-cyan text-[10px] font-black uppercase tracking-wider">
                                                    {post.category}
                                                </span>
                                                <time 
                                                    dateTime={new Date(post.date).toISOString().split('T')[0]} 
                                                    className="flex items-center gap-1 text-[10px] text-text-muted font-bold uppercase tracking-wider"
                                                >
                                                    <Calendar size={12} /> {post.date}
                                                </time>
                                            </div>
                                            <h3 className="text-lg font-black text-text-primary mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2 font-display">
                                                {post.title}
                                            </h3>
                                            <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 font-medium">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <div className="px-8 py-4 border-t border-brand-border bg-brand-card/40 flex justify-between items-center group-hover:bg-brand-card/60 transition-colors">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-text-tertiary">Read Full Article</span>
                                            <ArrowRight size={14} className="text-brand-cyan group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </LocalizedLink>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 glass-card rounded-[32px] border-brand-border">
                            <p className="text-lg text-text-secondary font-medium">No articles found matching your criteria.</p>
                        </div>
                    )}

                    {/* Pagination Load More Button */}
                    {hasMore && (
                        <div className="text-center pt-4">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 6)}
                                className="btn-secondary px-8 py-3 text-sm font-black uppercase tracking-wider transition-all duration-300"
                            >
                                Load More Articles
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar (Right) */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Search Component */}
                    <div className="glass-card p-6 rounded-[24px] border-brand-border space-y-4">
                        <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Search Articles</h3>
                        <div className="relative">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search insight articles..."
                                className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl pl-11 pr-4 py-3 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                            />
                        </div>
                    </div>

                    {/* Category Filter List */}
                    <div className="glass-card p-6 rounded-[24px] border-brand-border space-y-4">
                        <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Categories</h3>
                        <div className="flex flex-col gap-1.5">
                            {CATEGORIES.map((cat) => {
                                const count = cat === 'All' 
                                    ? BLOG_POSTS.length 
                                    : BLOG_POSTS.filter(post => post.category === cat).length;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setVisibleCount(6);
                                        }}
                                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                            selectedCategory === cat
                                            ? 'bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan'
                                            : 'hover:bg-brand-card/40 text-text-secondary hover:text-text-primary'
                                        }`}
                                    >
                                        <span>{cat}</span>
                                        <span className="text-[10px] opacity-65 bg-brand-border/40 px-2 py-0.5 rounded-full">{count}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sidebar Newsletter CTA */}
                    <div className="relative rounded-[24px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-[24px]" />
                        <div className="relative m-[1px] bg-brand-card rounded-[23px] p-6 border border-brand-border/60">
                            {subscribed ? (
                                <div className="text-center py-6">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                        <Check size={20} className="text-emerald-400" />
                                    </div>
                                    <h4 className="text-base font-bold text-text-primary mb-1">Subscribed!</h4>
                                    <p className="text-xs text-text-tertiary">You are now on the insider list.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Mail size={16} className="text-brand-cyan" />
                                        <h4 className="text-sm font-black text-text-primary uppercase tracking-wider">
                                            Enterprise Insights
                                        </h4>
                                    </div>
                                    <p className="text-xs text-text-secondary leading-relaxed font-medium">
                                        Subscribe to get weekly insights, digital transformation architectures, and engineering playbooks delivered directly to your inbox.
                                    </p>
                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your work email"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
                                        >
                                            Subscribe Now <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogList;
