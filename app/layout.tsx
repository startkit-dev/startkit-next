import "./globals.css"
import { Inter } from "@next/font/google"
import clsx from "clsx"
import { NextSeo } from "next-seo"

import Analytics from "components/layout/Analytics"

import type { ReactNode } from "react"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={clsx(inter.variable, "bg-gray-50")}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/*
          The absolute defaults for NextSEO are defined here. Nothing defined in
          here is overwritten later.
        */}
        <NextSeo
          useAppDir={true}
          themeColor="#c026d3"
          titleTemplate="%s | StartKit"
        />
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  )
}
