"use client"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import React from "react"

const Thirdweb = ({ children }: React.PropsWithChildren) => {
	return <ThirdwebProvider activeChain='mumbai'>{children}</ThirdwebProvider>
}

export default Thirdweb
