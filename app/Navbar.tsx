import React from 'react'
//link
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex'>
            <Link href='/'>Logo</Link>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/issues'>Issues</Link>
                </li>
                <li>
                    <Link href='about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
