import { connectToDb } from "@/db"
import { createPost, getPosts } from "@/db/models/postModel"
import { UserModel } from "@/db/models/userModel"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
	connectToDb()
	const posts = await getPosts()

	return NextResponse.json(posts)
}

export const POST = async (req: NextRequest) => {
	connectToDb()
	const user = cookies().get("TWITTER-CLONE-USER")
	if (!user) {
		return NextResponse.json(
			{ message: "User not logged in" },
			{ status: 400 }
		)
	}

	const { description, image } = await req.json()
	const userObject = await UserModel.findOne({ username: user?.value })
	const post = await createPost(description, image || "", userObject?._id)
	await UserModel.findByIdAndUpdate(
		userObject?._id,
		{
			$push: { posts: post._id },
		},
		{ new: false, upsert: true }
	)
	return NextResponse.json(post)
}
