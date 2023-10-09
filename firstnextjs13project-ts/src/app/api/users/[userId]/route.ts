import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json()

    const {searchParams} = new URL(request.url)
    console.log(searchParams.get('name'))
    return NextResponse.json({
        data: data,
        name: searchParams.get('name'),
    })
}