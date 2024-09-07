import React from 'react'
import { Link } from 'react-router-dom'

// simple error page 

const Error = () => {
  return (
    <div className='container mx-auto xl:w-3/4 my-10 flex flex-col gap-16'>
      <h1>Page Not Found 404 :(</h1>
      <div className="rounded-md bg-background p-2 transition-all duration-500 hover:translate-x-1 w-fit">
        <Link
          to="/"
          className="p-2 text-primary transition-all duration-500 hover:text-primary-hover"
        >
          Home
        </Link>
      </div>
    </div>
  )
}

export default Error
