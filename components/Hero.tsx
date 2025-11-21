'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useConfig } from '../components/ConfigProvider'


export default function Hero() {
const { config } = useConfig()
return (
<section className="relative py-20 px-6 overflow-hidden bg-bg tech-grid">
<div className="max-w-6xl mx-auto text-center">
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
<div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ background: `linear-gradient(135deg, ${config.primary_color}20, ${config.accent_color}20)`, border: `1px solid ${config.primary_color}40` }}>
<span style={{ color: config.primary_color, fontWeight: 600 }}>
Available for Freelance
</span>
</div>


<h1 className="mb-4 font-extrabold text-[48px] glow-text float-animation" style={{ background: `linear-gradient(135deg, ${config.primary_color}, ${config.accent_color})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
{config.name}
</h1>


<p className="mb-3 text-xl font-light opacity-90">{config.title}</p>
<p className="mb-8 text-base" style={{ color: config.primary_color }}>6+ Years Experience • 50+ Projects Delivered</p>


<div className="flex flex-wrap justify-center gap-6 mb-10 text-sm opacity-80">
<span className="flex items-center gap-2">📍 {config.location}</span>
<span className="flex items-center gap-2">✉️ {config.email}</span>
<span className="flex items-center gap-2">📞 {config.phone}</span>
</div>


<div className="flex justify-center gap-4">
<a href={`https://linkedin.com/in/${config.linkedin}`} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-lg font-semibold" style={{ background: `linear-gradient(135deg, ${config.primary_color}, ${config.accent_color})`, color: config.background_color }}>
View LinkedIn
</a>
<a href={`https://github.com/${config.github}`} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-lg font-semibold" style={{ border: `2px solid ${config.primary_color}`, color: config.primary_color }}>
GitHub Profile
</a>
</div>
</motion.div>
</div>
</section>
)
}