import BasicHeader from "@/components/basic-header/basic-header"
import Link from "next/link"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BasicHeader />
      <main className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        {children}
      </main>
    </>
  )
}