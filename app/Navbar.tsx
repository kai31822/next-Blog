'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
//link
import Link from 'next/link'


const Navbar = () => {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Issues', href: '/issues' },
        { label: 'About', href: '/about' }
    ]
    const currentPath = usePathname()

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href='/'>Logo</Link>
            <div className="flex justify-between w-full">
                <ul className='flex space-x-6 '>
                    {links.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className={classNames({
                                'text-teal-500': link.href === currentPath,
                                'text-zinc-500': link.href !== currentPath,
                                'hover:text-lime-500 transition-colors': true
                            })}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
