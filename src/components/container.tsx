import type React from "react"
export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[55rem] px-4 pb-16">{children}</div>
}
