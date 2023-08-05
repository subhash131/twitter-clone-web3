import React from "react"
import { Card, Text } from "@tremor/react"
import { Eye, Heart, MessageCircle, Repeat2, Upload } from "lucide-react"

const Post = ({ props }: any) => {
	const { description, image, _id } = props

	return (
		<Card className='rounded-none'>
			<div className='flex gap-4 flex-col'>
				<div className='flex'>
					<img
						className='inline-block h-12 w-12 rounded-full'
						src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
						alt='Dan_Abromov'
					/>
					<div className='ml-6'>
						<label className='text-[0.7rem] text-[grey]'>
							{_id}
						</label>
						<Text className='py-2 text-[gray]'>{description}</Text>
					</div>
				</div>
				<div className='px-4 mx-auto'>
					{/* <img
						className='inline-block h-[30rem]  w-auto object-cover rounded mx-auto'
						src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
						alt='Dan_Abromov'
					/> */}
				</div>
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
