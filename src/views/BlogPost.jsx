/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";
import React from 'react';
import LocalizedLink from '../components/LocalizedLink';
import { useParams, redirect } from 'next/navigation';

import { BLOG_POSTS } from '../data/blogData';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import { generateBlogPostingSchema } from '../utils/schemaGenerators';

const BlogPost = () => {
    const { id } = useParams();
    const post = BLOG_POSTS.find(p => p.id === id);

    if (!post) {
        redirect('/blog');
        return null;
    }

    return (
        <article className="container mx-auto px-6 py-12 max-w-4xl">
            <SchemaMarkup schema={generateBlogPostingSchema(post)} />

            <LocalizedLink href="/blog" className="inline-flex items-center gap-2 text-brand-cyan font-bold mb-12 hover:gap-3 transition-all">
                <ArrowLeft size={18} /> Back to Blog
            </LocalizedLink>

            <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                    <span className="px-3 py-1 rounded bg-brand-cyan/20 text-brand-cyan text-xs font-black uppercase tracking-widest">
                        {post.category}
                    </span>
                    <time 
                        dateTime={new Date(post.date).toISOString().split('T')[0]} 
                        className="flex items-center gap-2 text-sm text-white/50 font-bold uppercase tracking-wider"
                    >
                        <Calendar size={16} /> {post.date}
                    </time>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 p-6 glass-card border-white/5 bg-white/5 mb-16">
                    <div className="w-12 h-12 rounded-full bg-brand-indigo flex items-center justify-center font-black">GS</div>
                    <div>
                        <div className="text-sm font-black">GemSphere Editorial</div>
                        <div className="text-xs text-white/40 font-bold tracking-widest uppercase">Technology Insights Team</div>
                    </div>
                    <button className="ml-auto flex items-center gap-2 text-white/40 hover:text-brand-cyan transition-all text-xs font-bold font-mono">
                        <Share2 size={14} /> SHARE
                    </button>
                </div>
            </div>

            <div 
                className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-white
                    prose-p:text-white/60 prose-p:leading-relaxed prose-p:mb-8
                    prose-li:text-white/60 prose-strong:text-brand-cyan"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />

            <div className="mt-24 p-12 glass-card border-brand-cyan/20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
                <h3 className="text-3xl font-black mb-4">Was this article helpful?</h3>
                <p className="text-white/50 mb-8 max-w-md mx-auto">
                    Stay ahead of the curve. Learn how GemSphere can help you implement these technologies in your own organization.
                </p>
                <div className="flex justify-center gap-4">
                    <LocalizedLink href="/demo" className="btn-primary">Book a Consultation</LocalizedLink>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
