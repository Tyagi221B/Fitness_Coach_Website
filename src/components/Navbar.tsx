import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<Link href={"/profile"}>

			<button className='fixed rounded-full right-5 top-5 text-black bg-yellow-500 cursor-pointer p-2 z-50'> Profile </button>
		</Link>
	)
}

export default Navbar