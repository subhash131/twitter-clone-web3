import React from "react"
import { Card, Text } from "@tremor/react"
import { Eye, Heart, MessageCircle, Repeat2, Upload } from "lucide-react"

const Post = ({ props }: any) => {
	const { description, user } = props

	return (
		<Card className='rounded-none'>
			<div className='flex gap-4 flex-col'>
				<div className='flex'>
					<img
						className='inline-block h-12 w-12 rounded-full'
						src='https://img.freepik.com/premium-vector/fancy-colorful-lion-head-logo-vector_648489-69.jpg?w=2000'
						alt='profile image'
					/>
					<div className='ml-6'>
						<label className='text-[0.7rem] text-[grey]'>
							{user.substring(0, 8)}...
							{user.substring(user.length - 5)}
						</label>
						<Text className='py-2 text-gray-950'>
							{description}
						</Text>
					</div>
				</div>
				<div className='px-4 mx-auto'></div>
				<div className='flex gap-12 mx-auto '>
					<div className='flex gap-2'>
						<MessageCircle
							className='h-5 w-5 text-gray-500'
							aria-hidden='true'
						/>{" "}
						<Text>773</Text>
					</div>
					<div className='flex gap-2'>
						<Heart
							className='h-5 w-5 text-gray-500'
							aria-hidden='true'
						/>
						<Text>1773</Text>
					</div>

					<div className='flex gap-2'>
						<Repeat2
							className='h-5 w-5 text-gray-500'
							aria-hidden='true'
						/>{" "}
						<Text>73</Text>
					</div>
					<div className='flex gap-2'>
						<Eye
							className='h-5 w-5 text-gray-500'
							aria-hidden='true'
						/>{" "}
						<Text>2987</Text>
					</div>
					<div className='flex gap-2'>
						<Upload
							className='h-5 w-5 text-gray-500'
							aria-hidden='true'
						/>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default Post
