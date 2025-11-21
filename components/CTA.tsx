'use client'
import { useConfig } from './ConfigProvider'
export default function CTA() {
  const { config } = useConfig()
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Let's Build Something Extraordinary</h2>
      <a className="px-8 py-4 bg-blue-600 text-white rounded-xl" href={`mailto:${config.email}`}>{config.cta_button}</a>
    </section>
  )
}