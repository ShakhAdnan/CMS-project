import { type NextRequest, NextResponse } from "next/server"

// Mock database for demonstration
const subscribers = new Set<string>()

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 })
    }

    // Check if email already exists
    if (subscribers.has(email)) {
      return NextResponse.json({ message: "Email already exists" }, { status: 409 })
    }

    // Add email to subscribers
    subscribers.add(email)

    console.log("New subscriber:", email)

    return NextResponse.json({ message: "Successfully subscribed" }, { status: 201 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
