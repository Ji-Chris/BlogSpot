"use client"
import { useState } from "react"

type Props = {
  sections: string[]
}

export default function TableOfContents({ sections }: Props) {
  const [open, setOpen] = useState(false)

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm mb-8">
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            aria-expanded={open}
          >
            <span className="text-lg font-semibold text-gray-800">Table of Contents</span>
            <svg
              className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="border-t border-gray-100 px-5 py-4">
              <ol className="space-y-2 list-decimal list-inside">
                {sections.map((section, index) => (
                  <li key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                    {section}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
    )
}