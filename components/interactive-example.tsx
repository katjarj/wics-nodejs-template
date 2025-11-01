"use client"

/**
 * Interactive Component Example
 *
 * This shows how to create components with state and interactivity.
 * Note the 'use client' directive at the top - this is required for
 * components that use hooks like useState, useEffect, etc.
 */

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function InteractiveExample() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Counter Example</h3>
        <div className="flex items-center gap-4">
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <span className="text-2xl font-bold">{count}</span>
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <Button variant="outline" onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Input Example</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border border-gray-300 rounded px-4 py-2 w-full mb-2"
        />
        {text && (
          <p className="text-gray-600">
            You typed: <strong>{text}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

/**
 * Usage:
 *
 * import { InteractiveExample } from '@/components/interactive-example'
 *
 * <InteractiveExample />
 */
