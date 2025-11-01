# Hackathon Boilerplate - Next.js + Tailwind CSS

A ready-to-use boilerplate for hackathon projects using Next.js (Node.js framework) and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd hackathon-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your app!

## 📁 Project Structure

```
hackathon-boilerplate/
├── app/                    # Application pages and routes
│   ├── page.tsx           # Home page (/)
│   ├── about/             # About page (/about)
│   ├── layout.tsx         # Root layout (wraps all pages)
│   └── globals.css        # Global styles + Tailwind config
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── navbar.tsx        # Example navigation component
├── lib/                   # Utility functions and helpers
│   └── utils.ts          # Helper functions
├── public/               # Static files (images, fonts, etc.)
└── README.md             # This file!
```

## 🎨 Using Tailwind CSS

Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS, you use pre-built classes.

### Basic Examples

```tsx
// Button with Tailwind classes
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Click Me
</button>

// Card layout
<div className="bg-white shadow-lg rounded-lg p-6">
  <h2 className="text-2xl font-bold mb-4">Card Title</h2>
  <p className="text-gray-600">Card content goes here</p>
</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items will be 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### Common Tailwind Classes

- **Spacing**: `p-4` (padding), `m-4` (margin), `gap-4` (gap)
- **Colors**: `bg-blue-500`, `text-red-600`, `border-gray-300`
- **Typography**: `text-xl`, `font-bold`, `text-center`
- **Layout**: `flex`, `grid`, `items-center`, `justify-between`
- **Responsive**: `md:text-lg`, `lg:grid-cols-3` (prefix with breakpoint)

[Full Tailwind Documentation](https://tailwindcss.com/docs)

## 🛠️ Building Your Web App

### 1. Creating New Pages

Create a new folder in the `app/` directory:

```tsx
// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className="mt-4">List your projects here!</p>
    </div>
  )
}
```

This automatically creates a route at `/projects`

### 2. Creating Components

Create reusable components in the `components/` folder:

```tsx
// components/project-card.tsx
export function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  )
}
```

Use it in your pages:

```tsx
import { ProjectCard } from '@/components/project-card'

export default function Page() {
  return <ProjectCard title="My Project" description="Description here" />
}
```

### 3. Adding Interactivity

Use React hooks for interactive features:

```tsx
'use client' // Add this for client-side interactivity

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  )
}
```

### 4. Fetching Data

Fetch data from APIs:

```tsx
// Server Component (default)
export default async function DataPage() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
  
  return <div>{/* Display your data */}</div>
}

// Client Component
'use client'
import { useEffect, useState } from 'react'

export default function ClientDataPage() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  return <div>{/* Display your data */}</div>
}
```

### 5. Adding API Routes

Create API endpoints in `app/api/`:

```tsx
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Hello from API!' })
}

export async function POST(request: Request) {
  const body = await request.json()
  // Process the data
  return Response.json({ success: true })
}
```

Access at: `http://localhost:3000/api/hello`

## 🎯 Hackathon Tips

1. **Start Simple**: Get a basic version working first, then add features
2. **Use Components**: Break your UI into reusable components
3. **Mobile First**: Design for mobile, then enhance for desktop
4. **Git Commits**: Commit often with clear messages
5. **Environment Variables**: Use `.env.local` for API keys (never commit this file!)

## Adding Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_KEY=your_api_key_here
DATABASE_URL=your_database_url
```

Use in your code:

```tsx
const apiKey = process.env.NEXT_PUBLIC_API_KEY // Client-side
const dbUrl = process.env.DATABASE_URL // Server-side only
```

## 📦 Useful Packages

Install additional packages as needed:

```bash
### Icons
npm install lucide-react

### Forms
npm install react-hook-form

### HTTP requests
npm install axios

### Date handling
npm install date-fns
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Your app will be live in minutes!

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🆘 Common Issues

**Port already in use?**
```bash
### Kill the process on port 3000
npx kill-port 3000
```

**Styles not updating?**
```bash
### Clear Next.js cache
rm -rf .next
npm run dev
```

**Module not found?**
```bash
### Reinstall dependencies
rm -rf node_modules
npm install
```

## 🎉 Good Luck!

You're all set! Start building your amazing hackathon project. Remember:
- **Build fast, iterate faster**
- **Focus on core features first**
- **Don't be afraid to ask for help**
- **Have fun!**

Happy hacking! 🚀
