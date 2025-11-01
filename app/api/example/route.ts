/**
 * Example API Route
 *
 * This shows how to create API endpoints in Next.js.
 * Access this at: http://localhost:3000/api/example
 */

import type { NextRequest } from "next/server"

// Handle GET requests
export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get("name") || "World"

  return Response.json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString(),
  })
}

// Handle POST requests
export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json()

    // Process the data (add your logic here)
    console.log("Received data:", body)

    return Response.json({
      success: true,
      received: body,
      message: "Data processed successfully",
    })
  } catch (error) {
    return Response.json({ success: false, error: "Invalid JSON" }, { status: 400 })
  }
}

/**
 * Usage Examples:
 *
 * GET request:
 * fetch('/api/example?name=Alice')
 *   .then(res => res.json())
 *   .then(data => console.log(data))
 *
 * POST request:
 * fetch('/api/example', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ key: 'value' })
 * })
 *   .then(res => res.json())
 *   .then(data => console.log(data))
 */
