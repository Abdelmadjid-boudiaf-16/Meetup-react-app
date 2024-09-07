import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full bg-blue-200/40">
      <div className="container mx-auto xl:w-4/5 px-2 md:px-0">
        <div className="flex flex-col gap-4 items-center lg:flex-row justify-between py-4">
          <div>
            <Link to="/" className="text-4xl font-bold text-primary-hover">
              React Meetup
            </Link>
          </div>
          <nav className="flex items-center justify-around lg:justify-end">
            <NavBar />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
