import React from 'react'

let data = ['Home','About','Skills','Projects','Contact']

const NavBar = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center py-5 px-30">
      
      <h1 className="text-[35px] font-bold font-serif">
        TULASI{' '}
        <span className="bg-[linear-gradient(270deg,#ff8a00,#e52e71,#7f00ff)] bg-clip-text text-transparent">
          DAS
        </span>
      </h1>

      <nav className="flex gap-8 text-amber-300 text-[20px]">
        {data.map((ele, index) => (
          <a key={index} href=''className="hover:text-red-500 hover:underline transition duration-300">
            {ele}
          </a>
        ))}
      </nav>

    </header>
  )
}

export default NavBar
