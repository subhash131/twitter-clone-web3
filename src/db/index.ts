import mongoose from "mongoose"

export const connectToDb = async () => {
	await mongoose.connect(process.env.MONGO_URL || "")
	
	mongoose.connection.on("connected", () => {
		console.log("Connected to MongoDB")
	})

	mongoose.connection.on("error", (err) => {
		console.log("Error connecting to MongoDB:", err)
	})

	mongoose.connection.on("disconnected", () => {
		console.log("Disconnected from MongoDB")
	})
}

export const closeDbConnection = () => {
	mongoose.connection.close()
}
