import mongoose, { Schema } from "mongoose"

const postSchema = new Schema({
	description: { type: String, required: true },
	image: { type: String },
	owner: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now },
	likes: { type: Array<Schema.Types.ObjectId> },
})

export const PostModel =
	mongoose.models.Post || mongoose.model("Post", postSchema)

export const createPost = async (
	description: string,
	image: string,
	owner: Schema.Types.ObjectId
) => {
	{
		return await PostModel.create({
			description,
			image,
			owner,
			likes: [],
		})
	}
}

export const getPosts = () => {
	return PostModel.find()
}

export const deletePostById = (id: string) => {
	return PostModel.findByIdAndDelete({ _id: id })
}
