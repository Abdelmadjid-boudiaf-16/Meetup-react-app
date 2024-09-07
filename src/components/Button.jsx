import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      className="my-5 flex w-fit items-center justify-center rounded-full bg-black px-4 py-2 text-lg font-medium text-white outline-none transition-all duration-500 hover:scale-105 hover:bg-background hover:text-black"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
