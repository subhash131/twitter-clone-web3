import { connectToDb } from "@/db"
import { UserModel } from "@/db/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export const POST = async (req: NextRequest) => {
	connectToDb()
	const { username, password } = await req.json()
	const user = await UserModel.findOne({ username: username })
	if (!user) {
		return NextResponse.json(
			{ message: "Username Not Found" },
			{ status: 404 }
		)
	}
	if (password !== user.password) {
		return NextResponse.json(
			{ message: "Invalid Password" },
			{ status: 403 }
		)
	} else {
		cookies().set("TWITTER-CLONE-USER", username)
		return NextResponse.json(
			{ message: "user authenticated" },
			{ status: 200 }
		)
	}
}
