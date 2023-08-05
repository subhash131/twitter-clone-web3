"use client"
import React, { useRef } from "react"
import { Card, Text, TextInput, Button } from "@tremor/react"
import Link from "next/link"
import { Toaster, toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

const Register = () => {
	const username = useRef<HTMLInputElement>(null)
	const password = useRef<HTMLInputElement>(null)
	const router = useRouter()

	const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		await fetch("http://localhost:3000/api/register", {
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
					toast.success("Registered Successfully!")
					// window.location.href = "/login"
					router.push("/login")
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
				<Text className='text-center'>Register</Text>
				{/* TODO: add validation */}
				<TextInput
					placeholder='username'
					className='rounded-lg'
					ref={username}
					autoFocus
					// error={true}
					// errorMessage='Wrong username'
				/>
				<TextInput
					placeholder='password'
					className='rounded-lg'
					ref={password}
					type='password'
				/>
				<Button
					size='md'
					className='w-1/2 mx-auto'
					onClick={handleSubmit}
				>
					Register
				</Button>
				<div className='flex'>
					<Text>Already have an account?</Text>{" "}
					<Link
						href='/login'
						className='mx-2 underline text-cyan-600'
					>
						<Text>login</Text>
					</Link>
				</div>
			</Card>
		</div>
	)
}

export default Register
