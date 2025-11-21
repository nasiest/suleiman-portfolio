'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { defaultConfig as defaultCfg } from '../app/config'


type Config = typeof defaultCfg


const ConfigContext = createContext<{ config: Config; setConfig: (c: Partial<Config>) => void }>({ config: defaultCfg, setConfig: () => {} })


export function useConfig() {
return useContext(ConfigContext)
}


export default function ConfigProvider({ children, initialConfig }: { children: ReactNode; initialConfig: Config }) {
const [config, setConfigState] = useState<Config>(initialConfig)


useEffect(() => {
// expose a setter to window for debugging
(window as any).__setPortfolioConfig = (partial: Partial<Config>) => {
setConfigState(prev => ({ ...prev, ...partial }))
}


// elementSdk integration
const elSdk = (window as any).elementSdk
if (elSdk && elSdk.init) {
elSdk.init({
defaultConfig: initialConfig,
onConfigChange: (newConfig: any) => {
setConfigState(prev => ({ ...prev, ...newConfig }))
},
mapToCapabilities: (cfg: any) => ({
recolorables: [
{ get: () => cfg.background_color, set: (v: string) => elSdk.setConfig({ background_color: v }) },
{ get: () => cfg.card_color, set: (v: string) => elSdk.setConfig({ card_color: v }) },
{ get: () => cfg.text_color, set: (v: string) => elSdk.setConfig({ text_color: v }) },
{ get: () => cfg.primary_color, set: (v: string) => elSdk.setConfig({ primary_color: v }) },
{ get: () => cfg.accent_color, set: (v: string) => elSdk.setConfig({ accent_color: v }) }
],
borderables: [],
fontEditable: { get: () => cfg.font_family, set: (v: string) => elSdk.setConfig({ font_family: v }) },
fontSizeable: { get: () => cfg.font_size, set: (v: number) => elSdk.setConfig({ font_size: v }) }
}),
mapToEditPanelValues: (cfg: any) => new Map([
['name', cfg.name], ['title', cfg.title], ['location', cfg.location], ['email', cfg.email], ['phone', cfg.phone], ['linkedin', cfg.linkedin], ['github', cfg.github],
['summary_heading', cfg.summary_heading], ['skills_heading', cfg.skills_heading], ['experience_heading', cfg.experience_heading], ['education_heading', cfg.education_heading], ['projects_heading', cfg.projects_heading], ['cta_button', cfg.cta_button]
])
})
}
}, [initialConfig])


function setConfig(partial: Partial<Config>) {
setConfigState(prev => ({ ...prev, ...partial }))
if ((window as any).elementSdk && (window as any).elementSdk.setConfig) {
(window as any).elementSdk.setConfig(partial)
}
}


return (
<ConfigContext.Provider value={{ config, setConfig }}>
{children}
</ConfigContext.Provider>
)
}

// 'use client'
// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { defaultConfig as defaultCfg } from '@/app/config'

// type Config = typeof defaultCfg

// const ConfigContext = createContext<{ config: Config; setConfig: (c: Partial<Config>) => void }>({ config: defaultCfg, setConfig: () => {} })

// export function useConfig() {
//   return useContext(ConfigContext)
// }

// export default function ConfigProvider({ children, initialConfig }: any) {
//   const [config, setConfigState] = useState(initialConfig)

//   useEffect(() => {
//     const el = window.elementSdk
//     if (el && el.init) {
//       el.init({
//         defaultConfig: initialConfig,
//         onConfigChange: (newConfig: any) => setConfigState((p: any) => ({ ...p, ...newConfig })),
//         mapToCapabilities: () => ({}),
//         mapToEditPanelValues: () => new Map()
//       })
//     }
//   }, [initialConfig])

//   function setConfig(partial: any) {
//     setConfigState((prev: any) => ({ ...prev, ...partial }))
//     if (window.elementSdk?.setConfig) window.elementSdk.setConfig(partial)
//   }

//   return <ConfigContext.Provider value={{ config, setConfig }}>{children}</ConfigContext.Provider>
// }