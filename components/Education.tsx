'use client'

import React from 'react'
import { useConfig } from '../components/ConfigProvider'

export default function EducationSection() {
  const { config } = useConfig()
  const baseSize = config.font_size || 16

  const education = [
    {
      title: 'M.Tech in Cyber Security Science',
      institution: 'Federal University of Technology, Minna',
      year: '2025',
      icon: '🎓',
      color: config.primary_color,
    },
    {
      title: 'B.Tech in Mathematics/CS',
      institution: 'Federal University of Technology, Minna',
      year: '2014',
      icon: '🎓',
      color: config.accent_color,
    },
    {
      title: 'Full Stack Developer',
      institution: 'IVYARC Digital',
      year: '2022',
      icon: '📜',
      color: config.primary_color,
    },
    {
      title: 'Complete Web Developer',
      institution: 'Udemy',
      year: '2018',
      icon: '📜',
      color: config.accent_color,
    },
  ]

  return (
    <section
      className="py-20 px-6 section-reveal"
      style={{ backgroundColor: config.background_color }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="mb-3 font-bold text-center uppercase tracking-widest"
          style={{ fontSize: baseSize * 0.875, color: config.primary_color }}
        >
          Qualifications
        </h2>
        <h3
          className="mb-12 font-bold text-center"
          style={{ fontSize: baseSize * 2.25, color: config.text_color }}
        >
          {config.education_heading}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card"
              style={{ backgroundColor: config.card_color }}
            >
              <div
                className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${edu.color}30, ${config.accent_color}30)` }}
              >
                <span style={{ fontSize: baseSize * 1.25 }}>{edu.icon}</span>
              </div>
              <h3 className="font-bold mb-2" style={{ fontSize: baseSize * 1.125, color: config.text_color }}>
                {edu.title}
              </h3>
              <p className="mb-1" style={{ color: edu.color, fontSize: baseSize * 0.9375, fontWeight: 500 }}>
                {edu.institution}
              </p>
              <p style={{ color: config.text_color, fontSize: baseSize * 0.875, opacity: 0.6 }}>{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// 'use client'
// import { useConfig } from './ConfigProvider'
// export default function Education() {
//   const { config } = useConfig()
//   return (
//     <section className="py-16 max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-4">{config.education_heading}</h2>
//       <p className="opacity-80">Education details go here.</p>
//     </section>
//   )
// }