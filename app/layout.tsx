import "./globals.css"
import { Inter } from "@next/font/google"
import clsx from "clsx"

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
      <head />
      <body>{children}</body>
    </html>
  )
}
