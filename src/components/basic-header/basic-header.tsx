"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BasicHeader() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Poems", href: "/poems" },
    { name: "Stories", href: "/stories" },
    { name: "Authors", href: "/authors" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-xl font-bold">
          Vadhyan
        </h1>

        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  )
}