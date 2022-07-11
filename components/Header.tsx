import {BellIcon, SearchIcon, UserIcon} from "@heroicons/react/solid"
import Link from 'next/link'
import { useEffect, useState } from 'react'


function Header() {
    
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
    <header className={`${isScrolled && 'bg-gradient-to-b from-transparent to-transparent '}`}>
        <div className="flex items-center space-x-2 md:space-x-10 topBar">
            <img
                src='/images/logo.png'
                width={120}
                height={100}
                className="cursor-pointer object-contain"
                />                    
        <div className="flex items-center space-x-4 text-sm fontl float-right">                                           
        </div>

        <Link href="/">
                <a href="#" className="h-6 w-6 md:hidden homeTab cursor-pointer" >Home</a>
            </Link>  
            
            <ul className="hidden space-x-4 md:flex">
                <li className="hidden space-x-4 sm:flex headerLink">Home</li>
                <li className="headerLink">TV</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">Sports</li>
                <li className="headerLink">News</li>
                <li className="headerLink">My Stuff</li>
                <li className="headerLink">Hubs</li>
            </ul>
        </div>
        <div>
        <SearchIcon className="hidden h-6 w-6 sm:inline"/>
        <Link href="/account">
                <UserIcon className="h-6 w-6 md:items-center cursor-pointer float-right"  />
            </Link>
        </div>           
       
    </header>
    )
}

export default Header