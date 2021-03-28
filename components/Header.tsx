import React, { LinkHTMLAttributes } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EventEmitter } from 'events'

const Header: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false)
  const handleClick = e => {
    e.preventDefault();
    setIsActive(!isActive)
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("duration-1000")
    mobileMenu.classList.toggle("h-auto")
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between ">
      <header className="flex justify-between md:flex-row md:justify-between py-2 md:py-4">
            <div onClick={handleClick} className="md:hidden relative duration-1000">
                  {
                    isActive ?
                    (
                      <svg viewBox="0 0 40 40" width='36' height="36" >
                        <path stroke="black" strokeLinecap="round" strokeWidth="5" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                      </svg>
                    )
                    :
                    (

                      <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" width="36">
                        <path d="M0 0h36v36H0z" fill="none"/>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                      </svg>
                    )
                  }

                </div>
              <div className="">
                <Link href={'/'}>
                  <Image src="/logocel.png" width={36} height={36} />
                </Link>
              </div>



          </header>
          <motion.div
                className="hidden top-navbar items-center py-5 md:block"
                id="mobileMenu"
                initial={{overflow:'hidden'}}
                animate={{ overflow: 'visible'}}
                transition={{ duration: 1.0 }}
                >
                  <Link href="/">

                    <a
                      className="flex md:inline px-3 py-2 rounded text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                      <span>Home</span>
                    </a>
                  </Link>
                  <Link href="/tratamentos">

                    <a
                      className="flex md:inline px-3 py-2 rounded text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                      <span>Tratamentos</span>
                    </a>
                  </Link>
                  <Link href="/equipe">

                    <a
                      className="flex md:inline px-3 py-2 rounded text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                      <span>Equipe</span>
                    </a>
                  </Link>
                  <Link href="/sobre">

                    <a
                      className="flex md:inline px-3 py-2 rounded text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                      <span>Sobre</span>
                    </a>
                  </Link>

                  <Link href="/contato">

                    <a
                      className="flex md:inline px-3 py-2 rounded text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                      <span>Contato</span>
                    </a>
                  </Link>

              </motion.div>
    </div>

  )
}

export default Header


