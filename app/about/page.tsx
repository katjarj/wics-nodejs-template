import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-6">About This Boilerplate</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">What's Included?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  <strong>Next.js 16</strong> - The latest version with App Router
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  <strong>Tailwind CSS v4</strong> - Utility-first styling
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  <strong>TypeScript</strong> - Type safety and better DX
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  <strong>shadcn/ui Components</strong> - Beautiful, accessible UI components
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  <strong>Example Pages & Components</strong> - Learn by example
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Use This</h2>
            <ol className="space-y-4 text-gray-700 list-decimal list-inside">
              <li>
                <strong>Explore the code</strong> - Check out the files in{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">app/</code> and{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">components/</code>
              </li>
              <li>
                <strong>Modify the home page</strong> - Edit{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">app/page.tsx</code> to make it your own
              </li>
              <li>
                <strong>Add new pages</strong> - Create folders in{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">app/</code> for new routes
              </li>
              <li>
                <strong>Build components</strong> - Create reusable components in{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">components/</code>
              </li>
              <li>
                <strong>Style with Tailwind</strong> - Use utility classes for quick styling
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Need Help?</h2>
            <p className="text-blue-800 mb-4">
              Check out the comprehensive README.md file in the root directory for detailed instructions, examples, and
              troubleshooting tips.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button variant="outline" asChild>
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                  Next.js Docs
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
                  Tailwind Docs
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
