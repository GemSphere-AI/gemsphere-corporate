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

import { BLOG_POSTS } from '../data/blogData';
import { ArrowRight, Calendar, Bookmark } from 'lucide-react';

const BlogList = () => {
    return (
        <div className="container mx-auto px-6 py-12">


            <div className="max-w-4xl mx-auto text-center mb-20 animate-slide-up">
                <h1 className="text-4xl md:text-6xl font-black mb-6">Expert Insights</h1>
                <p className="text-xl text-white/50 font-medium">
                    Scaling intelligence across the global enterprise landscape.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <LocalizedLink 
                        key={post.id} 
                        href={`/blog/${post.id}`}
                        className="glass-card flex flex-col group hover:-translate-y-2 transition-all overflow-hidden"
                    >
                        <div className="p-8 flex-grow">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-2 py-1 rounded bg-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-wider">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                                    <Calendar size={12} /> {post.date}
                                </span>
                            </div>
                            <h3 className="text-xl font-black mb-4 group-hover:text-brand-cyan transition-colors">{post.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed font-medium">
                                {post.excerpt}
                            </p>
                        </div>
                        <div className="px-8 py-5 border-t border-white/5 bg-white/5 flex justify-between items-center">
                            <span className="text-xs font-black uppercase text-white/60">Read Full Article</span>
                            <ArrowRight size={16} className="text-brand-cyan group-hover:translate-x-1 transition-transform" />
                        </div>
                    </LocalizedLink>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
