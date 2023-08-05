"use client"
import React, { useRef } from "react"
import { Card, Text, TextInput, Button } from "@tremor/react"
import Link from "next/link"
import { toast, Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"

const Login = () => {
	const username = useRef<HTMLInputElement>(null)
	const password = useRef<HTMLInputElement>(null)
	const router = useRouter()

	const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		await fetch("http://localhost:3000/api/login", {
			method: "POST",
			body: JSON.stringify({
				username: username.current?.value,
				password: password.current?.value,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then(async (res) => {
				const resBody = await res.json()
				if (res.status == 200) {
					toast.success("login Successful!")
					router.push("/")
				} else {
					toast.error(resBody.message)
				}
			})
			.catch((e) => {
				console.log(e)
			})
	}
	return (
		<div className='h-screen content-center bg-blue-50  grid'>
			<Toaster position='top-center' reverseOrder={false} />
			<Card className='max-w-lg mx-auto min-h-[50vh] content-center grid place-content-center gap-y-6'>
				<Text className='text-center'>Login</Text>
				{/* TODO: add validation */}
				<TextInput
					placeholder='username'
					className=''
					ref={username}
					required
					// error={true}
					// errorMessage='Wrong username'
				/>
				<TextInput
					placeholder='password'
					className=''
					ref={password}
					required
					type='password'
					// error={true}
					// errorMessage='Wrong username'
				/>
				<Button
					size='md'
					className='w-1/2 mx-auto tremor-small'
					onClick={handleSubmit}
				>
					Login
				</Button>
				<div className='flex'>
					<Text>Don't have an account?</Text>{" "}
					<Link
						href='/register'
						className='mx-2 underline text-cyan-600'
					>
						<Text>Register</Text>
					</Link>
				</div>
			</Card>
		</div>
	)
}

export default Login
