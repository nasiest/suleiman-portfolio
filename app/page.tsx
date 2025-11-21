'use client'
import ConfigProvider from '../components/ConfigProvider'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import CTA from '../components/CTA'
import { defaultConfig } from './config'


export default function Page() {
return (
<ConfigProvider initialConfig={defaultConfig}>
<main className="min-h-screen">
<Hero />
<Summary />
<Skills />
<Experience />
<Projects />
<Education />
<CTA />
</main>
</ConfigProvider>
)
}

// 'use client'
// import ConfigProvider from '@/components/ConfigProvider'
// import Hero from '@/components/Hero'
// import Summary from '@/components/Summary'
// import Skills from '@/components/Skills'
// import Experience from '@/components/Experience'
// import Projects from '@/components/Projects'
// import Education from '@/components/Education'
// import CTA from '@/components/CTA'
// import { defaultConfig } from './config'

// export default function Page() {
//   return (
//     <ConfigProvider initialConfig={defaultConfig}>
//       <main className="min-h-screen">
//         <Hero />
//         <Summary />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Education />
//         <CTA />
//       </main>
//     </ConfigProvider>
//   )
// }