import { NextResponse } from "next/server"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "")
  return digitsOnly.length >= 7 && digitsOnly.length <= 15
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    const { firstName, lastName, email, phone, service, budget, message } = data

    if (!firstName || firstName.length <= 2) {
      return NextResponse.json(
        { error: "First name must be more than 2 characters" },
        { status: 400 }
      )
    }

    if (!lastName || lastName.length <= 1) {
      return NextResponse.json(
        { error: "Last name must be more than 1 character" },
        { status: 400 }
      )
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    if (!phone || !validatePhone(phone)) {
      return NextResponse.json(
        { error: "Phone number must be between 7 and 15 digits" },
        { status: 400 }
      )
    }

    if (!service) {
      return NextResponse.json(
        { error: "Please select a service" },
        { status: 400 }
      )
    }

    if (!budget) {
      return NextResponse.json(
        { error: "Please select a budget range" },
        { status: 400 }
      )
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const { data: emailData, error: emailError } = await resend.emails.send({
    //   from: 'Contact Form <contact@nestspace.com>',
    //   to: ['hello@nestspace.com'],
    //   subject: `New Inquiry from ${firstName} ${lastName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // })

    // TODO: Save to database if needed
    // await db.contact.create({ data: { ... } })

    console.log("Contact form submission received:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      service,
      budget,
      message: message.substring(0, 100) + "..."
    })

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry! We will get back to you within 24 hours."
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
