import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Hackathon Boilerplate</h1>
          <p className="text-xl text-gray-600 mb-8">
            A ready-to-use Next.js + Tailwind CSS starter for your next hackathon project. Start building amazing things
            in minutes!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/about">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                View Docs
              </a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            title="⚡ Fast Setup"
            description="Get started in seconds with npm install and npm run dev. No complex configuration needed."
          />
          <FeatureCard
            title="🎨 Tailwind CSS"
            description="Beautiful, responsive designs with utility-first CSS. No need to write custom stylesheets."
          />
          <FeatureCard
            title="🚀 Next.js Power"
            description="Full-stack framework with API routes, server components, and optimized performance."
          />
          <FeatureCard
            title="📱 Mobile First"
            description="Responsive by default. Your app looks great on all devices out of the box."
          />
          <FeatureCard
            title="🔧 Developer Friendly"
            description="Hot reload, TypeScript support, and excellent error messages for fast development."
          />
          <FeatureCard
            title="☁️ Easy Deploy"
            description="Deploy to Vercel with one click. Your app goes live in minutes, not hours."
          />
        </div>

        {/* Quick Start Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Start</h2>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm">
            <div className="mb-2">
              <span className="text-gray-500"># Install dependencies</span>
            </div>
            <div className="mb-4">npm install</div>
            <div className="mb-2">
              <span className="text-gray-500"># Start development server</span>
            </div>
            <div className="mb-4">npm run dev</div>
            <div className="text-green-400">✓ Ready on http://localhost:3000</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
