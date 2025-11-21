import './globals.css'
import Script from 'next/script'
import type { ReactNode } from 'react'


export const metadata = {
title: 'Suleiman Mohammed Garba - Portfolio',
description: 'Full Stack JavaScript Software Engineer'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<head />
<body className="min-h-screen bg-bg text-white font-sans">
{/* External SDKs (kept but non-blocking) */}
<Script src="/_sdk/element_sdk.js" strategy="lazyOnload" />
<Script src="/_sdk/data_sdk.js" strategy="lazyOnload" />
{children}
</body>
</html>
)
}