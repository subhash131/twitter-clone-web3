import { connectToDb } from "@/db"
import { deleteUserById, getUserById } from "@/db/models/userModel"
import { NextRequest, NextResponse } from "next/server"

export const DELETE = async (req: NextRequest) => {
	await connectToDb()
	const nextu = await req.nextUrl.pathname.split("/")
	const id = nextu[nextu.length - 1]
	const user = await deleteUserById(id)
	return NextResponse.json({ deletedUser: user }, { status: 200 })
}

export const GET = async (req: NextRequest) => {
	await connectToDb()
	const nextu = await req.nextUrl.pathname.split("/")
	const id = nextu[nextu.length - 1]
	const user = await getUserById(id)
	return NextResponse.json(user)
}
