import type { Metadata } from "next"
import { Inter, Baloo_2 } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import DynamicTitle from "@/components/dynamic-title"

export const metadata: Metadata = {
  title: "Akash Singh",
  description: "Personal website",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const baloo = Baloo_2({ subsets: ["latin", "devanagari"], variable: "--font-baloo" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${baloo.variable} antialiased`}>
      <body className="font-sans min-h-screen flex flex-col">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4 mx-auto"></div>
                  <p className="text-gray-700 text-lg font-medium">Loading, please wait...</p>
                </div>
              </div>
            }
          >
          <DynamicTitle />
          <SiteHeader className="pt-2 pb-4" />
          <main className="flex-1 px-4 pt-12">{children}</main>
          <SiteFooter className="mt-auto" />
        </Suspense>
      </body>
    </html>
  )
}
