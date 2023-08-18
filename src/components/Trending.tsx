import React from "react"
import { Card, Text } from "@tremor/react"
import Link from "next/link"

const Trending = () => {
	const techStack = [
		"Next js",
		"typescript",
		"tremor",
		"ethers",
		"thirdweb",
		"lucide-react",
		"tailwindcss",
		"react-hot-toast",
	]
	return (
		<Card className='sticky top-0'>
			<Text className='text-xl text-black'>Tech Stack</Text>
			<hr />
			{techStack.map((item, index) => {
				return (
					<Text className='my-2 text-[#4B5563]' key={index}>
						#{item}
					</Text>
				)
			})}

			<hr />
			<div className='py-2 '>
				<Text className='mb-2 text-[#4B5563]'>
					Don't have metamask?{" "}
					<Link
						href='https://metamask.io/download/'
						className='underline'
						target='_blank'
					>
						click here
					</Link>
				</Text>
				<Text className='text-[#4B5563]'>
					Insufficient funds?{" "}
					<Link
						href='https://faucet.polygon.technology/'
						className='underline'
						target='_blank'
					>
						click here
					</Link>
				</Text>
			</div>
		</Card>
	)
}

export default Trending
