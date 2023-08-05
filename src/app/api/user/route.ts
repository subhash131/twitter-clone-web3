import { connectToDb } from "@/db"
import { getUsers } from "@/db/models/userModel"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
	await connectToDb()
	const users = await getUsers()

	return NextResponse.json({ users }, { status: 200 })
}
