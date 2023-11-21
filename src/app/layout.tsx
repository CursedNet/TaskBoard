import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Octokit} from "octokit";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'TaskBoard',
  description: 'Team CursedNet',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
