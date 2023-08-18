import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Thirdweb from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Twitter Clone",
	description: "Created By Subhash131",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<Thirdweb>{children}</Thirdweb>
			</body>
		</html>
	)
}
