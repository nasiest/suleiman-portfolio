// 'use client';

// import { motion } from 'framer-motion';
// import { useConfig } from './ConfigProvider';

// export default function Summary() {
//   const { config } = useConfig();

//   return (
//     <section
//       id="summary"
//       className="py-20 px-6 md:px-10 lg:px-20 bg-bg text-white"
//       style={{
//         color: config.text_color,
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto"
//       >
//         <h2
//           className="text-4xl font-bold mb-6 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
//           style={{
//             fontFamily: config.font_family,
//             fontSize: config.font_size + 6,
//           }}
//         >
//           {config.summary_heading}
//         </h2>

//         <div
//           className="p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10"
//           style={{
//             background: config.card_color,
//           }}
//         >
//           <p
//             className="leading-relaxed text-lg"
//             style={{
//               fontSize: config.font_size,
//             }}
//           >
//             {config.summary}
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


'use client'

import { useConfig } from './ConfigProvider'

export default function Summary() {
  const { config} = useConfig()

  return (
    <section
      className="py-20 px-6 section-reveal bg-bg"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="mb-3 font-bold text-center uppercase tracking-[0.2em]"
          style={{
            fontSize: config.font_size * 0.875,
            color: config.primary_color
          }}
        >
          About Me
        </h2>

        <h3
          className="mb-10 font-bold text-center"
          style={{
            fontSize: config.font_size * 2.25,
            color: config.text_color
          }}
        >
          {config.summary_heading}
        </h3>

        <div
          className="p-8 rounded-2xl glass gradient-border"
          style={{ backgroundColor: config.card_color }}
        >
          <p
            className="leading-relaxed opacity-90"
            style={{
              fontSize: config.font_size * 1.125,
              color: config.text_color,
              lineHeight: '1.8'
            }}
          >
            Innovative and results-driven Full Stack JavaScript Software
            Engineer with over{' '}
            <span
              style={{ color: config.primary_color, fontWeight: 600 }}
            >
              6 years of experience
            </span>{' '}
            designing, developing, and deploying robust web applications.
            Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and
            TypeScript, with a proven track record of building scalable
            systems, optimizing performance, and enhancing user experience.
            Passionate about developing modern web applications, implementing
            clean architectures, and leveraging cloud technologies to solve
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  )
}


// 'use client'
// import { useConfig } from './ConfigProvider'
// export default function Summary() {
//   const { config } = useConfig()
//   return (
//     <section className="py-16 max-w-3xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-4">{config.summary_heading}</h2>
//       <p className="opacity-80">Professional summary goes here.</p>
//     </section>
//   )
// }