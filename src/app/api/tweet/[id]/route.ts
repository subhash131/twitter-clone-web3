import { connectToDb } from "@/db"
import { PostModel } from "@/db/models/postModel"
import { NextRequest, NextResponse } from "next/server"

export const DELETE = async (req: NextRequest) => {
	await connectToDb()
	const url = req.nextUrl.pathname.split("/")
	const id = url[url.length - 1]
	const tweet = await PostModel.findByIdAndDelete(id)
	return NextResponse.json({ deletedTweet: tweet }, { status: 200 })
}

export const GET = async (req: NextRequest) => {
	await connectToDb()
	const nextu = req.nextUrl.pathname.split("/")
	const id = nextu[nextu.length - 1]
	const tweet = await PostModel.findById(id)
	return NextResponse.json(tweet)
}
