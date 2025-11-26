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
      tech: ['Next.js', 'Node.js', 'MQTT', 'Chart.js'],
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Multi-vendor marketplace with vendor onboarding, product management, and secure payments',
      icon: '🛒',
      color: config.primary_color,
      tech: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
    },

    // ⭐ NEW PROJECT 1 — JOB BOARD
    {
      title: 'Job Board Application',
      description:
        'Full-stack job portal with employer dashboards, job postings, user authentication, and structured MySQL database design',
      icon: '💼',
      color: config.accent_color,
      tech: ['React.js', 'Express.js', 'MySQL', 'TailwindCSS'],
    },

    // ⭐ NEW PROJECT 2 — NUTRITION LANDING PAGE
    {
      title: 'Nutrition Values Landing Page',
      description:
        'Premium landing page for browsing nutritional values built with the Next.js App Router and modern ShadCN UI components',
      icon: '🥗',
      color: config.primary_color,
      tech: ['Next.js', 'TailwindCSS', 'ShadCN UI'],
    },
    // ⭐ NEW PROJECT 3 — CHAT APPLICATION
    {
      title: 'Real-Time Chat Application',
      description:
        'Scalable chat app featuring real-time messaging, user presence indicators, and chat room management using WebSockets',
      icon: '💬',
      color: config.accent_color,
      tech: ['React.js', 'Node.js', 'WebSockets', 'Redis'],
    },

    {
      title: 'E-Commerce Mobile App',
      description:
        'Cross-platform mobile shopping experience with cart, checkout, authentication, deep linking, and real-time syncing.',
      icon: '📱',
      color: config.accent_color,
      tech: [
        'React Native',
        'Expo',
        'React Navigation',
        'Redux Toolkit',
        'Stripe SDK',
        'Firebase',
      ],
    },

    // ⭐ NEW AWS PROJECT
    {
  title: 'Serverless File Storage & Processing System',
  description:
    'Cloud-native storage and processing pipeline with automated file workflows, CDN delivery, secure access, and full Infrastructure-as-Code deployment.',
  icon: '☁️',
  color: config.primary_color,
  tech: [
    'AWS S3',
    'AWS Lambda',
    'API Gateway',
    'DynamoDB',
    'CloudFront',
    'Cognito',
    'SNS/SQS',
    'Terraform',
  ],
},


    {
      title: 'Project Management Tool',
      description:
        'Collaborative project management platform with task tracking, team collaboration, timelines, and reporting features.',
      icon: '📊',
      color: config.accent_color,
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
    },

    {
      title: 'Personal Finance Tracker',
      description:
        'Comprehensive finance app for budgeting, expense tracking, financial goal setting, and data visualization.',
      icon: '💰',
      color: config.primary_color,
      tech: ['React Native', 'Firebase', 'Chart.js'],
    },

    // {
    //   title: 'Fitness Tracking App',
    //   description:
    //     'Mobile fitness app with workout logging, progress tracking, social sharing, and personalized exercise plans.',
    //   icon: '🏋️‍♂️',
    //   color: config.accent_color,
    //   tech: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    // },

    {
  title: 'Fitness Tracking App',
  description:
    'Cross-platform health and workout tracking mobile app with real-time activity monitoring, progress analytics, and personalized fitness plans.',
  icon: '🏃‍♂️',
  color: config.accent_color,
  tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Provider/Bloc', 'Charts'],
},


    {
      title: 'Online Learning Platform',
      description:
        'E-learning platform with course management, video streaming, quizzes, and progress tracking features.',
      icon: '🎓',
      color: config.primary_color,
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3'],
    }
  ]

  return (
    <section
      className="py-20 px-6 section-reveal"
      style={{ backgroundColor: config.background_color }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="mb-3 font-bold text-center uppercase tracking-widest"
          style={{
            fontSize: baseSize * 0.875,
            color: config.accent_color,
          }}
        >
          Featured Work
        </h2>

        <h3
          className="mb-12 font-bold text-center"
          style={{
            fontSize: baseSize * 2.25,
            color: config.text_color,
          }}
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
                style={{
                  background: `linear-gradient(135deg, ${proj.color}, ${config.accent_color})`,
                }}
              >
                <span style={{ fontSize: baseSize * 1.75 }}>{proj.icon}</span>
              </div>

              <h3
                className="font-bold mb-3"
                style={{
                  fontSize: baseSize * 1.25,
                  color: config.text_color,
                }}
              >
                {proj.title}
              </h3>

              <p
                className="mb-4"
                style={{
                  fontSize: baseSize * 0.9375,
                  color: config.text_color,
                  opacity: 0.75,
                  lineHeight: 1.6,
                }}
              >
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

// import React from 'react'
// import { useConfig } from '../components/ConfigProvider'

// export default function ProjectsSection() {
//   const { config } = useConfig()
//   const baseSize = config.font_size || 16

//   const projects = [
//     {
//       title: 'Courier Management',
//       description:
//         'Full logistics platform with delivery booking, wallet integration, live tracking, and admin analytics',
//       icon: '🚚',
//       color: config.primary_color,
//       tech: ['Next.js', 'MongoDB', 'Supabase', 'Paystack'],
//     },
//     {
//       title: 'Solar Dashboard',
//       description:
//         'IoT-based monitoring dashboard for tracking solar energy generation and battery health',
//       icon: '☀️',
//       color: config.accent_color,
//       tech: ['React', 'Node.js', 'MQTT', 'Chart.js'],
//     },
//     {
//       title: 'E-Commerce Platform',
//       description:
//         'Multi-vendor marketplace with vendor onboarding, product management, and secure payments',
//       icon: '🛒',
//       color: config.primary_color,
//       tech: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
//     },
//   ]

//   return (
//     <section
//       className="py-20 px-6 section-reveal"
//       style={{ backgroundColor: config.background_color }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2
//           className="mb-3 font-bold text-center uppercase tracking-widest"
//           style={{ fontSize: baseSize * 0.875, color: config.accent_color }}
//         >
//           Featured Work
//         </h2>
//         <h3
//           className="mb-12 font-bold text-center"
//           style={{ fontSize: baseSize * 2.25, color: config.text_color }}
//         >
//           {config.projects_heading}
//         </h3>

//         <div className="grid md:grid-cols-3 gap-6">
//           {projects.map((proj, idx) => (
//             <div
//               key={idx}
//               className="p-6 rounded-2xl glass-card gradient-border group"
//               style={{ backgroundColor: config.card_color }}
//             >
//               <div
//                 className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center"
//                 style={{ background: `linear-gradient(135deg, ${proj.color}, ${config.accent_color})` }}
//               >
//                 <span style={{ fontSize: baseSize * 1.75 }}>{proj.icon}</span>
//               </div>
//               <h3 className="font-bold mb-3" style={{ fontSize: baseSize * 1.25, color: config.text_color }}>
//                 {proj.title}
//               </h3>
//               <p className="mb-4" style={{ fontSize: baseSize * 0.9375, color: config.text_color, opacity: 0.75, lineHeight: 1.6 }}>
//                 {proj.description}
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {proj.tech.map((t, i) => (
//                   <span
//                     key={i}
//                     className="px-2 py-1 rounded"
//                     style={{
//                       backgroundColor: `${proj.color}15`,
//                       color: proj.color,
//                       fontSize: baseSize * 0.75,
//                       border: `1px solid ${proj.color}30`,
//                     }}
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

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