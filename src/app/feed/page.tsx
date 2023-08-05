"use client"
import Follow from "@/components/Follow"
import { Navbar } from "@/components/Navbar"
import Post from "@/components/Post"
import Trending from "@/components/Trending"
import { Card, Button } from "@tremor/react"
import { Image } from "lucide-react"

import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const Feed = () => {
	const [tweetDetails, setTweetDetails] = useState({
		description: null,
		image: null,
	})

	const [tweets, setTweets] = useState([])
	const [reload, setReload] = useState(false)

	useEffect(() => {
		fetch("http://localhost:3000/api/tweet", { method: "GET" })
			.then(async (res) => {
				const resTweets = await res.json()
				setTweets(resTweets.reverse())
			})
			.catch((error) => console.log("error while fetching tweets", error))
	}, [reload])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log(e.target.name)
		setTweetDetails({ ...tweetDetails, [e.target.name]: e.target.value })
	}
	const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		await fetch("http://localhost:3000/api/tweet", {
			method: "POST",
			body: JSON.stringify({
				description: tweetDetails.description,
				image: tweetDetails.image,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then(() => {
				toast.success("Tweeted successfully")
				setTweetDetails({
					description: null,
					image: null,
				})
				setReload(!reload)
			})
			.catch((err) => console.log(err))
	}

	return (
		<div className='w-[76rem] m-auto'>
			<Navbar />
			<div className='flex ml-64'>
				<div className='w-[40rem]'>
					<Card className='rounded-none transition-all delay-200'>
						<Toaster />
						<div className='flex'>
							<img
								className='inline-block h-14 w-14 rounded-full'
								src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
								alt='Dan_Abromov'
							/>{" "}
							<div className='mt-4 flex'>
								<textarea
									className='min-h-min focus:border-none outline-none resize-none ml-4 leading-4 w-[24rem] p-2'
									placeholder="What's Happening...?"
									rows={1}
									name='description'
									value={tweetDetails.description || ""}
									onChange={handleChange}
								></textarea>

								<span>
									<label htmlFor={"file-upload"}>
										<Image
											className='h-5 w-5'
											aria-hidden='true'
										/>{" "}
									</label>
									<input
										id='file-upload'
										type='file'
										className='hidden'
										name='image'
										onChange={handleChange}
									></input>
								</span>
							</div>
							<Button
								size='sm'
								className='ml-6 py-0 h-10 mt-2 rounded-md'
								onClick={handleSubmit}
							>
								Tweet
							</Button>
						</div>
					</Card>
					{tweets.map((tweet, index) => {
						return <Post props={tweet} key={index} />
					})}
				</div>
				<div className='w-[20rem]'>
					<Trending />
					<Follow />
				</div>
			</div>
		</div>
	)
}

export default Feed
