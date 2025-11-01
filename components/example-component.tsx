import type React from "react"
/**
 * Example Component
 *
 * This is a sample component to show you how to create reusable components.
 * Copy this pattern to create your own components!
 */

interface ExampleComponentProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function ExampleComponent({ title, description, children }: ExampleComponentProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

/**
 * Usage Example:
 *
 * import { ExampleComponent } from '@/components/example-component'
 *
 * <ExampleComponent
 *   title="My Component"
 *   description="This is a description"
 * >
 *   <p>Child content goes here</p>
 * </ExampleComponent>
 */
