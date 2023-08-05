import { connectToDb } from "@/db"
import { UserModel, addUser } from "@/db/models/userModel"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
	await connectToDb()
	const { username, password } = await req.json()
	const usernameExists = await UserModel.findOne({ username })

	if (usernameExists) {
		return NextResponse.json(
			{
				message: "Username already exist! Try another name",
			},
			{ status: 400 }
		)
	}
	const user = await addUser({ username, password })
	return NextResponse.json(user)
}
