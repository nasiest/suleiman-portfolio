// 'use client'

// import React from 'react'
// import { useConfig } from '../components/ConfigProvider'

// export default function ExperienceSection() {
//   const { config } = useConfig()
//   const baseSize = config.font_size || 16

//   return (
//     <section
//       className="py-20 px-6 section-reveal"
//       style={{ backgroundColor: config.background_color }}
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Section Heading */}
//         <h2
//           className="mb-3 font-bold text-center uppercase tracking-widest"
//           style={{ fontSize: baseSize * 0.875, color: config.primary_color }}
//         >
//           Career Path
//         </h2>
//         <h3
//           className="mb-12 font-bold text-center"
//           style={{ fontSize: baseSize * 2.25, color: config.text_color }}
//         >
//           {config.experience_heading}
//         </h3>

//         {/* Experiences */}
//         <div className="space-y-8">
//           {[
//             {
//               title: 'Full Stack JavaScript Engineer',
//               company: 'Galata-Wave Digital Innovations Ltd',
//               color: config.primary_color,
//               period: 'Jan 2024 – Present',
//               points: [
//                 'Leading development of logistics and courier management system with real-time delivery tracking',
//                 'Integrated Paystack payment gateway for wallet funding and transaction processing',
//                 'Implemented referral and credit reward system using Brevo transactional emails',
//                 'Optimized database queries and API endpoints, reducing load time by 35%',
//               ],
//             },
//             {
//               title: 'Full Stack Developer',
//               company: 'IVYARC Digital',
//               color: config.accent_color,
//               period: 'Jan 2021 – Dec 2023',
//               points: [
//                 'Developed client-facing web applications and internal admin dashboards',
//                 'Built REST APIs and integrated third-party services including payment processors',
//                 'Managed CI/CD pipelines and automated deployments on AWS and Vercel',
//               ],
//             },
//             {
//               title: 'Frontend Engineer',
//               company: 'Innovatech Hub',
//               color: config.primary_color,
//               period: 'Mar 2019 – Dec 2020',
//               points: [
//                 'Built responsive interfaces and reusable UI components using React and Redux',
//                 'Integrated REST APIs and optimized frontend performance',
//               ],
//             },
//           ].map((exp, idx) => (
//             <div
//               key={idx}
//               className="p-8 rounded-2xl glass-card relative overflow-hidden"
//               style={{ backgroundColor: config.card_color, borderLeft: `4px solid ${exp.color}` }}
//             >
//               <div
//                 className="absolute top-0 right-0 w-32 h-32 rounded-full"
//                 style={{
//                   background: `radial-gradient(circle, ${exp.color}20, transparent)`,
//                   filter: 'blur(40px)',
//                 }}
//               />
//               <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
//                 <div>
//                   <h3 className="font-bold mb-1" style={{ fontSize: baseSize * 1.375, color: config.text_color }}>
//                     {exp.title}
//                   </h3>
//                   <p style={{ color: exp.color, fontSize: baseSize, fontWeight: 500 }}>{exp.company}</p>
//                 </div>
//                 <span
//                   className="px-4 py-1 rounded-full"
//                   style={{
//                     backgroundColor: `${exp.color}20`,
//                     color: exp.color,
//                     fontSize: baseSize * 0.875,
//                     border: `1px solid ${exp.color}40`,
//                   }}
//                 >
//                   {exp.period}
//                 </span>
//               </div>
//               <ul className="space-y-3" style={{ fontSize: baseSize * 0.9375, color: config.text_color, opacity: 0.85 }}>
//                 {exp.points.map((point, i) => (
//                   <li key={i} className="flex gap-3">
//                     <span style={{ color: exp.color, marginTop: 2 }}>▹</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useConfig } from '../components/ConfigProvider'

export default function Experience() {
  const { config } = useConfig()

  const base = config.font_size
  const textColor = config.text_color
  const bgColor = config.background_color
  const cardColor = config.card_color
  const primary = config.primary_color
  const accent = config.accent_color

  return (
    <section
      className="py-20 px-6 section-reveal"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="mb-3 font-bold text-center uppercase tracking-[0.2em]"
          style={{ fontSize: base * 0.875, color: primary }}
        >
          Career Path
        </h2>

        <h3
          className="mb-12 font-bold text-center"
          style={{ fontSize: base * 2.25, color: textColor }}
        >
          {config.experience_heading}
        </h3>

        <div className="space-y-8">
          {/* ---- EXPERIENCE CARD 1 ---- */}
          <div
            className="p-8 rounded-2xl glass-card relative overflow-hidden"
            style={{
              backgroundColor: cardColor,
              borderLeft: `4px solid ${primary}`
            }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle, ${primary}20, transparent)`,
                filter: 'blur(40px)'
              }}
            />

            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
              <div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontSize: base * 1.375, color: textColor }}
                >
                  Full Stack JavaScript Engineer
                </h3>
                <p
                  style={{
                    color: primary,
                    fontSize: base,
                    fontWeight: 500
                  }}
                >
                  Galata-Wave Digital Innovations Ltd
                </p>
              </div>

              <span
                className="px-4 py-1 rounded-full"
                style={{
                  backgroundColor: `${primary}20`,
                  color: primary,
                  fontSize: base * 0.875,
                  border: `1px solid ${primary}40`
                }}
              >
                Jan 2024 – Present
              </span>
            </div>

            <ul
              className="space-y-3"
              style={{ fontSize: base * 0.9375, color: textColor, opacity: 0.85 }}
            >
              {[
                'Leading development of logistics and courier management system with real-time tracking',
                'Integrated Paystack payment gateway for wallet funding',
                'Implemented referral and credit reward system using Brevo emails',
                <>
                  Optimized database queries and API endpoints, reducing load time by{' '}
                  <strong style={{ color: primary }}>35%</strong>
                </>
              ].map((item, i) => (
                <li className="flex gap-3" key={i}>
                  <span style={{ color: primary, marginTop: 2 }}>▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- EXPERIENCE CARD 2 ---- */}
          <div
            className="p-8 rounded-2xl glass-card relative overflow-hidden"
            style={{
              backgroundColor: cardColor,
              borderLeft: `4px solid ${accent}`
            }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle, ${accent}20, transparent)`,
                filter: 'blur(40px)'
              }}
            />

            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
              <div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontSize: base * 1.375, color: textColor }}
                >
                  Full Stack Developer
                </h3>
                <p
                  style={{
                    color: accent,
                    fontSize: base,
                    fontWeight: 500
                  }}
                >
                  IVYARC Digital
                </p>
              </div>

              <span
                className="px-4 py-1 rounded-full"
                style={{
                  backgroundColor: `${accent}20`,
                  color: accent,
                  fontSize: base * 0.875,
                  border: `1px solid ${accent}40`
                }}
              >
                Jan 2021 – Dec 2023
              </span>
            </div>

            <ul
              className="space-y-3"
              style={{ fontSize: base * 0.9375, color: textColor, opacity: 0.85 }}
            >
              {[
                'Developed client-facing web apps and internal admin dashboards',
                'Built REST APIs and integrated payment processors',
                'Managed CI/CD pipelines and deployments on AWS/Vercel'
              ].map((item, i) => (
                <li className="flex gap-3" key={i}>
                  <span style={{ color: accent, marginTop: 2 }}>▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- EXPERIENCE CARD 3 ---- */}
          <div
            className="p-8 rounded-2xl glass-card relative overflow-hidden"
            style={{
              backgroundColor: cardColor,
              borderLeft: `4px solid ${primary}`
            }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle, ${primary}20, transparent)`,
                filter: 'blur(40px)'
              }}
            />

            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
              <div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontSize: base * 1.375, color: textColor }}
                >
                  Frontend Engineer
                </h3>
                <p
                  style={{
                    color: primary,
                    fontSize: base,
                    fontWeight: 500
                  }}
                >
                  Innovatech Hub
                </p>
              </div>

              <span
                className="px-4 py-1 rounded-full"
                style={{
                  backgroundColor: `${primary}20`,
                  color: primary,
                  fontSize: base * 0.875,
                  border: `1px solid ${primary}40`
                }}
              >
                Mar 2019 – Dec 2020
              </span>
            </div>

            <ul
              className="space-y-3"
              style={{ fontSize: base * 0.9375, color: textColor, opacity: 0.85 }}
            >
              {[
                'Built responsive UI and reusable components using React/Redux',
                'Integrated REST APIs and optimized frontend performance'
              ].map((item, i) => (
                <li className="flex gap-3" key={i}>
                  <span style={{ color: primary, marginTop: 2 }}>▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


// 'use client'
// import { useConfig } from './ConfigProvider'
// export default function Experience() {
//   const { config } = useConfig()
//   return (
//     <section className="py-16 max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-4">{config.experience_heading}</h2>
//       <p className="opacity-80">Experience details go here.</p>
//     </section>
//   )
// }