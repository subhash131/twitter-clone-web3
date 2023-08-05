import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	posts: [
		{
			type: Schema.Types.ObjectId,
			ref: "Post",
		},
	],
})

export const UserModel =
	mongoose.models.User || mongoose.model("User", UserSchema)
export const getUsers = () => UserModel.find()

export const getUserByUsername = (username: string) =>
	UserModel.findOne({ username })

export const getUserById = (id: string) => UserModel.findById({ _id: id })

export const addUser = (values: Record<string, any>) => {
	return UserModel.create(values)
}
export const deleteUserById = (id: string) =>
	UserModel.findByIdAndDelete({ _id: id })
