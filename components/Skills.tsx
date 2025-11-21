'use client'

import { useConfig } from './ConfigProvider'

const skillGroups = [
  {
    title: 'Frontend',
    icon: '⚛️',
    colorKey: 'primaryColor',
    skills: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'Tailwind', 'Framer']
  },
  {
    title: 'Backend',
    icon: '⚙️',
    colorKey: 'accentColor',
    skills: ['Node.js', 'Express', 'NestJS', 'REST', 'GraphQL', 'WebSockets']
  },
  {
    title: 'Database',
    icon: '💾',
    colorKey: 'primaryColor',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase']
  },
  {
    title: 'DevOps',
    icon: '🛠️',
    colorKey: 'accentColor',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Nginx', 'Jest']
  }
]

export default function Skills() {
  const { config} = useConfig()

  return (
    <section
      className="py-20 px-6 section-reveal bg-bg"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="mb-3 font-bold text-center uppercase tracking-[0.2em]"
          style={{
            fontSize: config.font_size * 0.875,
            color: config.accent_color
          }}
        >
          Technologies
        </h2>

        <h3
          className="mb-12 font-bold text-center"
          style={{
            fontSize: config.font_size * 2.25,
            color: config.text_color
          }}
        >
          {config.skills_heading}
        </h3>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ title, icon, colorKey, skills }, idx) => {
            const color = config[colorKey]

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass gradient-border"
                style={{ backgroundColor: config.card_color }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${config.primary_color}30, ${config.accent_color}30)`
                  }}
                >
                  <span style={{ fontSize: config.font_size * 1.5 }}>{icon}</span>
                </div>

                {/* Title */}
                <h3
                  className="mb-4 font-semibold"
                  style={{
                    fontSize: config.font_size * 1.25,
                    color: color
                  }}
                >
                  {title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((item, i) => (
                    <span
                      key={i}
                      className="skill-pill px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: `${color}15`,
                        border: `1px solid ${color}30`,
                        color: config.text_color,
                        fontSize: config.font_size * 0.8125
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


// 'use client'
// import { useConfig } from './ConfigProvider'
// export default function Skills() {
//   const { config } = useConfig()
//   return (
//     <section className="py-16 max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-4">{config.skills_heading}</h2>
//       <p className="opacity-80">Skill list goes here.</p>
//     </section>
//   )
// }