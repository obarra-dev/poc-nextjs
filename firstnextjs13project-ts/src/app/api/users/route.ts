import { NextResponse } from "next/server"

export async function GET() {
    console.log(process.env.TOKEN)
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data)
}

export async function POST(request) {
    const {name} = await request.json()

    return NextResponse.json({
        message: `this is a post, name from client: ${name}`
    })
}

export function PUT() {
    return NextResponse.json({
        message: "this is a put"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "this is a delete"
    })
}

