"use client"
import React from "react"
import {
	Home,
	Search,
	Mail,
	BellRing,
	Bookmark,
	Brush,
	Settings,
	UserCircle2,
	Twitter,
} from "lucide-react"

export function Navbar() {
	return (
		<aside className='flex h-screen w-64 flex-col overflow-y-auto border bg-white px-5 py-8 fixed'>
			<div className='mt-6 flex flex-1 flex-col justify-between'>
				<nav className='-mx-3 space-y-6 '>
					<div className='space-y-3 '>
						<div className='flex px-2'>
							<Twitter className='h-5 w-5' aria-hidden='true' />
							<label className='text-sm font-medium text-gray-900'>
								<span className='mx-2 text-sm font-medium'>
									Twitter
								</span>
							</label>
						</div>
						<hr />
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Home className='h-5 w-5' aria-hidden='true' />
							<span className='mx-2 text-sm font-medium'>
								Home
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Search className='h-5 w-5' aria-hidden='true' />
							<span className='mx-2 text-sm font-medium'>
								Explore
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Mail className='h-5 w-5' aria-hidden='true' />
							<span className='mx-2 text-sm font-medium'>
								Notification
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<BellRing className='h-5 w-5' aria-hidden='true' />
							<span className='mx-2 text-sm font-medium'>
								Notifications
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Bookmark className='h-5 w-5' aria-hidden='true' />
							<span className='mx-2 text-sm font-medium'>
								Bookmark
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<UserCircle2
								className='h-5 w-5'
								aria-hidden='true'
							/>
							<span className='mx-2 text-sm font-medium'>
								Profile
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Brush className='h-5 w-5' aria-hidden='true' />
							<span className='mx-2 text-sm font-medium'>
								Themes
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Settings className='h-5 w-5' aria-hidden='true' />
							<span className='mx-2 text-sm font-medium'>
								Setting
							</span>
						</a>
					</div>
				</nav>
			</div>
		</aside>
	)
}
