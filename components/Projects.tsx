'use client'

import React from 'react'
import { useConfig } from '../components/ConfigProvider'

export default function ProjectsSection() {
  const { config } = useConfig()
  const baseSize = config.font_size || 16

  const projects = [
    {
      title: 'Courier Management',
      description:
        'Full logistics platform with delivery booking, wallet integration, live tracking, and admin analytics',
      icon: '🚚',
      color: config.primary_color,
      tech: ['Next.js', 'MongoDB', 'Supabase', 'Paystack'],
    },
    {
      title: 'Solar Dashboard',
      description:
        'IoT-based monitoring dashboard for tracking solar energy generation and battery health',
      icon: '☀️',
      color: config.accent_color,
      tech: ['React', 'Node.js', 'MQTT', 'Chart.js'],
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Multi-vendor marketplace with vendor onboarding, product management, and secure payments',
      icon: '🛒',
      color: config.primary_color,
      tech: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
    },
  ]

  return (
    <section
      className="py-20 px-6 section-reveal"
      style={{ backgroundColor: config.background_color }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="mb-3 font-bold text-center uppercase tracking-widest"
          style={{ fontSize: baseSize * 0.875, color: config.accent_color }}
        >
          Featured Work
        </h2>
        <h3
          className="mb-12 font-bold text-center"
          style={{ fontSize: baseSize * 2.25, color: config.text_color }}
        >
          {config.projects_heading}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card gradient-border group"
              style={{ backgroundColor: config.card_color }}
            >
              <div
                className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${proj.color}, ${config.accent_color})` }}
              >
                <span style={{ fontSize: baseSize * 1.75 }}>{proj.icon}</span>
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: baseSize * 1.25, color: config.text_color }}>
                {proj.title}
              </h3>
              <p className="mb-4" style={{ fontSize: baseSize * 0.9375, color: config.text_color, opacity: 0.75, lineHeight: 1.6 }}>
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded"
                    style={{
                      backgroundColor: `${proj.color}15`,
                      color: proj.color,
                      fontSize: baseSize * 0.75,
                      border: `1px solid ${proj.color}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 'use client'
// import { useConfig } from './ConfigProvider'
// export default function Projects() {
//   const { config } = useConfig()
//   return (
//     <section className="py-16 max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-4">{config.projects_heading}</h2>
//       <p className="opacity-80">Project list goes here.</p>
//     </section>
//   )
// }