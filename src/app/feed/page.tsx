"use client"
import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Navbar } from "@/components/Navbar"
import Post from "@/components/Post"
import { Card } from "@tremor/react"

import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import { Web3Button } from "@thirdweb-dev/react"
import Trending from "@/components/Trending"

const Feed = () => {
	const sdk = new ThirdwebSDK("mumbai", {
		clientId: process.env.THIRDWEB_CLIENT_ID,
	})
	const [tweetDetails, setTweetDetails] = useState({
		description: null,
		image: null,
	})

	const [tweets, setTweets] = useState([])
	const [reload, setReload] = useState(false)

	const getTweets = async () => {
		await sdk
			.getContract("0xB3E50D668587c1666B0880FAEc01782aaFF38129")
			.then(async (res) => {
				const data = await res.call("getAllTweets", [])
				setTweets(data)
			})
	}

	useEffect(() => {
		getTweets()
	}, [reload])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setTweetDetails({ ...tweetDetails, [e.target.name]: e.target.value })
	}
	const handleSubmit = async (contract: any) => {
		// console.log("submit", tweetDetails)
		if (
			tweetDetails.description === null ||
			tweetDetails.description === ""
		) {
			toast.error("Please write something")
			return
		}
		await contract
			.call("postTweet", [tweetDetails.description, ""])
			.then(() => {
				toast.success("Tweeted successfully")
				setTweetDetails({
					description: null,
					image: null,
				})
				setReload(!reload)
			})
			.catch((err: Error) => console.log(err))
	}

	return (
		<div className='w-[76rem] m-auto'>
			<Navbar />
			<div className='flex ml-64'>
				<div className='w-[40rem] top-2'>
					<Card className='rounded-none transition-all delay-200 sticky top-0 z-10'>
						<Toaster />
						<div className='flex'>
							<img
								className='inline-block h-14 w-14 rounded-full'
								src='https://img.freepik.com/premium-vector/fancy-colorful-lion-head-logo-vector_648489-69.jpg?w=2000'
								alt='profile image'
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
							</div>
							<Web3Button
								contractAddress='0xB3E50D668587c1666B0880FAEc01782aaFF38129' // Your smart contract address
								action={async (contract: any) => {
									await handleSubmit(contract)
								}}
								theme='light'
							>
								Tweet
							</Web3Button>
						</div>
					</Card>
					{[...tweets].reverse().map((tweet, index) => {
						return <Post props={tweet} key={index} />
					})}
				</div>
				<div className='w-[20rem]'>
					<Trending />
				</div>
			</div>
		</div>
	)
}

export default Feed
